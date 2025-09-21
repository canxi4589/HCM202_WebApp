// Hướng dẫn test Content Filtering cho Chatbot

## 🧪 **Cách Test Content Filtering**

### **✅ Câu hỏi HỢP LỆ (sẽ được trả lời):**

1. **Về tư tưởng độc lập:**
   - "Tư tưởng độc lập dân tộc của Hồ Chí Minh là gì?"
   - "Ý nghĩa của độc lập thật sự triệt để?"
   - "Quan điểm về thống nhất lãnh thổ?"

2. **Về dân chủ:**
   - "Quan điểm dân chủ do dân vì dân là gì?"
   - "Nguyên tắc dân chủ tập trung?"
   - "Cách thực hiện dân chủ?"

3. **Về chủ nghĩa xã hội:**
   - "Đặc điểm chủ nghĩa xã hội Việt Nam?"
   - "Thời kỳ quá độ lên CNXH?"
   - "Quan điểm xây đi đôi với chống?"

4. **Về đạo đức:**
   - "Ý nghĩa cần kiệm liêm chính?"
   - "Đạo đức cách mạng là gì?"
   - "Tu dưỡng đạo đức như thế nào?"

### **❌ Câu hỏi KHÔNG HỢP LỆ (sẽ bị từ chối):**

1. **Chủ đề ngoài lề:**
   - "Hôm nay thời tiết thế nào?"
   - "Cách nấu phở ngon?"
   - "Đội bóng nào thắng hôm qua?"

2. **Công nghệ:**
   - "iPhone 15 có tốt không?"
   - "Cách cài đặt Windows?"
   - "Bitcoin giá bao nhiêu?"

3. **Giải trí:**
   - "Phim hay gì tuần này?"
   - "Ca sĩ nào đang hot?"
   - "Game gì hay chơi?"

4. **Tin nhắn spam:**
   - "aaaaaaa"
   - "hello"
   - "test"
   - "!!!!!!"

### **🎯 Kết quả mong đợi:**

- **Câu hỏi hợp lệ:** Nhận phản hồi chi tiết về tư tưởng Hồ Chí Minh
- **Câu hỏi không hợp lệ:** Nhận thông báo từ chối + gợi ý câu hỏi phù hợp
- **Tin nhắn spam:** Được phát hiện và từ chối
- **Câu hỏi quá ngắn/dài:** Được yêu cầu điều chỉnh

### **🔧 Tính năng đã implement:**

✅ **Knowledge Base:** 5 chủ đề chính với nội dung chi tiết
✅ **Content Filtering:** Phát hiện chủ đề không liên quan
✅ **Spam Detection:** Phát hiện tin nhắn spam và lặp lại
✅ **Example Questions:** Gợi ý câu hỏi mẫu
✅ **Smart Responses:** Phản hồi thông minh dựa trên từ khóa
✅ **Off-topic Handling:** Xử lý câu hỏi lạc đề một cách lịch sự

### **📱 Cách test:**

1. Vào trang `/on-tap`
2. Chọn tab "Chatbot AI"
3. Thử các câu hỏi hợp lệ và không hợp lệ
4. Quan sát phản hồi của chatbot