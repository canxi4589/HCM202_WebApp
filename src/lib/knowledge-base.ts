// lib/knowledge-base.ts

export interface KnowledgeItem {
  id: string;
  topic: string;
  keywords: string[];
  content: string;
  category: 'independence' | 'socialism' | 'democracy' | 'ethics' | 'education' | 'general';
}

export const hoChiMinhKnowledgeBase: KnowledgeItem[] = [
  {
    id: 'independence-1',
    topic: 'Độc lập dân tộc',
    keywords: ['độc lập', 'tự do', 'chủ quyền', 'thống nhất', 'lãnh thổ', 'tuyên ngôn độc lập'],
    content: `**Tư tưởng độc lập dân tộc của Hồ Chí Minh:**

🇻🇳 **Độc lập thật sự, triệt để:**
- Độc lập về chính trị: Tự chủ trong việc quyết định đường lối, chính sách
- Độc lập về kinh tế: Không bị phụ thuộc, bóc lột kinh tế
- Độc lập về văn hóa: Giữ gìn bản sắc dân tộc

📜 **Tuyên ngôn độc lập 1945:**
"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được"

🔗 **Gắn liền với thống nhất:**
"Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi"`,
    category: 'independence'
  },
  {
    id: 'socialism-1',
    topic: 'Chủ nghĩa xã hội Việt Nam',
    keywords: ['chủ nghĩa xã hội', 'xã hội chủ nghĩa', 'thời kỳ quá độ', 'xây dựng', 'cải tạo'],
    content: `**Chủ nghĩa xã hội theo Hồ Chí Minh:**

🏗️ **Đặc điểm riêng:**
- Phù hợp với điều kiện cụ thể của Việt Nam
- Từ nước nông nghiệp lạc hậu tiến thẳng lên CNXH
- Mục tiêu: "Dân giàu, nước mạnh, xã hội công bằng, dân chủ, văn minh"

⏳ **Thời kỳ quá độ:**
- Cải biến từ xã hội cũ sang xã hội mới
- Xóa bỏ giai cấp bóc lột và tàn dư thực dân phong kiến
- Xây dựng nền kinh tế, chính trị, văn hóa mới

🔄 **Quan điểm "xây" đi đôi với "chống":**
- Xây: Phát huy động lực, lợi ích dân tộc
- Chống: Loại bỏ lực cản, tệ nạn xã hội`,
    category: 'socialism'
  },
  {
    id: 'democracy-1',
    topic: 'Dân chủ nhân dân',
    keywords: ['dân chủ', 'do dân', 'vì dân', 'quyền lực', 'nhân dân', 'làm chủ'],
    content: `**Quan điểm dân chủ của Hồ Chí Minh:**

👥 **"Do dân, vì dân":**
- Dân chủ thực sự là dân được làm chủ đất nước
- Quyền lực thuộc về nhân dân lao động
- Dân quyết định vận mệnh đất nước

🎯 **Nguyên tắc dân chủ:**
- Lợi ích của dân là trên hết
- Dân chủ phải đi đôi với kỷ luật
- Dân chủ tập trung dân chủ

⚖️ **Thực hiện dân chủ:**
- Trong Đảng: Tập trung dân chủ
- Trong xã hội: Dân làm chủ thực sự
- Trong quản lý: Dân biết, dân bàn, dân làm, dân kiểm tra`,
    category: 'democracy'
  },
  {
    id: 'ethics-1',
    topic: 'Đạo đức cách mạng',
    keywords: ['đạo đức', 'cần kiệm', 'liêm chính', 'phong cách', 'tu dưỡng', 'rèn luyện'],
    content: `**Tư tưởng đạo đức của Hồ Chí Minh:**

⭐ **"Cần, kiệm, liêm, chính":**
- **Cần:** Làm việc cần mẫn, siêng năng
- **Kiệm:** Sống giản dị, không xa hoa lãng phí
- **Liêm:** Trong sạch, không tham nhũng
- **Chính:** Công bằng, chính trực, không tư lợi

🌟 **Đạo đức cách mạng:**
- "Muốn cải tạo xã hội, trước hết phải cải tạo con người"
- Đạo đức là gốc của cách mạng
- Tu dưỡng đạo đức suốt đời

👨‍💼 **Đạo đức cán bộ:**
- Gần gũi với dân
- Vì nước, vì dân quên thân
- Trong sạch về đạo đức lối sống`,
    category: 'ethics'
  },
  {
    id: 'education-1',
    topic: 'Giáo dục và học tập',
    keywords: ['học tập', 'giáo dục', 'học học nữa học mãi', 'kiến thức', 'đào tạo'],
    content: `**Quan điểm giáo dục của Hồ Chí Minh:**

📚 **"Học, học nữa, học mãi":**
- Học tập suốt đời
- Học từ sách vở, từ thực tiễn, từ nhân dân
- Vừa học vừa làm, vừa làm vừa học

🎓 **Mục tiêu giáo dục:**
- Đào tạo con người mới xã hội chủ nghĩa
- Vừa có đức, vừa có tài
- Phát triển toàn diện: Trí, đức, thể, mỹ

🔄 **Phương pháp học tập:**
- Kết hợp lý luận với thực tiễn
- Học đi đôi với hành
- Học tập tập thể và tự học`,
    category: 'education'
  }
];

// Từ khóa liên quan đến tư tưởng Hồ Chí Minh
export const relevantTopics = [
  'hồ chí minh', 'bác hồ', 'chủ tịch hồ', 'người',
  'tư tưởng', 'triết lý', 'quan điểm', 'chính sách',
  'độc lập', 'tự do', 'chủ quyền', 'thống nhất',
  'chủ nghĩa xã hội', 'xã hội chủ nghĩa', 'cộng sản',
  'dân chủ', 'nhân dân', 'do dân vì dân',
  'đạo đức', 'cần kiệm liêm chính', 'phong cách',
  'giáo dục', 'học tập', 'cách mạng',
  'việt nam', 'dân tộc', 'đất nước', 'tổ quốc',
  'lịch sử', 'kháng chiến', 'giải phóng',
  'thời kỳ quá độ', 'xây dựng', 'phát triển'
];

// Từ khóa không liên quan (để phát hiện off-topic)
export const irrelevantTopics = [
  'thể thao', 'bóng đá', 'ca nhạc', 'phim ảnh',
  'game', 'giải trí', 'ăn uống', 'du lịch',
  'thời trang', 'làm đẹp', 'tình yêu', 'hẹn hò',
  'công nghệ', 'điện thoại', 'máy tính', 'ai khác',
  'toán học', 'vật lý', 'hóa học', 'sinh học',
  'kinh doanh', 'chứng khoán', 'bitcoin', 'crypto',
  'thời tiết', 'tin tức', 'bệnh tật', 'y học'
];

export function isTopicRelevant(message: string): boolean {
  const lowerMessage = message.toLowerCase();
  
  // Kiểm tra có chứa từ khóa hoàn toàn không liên quan
  const hasIrrelevantTopic = irrelevantTopics.some(topic => 
    lowerMessage.includes(topic)
  );
  
  if (hasIrrelevantTopic) {
    return false;
  }
  
  // Nếu không có từ khóa cấm, cho phép tất cả câu hỏi
  // AI sẽ tự xử lý và kết nối với tư tưởng HCM nếu có thể
  return true;
}

export function findRelevantKnowledge(message: string): KnowledgeItem[] {
  const lowerMessage = message.toLowerCase();
  
  return hoChiMinhKnowledgeBase.filter(item => 
    item.keywords.some(keyword => lowerMessage.includes(keyword))
  );
}