// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { isTopicRelevant, findRelevantKnowledge, hoChiMinhKnowledgeBase } from '@/lib/knowledge-base';
import { contentFilter } from '@/lib/content-filter';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.warn('OpenAI API key not configured, falling back to rule-based responses');
      return handleFallbackResponse(message);
    }

    // Apply content filtering
    const filterResult = contentFilter.filterContent(message);
    
    if (!filterResult.isAllowed) {
      const offTopicResponse = getAdvancedOffTopicResponse(filterResult.reason!, filterResult.suggestion);
      return NextResponse.json({ response: offTopicResponse });
    }

    // Find relevant knowledge from knowledge base
    const relevantKnowledge = findRelevantKnowledge(message);

    try {
      // Use OpenAI GPT with knowledge base and filtering
      const context = relevantKnowledge.length > 0 
        ? relevantKnowledge.map(item => item.content).join('\n\n')
        : getDefaultKnowledgeContext();
      
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: `Bạn là AI Bot, chuyên về tư tưởng Hồ Chí Minh về chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.

**DANH XƯNG:** Luôn tự xưng là "AI Bot"

**NGUYÊN TẮC TRẢ LỜI:**
- Ưu tiên trả lời các câu hỏi về tư tưởng chủ nghĩa xã hội, mục tiêu, động lực, và thời kỳ quá độ theo tư tưởng Hồ Chí Minh
- Với câu hỏi không hoàn toàn liên quan, hãy cố gắng kết nối với tư tưởng HCM về chủ nghĩa xã hội nếu có thể
- Chỉ từ chối khi câu hỏi hoàn toàn không liên quan (như toán học, thể thao...)
- Trả lời thân thiện, dễ hiểu và không quá học thuật
- KHÔNG SỬ DỤNG EMOJI trong câu trả lời

**KIẾN THỨC THAM KHẢO:**
${context}

**ĐỊNH DẠNG TRẢ LỜI:**
Luôn format theo cấu trúc này:

## [Tiêu đề ngắn gọn]

### **Giải thích chính:**
- Điểm 1 với ví dụ cụ thể
- Điểm 2 với trích dẫn nếu có
- Điểm 3 với ứng dụng thực tế

### **Ý nghĩa hiện tại:**
Liên hệ với thời đại ngày nay


**LƯU Ý:** Giữ độ dài 200-400 từ, KHÔNG dùng emoji, tránh quá dài dòng.`
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 600,
        temperature: 0.8,
        presence_penalty: 0.2,
        frequency_penalty: 0.2
      });

      const response = completion.choices[0].message.content;
      return NextResponse.json({ response });

    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      // Fallback to rule-based response if OpenAI fails
      return handleFallbackResponse(message);
    }

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Fallback when OpenAI is not available
function handleFallbackResponse(message: string) {
  const filterResult = contentFilter.filterContent(message);
  
  if (!filterResult.isAllowed) {
    const offTopicResponse = getAdvancedOffTopicResponse(filterResult.reason!, filterResult.suggestion);
    return NextResponse.json({ response: offTopicResponse });
  }

  const relevantKnowledge = findRelevantKnowledge(message);
  const response = generateKnowledgeBasedResponse(message, relevantKnowledge);
  return NextResponse.json({ response });
}

function getDefaultKnowledgeContext(): string {
  return `
**Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội:**

1. **Quan niệm về chủ nghĩa xã hội:**
   - Kết hợp tinh hoa Mác-Lênin với điều kiện Việt Nam
   - Xã hội công bằng, dân chủ, văn minh, phát triển toàn diện con người
   - Tiến trình phù hợp với trình độ phát triển kinh tế - xã hội, coi trọng giáo dục, đạo đức, văn hóa

2. **Tính tất yếu của chủ nghĩa xã hội:**
   - Quy luật lịch sử từ xã hội có giai cấp đến xã hội không giai cấp
   - Sau độc lập dân tộc, cần xây dựng xã hội mới để giải phóng khỏi nghèo nàn
   - Yếu tố chủ động (lãnh đạo, giác ngộ nhân dân) kết hợp với điều kiện khách quan

3. **Đặc trưng của xã hội xã hội chủ nghĩa:**
   - Sở hữu tập thể về tư liệu sản xuất
   - Kinh tế phát triển vì con người, công bằng xã hội, giáo dục-y tế phổ cập
   - Dân chủ xã hội chủ nghĩa, văn hóa-đạo đức tiên tiến, hoà bình quốc tế

4. **Mục tiêu chủ nghĩa xã hội ở Việt Nam:**
   - Chính trị: Chế độ dân chủ, dân làm chủ
   - Kinh tế: Phát triển công-nông nghiệp hiện đại, quốc doanh chủ đạo
   - Văn hóa: Nền văn hóa dân tộc, khoa học, đại chúng
   - Xã hội: Công bằng, văn minh, quyền tự do cơ bản

5. **Động lực và thời kỳ quá độ:**
   - Nội lực dân tộc, vai trò lãnh đạo Đảng, con người xã hội chủ nghĩa
   - Giai đoạn cải biến sâu sắc, lâu dài, vừa xây dựng vừa chống lực cản
  `;
}

function getAdvancedOffTopicResponse(reason: string, suggestion?: string): string {
  const baseMessage = `Câu hỏi không phù hợp với chủ đề

AI Bot là trợ lý AI chuyên về tư tưởng Hồ Chí Minh về chủ nghĩa xã hội. `;

  const reasonMessages = {
    'empty_message': 'Bạn chưa nhập câu hỏi.',
    'too_short': 'Câu hỏi quá ngắn, khó hiểu ý định.',
    'too_long': 'Câu hỏi quá dài, khó tập trung.',
    'prohibited_topic': 'Câu hỏi về chủ đề tôi không thể hỗ trợ.',
    'off_topic': 'Câu hỏi không liên quan đến tư tưởng Hồ Chí Minh về chủ nghĩa xã hội.',
    'spam': 'Tin nhắn không có ý nghĩa rõ ràng.'
  };

  const topicSuggestions = contentFilter.getTopicSuggestions();
  const randomTopics = topicSuggestions.slice(0, 4);

  return `${baseMessage}${reasonMessages[reason as keyof typeof reasonMessages] || 'Có vấn đề với câu hỏi của bạn.'}

Tôi có thể hỗ trợ các chủ đề:
${randomTopics.map(topic => `• ${topic}`).join('\n')}

Gợi ý câu hỏi:
${suggestion || 'Hãy hỏi về tư tưởng chủ nghĩa xã hội, mục tiêu, hoặc thời kỳ quá độ theo Hồ Chí Minh.'}

Thử lại với câu hỏi khác nhé!`;
}

function getOffTopicResponse(): string {
  const responses = [
    `Câu hỏi này không liên quan đến tư tưởng Hồ Chí Minh về chủ nghĩa xã hội

AI Bot là trợ lý AI chuyên về tư tưởng Hồ Chí Minh. Tôi chỉ có thể trả lời các câu hỏi liên quan đến:

Các chủ đề tôi có thể hỗ trợ:
• Quan niệm về chủ nghĩa xã hội của Hồ Chí Minh
• Tính tất yếu và đặc trưng của chủ nghĩa xã hội
• Mục tiêu chính trị, kinh tế, văn hóa, xã hội
• Động lực và thời kỳ quá độ lên chủ nghĩa xã hội

Ví dụ câu hỏi phù hợp:
- "Quan niệm chủ nghĩa xã hội của Hồ Chí Minh là gì?"
- "Mục tiêu kinh tế của chủ nghĩa xã hội Việt Nam theo Hồ Chí Minh?"
- "Thời kỳ quá độ lên chủ nghĩa xã hội có những nhiệm vụ gì?"`,

    `Xin lỗi, tôi không thể trả lời câu hỏi này

Tôi được thiết kế để hỗ trợ học tập về tư tưởng Hồ Chí Minh liên quan đến chủ nghĩa xã hội. Câu hỏi của bạn có vẻ không liên quan đến chủ đề này.

Hãy hỏi tôi về:
- Tư tưởng chủ nghĩa xã hội và các đặc trưng
- Mục tiêu xây dựng chủ nghĩa xã hội ở Việt Nam
- Động lực và nguyên tắc thời kỳ quá độ

Thử lại với câu hỏi khác nhé!`,

    `Chủ đề không phù hợp

Tôi là chatbot học tập về tư tưởng Hồ Chí Minh về chủ nghĩa xã hội. Tôi không thể trả lời các câu hỏi ngoài phạm vi này.

Tôi có thể giúp bạn tìm hiểu:
- Quan điểm về chủ nghĩa xã hội và vai trò của Đảng
- Mục tiêu phát triển kinh tế, văn hóa, xã hội
- Thời kỳ quá độ và các nguyên tắc xây dựng

Hãy đặt câu hỏi về những chủ đề này nhé!`
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

function generateKnowledgeBasedResponse(message: string, relevantKnowledge: any[]): string {
  // Nếu có kiến thức cụ thể trong knowledge base
  if (relevantKnowledge.length > 0) {
    const knowledge = relevantKnowledge[0];
    return `## ${knowledge.topic}

${knowledge.content}

### **AI Bot gợi ý thêm:**
- Các khía cạnh khác của ${knowledge.topic.toLowerCase()}?
- Ví dụ thực tiễn về ứng dụng trong thời kỳ quá độ?

Hãy đặt câu hỏi cụ thể để AI Bot giải đáp chi tiết hơn!`;
  }

  // Phản hồi dựa trên từ khóa
  const lowerMessage = message.toLowerCase();
  
  // Kiến thức bổ sung dựa trên tài liệu
  const additionalResponses: { [key: string]: string } = {
    'chủ nghĩa xã hội': `## Quan niệm về chủ nghĩa xã hội của Hồ Chí Minh

### **Giải thích chính:**
- Kết hợp tinh hoa Mác-Lênin với điều kiện Việt Nam, không áp đặt mô hình máy móc
- Xã hội công bằng, dân chủ, văn minh, phát triển toàn diện con người
- Tiến trình phù hợp với trình độ kinh tế - xã hội, nhấn mạnh giáo dục và đạo đức

### **Ý nghĩa hiện tại:**
Tư tưởng này định hướng cho sự phát triển bền vững của Việt Nam ngày nay, đặc biệt trong công nghiệp hóa và hiện đại hóa

### **AI Bot gợi ý thêm:**
- Đặc trưng nào của chủ nghĩa xã hội nổi bật nhất?
- Ứng dụng tư tưởng này trong chính sách kinh tế hiện nay?`,

    'thời kỳ quá độ': `## Thời kỳ quá độ lên chủ nghĩa xã hội

### **Giải thích chính:**
- Giai đoạn cải biến sâu sắc, lâu dài, từ xã hội nông nghiệp lạc hậu lên chủ nghĩa xã hội
- Nhiệm vụ chính: xây dựng dân chủ, phát triển kinh tế, văn hóa, và xã hội công bằng
- Kết hợp vừa xây dựng vừa chống lực cản như chủ nghĩa cá nhân

### **Ý nghĩa hiện tại:**
Công cuộc Đổi mới từ 1986 là minh chứng cho tư tưởng này, thúc đẩy kinh tế thị trường định hướng xã hội chủ nghĩa

### **AI Bot gợi ý thêm:**
- Nhiệm vụ kinh tế trong thời kỳ quá độ là gì?
- Làm thế nào để chống lực cản trong thời đại số?`,

    'mục tiêu': `## Mục tiêu chủ nghĩa xã hội ở Việt Nam

### **Giải thích chính:**
- Chính trị: Chế độ dân chủ, dân làm chủ qua bầu cử và minh bạch hóa
- Kinh tế: Phát triển công-nông nghiệp hiện đại, quốc doanh chủ đạo
- Văn hóa: Nền văn hóa dân tộc, khoa học, đại chúng

### **Ý nghĩa hiện tại:**
Các chính sách như bảo hiểm y tế toàn dân và chuyển đổi số phản ánh mục tiêu này

### **AI Bot gợi ý thêm:**
- Mục tiêu văn hóa được thực hiện ra sao hiện nay?
- Vai trò của kinh tế quốc doanh trong thời đại hội nhập?`
  };

  // Tìm phản hồi phù hợp
  for (const [keyword, response] of Object.entries(additionalResponses)) {
    if (lowerMessage.includes(keyword)) {
      return response;
    }
  }

  // Phản hồi mặc định
  return `Cảm ơn câu hỏi của bạn về tư tưởng Hồ Chí Minh!

Bạn có thể hỏi cụ thể hơn về:
- Quan niệm về chủ nghĩa xã hội của Hồ Chí Minh
- Mục tiêu chính trị, kinh tế, văn hóa, xã hội
- Thời kỳ quá độ và nguyên tắc xây dựng

Ví dụ: "Hồ Chí Minh nói gì về vai trò của nhân dân trong chủ nghĩa xã hội?"`;
}