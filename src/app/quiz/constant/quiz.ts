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
      "Khi khẳng định về quyền của các dân tộc, Hồ Chí Minh đã viện dẫn những văn kiện lịch sử nào?",
    answerOptions: [
      {
        text: "Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền của Pháp (1791)",
        rationale:
          "Đây là hai văn kiện lịch sử quan trọng được Hồ Chí Minh trích dẫn để khẳng định quyền bình đẳng, tự do của các dân tộc.",
        isCorrect: true,
      },
      {
        text: "Tuyên ngôn của Đảng Cộng sản (1848) và Luận cương của Lênin (1920)",
        rationale:
          "Những văn kiện này ảnh hưởng đến con đường cách mạng vô sản mà Người đã chọn, nhưng không phải là những văn kiện Người viện dẫn để khẳng định quyền dân tộc cơ bản.",
        isCorrect: false,
      },
      {
        text: "Hiến pháp Hợp chúng quốc Hoa Kỳ và Hiến pháp Cộng hòa Pháp",
        rationale:
          "Hồ Chí Minh đã viện dẫn các bản tuyên ngôn mang tính cách mạng, chứ không phải toàn bộ hiến pháp của các quốc gia này.",
        isCorrect: false,
      },
      {
        text: "Chiếu dời đô của Lý Công Uẩn và Hịch tướng sĩ của Trần Hưng Đạo",
        rationale:
          "Đây là những văn kiện quan trọng trong lịch sử Việt Nam, thể hiện ý chí độc lập, tự cường nhưng không được Hồ Chí Minh trực tiếp viện dẫn trong Tuyên ngôn Độc lập.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nhớ lại những văn kiện quốc tế nổi tiếng về quyền con người và quyền công dân mà Hồ Chí Minh đã nâng tầm thành quyền dân tộc.",
  },
  {
    questionNumber: 2,
    question:
      "Theo tư tưởng Hồ Chí Minh, độc lập dân tộc thực sự phải gắn liền với điều gì?",
    answerOptions: [
      {
        text: "Sự công nhận của các cường quốc trên thế giới",
        rationale:
          "Sự công nhận của quốc tế là quan trọng, nhưng đối với Hồ Chí Minh, giá trị cốt lõi của độc lập nằm ở đời sống của nhân dân.",
        isCorrect: false,
      },
      {
        text: "Tự do, cơm no, áo ấm và hạnh phúc của nhân dân",
        rationale:
          "Hồ Chí Minh nhấn mạnh rằng độc lập phải mang lại lợi ích thiết thực cho người dân, chứ không phải là một khái niệm trừu tượng.",
        isCorrect: true,
      },
      {
        text: "Một nền kinh tế công nghiệp hóa, hiện đại hóa",
        rationale:
          "Công nghiệp hóa, hiện đại hóa là mục tiêu phát triển, nhưng không phải là điều kiện tiên quyết và gắn liền trực tiếp với bản chất của nền độc lập theo tư tưởng của Người.",
        isCorrect: false,
      },
      {
        text: "Một hệ thống chính trị đa đảng phái",
        rationale:
          "Hồ Chí Minh nhấn mạnh vai trò lãnh đạo duy nhất của Đảng Cộng sản trong cách mạng Việt Nam, không phải là một hệ thống đa đảng.",
        isCorrect: false,
      },
    ],
    hint: "Người từng nói: 'Nếu nước độc lập mà dân không hưởng hạnh phúc, tự do thì độc lập cũng chẳng có nghĩa lý gì'.",
  },
  {
    questionNumber: 3,
    question:
      'Câu nói "Sông có thể cạn, núi có thể mòn song chân lý đó không bao giờ thay đổi" khẳng định điều gì trong tư tưởng Hồ Chí Minh?',
    answerOptions: [
      {
        text: "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
        rationale:
          "Câu nói này không trực tiếp đề cập đến chủ nghĩa xã hội, mà tập trung vào một khía cạnh khác của độc lập dân tộc.",
        isCorrect: false,
      },
      {
        text: "Cách mạng giải phóng dân tộc phải do Đảng Cộng sản lãnh đạo",
        rationale:
          "Vai trò của Đảng là quan trọng, nhưng câu nói này nhấn mạnh một chân lý về lãnh thổ và con người Việt Nam.",
        isCorrect: false,
      },
      {
        text: "Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ",
        rationale:
          "Câu nói này được trích trong 'Thư gửi đồng bào Nam Bộ' (1946), khẳng định một cách đanh thép rằng Nam Bộ là một phần không thể tách rời của Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Không có gì quý hơn độc lập, tự do",
        rationale:
          "Đây là một tư tưởng lớn của Người, nhưng câu nói cụ thể này dùng để khẳng định một chân lý khác, liên quan đến địa lý và dân tộc.",
        isCorrect: false,
      },
    ],
    hint: "Câu nói này được nói trong bối cảnh nào và gửi đến đồng bào ở đâu?",
  },
  {
    questionNumber: 4,
    question:
      'Sự kiện nào đã giúp Hồ Chí Minh đi đến kết luận: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản"?',
    answerOptions: [
      {
        text: "Gửi bản Yêu sách của nhân dân An Nam đến Hội nghị Vécxây (1919)",
        rationale:
          "Việc Yêu sách không được chấp nhận đã giúp Người hiểu rõ bản chất của đế quốc, nhưng sự kiện quyết định con đường cách mạng lại đến sau đó.",
        isCorrect: false,
      },
      {
        text: "Đọc bản Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa của Lênin (1920)",
        rationale:
          "Đây chính là bước ngoặt quan trọng, giúp Người tìm thấy ánh sáng và con đường cứu nước đúng đắn cho dân tộc Việt Nam.",
        isCorrect: true,
      },
      {
        text: "Thắng lợi của Cách mạng Tháng Mười Nga (1917)",
        rationale:
          "Thắng lợi của Cách mạng Tháng Mười Nga đã ảnh hưởng lớn và mở ra thời đại mới, nhưng sự kiện trực tiếp giúp Người tìm ra con đường là khi Người tiếp cận lý luận của Lênin.",
        isCorrect: false,
      },
      {
        text: "Sự thất bại của các phong trào yêu nước đầu thế kỷ XX",
        rationale:
          "Sự thất bại của các phong trào trước đó là tiền đề để Người ra đi tìm đường cứu nước, nhưng chưa phải là sự kiện giúp Người tìm ra con đường cụ thể.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về thời điểm Hồ Chí Minh tìm thấy lý luận cách mạng soi đường cho cuộc đấu tranh giải phóng dân tộc.",
  },
  {
    questionNumber: 5,
    question:
      "Theo Hồ Chí Minh, lực lượng của cách mạng giải phóng dân tộc là gì và lấy liên minh nào làm nền tảng?",
    answerOptions: [
      {
        text: "Lực lượng đại đoàn kết toàn dân tộc, lấy liên minh công - nông làm nền tảng.",
        rationale:
          "Đây là quan điểm nhất quán của Hồ Chí Minh, coi cách mạng là sự nghiệp của toàn dân, trong đó công nông là gốc, là lực lượng chủ chốt.",
        isCorrect: true,
      },
      {
        text: "Chỉ có giai cấp công nhân và nông dân.",
        rationale:
          "Mặc dù công nông là nền tảng, nhưng Hồ Chí Minh luôn nhấn mạnh sức mạnh của khối đại đoàn kết toàn dân tộc, bao gồm cả các tầng lớp khác.",
        isCorrect: false,
      },
      {
        text: "Giai cấp tư sản dân tộc và tiểu tư sản.",
        rationale:
          "Các giai cấp này cũng là một phần của lực lượng cách mạng, nhưng không phải là nền tảng cốt lõi theo tư tưởng của Người.",
        isCorrect: false,
      },
      {
        text: "Lực lượng quân đội nhân dân.",
        rationale:
          "Quân đội là lực lượng nòng cốt cho đấu tranh vũ trang, nhưng lực lượng của cách mạng nói chung rộng lớn hơn nhiều, đó là toàn thể nhân dân.",
        isCorrect: false,
      },
    ],
    hint: "Người quan niệm: 'Có dân là có tất cả' và coi trọng vai trò của hai giai cấp đông đảo nhất trong xã hội.",
  },
  {
    questionNumber: 6,
    question:
      "Điểm sáng tạo nào của Hồ Chí Minh đã bổ sung vào chủ nghĩa Mác - Lênin về mối quan hệ giữa cách mạng ở thuộc địa và chính quốc?",
    answerOptions: [
      {
        text: "Cách mạng giải phóng dân tộc phải phụ thuộc và chờ đợi thắng lợi của cách mạng vô sản ở chính quốc.",
        rationale:
          "Đây là quan điểm tồn tại trước đó, và Hồ Chí Minh đã đưa ra một luận điểm sáng tạo, trái ngược lại.",
        isCorrect: false,
      },
      {
        text: "Cách mạng giải phóng dân tộc ở thuộc địa không liên quan đến cách mạng vô sản ở chính quốc.",
        rationale:
          "Hồ Chí Minh thấy rõ mối quan hệ mật thiết giữa hai cuộc cách mạng này, coi chúng như hai cánh của một con chim.",
        isCorrect: false,
      },
      {
        text: "Cách mạng giải phóng dân tộc cần chủ động, sáng tạo, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc.",
        rationale:
          "Đây chính là luận điểm sáng tạo lớn, khẳng định tính chủ động và vai trò quan trọng của cách mạng ở các nước thuộc địa.",
        isCorrect: true,
      },
      {
        text: "Cách mạng giải phóng dân tộc và cách mạng vô sản ở chính quốc phải nổ ra đồng thời.",
        rationale:
          "Việc nổ ra đồng thời là một khả năng lý tưởng, nhưng Người nhấn mạnh rằng cách mạng thuộc địa không cần phải chờ đợi mà có thể bùng nổ và thắng lợi trước.",
        isCorrect: false,
      },
    ],
    hint: "Luận điểm này thể hiện sự đánh giá cao vai trò và tinh thần đấu tranh của các dân tộc bị áp bức.",
  },
  {
    questionNumber: 7,
    question:
      "Theo Hồ Chí Minh, phương pháp tiến hành cách mạng giải phóng dân tộc là gì?",
    answerOptions: [
      {
        text: "Đấu tranh nghị trường và cải cách ôn hòa.",
        rationale:
          "Người nhận thấy rằng giai cấp thống trị không bao giờ tự từ bỏ quyền lực, do đó không thể dùng phương pháp ôn hòa.",
        isCorrect: false,
      },
      {
        text: "Chỉ sử dụng đấu tranh chính trị của quần chúng.",
        rationale:
          "Đấu tranh chính trị là rất quan trọng, nhưng chưa đủ để chống lại bạo lực của kẻ thù.",
        isCorrect: false,
      },
      {
        text: "Chỉ dựa vào đấu tranh vũ trang và lực lượng quân sự.",
        rationale:
          "Đấu tranh vũ trang là hình thức cao nhất, nhưng phải được kết hợp chặt chẽ với các hình thức đấu tranh khác.",
        isCorrect: false,
      },
      {
        text: "Bằng phương pháp bạo lực cách mạng, kết hợp đấu tranh chính trị và đấu tranh vũ trang.",
        rationale:
          "Đây là quan điểm toàn diện của Hồ Chí Minh, sử dụng sức mạnh tổng hợp của quần chúng trên cả hai mặt trận chính trị và quân sự.",
        isCorrect: true,
      },
    ],
    hint: "Hãy suy nghĩ về việc dùng bạo lực cách mạng của nhân dân để chống lại bạo lực phản cách mạng của kẻ thù.",
  },
  {
    questionNumber: 8,
    question:
      "Theo tư tưởng Hồ Chí Minh, trình tự giải phóng ở các nước thuộc địa như Việt Nam khác với châu Âu ở điểm nào?",
    answerOptions: [
      {
        text: "Giải phóng giai cấp - giải phóng dân tộc - giải phóng xã hội - giải phóng con người.",
        rationale:
          "Đây là trình tự được Mác và Ăngghen đề cập cho bối cảnh ở châu Âu, nơi mâu thuẫn giai cấp là chủ yếu.",
        isCorrect: false,
      },
      {
        text: "Giải phóng dân tộc - giải phóng xã hội - giải phóng giai cấp - giải phóng con người.",
        rationale:
          "Do mâu thuẫn chủ yếu ở thuộc địa là mâu thuẫn dân tộc, Hồ Chí Minh đã đặt nhiệm vụ giải phóng dân tộc lên trước hết và trên hết.",
        isCorrect: true,
      },
      {
        text: "Giải phóng con người - giải phóng xã hội - giải phóng giai cấp - giải phóng dân tộc.",
        rationale:
          "Trình tự này đảo ngược logic của quá trình cách mạng, vì giải phóng con người là mục tiêu cuối cùng.",
        isCorrect: false,
      },
      {
        text: "Giải phóng xã hội - giải phóng dân tộc - giải phóng con người - giải phóng giai cấp.",
        rationale:
          "Việc đặt giải phóng xã hội lên trước giải phóng dân tộc không phản ánh đúng thực tiễn của một nước thuộc địa.",
        isCorrect: false,
      },
    ],
    hint: "Hãy xem xét mâu thuẫn cơ bản và bao trùm nhất trong xã hội thuộc địa là gì để xác định nhiệm vụ nào phải được ưu tiên hàng đầu.",
  },
  {
    questionNumber: 9,
    question:
      "Tại sao Hồ Chí Minh khẳng định cách mạng giải phóng dân tộc muốn thắng lợi phải do Đảng Cộng sản lãnh đạo?",
    answerOptions: [
      {
        text: "Vì Đảng Cộng sản có sự giúp đỡ từ quốc tế.",
        rationale:
          "Sự đoàn kết quốc tế là quan trọng, nhưng lý do cốt lõi nằm ở bản chất và vai trò của chính Đảng.",
        isCorrect: false,
      },
      {
        text: "Vì chỉ có Đảng Cộng sản mới có đường lối đúng đắn và tổ chức chặt chẽ để tập hợp, dẫn dắt quần chúng.",
        rationale:
          "Hồ Chí Minh nhấn mạnh vai trò của Đảng với tư cách là đội tiên phong, có lý luận soi đường và khả năng tổ chức, thuyết phục, và huấn luyện quần chúng đấu tranh.",
        isCorrect: true,
      },
      {
        text: "Vì các giai cấp khác không có tinh thần yêu nước.",
        rationale:
          "Hồ Chí Minh luôn đề cao tinh thần yêu nước của mọi tầng lớp nhân dân, nhưng các giai cấp khác không có hệ tư tưởng tiên tiến và khả năng tổ chức như Đảng Cộng sản.",
        isCorrect: false,
      },
      {
        text: "Vì Đảng Cộng sản có tiềm lực kinh tế mạnh nhất.",
        rationale:
          "Vào thời điểm ra đời, Đảng không có tiềm lực kinh tế. Sức mạnh của Đảng đến từ sự ủng hộ của nhân dân và đường lối cách mạng đúng đắn.",
        isCorrect: false,
      },
    ],
    hint: "Hãy xem xét vai trò của Đảng như một 'đội tiên phong' của cả giai cấp công nhân và dân tộc.",
  },
  {
    questionNumber: 10,
    question:
      "Nền độc lập thật sự, hoàn toàn và triệt để theo Hồ Chí Minh có nghĩa là gì?",
    answerOptions: [
      {
        text: "Độc lập về chính trị nhưng phụ thuộc về kinh tế.",
        rationale:
          "Đây là hình thức chủ nghĩa thực dân mới mà Người luôn cảnh báo. Độc lập phải toàn diện trên mọi lĩnh vực.",
        isCorrect: false,
      },
      {
        text: "Chỉ cần thoát khỏi ách đô hộ của nước ngoài mà không cần thay đổi chế độ xã hội.",
        rationale:
          "Hồ Chí Minh gắn độc lập dân tộc với chủ nghĩa xã hội, nghĩa là phải thay đổi cả chế độ xã hội cũ để có độc lập thực sự.",
        isCorrect: false,
      },
      {
        text: "Độc lập trên tất cả các lĩnh vực: chính trị, kinh tế, văn hóa và người dân có quyền tự quyết.",
        rationale:
          "Đây là quan điểm toàn diện của Người. Một dân tộc chỉ thực sự độc lập khi không bị bóc lột kinh tế, áp bức chính trị và nô dịch văn hóa.",
        isCorrect: true,
      },
      {
        text: "Đạt được vị thế là một cường quốc quân sự trong khu vực.",
        rationale:
          "Sức mạnh quân sự là cần thiết để bảo vệ độc lập, nhưng nó không phải là bản chất hay định nghĩa của một nền độc lập thật sự theo tư tưởng của Người.",
        isCorrect: false,
      },
    ],
    hint: "Hãy nghĩ về một nền độc lập toàn diện, không chỉ là danh nghĩa mà phải là thực chất trên mọi phương diện của đời sống quốc gia.",
  },
];
