// lib/text-knowledge-base.ts
import fs from 'fs';
import path from 'path';

export interface TextKnowledgeBase {
  content: string;
  sections: string[];
  lastUpdated: Date;
}

export class TextFileKnowledgeBase {
  private filePath: string;
  private content: string = '';
  private sections: string[] = [];

  constructor(filePath: string) {
    this.filePath = filePath;
    this.loadFile();
  }

  private loadFile(): void {
    try {
      const fullPath = path.join(process.cwd(), 'src', 'app', 'api', 'chat', 'knowledge', this.filePath);
      this.content = fs.readFileSync(fullPath, 'utf-8');
      this.sections = this.splitIntoSections(this.content);
      console.log(`✅ Knowledge base loaded: ${this.sections.length} sections found from ${this.filePath}`);
    } catch (error) {
      console.error('❌ Error loading knowledge base file:', error);
      this.content = '';
      this.sections = [];
    }
  }

  private splitIntoSections(content: string): string[] {
    // Enhanced section splitting to handle hierarchical structure (II.1.a, II.1.b, etc.)
    const sections: string[] = [];
    
    // Split by numbered main sections (1., 2., 3., etc.) and Roman numerals (II., III.)
    const mainSections = content.split(/(?=(?:I{1,3}V?|V|VI{0,3}|IX|X|\d+)\.\s+[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂĐT])/);
    
    mainSections.forEach(section => {
      if (section.trim().length > 100) {
        // Further split by lettered subsections (a., b., c., etc.)
        const subSections = section.split(/(?=[a-z]\.\s+[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂĐT])/);
        
        subSections.forEach(subSection => {
          if (subSection.trim().length > 50) {
            // Split by bullet points with dashes (- )
            const bulletSections = subSection.split(/(?=^-\s+[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂĐT])/m);
            
            bulletSections.forEach(bulletSection => {
              const cleanSection = bulletSection.trim();
              if (cleanSection.length > 30) {
                sections.push(cleanSection);
              }
            });
          }
        });
      }
    });
    
    // If no sections found with complex splitting, fall back to simpler method
    if (sections.length === 0) {
      const simpleSections = content.split(/\n\s*\n/).filter(section => section.trim().length > 50);
      sections.push(...simpleSections);
    }
    
    return sections;
  }

  public searchRelevantContent(query: string): string[] {
    const queryLower = query.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove Vietnamese accents for better matching
    
    const relevantSections: { section: string; score: number }[] = [];
    
    // Keywords mapping for better search - Updated based on HCM202.txt content
    const keywords: { [key: string]: string[] } = {
      // Chủ nghĩa xã hội - khái niệm và đặc trưng
      'chủ nghĩa xã hội': ['chủ nghĩa xã hội', 'xã hội chủ nghĩa', 'socialism', 'quan niệm', 'khái niệm', 'đặc trưng cơ bản', 'xã hội xã hội chủ nghĩa'],
      'đặc trưng chủ nghĩa xã hội': ['đặc trưng', 'tính chất', 'bản chất', 'đặc điểm'],
      'quan niệm chủ nghĩa xã hội': ['quan niệm', 'khái niệm', 'định nghĩa', 'mộc mạc', 'tóm tắt'],
      
      // Thời kỳ quá độ
      'quá độ': ['quá độ', 'transition', 'chuyển đổi', 'thời kỳ quá độ', 'giai đoạn quá độ', 'tiến lên chủ nghĩa xã hội'],
      'tính chất quá độ': ['tính chất', 'đặc điểm', 'cải biến sâu sắc', 'phức tạp', 'lâu dài', 'khó khăn'],
      'nhiệm vụ quá độ': ['nhiệm vụ', 'đấu tranh', 'cải tạo', 'xóa bỏ', 'xây dựng'],
      'nguyên tắc xây dựng': ['nguyên tắc', 'mác lênin', 'độc lập dân tộc', 'đoàn kết', 'xây đi đôi'],
      
      // Mục tiêu chủ nghĩa xã hội
      'mục tiêu': ['mục tiêu', 'goal', 'objective', 'chính trị', 'kinh tế', 'văn hóa', 'xã hội'],
      'mục tiêu chính trị': ['chế độ dân chủ', 'dân chủ', 'chính trị'],
      'mục tiêu kinh tế': ['kinh tế phát triển cao', 'nền kinh tế', 'gắn bó mật thiết'],
      'mục tiêu văn hóa': ['văn hóa dân tộc', 'khoa học', 'đại chúng', 'tinh hoa văn hóa'],
      'mục tiêu xã hội': ['dân chủ', 'công bằng', 'văn minh'],
      
      // Động lực chủ nghĩa xã hội
      'động lực': ['động lực', 'motivation', 'lực lượng', 'hệ thống động lực', 'nội lực'],
      'nội lực dân tộc': ['nội lực', 'nhân dân', 'vai trò quyết định'],
      'lợi ích nhân dân': ['lợi ích', 'dân', 'nhân dân lao động'],
      'dân chủ của dân': ['dân chủ', 'quyền dân chủ'],
      'đoàn kết toàn dân': ['đoàn kết', 'sức mạnh', 'thống nhất'],
      
      // Tư tưởng HCM
      'hồ chí minh': ['hồ chí minh', 'chủ tịch', 'người', 'bác hồ', 'hcm'],
      'tư tưởng hồ chí minh': ['tư tưởng', 'quan điểm', 'nhận thức'],
      
      // Khái niệm chính trị-kinh tế
      'dân chủ': ['dân chủ', 'nhân dân làm chủ', 'democracy', 'chế độ dân chủ'],
      'kinh tế': ['kinh tế', 'sản xuất', 'economy', 'economic', 'công nghiệp', 'nông nghiệp', 'hiện đại'],
      'lực lượng sản xuất': ['lực lượng sản xuất', 'công nghiệp hiện đại', 'sản xuất vật chất'],
      'chế độ công hữu': ['công hữu', 'tư liệu sản xuất', 'sở hữu'],
      
      // Văn hóa và xã hội
      'văn hóa': ['văn hóa', 'culture', 'giáo dục', 'dân tộc', 'khoa học', 'đại chúng'],
      'quan hệ xã hội': ['quan hệ', 'xã hội', 'công bằng', 'hợp lý', 'văn minh'],
      'con người': ['con người', 'cá nhân', 'tập thể', 'ấm no', 'tự do', 'hạnh phúc'],
      
      // Khái niệm lý thuyết
      'tất yếu khách quan': ['tất yếu', 'khách quan', 'quy luật', 'quá trình'],
      'chủ thể xây dựng': ['chủ thể', 'công trình tập thể', 'nhân dân', 'đảng cộng sản'],
      'mác lênin': ['mác', 'lênin', 'marx', 'lenin', 'marxism', 'chủ nghĩa mác-lênin'],
      'độc lập': ['độc lập', 'tự do', 'giải phóng', 'independence', 'dân tộc'],
      'đảng cộng sản': ['đảng', 'cộng sản', 'lãnh đạo', 'đảng vô sản'],
      
      // Đặc điểm Việt Nam
      'việt nam': ['việt nam', 'nước', 'nông nghiệp lạc hậu', 'đi thẳng'],
      'nông nghiệp lạc hậu': ['nông nghiệp', 'lạc hậu', 'chưa qua', 'tư bản chủ nghĩa'],
      'đế quốc và phong kiến': ['đế quốc', 'phong kiến', 'đánh đổ', 'tàn tích'],
      
      // Phương pháp và quá trình
      'cải tạo': ['cải tạo', 'cải biến', 'thay đổi', 'triệt để'],
      'xây dựng': ['xây dựng', 'build', 'construction', 'phát triển'],
      'học tập kinh nghiệm': ['học tập', 'kinh nghiệm', 'các nước anh em'],
      'xây đi đôi với chống': ['xây đi đôi', 'chống', 'đấu tranh'],
      'tiến thẳng': ['tiến thẳng', 'đi thẳng', 'không trải qua']
    };
    
    // Find sections that match keywords with enhanced scoring
    this.sections.forEach(section => {
      const sectionLower = section.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      
      let matchScore = 0;
      
      // High-priority concepts (core HCM ideology terms)
      const highPriorityConcepts = [
        'tư tưởng hồ chí minh', 'hồ chí minh', 'chủ nghĩa xã hội', 'thời kỳ quá độ',
        'quan niệm', 'đặc trưng', 'mục tiêu', 'động lực', 'tính chất', 'nhiệm vụ'
      ];
      
      // Check for high-priority concepts first (extra weight)
      highPriorityConcepts.forEach(concept => {
        if (queryLower.includes(concept) && sectionLower.includes(concept)) {
          matchScore += 25; // Highest priority
        }
      });
      
      // Direct query match (high priority)
      if (sectionLower.includes(queryLower)) {
        matchScore += 20;
      }
      
      // Keyword match with improved scoring
      Object.entries(keywords).forEach(([topic, terms]) => {
        const topicNorm = topic.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        
        // If query matches topic exactly, give high score
        if (queryLower.includes(topicNorm)) {
          terms.forEach(term => {
            const termNorm = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (sectionLower.includes(termNorm)) {
              matchScore += 15; // Topic match
            }
          });
        }
        
        // If query contains any term, give moderate score
        terms.forEach(term => {
          const termNorm = term.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          if (queryLower.includes(termNorm) && sectionLower.includes(termNorm)) {
            matchScore += 10; // Term match
          }
        });
      });
      
      // Section header keywords (structural importance)
      const headerKeywords = ['quan niệm', 'đặc trưng', 'tính chất', 'nhiệm vụ', 'nguyên tắc', 'mục tiêu'];
      headerKeywords.forEach(header => {
        if (sectionLower.includes(header)) {
          matchScore += 5; // Structural bonus
        }
      });
      
      // Individual word match (lower priority)
      const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2);
      queryWords.forEach(word => {
        if (sectionLower.includes(word)) {
          matchScore += 3; // Increased from 2
        }
      });
      
      // Section heading bonus (sections that start with numbers or letters)
      if (/^[0-9]+\.|^[a-z]\./i.test(section.trim())) {
        matchScore += 3;
      }
      
      if (matchScore > 0) {
        relevantSections.push({ section, score: matchScore });
      }
    });
    
    // Sort by relevance score and return top 3
    return relevantSections
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(item => item.section);
  }

  public getFullContent(): string {
    return this.content;
  }

  public getSectionCount(): number {
    return this.sections.length;
  }

  public isLoaded(): boolean {
    return this.content.length > 0 && this.sections.length > 0;
  }

  public getFileInfo(): { fileName: string; sectionCount: number; contentLength: number; isLoaded: boolean } {
    return {
      fileName: this.filePath,
      sectionCount: this.getSectionCount(),
      contentLength: this.content.length,
      isLoaded: this.isLoaded()
    };
  }
}
