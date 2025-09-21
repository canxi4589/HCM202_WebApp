// lib/content-filter.ts
import { isTopicRelevant } from './knowledge-base';

export interface FilterResult {
  isAllowed: boolean;
  reason?: string;
  suggestion?: string;
}

export class ContentFilter {
  private static instance: ContentFilter;
  
  // Các từ khóa cấm
  private prohibitedTopics = [
    // Giải trí
    'thể thao', 'bóng đá', 'ca nhạc', 'phim ảnh', 'game', 'giải trí',
    'youtube', 'tiktok', 'facebook', 'instagram',
    
    // Tình cảm cá nhân
    'tình yêu', 'hẹn hò', 'kết hôn', 'gia đình cá nhân',
    
    // Công nghệ không liên quan
    'điện thoại', 'máy tính', 'laptop', 'gaming', 'crypto', 'bitcoin',
    
    // Y tế cá nhân
    'bệnh tật', 'thuốc men', 'khám bệnh', 'bác sĩ cá nhân',
    
    // Kinh doanh cá nhân
    'kiếm tiền', 'làm giàu', 'đầu tư cá nhân', 'chứng khoán',
    
    // Chính trị nước ngoài
    'trump', 'biden', 'putin', 'xi jinping', 'chính trị mỹ', 'chính trị trung quốc',
    
    // Các chủ đề nhạy cảm khác
    'tôn giáo cá nhân', 'phong thủy', 'tử vi', 'xem bói'
  ];

  // Các từ khóa yêu cầu
  private requiredContextKeywords = [
    'hồ chí minh', 'bác hồ', 'chủ tịch hồ', 'người',
    'tư tưởng', 'triết lý', 'quan điểm', 'lý luận',
    'cách mạng', 'độc lập', 'tự do', 'dân chủ',
    'chủ nghĩa xã hội', 'xã hội chủ nghĩa',
    'đạo đức', 'giáo dục', 'học tập',
    'việt nam', 'dân tộc', 'lịch sử'
  ];

  private suggestedQuestions = [
    "Tư tưởng độc lập dân tộc của Hồ Chí Minh là gì?",
    "Quan điểm dân chủ 'do dân, vì dân' có ý nghĩa gì?",
    "Đặc điểm của chủ nghĩa xã hội Việt Nam theo Hồ Chí Minh?",
    "Nội dung 'cần, kiệm, liêm, chính' trong tư tưởng đạo đức?",
    "Quan điểm 'học, học nữa, học mãi' có ý nghĩa như thế nào?",
    "Thời kỳ quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh?",
    "Tư tưởng về thống nhất và toàn vẹn lãnh thổ?",
    "Quan điểm về cách mạng giải phóng dân tộc?"
  ];

  public static getInstance(): ContentFilter {
    if (!ContentFilter.instance) {
      ContentFilter.instance = new ContentFilter();
    }
    return ContentFilter.instance;
  }

  public filterContent(message: string): FilterResult {
    const lowerMessage = message.toLowerCase().trim();
    
    // Kiểm tra tin nhắn trống
    if (!lowerMessage) {
      return {
        isAllowed: false,
        reason: 'empty_message',
        suggestion: 'Vui lòng nhập câu hỏi của bạn.'
      };
    }

    // Kiểm tra độ dài tin nhắn
    if (lowerMessage.length < 3) {
      return {
        isAllowed: false,
        reason: 'too_short',
        suggestion: 'Câu hỏi quá ngắn. Vui lòng mô tả rõ hơn điều bạn muốn tìm hiểu.'
      };
    }

    if (lowerMessage.length > 500) {
      return {
        isAllowed: false,
        reason: 'too_long',
        suggestion: 'Câu hỏi quá dài. Vui lòng rút gọn và tập trung vào một chủ đề cụ thể.'
      };
    }

    // Kiểm tra các từ khóa cấm
    const hasProhibitedContent = this.prohibitedTopics.some(topic => 
      lowerMessage.includes(topic)
    );

    if (hasProhibitedContent) {
      return {
        isAllowed: false,
        reason: 'prohibited_topic',
        suggestion: this.getRandomSuggestion()
      };
    }

    // Kiểm tra liên quan đến tư tưởng Hồ Chí Minh
    if (!isTopicRelevant(message)) {
      return {
        isAllowed: false,
        reason: 'off_topic',
        suggestion: this.getRandomSuggestion()
      };
    }

    // Kiểm tra spam hoặc tin nhắn lặp lại
    if (this.isSpamMessage(lowerMessage)) {
      return {
        isAllowed: false,
        reason: 'spam',
        suggestion: 'Vui lòng đặt câu hỏi có ý nghĩa về tư tưởng Hồ Chí Minh.'
      };
    }

    return { isAllowed: true };
  }

  private isSpamMessage(message: string): boolean {
    // Kiểm tra tin nhắn chỉ có ký tự lặp lại
    const uniqueChars = new Set(message.replace(/\s/g, '')).size;
    if (uniqueChars < 3 && message.length > 10) {
      return true;
    }

    // Kiểm tra các mẫu spam phổ biến
    const spamPatterns = [
      /(.)\1{4,}/, // Ký tự lặp lại nhiều lần
      /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/, // Chỉ có ký tự đặc biệt
      /^[0-9]+$/, // Chỉ có số
      /test|hello|hi|xin chào$/i // Tin nhắn test đơn giản
    ];

    return spamPatterns.some(pattern => pattern.test(message));
  }

  private getRandomSuggestion(): string {
    const randomIndex = Math.floor(Math.random() * this.suggestedQuestions.length);
    return `Thử hỏi: "${this.suggestedQuestions[randomIndex]}"`;
  }

  public getTopicSuggestions(): string[] {
    return [
      "Tư tưởng độc lập dân tộc",
      "Quan điểm dân chủ nhân dân", 
      "Chủ nghĩa xã hội Việt Nam",
      "Đạo đức cách mạng",
      "Quan điểm giáo dục",
      "Thời kỳ quá độ",
      "Lịch sử cách mạng",
      "Quan điểm 'xây' đi đôi với 'chống'"
    ];
  }
}

export const contentFilter = ContentFilter.getInstance();