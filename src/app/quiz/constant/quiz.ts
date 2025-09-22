export interface AnswerOption {
  text: string;
  rationale: string;
  isCorrect: boolean;
}

export interface Question {
  questionNumber: number;
  question: string;
  answerOptions: AnswerOption[];
  hint: string;
}

export const hoChiMinhThoughtQuiz: Question[] = [
  {
    questionNumber: 1,
    question:
      "Theo Hồ Chí Minh, mục đích cơ bản của chủ nghĩa xã hội là gì?",
    answerOptions: [
      {
        text: "Xây dựng một xã hội không có giai cấp và phân biệt chủng tộc",
        rationale:
          "Đây là đặc điểm của chủ nghĩa xã hội nhưng chưa phải là mục đích cơ bản nhất theo quan điểm của Hồ Chí Minh.",
        isCorrect: false,
      },
      {
        text: "Làm cho nhân dân lao động thoát nạn bần cùng, có công ăn việc làm, được ấm no và sống một đời hạnh phúc",
        rationale:
          "Đây chính là định nghĩa mộc mạc, dễ hiểu mà Hồ Chí Minh đưa ra về mục đích của chủ nghĩa xã hội.",
        isCorrect: true,
      },
      {
        text: "Phát triển lực lượng sản xuất hiện đại và công nghệ tiên tiến",
        rationale:
          "Phát triển lực lượng sản xuất là điều kiện cần thiết nhưng không phải mục đích cuối cùng của chủ nghĩa xã hội.",
        isCorrect: false,
      },
      {
        text: "Thiết lập chế độ công hữu tuyệt đối về tư liệu sản xuất",
        rationale:
          "Chế độ công hữu là đặc trưng kinh tế của chủ nghĩa xã hội chứ không phải mục đích cơ bản nhất.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về cách diễn đạt mộc mạc, dễ hiểu của Hồ Chí Minh về những gì mà chủ nghĩa xã hội mang lại cho cuộc sống của người dân.",
  },
  {
    questionNumber: 2,
    question:
      "Hồ Chí Minh phân biệt chủ nghĩa xã hội và chủ nghĩa cộng sản như thế nào?",
    answerOptions: [
      {
        text: "Chủ nghĩa xã hội là giai đoạn thấp, còn chủ nghĩa cộng sản là giai đoạn cao của cùng một chế độ",
        rationale:
          "Đúng theo quan điểm của Hồ Chí Minh, chủ nghĩa xã hội vẫn còn chút ít vết tích xã hội cũ, còn chủ nghĩa cộng sản hoàn toàn không còn vết tích xã hội cũ.",
        isCorrect: true,
      },
      {
        text: "Chủ nghĩa xã hội và chủ nghĩa cộng sản là hai chế độ hoàn toàn khác nhau",
        rationale:
          "Theo Hồ Chí Minh, đây là hai giai đoạn của cùng một chế độ, có điểm giống và khác nhau nhất định.",
        isCorrect: false,
      },
      {
        text: "Chủ nghĩa xã hội chỉ áp dụng cho các nước đang phát triển",
        rationale:
          "Hồ Chí Minh không phân biệt chủ nghĩa xã hội theo mức độ phát triển của các nước.",
        isCorrect: false,
      },
      {
        text: "Chủ nghĩa cộng sản chỉ tồn tại trong lý thuyết",
        rationale:
          "Hồ Chí Minh coi chủ nghĩa cộng sản là mục tiêu thực tế có thể đạt được sau chủ nghĩa xã hội.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về hai giai đoạn của chủ nghĩa cộng sản và sự khác nhau về vết tích xã hội cũ.",
  },
  {
    questionNumber: 3,
    question:
      "Theo Hồ Chí Minh, tiến lên chủ nghĩa xã hội là một tất yếu khách quan vì lý do gì?",
    answerOptions: [
      {
        text: "Do sự phát triển của cách sản xuất và sức sản xuất theo quy luật khách quan",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh khi vận dụng học thuyết hình thái kinh tế-xã hội của Marx.",
        isCorrect: true,
      },
      {
        text: "Do ý chí chủ quan của giai cấp công nhân",
        rationale:
          "Hồ Chí Minh nhấn mạnh tính khách quan của quá trình này, không phải do ý chí chủ quan.",
        isCorrect: false,
      },
      {
        text: "Do sự lựa chọn chính trị của các nhà lãnh đạo",
        rationale:
          "Tiến lên chủ nghĩa xã hội theo Hồ Chí Minh là quy luật khách quan, không phải do lựa chọn chủ quan.",
        isCorrect: false,
      },
      {
        text: "Do áp lực từ các nước xã hội chủ nghĩa khác",
        rationale:
          "Yếu tố bên ngoài có thể hỗ trợ nhưng không phải là lý do cơ bản làm cho tiến trình này trở thành tất yếu.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về quy luật phát triển của lịch sử và vai trò của lực lượng sản xuất trong sự biến đổi xã hội.",
  },
  {
    questionNumber: 4,
    question:
      "Hồ Chí Minh cho rằng con đường tiến lên chủ nghĩa xã hội ở các nước khác nhau như thế nào?",
    answerOptions: [
      {
        text: "Tất cả các nước đều phải trải qua giai đoạn phát triển tư bản chủ nghĩa",
        rationale:
          "Hồ Chí Minh cho rằng có những nước có thể bỏ qua giai đoạn phát triển tư bản chủ nghĩa.",
        isCorrect: false,
      },
      {
        text: "Tùy hoàn cảnh mà các dân tộc phát triển theo con đường khác nhau",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh từ năm 1953, thể hiện sự linh hoạt trong việc áp dụng quy luật chung.",
        isCorrect: true,
      },
      {
        text: "Chỉ có các nước công nghiệp phát triển mới có thể xây dựng chủ nghĩa xã hội",
        rationale:
          "Hồ Chí Minh cho rằng cả những nước nông nghiệp lạc hậu như Việt Nam cũng có thể tiến lên chủ nghĩa xã hội.",
        isCorrect: false,
      },
      {
        text: "Tất cả các nước phải đi theo mô hình của Liên Xô",
        rationale:
          "Hồ Chí Minh khẳng định mỗi nước có thể đi con đường khác để tiến lên chủ nghĩa xã hội.",
        isCorrect: false,
      },
    ],
    hint: "Hãy suy nghĩ về sự kết hợp giữa quy luật chung và đặc điểm riêng của mỗi quốc gia, dân tộc.",
  },
  {
    questionNumber: 5,
    question:
      "Theo Hồ Chí Minh, đặc trưng chính trị cơ bản của xã hội xã hội chủ nghĩa là gì?",
    answerOptions: [
      {
        text: "Chế độ đa đảng cạnh tranh",
        rationale:
          "Hồ Chí Minh không chủ trương chế độ đa đảng mà nhấn mạnh vai trò lãnh đạo của Đảng Cộng sản.",
        isCorrect: false,
      },
      {
        text: "Chế độ dân chủ do nhân dân làm chủ dưới sự lãnh đạo của Đảng Cộng sản",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh về đặc trưng chính trị của xã hội xã hội chủ nghĩa.",
        isCorrect: true,
      },
      {
        text: "Chế độ chuyên chính vô sản cứng rắn",
        rationale:
          "Hồ Chí Minh nhấn mạnh dân chủ nhiều hơn là chuyên chính trong xã hội xã hội chủ nghĩa.",
        isCorrect: false,
      },
      {
        text: "Chế độ quân chủ lập hiến",
        rationale:
          "Đây không phải là hình thức chính trị mà Hồ Chí Minh chủ trương cho xã hội xã hội chủ nghĩa.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về quan điểm 'dân là chủ' và vai trò lãnh đạo của Đảng trong tư tưởng Hồ Chí Minh.",
  },
  {
    questionNumber: 6,
    question:
      "Về kinh tế, Hồ Chí Minh cho rằng xã hội xã hội chủ nghĩa có đặc trưng gì?",
    answerOptions: [
      {
        text: "Nền kinh tế thị trường tự do hoàn toàn",
        rationale:
          "Hồ Chí Minh chủ trương chế độ công hữu về tư liệu sản xuất chủ yếu, không phải kinh tế thị trường tự do.",
        isCorrect: false,
      },
      {
        text: "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh về đặc trưng kinh tế của xã hội xã hội chủ nghĩa.",
        isCorrect: true,
      },
      {
        text: "Nền kinh tế kế hoạch hóa tập trung tuyệt đối",
        rationale:
          "Mặc dù Hồ Chí Minh chủ trương vai trò của kinh tế quốc doanh, nhưng Người cũng thừa nhận kinh tế hợp tác xã.",
        isCorrect: false,
      },
      {
        text: "Nền kinh tế dựa hoàn toàn vào nông nghiệp",
        rationale:
          "Hồ Chí Minh chủ trương phát triển cả công nghiệp và nông nghiệp hiện đại.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về sự kết hợp giữa lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ.",
  },
  {
    questionNumber: 7,
    question:
      "Hồ Chí Minh nhấn mạnh mối quan hệ giữa lợi ích cá nhân và lợi ích tập thể trong xã hội xã hội chủ nghĩa như thế nào?",
    answerOptions: [
      {
        text: "Lợi ích cá nhân phải được ưu tiên tuyệt đối",
        rationale:
          "Quan điểm này không phù hợp với tư tưởng xã hội chủ nghĩa của Hồ Chí Minh.",
        isCorrect: false,
      },
      {
        text: "Lợi ích tập thể phải triệt tiêu hoàn toàn lợi ích cá nhân",
        rationale:
          "Hồ Chí Minh không chủ trương triệt tiêu lợi ích cá nhân mà tìm sự thống nhất giữa hai lợi ích này.",
        isCorrect: false,
      },
      {
        text: "Lợi ích cá nhân nằm trong lợi ích tập thể và là một bộ phận của lợi ích tập thể",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh về mối quan hệ hài hòa giữa lợi ích cá nhân và tập thể.",
        isCorrect: true,
      },
      {
        text: "Lợi ích cá nhân và tập thể luôn đối lập nhau",
        rationale:
          "Trong xã hội xã hội chủ nghĩa, Hồ Chí Minh cho rằng hai lợi ích này thống nhất với nhau.",
        isCorrect: false,
      },
    ],
    hint: "Hãy suy nghĩ về sự thống nhất và gắn bó giữa lợi ích cá nhân với lợi ích chung của cộng đồng.",
  },
  {
    questionNumber: 8,
    question:
      "Theo Hồ Chí Minh, văn hóa trong xã hội xã hội chủ nghĩa phải có những đặc trưng gì?",
    answerOptions: [
      {
        text: "Chỉ cần có tính dân tộc",
        rationale:
          "Hồ Chí Minh yêu cầu văn hóa phải có đầy đủ ba đặc trưng: dân tộc, khoa học và đại chúng.",
        isCorrect: false,
      },
      {
        text: "Có tính dân tộc, khoa học và đại chúng",
        rationale:
          "Đây chính là quan điểm toàn diện của Hồ Chí Minh về đặc trưng của nền văn hóa xã hội chủ nghĩa.",
        isCorrect: true,
      },
      {
        text: "Chỉ tiếp thu văn hóa phương Tây",
        rationale:
          "Hồ Chí Minh chủ trương vừa phát triển truyền thống tốt đẹp dân tộc, vừa hấp thụ tinh hoa văn hóa nhân loại.",
        isCorrect: false,
      },
      {
        text: "Hoàn toàn từ bỏ truyền thống văn hóa dân tộc",
        rationale:
          "Hồ Chí Minh luôn coi trọng và muốn phát triển những truyền thống tốt đẹp của văn hóa dân tộc.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nhớ đến ba đặc trưng cơ bản mà Hồ Chí Minh đề ra cho nền văn hóa Việt Nam.",
  },
  {
    questionNumber: 9,
    question:
      "Hồ Chí Minh xác định chủ thể xây dựng chủ nghĩa xã hội là gì?",
    answerOptions: [
      {
        text: "Chỉ có giai cấp công nhân",
        rationale:
          "Mặc dù giai cấp công nhân đóng vai trò lãnh đạo, nhưng chủ thể xây dựng là toàn thể nhân dân.",
        isCorrect: false,
      },
      {
        text: "Chỉ có Đảng Cộng sản",
        rationale:
          "Đảng lãnh đạo nhưng chủ thể xây dựng là toàn thể nhân dân dưới sự lãnh đạo của Đảng.",
        isCorrect: false,
      },
      {
        text: "Toàn thể nhân dân dưới sự lãnh đạo của Đảng Cộng sản",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh: chủ nghĩa xã hội là công trình tập thể của nhân dân.",
        isCorrect: true,
      },
      {
        text: "Chỉ có trí thức và cán bộ",
        rationale:
          "Trí thức và cán bộ chỉ là một bộ phận trong lực lượng xây dựng chủ nghĩa xã hội.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về vai trò của 'toàn dân' và sự lãnh đạo của Đảng trong công cuộc xây dựng chủ nghĩa xã hội.",
  },
  {
    questionNumber: 10,
    question:
      "Mục tiêu về chế độ chính trị của chủ nghĩa xã hội ở Việt Nam theo Hồ Chí Minh là gì?",
    answerOptions: [
      {
        text: "Xây dựng chế độ quân chủ lập hiến",
        rationale:
          "Hồ Chí Minh không chủ trương chế độ quân chủ mà chủ trương chế độ cộng hòa dân chủ.",
        isCorrect: false,
      },
      {
        text: "Xây dựng chế độ dân chủ với nhân dân làm chủ",
        rationale:
          "Đây chính là mục tiêu chính trị cơ bản mà Hồ Chí Minh đặt ra cho chủ nghĩa xã hội ở Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Xây dựng chế độ đa đảng cạnh tranh",
        rationale:
          "Hồ Chí Minh nhấn mạnh vai trò lãnh đạo duy nhất của Đảng Cộng sản trong chế độ dân chủ.",
        isCorrect: false,
      },
      {
        text: "Xây dựng chế độ liên bang",
        rationale:
          "Hồ Chí Minh chủ trương nhà nước thống nhất, không phải chế độ liên bang.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nhớ câu nói nổi tiếng: 'Nước ta là nước dân chủ, địa vị cao nhất là dân, vì dân là chủ'.",
  },
  {
    questionNumber: 11,
    question:
      "Về mục tiêu kinh tế, Hồ Chí Minh đặt ra cho chủ nghĩa xã hội ở Việt Nam điều gì?",
    answerOptions: [
      {
        text: "Nền kinh tế nông nghiệp thuần túy",
        rationale:
          "Hồ Chí Minh chủ trương phát triển cả công nghiệp và nông nghiệp hiện đại.",
        isCorrect: false,
      },
      {
        text: "Nền kinh tế phát triển cao với công nghiệp và nông nghiệp hiện đại, dựa trên sở hữu toàn dân và tập thể",
        rationale:
          "Đây chính là mục tiêu kinh tế toàn diện mà Hồ Chí Minh đề ra cho Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Nền kinh tế thị trường hoàn toàn tự do",
        rationale:
          "Hồ Chí Minh chủ trương nền kinh tế có sự lãnh đạo của khu vực quốc doanh.",
        isCorrect: false,
      },
      {
        text: "Nền kinh tế chỉ dựa vào sở hữu tư nhân",
        rationale:
          "Hồ Chí Minh chủ trương chế độ sở hữu xã hội chủ nghĩa, không phải sở hữu tư nhân.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về sự kết hợp giữa hiện đại hóa và chế độ sở hữu xã hội chủ nghĩa.",
  },
  {
    questionNumber: 12,
    question:
      "Hồ Chí Minh nhấn mạnh mối quan hệ giữa chính trị, kinh tế và văn hóa như thế nào?",
    answerOptions: [
      {
        text: "Ba lĩnh vực hoàn toàn độc lập với nhau",
        rationale:
          "Hồ Chí Minh cho rằng đây là mối quan hệ biện chứng, không độc lập với nhau.",
        isCorrect: false,
      },
      {
        text: "Chính trị và kinh tế quyết định văn hóa, văn hóa góp phần thực hiện mục tiêu chính trị và kinh tế",
        rationale:
          "Đây chính là quan điểm biện chứng của Hồ Chí Minh về mối quan hệ giữa ba lĩnh vực này.",
        isCorrect: true,
      },
      {
        text: "Chỉ có văn hóa là quan trọng nhất",
        rationale:
          "Hồ Chí Minh không coi một lĩnh vực nào là tuyệt đối quan trọng nhất mà nhấn mạnh mối quan hệ biện chứng.",
        isCorrect: false,
      },
      {
        text: "Kinh tế quyết định tất cả",
        rationale:
          "Mặc dù kinh tế có vai trò quan trọng, nhưng Hồ Chí Minh nhấn mạnh tác động qua lại giữa các lĩnh vực.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về mối quan hệ tác động qua lại giữa ba lĩnh vực cơ bản của đời sống xã hội.",
  },
  {
    questionNumber: 13,
    question:
      "Theo Hồ Chí Minh, động lực hàng đầu của chủ nghĩa xã hội ở Việt Nam là gì?",
    answerOptions: [
      {
        text: "Sự giúp đỡ từ các nước xã hội chủ nghĩa",
        rationale:
          "Đây là ngoại lực quan trọng nhưng không phải động lực hàng đầu theo quan điểm của Hồ Chí Minh.",
        isCorrect: false,
      },
      {
        text: "Nội lực dân tộc: lợi ích của dân, dân chủ của dân, sức mạnh đoàn kết toàn dân",
        rationale:
          "Đây chính là ba động lực hàng đầu mà Hồ Chí Minh xác định cho chủ nghĩa xã hội Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Tài nguyên thiên nhiên phong phú",
        rationale:
          "Tài nguyên là điều kiện thuận lợi nhưng không phải động lực quyết định.",
        isCorrect: false,
      },
      {
        text: "Trình độ khoa học kỹ thuật cao",
        rationale:
          "Khoa học kỹ thuật là phương tiện quan trọng nhưng con người mới là động lực cơ bản.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về vai trò của 'nội lực dân tộc' và ba yếu tố cốt lõi của nó.",
  },
  {
    questionNumber: 14,
    question:
      "Hồ Chí Minh nói 'Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa'. Điều này có nghĩa gì?",
    answerOptions: [
      {
        text: "Chỉ cần có số lượng người đông đảo",
        rationale:
          "Hồ Chí Minh không chỉ quan tâm đến số lượng mà chú trọng đến chất lượng con người.",
        isCorrect: false,
      },
      {
        text: "Cần có những con người có tư tưởng và tác phong xã hội chủ nghĩa",
        rationale:
          "Đây chính là ý nghĩa của câu nói, nhấn mạnh vai trò của yếu tố con người trong xây dựng chủ nghĩa xã hội.",
        isCorrect: true,
      },
      {
        text: "Chỉ cần những người có trình độ học vấn cao",
        rationale:
          "Trình độ học vấn quan trọng nhưng không đủ, cần có cả tư tưởng và tác phong đúng đắn.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần những người thuộc giai cấp công nhân",
        rationale:
          "Hồ Chí Minh nói về toàn thể con người Việt Nam, không chỉ riêng giai cấp công nhân.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về tầm quan trọng của việc bồi dưỡng phẩm chất con người trong công cuộc xây dựng xã hội mới.",
  },
  {
    questionNumber: 15,
    question:
      "Tư tưởng và tác phong xã hội chủ nghĩa theo Hồ Chí Minh bao gồm những gì?",
    answerOptions: [
      {
        text: "Chỉ có ý thức làm chủ nhà nước",
        rationale:
          "Đây chỉ là một trong nhiều yếu tố của tư tưởng và tác phong xã hội chủ nghĩa.",
        isCorrect: false,
      },
      {
        text: "Ý thức làm chủ, tinh thần tập thể, tư tưởng 'mình vì mọi người, mọi người vì mình', quan điểm 'tất cả phục vụ sản xuất'",
        rationale:
          "Đây chính là những yếu tố cơ bản của tư tưởng và tác phong xã hội chủ nghĩa mà Hồ Chí Minh đã khái quát.",
        isCorrect: true,
      },
      {
        text: "Chỉ cần có tư tưởng cách mạng",
        rationale:
          "Hồ Chí Minh nói rất cụ thể về nhiều yếu tố của tư tưởng và tác phong, không chỉ tổng quát là tư tưởng cách mạng.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nhớ lại bài nói chuyện của Hồ Chí Minh tại Hội nghị bồi dưỡng cán bộ lãnh đạo các cấp toàn miền Bắc năm 1961.",
  },
  {
    questionNumber: 16,
    question:
      "Quan điểm 'xây đi đôi với chống' trong tư tưởng Hồ Chí Minh có nghĩa gì?",
    answerOptions: [
      {
        text: "Chỉ tập trung vào xây dựng, không cần chống lại gì cả",
        rationale:
          "Quan điểm này trái ngược với tư tưởng 'xây đi đôi với chống' của Hồ Chí Minh.",
        isCorrect: false,
      },
      {
        text: "Chỉ tập trung vào đấu tranh chống lại kẻ thù",
        rationale:
          "Hồ Chí Minh nhấn mạnh phải kết hợp cả xây dựng và đấu tranh, không chỉ một mặt.",
        isCorrect: false,
      },
      {
        text: "Vừa xây dựng các yếu tố mới, vừa chống lại các lực cản, tàn dư xã hội cũ",
        rationale:
          "Đây chính là ý nghĩa của quan điểm 'xây đi đôi với chống', thể hiện tính biện chứng trong công cuộc cách mạng.",
        isCorrect: true,
      },
      {
        text: "Xây dựng trước, chống lại sau",
        rationale:
          "Hồ Chí Minh nhấn mạnh sự đồng thời của hai nhiệm vụ này, không phải tuần tự.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về sự cần thiết của việc đồng thời xây dựng cái mới và chống lại cái cũ, cái xấu.",
  },
  {
    questionNumber: 17,
    question:
      "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam có tính chất gì theo Hồ Chí Minh?",
    answerOptions: [
      {
        text: "Là thời kỳ đơn giản, dễ dàng thực hiện",
        rationale:
          "Hồ Chí Minh nhấn mạnh đây là thời kỳ phức tạp, khó khăn nhất.",
        isCorrect: false,
      },
      {
        text: "Là thời kỳ cải biến sâu sắc nhất nhưng phức tạp, lâu dài, khó khăn, gian khổ",
        rationale:
          "Đây chính là đánh giá của Hồ Chí Minh về tính chất của thời kỳ quá độ.",
        isCorrect: true,
      },
      {
        text: "Là thời kỳ có thể hoàn thành trong thời gian ngắn",
        rationale:
          "Hồ Chí Minh khẳng định không thể làm mau được mà phải làm dần dần.",
        isCorrect: false,
      },
      {
        text: "Là thời kỳ chỉ cần thay đổi kinh tế",
        rationale:
          "Thời kỳ quá độ đòi hỏi thay đổi trên tất cả các lĩnh vực, không chỉ kinh tế.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về độ phức tạp của việc biến đổi toàn bộ một xã hội từ cũ thành mới.",
  },
  {
    questionNumber: 18,
    question:
      "Đặc điểm lớn nhất của thời kỳ quá độ ở Việt Nam theo Hồ Chí Minh là gì?",
    answerOptions: [
      {
        text: "Phải trải qua giai đoạn phát triển tư bản chủ nghĩa",
        rationale:
          "Đây chính là điều mà Việt Nam không phải trải qua, tạo nên đặc điểm riêng.",
        isCorrect: false,
      },
      {
        text: "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội, không trải qua giai đoạn phát triển tư bản chủ nghĩa",
        rationale:
          "Đây chính là 'đặc điểm to nhất' mà Hồ Chí Minh đã chỉ ra về thời kỳ quá độ ở Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Có sự giúp đỡ từ các nước xã hội chủ nghĩa",
        rationale:
          "Đây là điều kiện thuận lợi nhưng không phải đặc điểm cơ bản nhất của thời kỳ quá độ.",
        isCorrect: false,
      },
      {
        text: "Có truyền thống đấu tranh lâu đời của dân tộc",
        rationale:
          "Đây là yếu tố tích cực nhưng không phải đặc điểm cơ bản của thời kỳ quá độ.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về con đường đặc biệt mà Việt Nam đi lên chủ nghĩa xã hội.",
  },
  {
    questionNumber: 19,
    question:
      "Nhiệm vụ quan trọng nhất về kinh tế trong thời kỳ quá độ theo Hồ Chí Minh là gì?",
    answerOptions: [
      {
        text: "Chỉ tập trung phát triển nông nghiệp",
        rationale:
          "Hồ Chí Minh chủ trương phát triển cả công nghiệp và nông nghiệp hiện đại.",
        isCorrect: false,
      },
      {
        text: "Cải tạo nền kinh tế cũ, xây dựng nền kinh tế mới có công nghiệp và nông nghiệp hiện đại",
        rationale:
          "Đây chính là nhiệm vụ quan trọng nhất về kinh tế mà Hồ Chí Minh xác định.",
        isCorrect: true,
      },
      {
        text: "Chỉ phát triển thương mại và dịch vụ",
        rationale:
          "Hồ Chí Minh coi trọng việc xây dựng nền tảng vật chất và kỹ thuật, tức là sản xuất.",
        isCorrect: false,
      },
      {
        text: "Duy trì nguyên trạng kinh tế cũ",
        rationale:
          "Hồ Chí Minh nhấn mạnh phải cải tạo nền kinh tế cũ, không thể duy trì nguyên trạng.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về việc xây dựng nền tảng vật chất và kỹ thuật của chủ nghĩa xã hội.",
  },
  {
    questionNumber: 20,
    question:
      "Nguyên tắc đầu tiên trong xây dựng chủ nghĩa xã hội theo Hồ Chí Minh là gì?",
    answerOptions: [
      {
        text: "Phải dựa vào kinh nghiệm của các nước khác",
        rationale:
          "Học tập kinh nghiệm quan trọng nhưng không phải nguyên tắc đầu tiên và cơ bản nhất.",
        isCorrect: false,
      },
      {
        text: "Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác - Lênin",
        rationale:
          "Đây chính là nguyên tắc cơ bản nhất mà Hồ Chí Minh đặt ra, coi chủ nghĩa Mác-Lênin là khoa học cách mạng.",
        isCorrect: true,
      },
      {
        text: "Phải ưu tiên phát triển kinh tế",
        rationale:
          "Phát triển kinh tế quan trọng nhưng trước hết phải có nền tảng lý luận đúng đắn.",
        isCorrect: false,
      },
      {
        text: "Phải đoàn kết với các nước xã hội chủ nghĩa",
        rationale:
          "Đoàn kết quốc tế là nguyên tắc quan trọng nhưng không phải nguyên tắc đầu tiên.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về tầm quan trọng của việc có một nền tảng lý luận khoa học để chỉ đạo thực tiễn.",
  },
  {
    questionNumber: 21,
    question:
      "Hồ Chí Minh nhấn mạnh về mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội như thế nào?",
    answerOptions: [
      {
        text: "Hai nhiệm vụ hoàn toàn tách biệt nhau",
        rationale:
          "Hồ Chí Minh luôn gắn kết chặt chẽ độc lập dân tộc với chủ nghĩa xã hội.",
        isCorrect: false,
      },
      {
        text: "Độc lập dân tộc là điều kiện tiên quyết để thực hiện chủ nghĩa xã hội, chủ nghĩa xã hội bảo đảm độc lập dân tộc trường tồn",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh về mối quan hệ biện chứng giữa hai nhiệm vụ này.",
        isCorrect: true,
      },
      {
        text: "Chỉ cần độc lập dân tộc là đủ",
        rationale:
          "Hồ Chí Minh coi độc lập dân tộc gắn với chủ nghĩa xã hội mới là độc lập thực sự.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần chủ nghĩa xã hội là đủ",
        rationale:
          "Hồ Chí Minh luôn coi trọng cả hai nhiệm vụ và mối quan hệ giữa chúng.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về sự gắn bó hữu cơ giữa giải phóng dân tộc và giải phóng xã hội.",
  },
  {
    questionNumber: 22,
    question:
      "Về việc học tập kinh nghiệm các nước anh em, Hồ Chí Minh có quan điểm gì?",
    answerOptions: [
      {
        text: "Phải áp dụng nguyên xi kinh nghiệm của các nước khác",
        rationale:
          "Hồ Chí Minh cảnh báo không được áp đặt kinh nghiệm một cách máy móc.",
        isCorrect: false,
      },
      {
        text: "Không cần học tập kinh nghiệm của nước nào",
        rationale:
          "Hồ Chí Minh luôn coi trọng việc học tập kinh nghiệm trong tinh thần đoàn kết quốc tế.",
        isCorrect: false,
      },
      {
        text: "Phải học tập nhưng vận dụng sáng tạo phù hợp với điều kiện cụ thể của từng nước",
        rationale:
          "Đây chính là quan điểm của Hồ Chí Minh: học tập nhưng không áp đặt máy móc.",
        isCorrect: true,
      },
      {
        text: "Chỉ học tập kinh nghiệm của Liên Xô",
        rationale:
          "Mặc dù đánh giá cao Liên Xô, Hồ Chí Minh khẳng định Việt Nam có thể đi con đường khác.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về sự kết hợp giữa học tập quốc tế và sáng tạo dân tộc.",
  },
  {
    questionNumber: 23,
    question:
      "Khi nói về chống 'kẻ địch bên trong', Hồ Chí Minh đề cập đến điều gì?",
    answerOptions: [
      {
        text: "Chống lại gián điệp nước ngoài",
        rationale:
          "Đây là 'kẻ địch bên ngoài' chứ không phải 'kẻ địch bên trong' mà Hồ Chí Minh nói đến.",
        isCorrect: false,
      },
      {
        text: "Chống lại chủ nghĩa cá nhân và tư tưởng 'làm quan cách mạng'",
        rationale:
          "Đây chính là những 'kẻ địch bên trong' mà Hồ Chí Minh thường nhắc đến và cảnh báo.",
        isCorrect: true,
      },
      {
        text: "Chống lại những người không đồng ý với chính sách",
        rationale:
          "Hồ Chí Minh nói về những tư tưởng, tác phong sai lệch chứ không phải về bất đồng chính sách.",
        isCorrect: false,
      },
      {
        text: "Chống lại các thế lực phản động",
        rationale:
          "Các thế lực phản động thường là 'kẻ địch bên ngoài', còn 'kẻ địch bên trong' là những khuyết điểm trong nội bộ.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về những tư tưởng, tác phong tiêu cực có thể xuất hiện trong nội bộ cách mạng.",
  },
  {
    questionNumber: 24,
    question:
      "Theo Hồ Chí Minh, tại sao nói chủ nghĩa cá nhân như 'vi trùng độc hại'?",
    answerOptions: [
      {
        text: "Vì nó chỉ ảnh hưởng đến cá nhân đó",
        rationale:
          "Hồ Chí Minh cho rằng chủ nghĩa cá nhân không chỉ hại bản thân mà còn hại đến tập thể.",
        isCorrect: false,
      },
      {
        text: "Vì nó sinh ra nhiều bệnh như tham lam, kiêu ngạo, háo danh, làm hại cả cá nhân và tập thể",
        rationale:
          "Đây chính là lý do Hồ Chí Minh ví chủ nghĩa cá nhân như vi trùng độc hại, có khả năng lan truyền và gây hại.",
        isCorrect: true,
      },
      {
        text: "Vì nó là biểu hiện của giai cấp thống trị cũ",
        rationale:
          "Chủ nghĩa cá nhân có thể xuất hiện ở bất kỳ ai, không chỉ riêng giai cấp thống trị cũ.",
        isCorrect: false,
      },
      {
        text: "Vì nó chỉ xuất hiện trong giai đoạn đầu của cách mạng",
        rationale:
          "Chủ nghĩa cá nhân có thể xuất hiện ở bất kỳ giai đoạn nào, cần phải luôn đấu tranh chống lại.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về khả năng lan truyền và những tác hại đa chiều của chủ nghĩa cá nhân.",
  },
  {
    questionNumber: 25,
    question:
      "Hồ Chí Minh đánh giá thời kỳ quá độ khó khăn hơn cả việc đánh giặc vì lý do gì?",
    answerOptions: [
      {
        text: "Vì thiếu vũ khí và quân đội",
        rationale:
          "Đây không phải lý do mà Hồ Chí Minh đưa ra khi so sánh với cuộc chiến chống giặc.",
        isCorrect: false,
      },
      {
        text: "Vì phải thay đổi triệt để nếp sống, thói quen, ý nghĩ có gốc rễ sâu xa hàng ngàn năm",
        rationale:
          "Đây chính là lý do Hồ Chí Minh cho rằng xây dựng chủ nghĩa xã hội khó khăn hơn đánh giặc.",
        isCorrect: true,
      },
      {
        text: "Vì không có sự ủng hộ của nhân dân",
        rationale:
          "Hồ Chí Minh luôn coi trọng sự ủng hộ của nhân dân trong mọi giai đoạn cách mạng.",
        isCorrect: false,
      },
      {
        text: "Vì thiếu kinh nghiệm quốc tế",
        rationale:
          "Thiếu kinh nghiệm là khó khăn nhưng không phải lý do cơ bản nhất mà Người nêu ra.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về sự khác biệt giữa đánh bại kẻ thù bên ngoài và thay đổi toàn bộ nền tảng xã hội.",
  },
  {
    questionNumber: 26,
    question:
      "Về nhiệm vụ văn hóa trong thời kỳ quá độ, Hồ Chí Minh đặt ra yêu cầu gì?",
    answerOptions: [
      {
        text: "Chỉ cần bảo tồn văn hóa truyền thống",
        rationale:
          "Hồ Chí Minh không chỉ bảo tồn mà còn phải tẩy trừ di tích xấu và tiếp thu tinh hoa thế giới.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần tiếp thu văn hóa nước ngoài",
        rationale:
          "Hồ Chí Minh chủ trương kết hợp, không chỉ tiếp thu mà còn phát triển bản sắc dân tộc.",
        isCorrect: false,
      },
      {
        text: "Tẩy trừ di tích thuộc địa, phát triển truyền thống tốt đẹp, hấp thụ tinh hoa văn hóa thế giới",
        rationale:
          "Đây chính là nhiệm vụ toàn diện về văn hóa mà Hồ Chí Minh đề ra cho thời kỳ quá độ.",
        isCorrect: true,
      },
      {
        text: "Từ bỏ hoàn toàn văn hóa cũ",
        rationale:
          "Hồ Chí Minh chủ trương phát triển những truyền thống tốt đẹp, không từ bỏ hoàn toàn.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về cách tiếp cận toàn diện: loại bỏ cái xấu, giữ gìn và phát triển cái tốt, tiếp thu cái hay.",
  },
  {
    questionNumber: 27,
    question:
      "Mục tiêu về quan hệ xã hội trong chủ nghĩa xã hội Việt Nam theo Hồ Chí Minh là gì?",
    answerOptions: [
      {
        text: "Duy trì các quan hệ xã hội truyền thống",
        rationale:
          "Hồ Chí Minh chủ trương thay đổi triệt để những quan hệ xã hội lạc hậu.",
        isCorrect: false,
      },
      {
        text: "Bảo đảm dân chủ, công bằng, văn minh, tôn trọng con người",
        rationale:
          "Đây chính là mục tiêu mà Hồ Chí Minh đặt ra cho quan hệ xã hội trong chủ nghĩa xã hội.",
        isCorrect: true,
      },
      {
        text: "Chỉ quan tâm đến quyền lợi của giai cấp công nhân",
        rationale:
          "Hồ Chí Minh quan tâm đến quyền lợi của toàn thể nhân dân, không chỉ một giai cấp.",
        isCorrect: false,
      },
      {
        text: "Ưu tiên quyền lợi tập thể, triệt tiêu quyền cá nhân",
        rationale:
          "Hồ Chí Minh chủ trương hài hòa giữa quyền cá nhân và lợi ích tập thể.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về một xã hội lý tưởng nơi mọi người được đối xử công bằng và có cơ hội phát triển.",
  },
  {
    questionNumber: 28,
    question:
      "Theo Hồ Chí Minh, vị trí của kinh tế quốc doanh trong nền kinh tế xã hội chủ nghĩa là gì?",
    answerOptions: [
      {
        text: "Chỉ là một thành phần bình thường",
        rationale:
          "Hồ Chí Minh đặc biệt coi trọng vai trò lãnh đạo của kinh tế quốc doanh.",
        isCorrect: false,
      },
      {
        text: "Lãnh đạo nền kinh tế quốc dân",
        rationale:
          "Đây chính là vị trí mà Hồ Chí Minh xác định cho kinh tế quốc doanh trong nền kinh tế xã hội chủ nghĩa.",
        isCorrect: true,
      },
      {
        text: "Chỉ đóng vai trò bổ sung",
        rationale:
          "Kinh tế quốc doanh có vai trò chủ đạo, không chỉ bổ sung theo quan điểm của Hồ Chí Minh.",
        isCorrect: false,
      },
      {
        text: "Cạnh tranh bình đẳng với các thành phần khác",
        rationale:
          "Hồ Chí Minh xác định vai trò lãnh đạo đặc biệt của kinh tế quốc doanh.",
        isCorrect: false,
      },
    ],
    hint: "Hãy tìm hiểu về vai trò chủ đạo của khu vực kinh tế do nhà nước làm chủ.",
  },
  {
    questionNumber: 29,
    question:
      "Hồ Chí Minh nói 'có thực mới vực được đạo' để nhấn mạnh điều gì?",
    answerOptions: [
      {
        text: "Văn hóa quan trọng hơn kinh tế",
        rationale:
          "Câu nói này thực ra nhấn mạnh vai trò nền tảng của kinh tế đối với văn hóa.",
        isCorrect: false,
      },
      {
        text: "Kinh tế phải đi trước trong mối quan hệ với văn hóa",
        rationale:
          "Đây chính là ý nghĩa của câu tục ngữ mà Hồ Chí Minh dùng để giải thích tại sao nói 'phát triển kinh tế và văn hóa'.",
        isCorrect: true,
      },
      {
        text: "Chỉ cần phát triển kinh tế là đủ",
        rationale:
          "Hồ Chí Minh vẫn coi trọng phát triển văn hóa, chỉ là đặt kinh tế làm nền tảng.",
        isCorrect: false,
      },
      {
        text: "Kinh tế và văn hóa không liên quan đến nhau",
        rationale:
          "Hồ Chí Minh nhấn mạnh mối quan hệ biện chứng giữa kinh tế và văn hóa.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về vai trò của cơ sở vật chất trong việc phát triển tinh thần, văn hóa.",
  },
  {
    questionNumber: 30,
    question:
      "Tư tưởng Hồ Chí Minh về chủ nghĩa xã hội có ý nghĩa gì đối với Việt Nam hiện nay?",
    answerOptions: [
      {
        text: "Chỉ có giá trị lịch sử, không còn phù hợp",
        rationale:
          "Tư tưởng Hồ Chí Minh vẫn có giá trị định hướng quan trọng cho công cuộc đổi mới và phát triển đất nước.",
        isCorrect: false,
      },
      {
        text: "Cung cấp những định hướng cơ bản về mục tiêu, con đường và động lực xây dựng chủ nghĩa xã hội phù hợp với điều kiện Việt Nam",
        rationale:
          "Đây chính là ý nghĩa thực tiễn sâu sắc của tư tưởng Hồ Chí Minh, tạo nền tảng lý luận cho con đường đổi mới hiện nay.",
        isCorrect: true,
      },
      {
        text: "Chỉ áp dụng được trong giai đoạn chiến tranh",
        rationale:
          "Tư tưởng Hồ Chí Minh không chỉ có giá trị trong thời chiến mà còn trong thời bình, đặc biệt trong xây dựng chủ nghĩa xã hội.",
        isCorrect: false,
      },
      {
        text: "Chỉ có ý nghĩa học thuật, nghiên cứu lý luận",
        rationale:
          "Tư tưởng Hồ Chí Minh không chỉ có giá trị học thuật mà còn có ý nghĩa thực tiễn to lớn cho việc xây dựng đất nước.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về tính kế thừa và phát triển của tư tưởng Hồ Chí Minh trong bối cảnh đổi mới hiện nay.",
  },
];