const questions = [
  
  { 
        question: "Thông tư 26/2025/TT-BNNMT quy định về nội dung gì?", 
        options: [
            "Quản lý lâm sản; xử lý lâm sản, thủy sản là tài sản xác lập quyền sở hữu toàn dân", 
            "Chỉ quản lý rừng đặc dụng", 
            "Chỉ quản lý doanh nghiệp chế biến gỗ", 
            "Chỉ quy định về thủy sản"
        ], 
        correct: "Quản lý lâm sản; xử lý lâm sản, thủy sản là tài sản xác lập quyền sở hữu toàn dân",
        explanation: "Điều 1 Thông tư 26/2025/TT-BNNMT nêu phạm vi điều chỉnh bao gồm quản lý lâm sản; xử lý lâm sản, thủy sản là tài sản được xác lập quyền sở hữu toàn dân. Không chỉ tập trung vào rừng đặc dụng hay thủy sản riêng lẻ mà bao quát cả lâm sản, thủy sản khi đã trở thành tài sản toàn dân. Các phương án khác chỉ phản ánh một phần nhỏ, không đúng phạm vi điều chỉnh."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT khái niệm Sản phẩm gỗ là gì?", 
        options: [
            "Sản phẩm được làm từ tre, nứa hoặc các loại lâm sản ngoài gỗ để phục vụ đời sống hằng ngày.", 
            "SP chế biến từ gỗ được lắp ráp đầy đủ các bộ phận theo công dụng của sản phẩm, các chi tiết tháo rời của SP, khi lắp ráp có thể sử dụng được ngay theo công dụng của SP.", 
            "Mọi nguyên liệu gỗ thô khai thác trực tiếp từ rừng chưa qua chế biến.", 
            "Các sản phẩm thủ công mỹ nghệ từ đất, đá, kim loại nhưng có hình dáng giống gỗ"
        ], 
        correct: "Sản phẩm chế biến từ gỗ được lắp ráp đầy đủ các bộ phận theo công dụng của SP, các chi tiết tháo rời của SP, khi lắp ráp có thể sử dụng được ngay theo công dụng của SP.",
        explanation: "theo quy định tại khoản 5 Điều 3 Thông tư 26/2025/TT-BNNMT."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, 'cơ quan Kiểm lâm sở tại' được hiểu là gì?", 
        options: [
            "Hạt Kiểm lâm hoặc Kiểm lâm cấp tỉnh nơi không có Hạt Kiểm lâm", 
            "Chỉ Hạt Kiểm lâm huyện", 
            "Chỉ Chi cục Kiểm lâm vùng", 
            "Công an huyện"
        ], 
        correct: "Hạt Kiểm lâm hoặc Kiểm lâm cấp tỉnh nơi không có Hạt Kiểm lâm",
        explanation: "Khoản 2 Điều 3 Thông tư 26/2025/TT-BNNMT giải thích 'cơ quan Kiểm lâm sở tại' bao gồm HKL hoặc cơ quan Kiểm lâm cấp tỉnh ở nơi không có HKL. Điều này đảm bảo tính linh hoạt trong quản lý khi ở một số địa phương chưa thành lập HKL. Các phương án khác đều không chính xác vì hoặc quá hẹp (chỉ Hạt Kiểm lâm huyện) hoặc không đúng thẩm quyền (Công an)."
    },
    { 
        question: "Gỗ tròn theo Thông tư 26/2025/TT-BNNMT có đường kính đầu nhỏ tối thiểu bao nhiêu cm đối với rừng trồng?", 
        options: ["10 cm", "8 cm", "6 cm", "12 cm"], 
        correct: "6 cm",
        explanation: "điểm c khoản 1 Điều 3 Thông tư 26/2025/TT-BNNMT, gỗ tròn là Gỗ rừng trồng, rừng tràm, rừng ngập mặn có đường kính đầu nhỏ từ 06 cm trở lên và chiều dài từ 01 m trở lên."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, kiểu gỗ nào sau đây không được coi là 'gỗ tròn'?", 
        options: ["Gỗ nguyên khai cắt khúc", "Gỗ bóc vỏ", "Gỗ lóc lõi", "Gỗ xẻ thành thanh, tấm"], 
        correct: "Gỗ xẻ thành thanh, tấm",
        explanation: "Khoản 2 Thông tư 26/2025/TT-BNNMT: Gỗ tròn là gỗ nguyên khai, còn nguyên hình dạng sau khai thác chưa cắt khúc hoặc đã cắt khúc, gỗ bóc vỏ, gỗ lóc lõi nếu đáp ứng tiêu chuẩn về kích thước. Trong khi đó, gỗ đã đã bị tác động thành hình dạng thanh, tấm, hộp, tròn, khối trụ đa giác hoặc hình thù khác được coi là gỗ xẻ, gỗ đẽo."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, 'thực vật ngoài gỗ' gồm nhóm nào sau đây?", 
        options: ["Song, mây, tre, nứa, cau, dừa...; thực vật rừng thân thảo; nấm; củi, dẫn xuất, hạt, củ, quả, hoa...", "Gỗ tròn", "Gỗ xẻ", "Ngà voi"], 
        correct: "Song, mây, tre, nứa, cau, dừa, tuế, sim, mua; thực vật rừng thân thảo; nấm; củi, dẫn xuất, hạt, củ, quả, hoa, các bộ phận khác của cây gỗ",
        explanation: "Khoản 4 Điều 3 Thông tư 26/2025/TT-BNNMT quy định 'thực vật ngoài gỗ' bao gồm: các loài thuộc họ song, mây, tre, nứa, cau, dừa, tuế, sim, mua; thực vật rừng thân thảo; nấm; củi, dẫn xuất, hạt, củ, quả, hoa, các bộ phận khác của cây gỗ."
    },
    { 
        question: "Sản phẩm nào được coi là 'sản phẩm của động vật rừng'?", 
        options: ["Thanh gỗ", "Trứng, da, xương, ngà, móng...", "Cây rừng trồng", "Cá thể động vật rừng"], 
        correct: "Trứng, da, xương, ngà, móng...",
        explanation: "Khoản 3 Điều 3 Nghị định 35/2019/NĐ-CP của Chính phủ uy định xử phạt vi phạm hành chính trong lĩnh vực Lâm nghiệp giả thích từ ngữ thì Sản phẩm của động vật rừng là các loại sản phẩm có nguồn gốc từ các loại động vật đó ở dạng thô hoặc đã qua sơ chế, chế biến.."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, cơ quan nào có thẩm quyền xác nhận Bảng kê lâm sản?", 
        options: ["UBND cấp xã", "Sở Tài nguyên và Môi trường", "Cơ quan Kiểm lâm sở tại", "Công an huyện"], 
        correct: "Cơ quan Kiểm lâm sở tại",
        explanation: "khoản 5 Điều 5 Thông tư 26/2025/TT-BNNMT quy định thẩm quyền xác nhận Bảng kê lâm sản thuộc cơ quan Kiểm lâm sở tại. Điều này nhằm đảm bảo tính chuyên môn và thẩm quyền pháp lý trong quản lý, kiểm soát nguồn gốc lâm sản. UBND xã, công an hay Sở Tài nguyên Môi trường không có chức năng này."
    },
    { 
        question: "Trường hợp nào lâm sản không phải xác nhận Bảng kê lâm sản?", 
        options: ["Gỗ rừng tự nhiên", "Gỗ nguyên liệu của doanh nghiệp Nhóm I", "Động vật thuộc CITES", "Lâm sản nguy cấp, quý hiếm"], 
        correct: "Gỗ nguyên liệu của doanh nghiệp Nhóm I",
        explanation: "Theo khoản 4 Điều 5 Thông tư 26/2025/TT-BNNMT, Lâm sản không phải xác nhận Bảng kê lâm sản: gỗ nguyên liệu của doanh nghiệp Nhóm I theo quy định của Hệ thống bảo đảm gỗ hợp pháp Việt Nam; sản phẩm gỗ. Các trường hợp còn lại vẫn phải xác nhận vì tính chất nhạy cảm, quý hiếm."
    },
    { 
        question: "Thời hạn cơ quan Kiểm lâm trả kết quả xác nhận Bảng kê lâm sản sau khi nhận đủ hồ sơ hợp lệ là bao lâu?", 
        options: ["01 ngày làm việc", "02 ngày làm việc", "03 ngày", "05 ngày"], 
        correct: "02 ngày làm việc",
        explanation: "Khoản 7 Điều 5 Thông tư 26/2025/TT-BNNMT quy định rõ: trong thời hạn 02 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại phải xác nhận Bảng kê lâm sản. Đây là thời hạn tối đa, bảo đảm sự kịp thời trong lưu thông hàng hóa. Các mốc thời gian khác không đúng với quy định."
    },
   { 
        question: "Trường hợp nào phải phê duyệt phương án khai thác?", 
        options: ["Khai thác rừng phòng hộ là rừng trồng do tổ chức, cá nhân, HGĐ, cộng đồng dân cư tự đầu tư hoặc được NN hỗ trợ", "Khai thác cây trồng phân tán ngoài rừng do hộ gia đình tự trồng trên đất nông nghiệp", "Khai thác tận thu củi khô, cành gãy trong rừng sản xuất là rừng trồng sau bão", "Thực vật rừng ngoài gỗ trong rừng phòng hộ"], 
        correct: "Khai thác rừng phòng hộ là rừng trồng do tổ chức, cá nhân, HGĐ, cộng đồng dân cư tự đầu tư hoặc được NN hỗ trợ",
        explanation: "điểm c Khoản 2 Điều 6 Thông tư 26/2025/TT-BNNMT quy định khai thác rừng phòng hộ là rừng trồng do tổ chức, cá nhân, HGĐ, cộng đồng dân cư tự đầu tư hoặc được NN hỗ trợ thuộc Trường hợp phê duyệt phương án khai thác"
    },
    { 
        question: "Ai có thẩm quyền phê duyệt phương án khai thác của hộ gia đình, cá nhân, cộng đồng dân cư ?", 
        options: ["Chủ tịch UBND cấp xã", "Giám đốc Sở Nông nghiệp và Môi trường", "Thủ tướng Chính phủ", "Chi cục trưởng Chi cục Kiểm lâm"], 
        correct: "Chủ tịch UBND cấp xã",
        explanation: "Khoản 3 Điều 6 Thông tư 26/2025/TT-BNNMT quy định phương án khai thác rừng trồng sản xuất của HGĐ, cá nhân được UBND cấp xã xem xét, phê duyệt. Điều này phù hợp với thẩm quyền quản lý đất đai, rừng sản xuất đã giao cho hộ gia đình tại địa phương."
    },
 { 

        question: "Chủ lâm sản KHÔNG phải trình cơ quan có thẩm quyền phê duyệt phương án khai thác trong trường hợp khai thác nào?", 
        options: ["rừng SX là rừng trồng, cây rừng trồng trên đất ngoài quy hoạch LN, gỗ vườn nhà, cây phân tán do chủ rừng tự đầu tư", "Rừng PH là rừng trồng do chủ rừng, chủ lâm sản tự đầu tư", "Rừng SX là rừng trồng do nhà nước đại diện chủ sở hữu", "Khai thác tận dụng, tận thu gỗ loài TVR thông thường từ rừng tự nhiên"], 
        correct: "rừng SX là rừng trồng, cây rừng trồng trên đất ngoài quy hoạch LN, gỗ vườn nhà, cây phân tán do chủ rừng tự đầu tư",
        explanation: "Khoản 7 Điều 6 Thông tư 26/2025/TT-BNNMT quy định khai thác RSX là rừng trồng, cây rừng trồng trên đất ngoài quy hoạch LN, gỗ vườn nhà, cây phân tán do chủ rừng tự đầu tư, chủ rừng không phải trình phương án KT cho cơ quan có thẩm quyền."
    },
    { 
        question: "Đối với khai thác động vật rừng thông thường từ tự nhiên, cơ quan nào phê duyệt phương án?", 
        options: ["UBND cấp xã", "Cơ quan Kiểm lâm sở tại", "Sở Nông nghiệp và Môi trường", "Thủ tướng Chính phủ"], 
        correct: "Cơ quan Kiểm lâm sở tại",
        explanation: "Điều 7 Thông tư 26/2025/TT-BNNMT quy định phương án khai thác động vật rừng thông thường từ tự nhiên phải được cơ quan Kiểm lâm sở tại phê duyệt. Điều này nhằm đảm bảo kiểm soát chặt chẽ, tránh việc khai thác tràn lan gây hại đến đa dạng sinh học. UBND cấp xã hoặc Chính phủ không trực tiếp làm nhiệm vụ này."
    },
    { 
        question: "Trong thời gian bao lâu, kể từ ngày hoàn thành khai thác; chủ rừng, chủ lâm sản, chủ dự án hoặc tổ chức, cá nhân được giao khai thác gửi bản chính Bảng kê lâm sản đến cơ quan Kiểm lâm sở tại để theo dõi hoặc xác nhận Bảng kê lâm sản?", 
        options: ["05 ngày làm việc", "05 ngày", "06 ngày", "07 ngày"], 
        correct: "05 ngày làm việc",
        explanation: "Theo điểm b khoản 9 Điều 6 Thông tư 26/2025/TT-BNNMT, Sau khai thác: trong thời hạn 05 ngày làm việc kể từ ngày hoàn thành khai thác; chủ rừng, chủ lâm sản, chủ dự án hoặc tổ chức, cá nhân được giao khai thác gửi bản chính Bảng kê lâm sản đến cơ quan Kiểm lâm sở tại để theo dõi hoặc xác nhận Bảng kê lâm sản đối với trường hợp quy định tại khoản 3 Điều 5 Thông tư này."
    },
 { 
        question: "Thời hạn phê duyệt phương án khai thác động vật rừng thông thường từ tự nhiên là bao nhiêu ngày làm việc?", 
        options: ["03 ngày", "05 ngày", "06 ngày", "07 ngày"], 
        correct: "06 ngày",
        explanation: "Theo điểm c khoản 3 Điều 7 Thông tư 26/2025/TT-BNNMT, trong thời hạn 06 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại phải xem xét và phê duyệt phương án. Mốc 6 ngày đảm bảo vừa có thời gian thẩm định vừa kịp tiến độ khai thác. Các mốc 3, 5 hoặc 7 ngày không phù hợp với văn bản."
    },
    { 
        question: "Quy định về hồ sơ lâm sản có nguồn gốc khai thác trong nước trường hợp gỗ khai thác từ rừng tự nhiên cần có loại giấy tờ nào sau đây?", 
        options: ["Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm", "Hóa đơn VAT", "Giấy phép vận chuyển lâm sản", "Bản sao Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm"], 
        correct: "Bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm",
        explanation: "khoản 1 Điều 8 Thông tư 26/2025/TT-BNNMT quy định rõ hồ sơ gỗ từ rừng tự nhiên khai thác trong nước phải có bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại. Đây là bằng chứng pháp lý về nguồn gốc hợp pháp của gỗ. Các loại giấy tờ như hóa đơn VAT hay quyết định đấu giá chỉ là chứng từ thương mại, không thay thế được."
    },
    { 
        question: "Hồ sơ nhập khẩu gỗ thuộc Phụ lục CITES cần loại giấy tờ gì sau đây?", 
        options: ["Bản sao giấy phép CITES xuất khẩu hoặc tái xuất khẩu", "Bản chính hoặc bản điện tử giấy phép CITES nhập khẩu", "Biên bản kiểm lâm", "Bảng kê lâm sản theo Thông tư 26/2025/TT-BNNMT"], 
        correct: "Cả A và C",
        explanation: "Theo Điều 7 Nghị định số 102/2020/NĐ-CP Khi làm thủ tục hải quan đối với lô hàng gỗ nhập khẩu chủ gỗ thuộc Phụ lục CITES phải xuất trình Bản sao giấy phép CITES xuất khẩu hoặc tái xuất khẩu do Cơ quan CITES nước xuất khẩu hoặc nước tái xuất khẩu cấp; Bản chính hoặc bản điện tử giấy phép CITES nhập khẩu do Cơ quan CITES Việt Nam cấp;."
    },
    { 
        question: "Hồ sơ lâm sản sau xử lý tịch thu gồm những giấy tờ nào?", 
        options: ["QĐ phê duyệt phương án xử lý tài sản được xác lập quyền sở hữu toàn dân", "Hợp đồng mua bán lâm sản giữa tổ chức, cá nhân với cơ quan kiểm lâm.", "Giấy phép khai thác gỗ do UBND cấp xã cấp", "Bảng kê lâm sản chưa được cơ quan có thẩm quyền xác nhận"], 
        correct: "QĐ phê duyệt phương án xử lý TS được xác lập quyền sở hữu toàn dân",
        explanation: "Điều 10 Thông tư 26/2025/TT-BNNMT Hồ sơ lâm sản có nguồn gốc sau xử lý tịch thu gồm Phương án, Quyết định phê duyệt phương án xử lý tài sản được xác lập quyền sở hữu toàn dân và BKLS do cơ quan được giao xử lý tài sản lập."
    },
    { 
        question: "Hồ sơ lâm sản Gỗ loài thông thường khai thác từ rừng tự nhiên khi mua bán, chuyển giao quyền sở hữu, vận chuyển trong nước cần giấy tờ gì sau đây?", 
        options: ["Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại", "Giấy chứng nhận quyền sử dụng đất nơi có rừng tự nhiên", "Phiếu thu ngân sách", "Biên bản họp thôn"], 
        correct: "Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại",
        explanation: "khoản 1 Điều 11 Thông tư 26/2025/TT-BNNMT quy định Hồ sơ lâm sản Gỗ loài thông thường khai thác từ rừng tự nhiên khi mua bán, chuyển giao quyền sở hữu, vận chuyển trong nước cần BKLS có xác nhận của cơ quan Kiểm lâm sở tại."
    },
    { 
        question: "Đối với hồ sơ xuất khẩu gỗ nguyên liệu, sản phẩm gỗ thuộc Phụ lục CITES, cần giấy phép gì?", 
        options: ["bản sao hoặc bản điện tử Giấy phép CITES xuất khẩu", "Giấy phép xuất khẩu hàng hóa thông thường của Bộ Công Thương", "Giấy phép khai thác gỗ do cơ quan có thẩm quyền cấp", "Giấy chứng nhận kiểm dịch thực vật đối với gỗ"], 
        correct: "bản sao hoặc bản điện tử Giấy phép CITES xuất khẩu",
        explanation: "điểm b khoản 1 Điều 12 Thông tư 26/2025/TT-BNNMT quy định Hồ sơ lâm sản xuất khẩu phải có bản sao hoặc bản điện tử Giấy phép CITES xuất khẩu, tái xuất khẩu do Cơ quan quản lý CITES Việt Nam cấp;."
    },
    { 
        question: "Cơ sở chế biến, kinh doanh, cất giữ gỗ thực vật rừng, động vật rừng thông thường, động vật, thực vật thuộc Danh mục loài nguy cấp, quý, hiếm; động vật, thực vật hoang dã nguy cấp thuộc Phụ lục CITES cần lưu giữ loại hồ sơ về lâm sản nào?", 
        options: ["Hồ sơ nguồn gốc lâm sản, bảng kê lâm sản, sổ theo dõi nhập xuất lâm sản", "Giấy chứng nhận quyền sử dụng đất, hợp đồng vay vốn ngân hàng, báo cáo tài chính năm", "Hồ sơ thiết kế xưởng chế biến, hợp đồng thuê lao động, biên bản kiểm tra an toàn cháy nổ", "Hồ sơ đăng ký kinh doanh, giấy chứng nhận vệ sinh an toàn thực phẩm"], 
        correct: "Hồ sơ nguồn gốc lâm sản, bảng kê lâm sản, sổ theo dõi nhập xuất lâm sản",
        explanation: "khoản 1 Điều 13 Thông tư 26/2025/TT-BNNMT yêu cầu cơ sở chế biến gỗ phải lưu giữ hồ sơ về nguồn gốc lâm sản, Bảng kê và sổ theo dõi nhập xuất. Điều này giúp cơ quan quản lý dễ dàng kiểm tra, đối chiếu nguồn gốc nguyên liệu. Các đáp án còn lại khác thuộc lĩnh vực quản lý nhà nước khác."
    },
    { 
        question: "Bản chính hồ sơ nguồn gốc động vật được khai thác trong nước, nhập khẩu đối với chủ cơ sở đồng thời là tổ chức, cá nhân trực tiếp khai thác, nhập khẩu hoặc bản chính hồ sơ lâm sản khi nhận chuyển giao quyền sở hữu từ tổ chức, cá nhân liền kề trước đó là hồ sơ lâm sản do cơ sở nào lưu giữ?", 
        options: ["Cơ sở nuôi động vật rừng", "Cơ sở chế biến gỗ và lâm sản", "Cơ sở kinh doanh, buôn bán động vật cảnh", "Cơ sở nghiên cứu khoa học về động vật rừng"], 
        correct: "Cơ sở nuôi động vật rừng",
        explanation: "Khoản 2 Điều 13 Thông tư 26/2025/TT-BNNMT quy định các cơ sở nuôi động vật rừng phải lưu giữ Bản chính hồ sơ nguồn gốc động vật được khai thác trong nước, nhập khẩu đối với chủ cơ sở đồng thời là tổ chức, cá nhân trực tiếp khai thác, nhập khẩu hoặc bản chính hồ sơ lâm sản khi nhận chuyển giao quyền sở hữu từ tổ chức, cá nhân liền kề trước đó"
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, mẫu vật nào bắt buộc phải đánh dấu?", 
        options: ["Động vật rừng lớp thú thuộc Phụ lục I CITES", "Động vật thuộc Phụ lục II CITES", "Thực vật thuộc Phụ lục I CITES", "Động vật rừng thông thường được gây nuôi hợp pháp"], 
        correct: "Động vật rừng lớp thú thuộc Phụ lục I CITES",
        explanation: "Điều 14 Thông tư 26/2025/TT-BNNMT quy định đối tượng đánh dấu: Cá thể động vật rừng còn sống thuộc lớp thú, bao gồm: các loài nguy cấp, quý, hiếm thuộc Nhóm IB theo quy định của pháp luật Việt Nam; các loài thuộc Phụ lục I CITES."
    },
    { 
        question: "Việc đánh dấu mẫu vật có thể thực hiện bằng hình thức nào?", 
        options: ["Chip, vòng, thẻ, mã QR...", "Dấu vân tay", "Chữ ký điện tử", "Ảnh chụp"], 
        correct: "Chip, vòng, thẻ, mã QR...",
        explanation: "Theo khoản 2 Điều 14 Thông tư 26/2025/TT-BNNMT, việc đánh dấu mẫu vật có thể thực hiện bằng gắn chip, vòng, thẻ, tem, mã vạch, mã QR hoặc các hình thức điện tử khác. Mục đích là quản lý bằng phương tiện hiện đại, dễ truy xuất. Các phương án như dấu vân tay, chữ ký điện tử hay ảnh chụp không phải là biện pháp đánh dấu hợp pháp cho mẫu vật"
    },
    { 
        question: "Sau khi đánh dấu mẫu vật, chủ mẫu vật phải làm gì trong 01 ngày làm việc?", 
        options: ["Ghi thông tin vào sổ theo dõi đánh dấu mẫu vật", "Bán ra thị trường", "Xin cấp giấy chứng tử", "Không phải làm gì"], 
        correct: "Ghi thông tin vào sổ theo dõi đánh dấu mẫu vật",
        explanation: "điểm d khoản 2 Điều 14 Thông tư 26/2025/TT-BNNMT yêu cầu chủ mẫu vật trong vòng 01 ngày làm việc kể từ khi đánh dấu phải ghi thông tin vào sổ theo dõi đánh dấu mẫu vật. gửi Thông báo đánh dấu mẫu vật đến cơ quan Kiểm lâm sở tại để phục vụ theo dõi, quản lý"
    },
    { 
        question: "Đối tượng nào phải chấp hành sự kiểm tra truy xuất nguồn gốc lâm sản theo Thông tư 26/2025/TT-BNNMT?", 
        options: ["Cơ quan quản lý nhà nước về lâm nghiệp các cấp", "Tổ chức, cá nhân có hoạt động khai thác, vận chuyển, chế biến, mua bán lâm sản", "Tổ chức, cá nhân trồng rừng sản xuất bằng vốn tự có nhưng không khai thác, mua bán.", "Người dân địa phương sống gần rừng nhưng không tham gia hoạt động liên quan đến lâm sản"], 
        correct: "Tổ chức, cá nhân có hoạt động khai thác, vận chuyển, chế biến, mua bán lâm sản",
        explanation: "Điều 15 Thông tư 26/2025/TT-BNNMT: đối tượng phải chấp hành kiểm tra tổ chức, cá nhân, hộ kinh doanh, hộ gia đình, cộng đồng dân cư có hoạt động khai thác, vận chuyển, chế biến, sản xuất, mua bán, chuyển quyền sở hữu lâm sản, xuất khẩu, nhập khẩu, cất giữ lâm sản, nuôi động vật rừng, trồng thực vật rừng"
    },
    { 
        question: "Có bao nhiêu hình thức kiểm tra lâm sản theo Thông tư 26/2025/TT-BNNMT?", 
        options: ["2 hình thức", "3 hình thức", "4 hình thức", "5 hình thức"], 
        correct: "3 hình thức",
        explanation: "khoản 2 Điều 15 Thông tư 26/2025/TT-BNNMT quy định có 3 hình thức kiểm tra lâm sản: Kiểm tra theo kế hoạch; Kiểm tra theo chuyên đề và Kiểm tra đột xuất."
    },
    { 
        question: "Thẩm quyền ban hành quyết định kiểm tra truy xuất nguồn gốc lâm sản của Kiểm lâm thuộc về ai?", 
        options: ["Cục trưởng Cục Lâm nghiệp và Kiểm lâm, Chi cục trưởng Chi cục Kiểm lâm, Hạt trưởng Hạt Kiểm lâm...", "Trạm trưởng trạm Kiểm lâm", "Kiểm lâm viên", "Trưởng Công an xã"], 
        correct: "Cục trưởng Cục Lâm nghiệp và Kiểm lâm, Chi cục trưởng Chi cục Kiểm lâm, Hạt trưởng Hạt Kiểm lâm...",
        explanation: "khoản 7 Điều 16 Thông tư 26/2025/TT-BNNMT quy định: Cục trưởng Cục Lâm nghiệp và Kiểm lâm, Chi cục trưởng Chi cục Kiểm lâm vùng, Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh, Đội trưởng Đội Kiểm lâm cơ động và phòng cháy chữa cháy rừng, Hạt trưởng Hạt Kiểm lâm."
    },
    { 
        question: "Đối tượng được kiểm tra phải làm gì khi được kiểm tra lâm sản?", 
        options: ["Chấp hành các yêu cầu kiểm tra của Tổ kiểm tra; xuất trình ngay hồ sơ lâm sản theo quy định và các tài liệu liên quan khác", "Chỉ chấp hành yêu cầu kiểm tra nếu có mặt chính quyền địa phương chứng kiến", "Nộp lại toàn bộ lâm sản đang quản lý cho cơ quan kiểm tra để xử lý", "Chỉ cần xuất trình giấy chứng minh nhân dân hoặc căn cước khi được yêu cầu"], 
        correct: "Chấp hành các yêu cầu kiểm tra của Tổ kiểm tra; xuất trình ngay hồ sơ lâm sản theo quy định và các tài liệu liên quan khác",
        explanation: "điểm e khoản 8 Điều 16 Thông tư 26/2025/TT-BNNMT quy định trách nhiệm của đối tượng được kiểm tra truy xuất nguồn gốc lâm sản."
    },
    { 
        question: "Doanh nghiệp nào thuộc diện đăng ký phân loại theo Thông tư 26/2025/TT-BNNMT?", 
        options: ["Doanh nghiệp có hoạt động trồng, khai thác, chế biến, nhập khẩu, xuất khẩu gỗ", "Doanh nghiệp thủy sản", "Doanh nghiệp chỉ hoạt động dịch vụ vận tải hàng hóa nông lâm sản", "Doanh nghiệp chỉ cung cấp giống cây lâm nghiệp, phân bón, vật tư trồng rừng"], 
        correct: "Doanh nghiệp có hoạt động trồng, khai thác, chế biến, nhập khẩu, xuất khẩu gỗ",
        explanation: "khoản 1 Điều 17 Thông tư 26/2025/TT-BNNMT quy định các doanh nghiệp có hoạt động liên quan trực tiếp đến lâm sản như trồng, khai thác, chế biến, nhập khẩu, xuất khẩu gỗ thuộc diện đăng ký phân loại doanh nghiệp"
    },
    { 
        question: "Trong bao lâu kể từ ngày nhận hồ sơ hợp lệ, cơ quan có thẩm quyền phải ban hành Quyết định phê duyệt phương án khai thác?", 
        options: ["05 ngày làm việc", "07 ngày làm việc", "10 ngày", "15 ngày"], 
        correct: "07 ngày làm việc",
        explanation: "khoản 6 Điều 6 Thông tư 26/2025/TT-BNNMT nêu thời hạn giải quyết hồ sơ phương án khai thác là 07 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ.Trường hợp cần xác minh minh tính chính xác của hồ sơ	, trong thời hạn 03 ngày làm việc kể từ ngày nhận hồ sơ, cơ quan có thẩm quyền thông báo cho tổ chức, cá nhân nộp hồ sơ về việc xác minh"
    },
    { 
        question: "Những thông tin nào được sử dụng để xác minh tính trung thực trong phân loại doanh nghiệp?", 
        options: ["Cổng thông tin đăng ký doanh nghiệp, cơ quan thuế, Kiểm lâm, cơ quan môi trường...", "Trang mạng xã hội của doanh nghiệp (Facebook, Zalo…)", "Ý kiến đánh giá của khách hàng mua bán lâm sản trên các sàn thương mại điện tử", "Thông tin quảng cáo của doanh nghiệp đăng trên báo chí, truyền hình"], 
        correct: "Cổng thông tin đăng ký doanh nghiệp, cơ quan thuế, Kiểm lâm, cơ quan môi trường...",
        explanation: "khoản 2 Điều 18 Thông tư 26/2025/TT-BNNMT quy định việc xác minh thông tin phân loại doanh nghiệp phải căn cứ vào nguồn chính thống như Cổng thông tin đăng ký doanh nghiệp quốc gia, dữ liệu cơ quan thuế, cơ quan môi trường và các cơ quan quản lý nhà nước khác. Các nguồn như Facebook, quảng cáo hay ý kiến cộng đồng không phải căn cứ pháp lý."
    },
    { 
        question: "Hình thức nào sau đây là hình thức công bố kết quả, chuyển loại, phân loại lại doanh nghiệp?", 
        options: ["Thông báo kết quả phân loại doanh nghiệp trên Hệ thống thông tin phân loại doanh nghiệp.", "Đăng tải kết quả phân loại doanh nghiệp trên trang web riêng của từng doanh nghiệp", "Công bố kết quả phân loại qua bản tin thời sự của Đài Truyền hình Việt Nam", "Niêm yết công khai kết quả phân loại tại trụ sở UBND cấp xã nơi doanh nghiệp hoạt động"], 
        correct: "Thông báo kết quả phân loại doanh nghiệp trên Hệ thống thông tin phân loại doanh nghiệp.",
        explanation: "Ngoài ra Điều 19 Thông tư 26/2025/TT-BNNMT quy định Trường hợp không áp dụng được Hệ thống thông tin phân loại doanh nghiệp thì Cơ quan tiếp nhận xếp loại gửi Thông báo kết quả phân loại cho Cục Lâm nghiệp và Kiểm lâm để công bố kết quả trên trang thông tin điện tử"
    },
    { 
        question: "Hồ sơ nhập khẩu gỗ từ quốc gia có hiệp định VPA/FLEGT với Việt Nam cần kèm theo loại giấy phép nào?", 
        options: ["Giấy phép CITES", "Giấy phép FLEGT", "Giấy phép khai thác", "Giấy phép vận tải"], 
        correct: "Giấy phép FLEGT",
        explanation: "Điều 7 Nghị định số 102/2020/NĐ-CP: Trường hợp gỗ nhập khẩu từ quốc gia, vùng lãnh thổ đã ký kết Hiệp định gỗ hợp pháp với EU và đang vận hành hệ thống cấp phép FLEGT: cần Bản sao giấy phép FLEGT xuất khẩu do cơ quan có thẩm quyền nước xuất khẩu cấp"
    },
    { 
        question: "Gỗ hợp pháp theo quy định tại Nghị định số 102/2020/NĐ-CP ngày 01/9/2020 sửa đổi, bổ sung năm 2024 được hiểu là gì?", 
        options: ["Gỗ được khai thác, nhập khẩu, vận chuyển, mua bán, xuất khẩu phù hợp QĐ của PL Việt Nam", "Gỗ chỉ cần có nguồn gốc từ rừng trồng trong nước và có hóa đơn mua bán hợp lệ", "Gỗ được khai thác, mua bán hợp pháp trong lãnh thổ Việt Nam, không phụ thuộc điều ước quốc tế mà Việt Nam là thành viên", "Gỗ nhập khẩu từ bất kỳ quốc gia nào miễn có hợp đồng thương mại và chứng từ vận chuyển"], 
        correct: "Gỗ được khai thác, nhập khẩu, vận chuyển, mua bán, xuất khẩu phù hợp QĐ của PL Việt Nam",
        explanation: "khoản 1 Điều 3 Nghị định số 102/2020/NĐ-CP: Gỗ hợp pháp là gỗ được khai thác, nhập khẩu, vận chuyển, mua bán, chế biến, xuất khẩu phù hợp với quy định của pháp luật Việt Nam; Điều ước quốc tế mà Việt Nam là thành viên và pháp luật có liên quan của quốc gia nơi khai thác gỗ, trung chuyển và xuất khẩu gỗ vào Việt Nam."
    },
    { 
        question: "Gỗ thuộc Danh mục loài rủi ro nếu thuộc tiêu chí nào?", 
        options: ["Gỗ thuộc Phụ lục CITES, Danh mục loài nguy cấp, quý, hiếm; loài lần đầu nhập khẩu; hoặc gỗ có nguy cơ tuyệt chủng", "Gỗ nhập khẩu có chứng từ hợp lệ nhưng không nằm trong bất kỳ Danh mục hạn chế nào của Việt Nam", "Gỗ khai thác trong nước đã được UBND cấp tỉnh phê duyệt phương án khai thác", "Gỗ thuộc nhóm thông thường, có nguồn gốc rõ ràng"], 
        correct: "Gỗ thuộc Phụ lục CITES, Danh mục loài nguy cấp, quý, hiếm; loài lần đầu nhập khẩu; hoặc gỗ có nguy cơ tuyệt chủng",
        explanation: "Quy định tại Điều 6 Nghị định số 102/2020/NĐ-CP"
    },
    { 
        question: "Sau khi thực hiện xong thủ tục hải quan đối với lô hàng gỗ nhập khẩu, nếu chủ gỗ xuất trình hồ sơ bằng bản giấy cho cơ quan Hải quan nơi đăng ký tờ khai thì?", 
        options: ["Cơ quan Hải quan trả lại hồ sơ gỗ nhập khẩu cho chủ gỗ để lưu giữ theo quy định", "Cơ quan Hải quan giữ lại toàn bộ hồ sơ gỗ nhập khẩu để lưu trữ vĩnh viễn", "Cơ quan Hải quan chuyển hồ sơ gỗ nhập khẩu sang cơ quan Kiểm lâm để quản lý", "Cơ quan Hải quan yêu cầu chủ gỗ nộp thêm bản điện tử dù đã nộp bản giấy"], 
        correct: "Cơ quan Hải quan trả lại hồ sơ gỗ nhập khẩu cho chủ gỗ để lưu giữ theo quy định",
        explanation: "quy định tại khoản 3 Điều 7 Nghị định số 102/2020/NĐ-CP về Hệ thống bảo đảm gỗ hợp pháp Việt Nam."
    },
    { 
        question: "Trường hợp nào Lô hàng gỗ có nguồn gốc từ gỗ rừng trồng trong nước không phải Xác nhận nguồn gốc gỗ trước khi xuất khẩu?", 
        options: ["Lô hàng của Doanh nghiệp nhóm I xuất khẩu sang thị trường ngoài EU", "Xuất khẩu sang thị trường EU nhưng chỉ với số lượng nhỏ", "Lô hàng gỗ xuất khẩu của chủ gỗ không phải là doanh nghiệp Nhóm I", "Xuất khẩu sang các nước có ký hiệp định thương mại song phương với Việt Nam"], 
        correct: "Lô hàng của Doanh nghiệp nhóm I xuất khẩu sang thị trường ngoài EU",
        explanation: "Điều 9 Nghị định số 102/2020/NĐ-CP quy định Đối tượng xác nhận: Lô hàng gỗ xuất khẩu của chủ gỗ không phải là doanh nghiệp Nhóm I. Lô hàng gỗ có nguồn gốc từ gỗ rừng trồng trong nước xuất khẩu sang thị trường ngoài EU thì không cần xác nhận"
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, ai chịu trách nhiệm lập và lưu giữ sổ theo dõi nhập xuất lâm sản?", 
        options: ["Uỷ ban nhân dân cấp xã", "Doanh nghiệp, cơ sở chế biến lâm sản", "Cơ quan Kiểm lâm", "Chi cục Thuế"], 
        correct: "Doanh nghiệp, cơ sở chế biến lâm sản",
        explanation: "Điều 19 Thông tư 26/2025/TT-BNNMT quy định Hồ sơ lâm sản tại cơ sở chế biến, kinh doanh, cất giữ gỗ gồm Sổ theo dõi nhập, xuất lâm sản. Chủ lâm sản có trách nhiệm cập nhật đầy đủ, kịp thời các thông tin vào Sổ theo dõi nhập, xuất lâm sản khi nhập, xuất lâm sản"
    },
    { 
        question: "Tổ chức, hộ kinh doanh phải báo cáo tình hình nhập, xuất lâm sản cho cơ quan Kiểm lâm sở tại định kỳ như thế nào?", 
        options: ["Trước ngày 15 tháng 01 hằng năm", "Trước ngày 31 tháng 12 hằng năm", "Trước ngày 15 tháng 7 và 15 tháng 01 hằng năm", "Trước ngày 30 tháng 6 hằng năm"], 
        correct: "Trước ngày 15 tháng 01 hằng năm",
        explanation: "điểm c khoản 7 Điều 32 Thông tư 26/2025/TT-BNNMT quy định phải báo cáo tình hình nhập, xuất lâm sản theo định kỳ hằng năm trước ngày 15 tháng 01. Thời gian chốt số liệu báo cáo từ ngày 15 tháng 12 năm trước kỳ báo cáo đến ngày 14 tháng 12 của kỳ báo cáo. Trừ trường hợp cập nhật tình hình nhập, xuất lâm sản trên hệ thống quản lý, truy xuất nguồn gốc lâm sản"
    },
    { 
        question: "Nếu động vật rừng thuộc Phụ lục CITES được nuôi sinh sản hợp pháp, hồ sơ vận chuyển cần gì?", 
        options: ["Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại", "Hợp đồng mua bán động vật rừng giữa các hộ nuôi sinh sản", "Giấy chứng nhận kiểm dịch động vật thông thường do cơ quan thú y cấp", "Giấy cấp mã số cơ sở nuôi do cơ quan có thẩm quyền cấp"], 
        correct: "Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại",
        explanation: "Điều 11 Thông tư 26/2025/TT-BNNMT quy định Đối với lâm sản thuộc đối tượng phải xác nhận Bảng kê lâm sản khi vận chuyển phải có bản chính Bảng kê lâm sản có xác nhận của cơ quan Kiểm lâm sở tại"
    },
    { 
        question: "Khi làm thủ tục hải quan đối với lô hàng gỗ xuất khẩu, ngoài bộ hồ sơ hải quan theo quy định của pháp luật về Hải quan, không phải là doanh nghiệp Nhóm I phải xuất trình cho cơ quan Hải quan nơi đăng ký tờ khai một trong các chứng từ gì sau đây?", 
        options: ["Bảng kê gỗ xuất khẩu do chủ gỗ lập có xác nhận của cơ quan Kiểm lâm sở tại", "Giấy chứng nhận đăng ký kinh doanh có ngành nghề xuất khẩu gỗ", "Hợp đồng mua bán gỗ đã được công chứng tại phòng công chứng", "Giấy chứng nhận quyền sử dụng đất nơi trồng rừng cung cấp gỗ"], 
        correct: "Bảng kê gỗ xuất khẩu do chủ gỗ lập có xác nhận của cơ quan Kiểm lâm sở tại",
        explanation: "quy định tại Điều 10 Nghị định số 102/2020/NĐ-CP. Trường hợp gỗ thuộc Phụ lục CITES còn phải bổ sung Giấy phép CITES xuất khẩu do Cơ quan thẩm quyền quản lý CITES Việt Nam cấp."
    },
    { 
        question: "Theo trình tự phân loại doanh nghiệp, trường hợp có nghi ngờ những thông tin do doanh nghiệp tự kê khai hoặc nghi ngờ doanh nghiệp sử dụng tài liệu giả mạo cần xác minh làm rõ thì trong thời hạn bao lâu, cơ quan tiếp nhận tổ chức xác minh?", 
        options: ["08 ngày làm việc", "10 ngày làm việc", "05 ngày làm việc", "03 ngày làm việc"], 
        correct: "08 ngày làm việc",
        explanation: "trong 03 ngày làm việc kể từ ngày Hệ thống thông tin phân loại doanh nghiệp tự động phân loại doanh nghiệp Nhóm I, cơ quan tiếp nhận thông báo cho doanh nghiệp đăng ký, trong đó nêu rõ thời gian, nội dung cần xác minh. Trong 05 ngày làm việc kể từ ngày thông báo, cơ quan tiếp nhận tổ chức làm rõ tính chính xác của thông tin tự kê khai của doanh nghiệp và thông báo kết quả xác minh cho doanh nghiệp biết"
    },
    { 
        question: "Khi doanh nghiệp được phân loại vào Nhóm II, điều này có ý nghĩa gì?", 
        options: ["Được miễn xác nhận bảng kê", "Không được miễn xác nhận bảng kê", "Không phải kê khai hồ sơ", "Không phải chịu kiểm tra"], 
        correct: "Không được miễn xác nhận bảng kê",
        explanation: "Điều 42 Thông tư 26/2025/TT-BNNMT phân loại doanh nghiệp thành Nhóm I và Nhóm II. Nhóm I có độ tin cậy cao được miễn xác nhận bảng kê trong một số trường hợp, còn Nhóm II thì không được miễn. Do đó, doanh nghiệp Nhóm II vẫn phải thực hiện đầy đủ thủ tục về bảng kê lâm sản."
    },
    { 
        question: "Cơ quan nào có quyền tạm đình chỉ hoạt động chế biến gỗ khi phát hiện vi phạm nghiêm trọng?", 
        options: ["UBND xã", "Cơ quan Kiểm lâm có thẩm quyền", "Công an huyện", "Phòng Kinh tế"], 
        correct: "Cơ quan Kiểm lâm có thẩm quyền",
        explanation: "Điều 43 Thông tư 26/2025/TT-BNNMT quy định cơ quan Kiểm lâm có thẩm quyền được quyền tạm đình chỉ hoạt động chế biến gỗ khi phát hiện vi phạm nghiêm trọng. Đây là biện pháp quản lý mạnh nhằm ngăn chặn hậu quả phát sinh. UBND xã hay Công an huyện không có thẩm quyền này."
    },
    { 
        question: "Nếu phát hiện mẫu vật động vật thuộc Phụ lục I CITES không có đánh dấu, biện pháp nào phải thực hiện?", 
        options: ["Cho phép lưu thông", "Tịch thu, xử lý theo pháp luật", "Bổ sung đánh dấu sau", "Cảnh báo bằng văn bản"], 
        correct: "Tịch thu, xử lý theo pháp luật",
        explanation: "Điều 44 Thông tư 26/2025/TT-BNNMT quy định các mẫu vật thuộc Phụ lục I CITES mà không có đánh dấu sẽ bị coi là không hợp pháp và phải bị tịch thu, xử lý theo pháp luật. Việc cho phép bổ sung đánh dấu sau hay chỉ cảnh báo không được chấp nhận để tránh gian lận trong quản lý."
    },
    { 
        question: "Trường hợp doanh nghiệp không cung cấp đầy đủ hồ sơ phân loại theo yêu cầu, cơ quan quản lý xử lý thế nào?", 
        options: ["Gia hạn vô thời hạn", "Không xem xét phân loại", "Vẫn phân loại Nhóm I", "Chỉ cảnh báo"], 
        correct: "Không xem xét phân loại",
        explanation: "Điều 45 Thông tư 26/2025/TT-BNNMT nêu rõ nếu doanh nghiệp không nộp đủ hồ sơ theo quy định thì cơ quan quản lý sẽ không xem xét phân loại. Điều này nhằm bảo đảm tính nghiêm túc và minh bạch trong thủ tục. Không có trường hợp gia hạn vô thời hạn hay phân loại mặc định."
    },
    { 
        question: "Khi doanh nghiệp thay đổi thông tin liên quan đến phân loại, trách nhiệm của doanh nghiệp là gì?", 
        options: ["Không cần báo cáo", "Báo cáo cơ quan có thẩm quyền trong thời hạn quy định", "Tự chỉnh sửa hồ sơ lưu nội bộ", "Chờ đến kỳ phân loại sau"], 
        correct: "Báo cáo cơ quan có thẩm quyền trong thời hạn quy định",
        explanation: "Điều 46 Thông tư 26/2025/TT-BNNMT yêu cầu doanh nghiệp phải báo cáo cơ quan có thẩm quyền khi có thay đổi thông tin ảnh hưởng đến phân loại. Đây là trách nhiệm bắt buộc để cơ quan quản lý kịp thời điều chỉnh quyết định phân loại. Không được phép tự ý điều chỉnh hay trì hoãn báo cáo."
    },
    { 
        question: "Nếu doanh nghiệp bị phát hiện gian lận trong hồ sơ phân loại thì hậu quả pháp lý là gì?", 
        options: ["Chỉ cảnh cáo", "Bị đưa vào Nhóm II hoặc hủy kết quả phân loại", "Không ảnh hưởng", "Chỉ bị phạt hành chính nhẹ"], 
        correct: "Bị đưa vào Nhóm II hoặc hủy kết quả phân loại",
        explanation: "Điều 47 Thông tư 26/2025/TT-BNNMT quy định nếu doanh nghiệp gian lận trong hồ sơ phân loại, cơ quan quản lý có quyền đưa vào Nhóm II hoặc hủy bỏ kết quả phân loại đã công nhận. Đây là biện pháp răn đe nghiêm khắc để ngăn chặn gian lận. Không chỉ dừng ở cảnh cáo hay phạt nhẹ."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, kết quả phân loại doanh nghiệp có hiệu lực trong bao lâu?", 
        options: ["12 tháng", "24 tháng", "36 tháng", "48 tháng"], 
        correct: "36 tháng",
        explanation: "Điều 48 Thông tư 26/2025/TT-BNNMT quy định kết quả phân loại doanh nghiệp có giá trị trong 36 tháng kể từ ngày ban hành quyết định. Sau thời gian này, doanh nghiệp phải đăng ký phân loại lại. Các mốc 12, 24 hoặc 48 tháng không đúng với quy định."
    },
    { 
        question: "Trường hợp lâm sản bị tịch thu mà không thể bán đấu giá thì xử lý thế nào?", 
        options: ["Chỉ lưu kho vô thời hạn", "Chuyển giao cho đơn vị sự nghiệp quản lý, sử dụng", "Tiêu hủy ngay", "Phát miễn phí cho cộng đồng"], 
        correct: "Chuyển giao cho đơn vị sự nghiệp quản lý, sử dụng",
        explanation: "Điều 49 Thông tư 26/2025/TT-BNNMT quy định lâm sản bị tịch thu mà không thể bán đấu giá sẽ được chuyển giao cho đơn vị sự nghiệp công lập quản lý, sử dụng. Đây là giải pháp hợp lý, tránh lãng phí. Việc tiêu hủy chỉ áp dụng khi không còn giá trị sử dụng."
    },
    { 
        question: "Thông tư 26/2025/TT-BNNMT có hiệu lực thi hành từ ngày nào?", 
        options: ["01/01/2025", "15/3/2025", "01/4/2025", "01/7/2025"], 
        correct: "01/4/2025",
        explanation: "Điều 50 Thông tư 26/2025/TT-BNNMT quy định văn bản này có hiệu lực từ ngày 01 tháng 4 năm 2025. Đây là thời điểm chính thức áp dụng các quy định mới về quản lý và xử lý lâm sản, thủy sản xác lập quyền sở hữu toàn dân."
    },
  {
    question: "Trong Nghị định 156/2018/NĐ-CP sửa đổi bổ sung, 'diện tích liền vùng' được hiểu như thế nào?",
    options: [
      "Diện tích liền vùng có khoảng cách giữa dải rừng không quá 30 m và tổng khoảng trống không quá 30%",
      "Diện tích liền vùng chỉ cần vượt 1 ha",
      "Diện tích liền vùng là bất kỳ vùng rừng liên tục nào",
      "Không có quy định về diện tích liền vùng"
    ],
    correct: "Diện tích liền vùng có khoảng cách giữa dải rừng không quá 30 m và tổng khoảng trống không quá 30%",
    explanation: "Nghị định định nghĩa 'diện tích liền vùng' là vùng đất có rừng tự nhiên hoặc rừng trồng tập trung, liên tục; khoảng cách giữa các dải rừng không vượt quá 30 m và tổng diện tích các khoảng trống không vượt quá 30% diện tích. Đây là tiêu chí kỹ thuật để xác định một mảng rừng là 'liền vùng'."
  },
  {
    question: "Tiêu chí tối thiểu về độ tàn che và diện tích để một mảng cây được coi là rừng tự nhiên là gì?",
    options: [
      "Độ tàn che ≥ 0,1 và diện tích liền vùng ≥ 0,3 ha",
      "Độ tàn che ≥ 0,5 và diện tích ≥ 1 ha",
      "Độ tàn che ≥ 0,2 và diện tích ≥ 0,1 ha",
      "Không có tiêu chí về độ tàn che"
    ],
    correct: "Độ tàn che ≥ 0,1 và diện tích liền vùng ≥ 0,3 ha",
    explanation: "Điều 4 quy định rừng tự nhiên gồm rừng nguyên sinh và rừng thứ sinh khi đáp ứng: độ tàn che của cây rừng là thành phần chính từ 0,1 trở lên và diện tích liền vùng từ 0,3 ha trở lên. Đây là hai chỉ tiêu cơ bản dùng để phân biệt rừng với các dạng cây ngoài rừng. "
  },
  {
    question: "Tiêu chí chiều cao trung bình cây rừng tự nhiên trên đồi, núi đất và đồng bằng là bao nhiêu?",
    options: ["≥ 1,0 m", "≥ 2,0 m", "≥ 3,0 m", "≥ 5,0 m"],
    correct: "≥ 5,0 m",
    explanation: "Theo Điều 4, đối với rừng tự nhiên trên đồi, núi đất và đồng bằng, chiều cao trung bình của cây rừng (thành phần chính) phải từ 5,0 m trở lên để đủ tiêu chí rừng tự nhiên. Các mức thấp hơn áp dụng cho các kiểu địa hình khác (ví dụ rừng khộp, rừng ngập nước). "
  },
  {
    question: "Tiêu chí cơ bản để xác định rừng trồng gồm những yếu tố nào sau đây?",
    options: [
      "Độ tàn che ≥ 0,1; diện tích liền vùng ≥ 0,3 ha; chiều cao trung bình theo điều kiện lập địa",
      "Chỉ cần diện tích > 1 ha",
      "Chỉ cần là cây trồng đều hàng",
      "Không có tiêu chí riêng"
    ],
    correct: "Độ tàn che ≥ 0,1; diện tích liền vùng ≥ 0,3 ha; chiều cao trung bình theo điều kiện lập địa",
    explanation: "Điều 5 quy định rừng trồng đạt tiêu chí: độ tàn che từ 0,1 trở lên, diện tích liền vùng từ 0,3 ha trở lên và chiều cao trung bình tùy theo điều kiện lập địa (ví dụ 5,0 m trên đồi/núi đất và đồng bằng). Các tiêu chí tương tự rừng tự nhiên nhưng áp dụng cho rừng do con người trồng hoặc phục hồi. "
  },
  {
    question: "Vườn quốc gia phải có diện tích liền vùng tối thiểu là bao nhiêu ha?",
    options: ["1.000 ha", "3.000 ha", "5.000 ha", "7.000 ha"],
    correct: "7.000 ha",
    explanation: "Khoản 1 Điều 6 nêu vườn quốc gia phải có diện tích liền vùng tối thiểu 7.000 ha và trong đó ít nhất 70% diện tích là các hệ sinh thái rừng. Đây là tiêu chuẩn cao để đảm bảo giá trị bảo tồn quốc gia và quốc tế. "
  },
  {
    question: "Khu dự trữ thiên nhiên có diện tích liền vùng tối thiểu là bao nhiêu ha?",
    options: ["1.000 ha", "3.000 ha", "5.000 ha", "10.000 ha"],
    correct: "5.000 ha",
    explanation: "Khoản 2 Điều 6 quy định khu dự trữ thiên nhiên có diện tích liền vùng tối thiểu 5.000 ha và trong đó ít nhất 90% diện tích là các hệ sinh thái rừng. Tiêu chí này phản ánh yêu cầu bảo tồn quy mô lớn. "
  },
  {
    question: "Rừng giống quốc gia phải đáp ứng diện tích tối thiểu bao nhiêu ha?",
    options: ["10 ha", "20 ha", "30 ha", "50 ha"],
    correct: "30 ha",
    explanation: "Điều 6 (mục về rừng giống quốc gia) quy định rừng giống quốc gia phải có diện tích tối thiểu 30 ha và đáp ứng các yêu cầu tiêu chuẩn giống cây trồng lâm nghiệp. Đây là tiêu chuẩn để bảo đảm nguồn giống có quy mô phù hợp. "
  },
  {
    question: "Rừng phòng hộ đầu nguồn yêu cầu độ dốc tối thiểu bao nhiêu độ?",
    options: ["5 độ", "10 độ", "15 độ", "20 độ"],
    correct: "15 độ",
    explanation: "Điểm a khoản 1 Điều 7 nêu rừng phòng hộ đầu nguồn phải có địa hình đồi, núi và độ dốc từ 15 độ trở lên. Đây là một trong các tiêu chí địa hình để xác định rừng phòng hộ đầu nguồn. "
  },
  {
    question: "Về rừng phòng hộ chắn sóng, lấn biển: đối với vùng bờ biển bồi tụ hoặc ổn định, chiều rộng đai rừng tối thiểu nằm trong khoảng nào?",
    options: ["50–200 m", "100–300 m", "300–1.000 m", "1.000–2.000 m"],
    correct: "300–1.000 m",
    explanation: "Khoản 5 Điều 7 nêu rõ: đối với vùng bờ biển bồi tụ hoặc ổn định, chiều rộng của đai rừng phòng hộ chắn sóng, lấn biển quy định từ 300 m đến 1.000 m tùy vùng sinh thái. Giá trị này nhằm bảo đảm chức năng chắn sóng, bảo vệ bờ. "
  },
  {
    question: "Khi lập hồ sơ thành lập khu rừng đặc dụng, bản đồ hiện trạng phải có tỷ lệ nào?",
    options: ["1/1.000 hoặc 1/2.000", "1/5.000 hoặc 1/10.000 hoặc 1/25.000", "1/50.000", "Không quy định tỷ lệ"],
    correct: "1/5.000 hoặc 1/10.000 hoặc 1/25.000",
    explanation: "Khoản 3 Điều 9 nêu hồ sơ thành lập khu rừng đặc dụng phải kèm bản đồ hiện trạng với tỷ lệ 1/5.000 hoặc 1/10.000 hoặc 1/25.000 theo hệ quy chiếu VN2000, tùy quy mô diện tích. Đây là yêu cầu bắt buộc để thẩm định, xác định ranh giới và phân khu chức năng. "
  },
  {
    question: "Trình tự thành lập khu rừng đặc dụng nằm trên địa bàn từ 02 tỉnh trở lên do cơ quan nào chủ trì xây dựng dự án và trình quyết định thành lập?",
    options: [
      "Sở Nông nghiệp tỉnh nơi có rừng",
      "Bộ Nông nghiệp và Phát triển nông thôn",
      "Ủy ban nhân dân cấp huyện",
      "Ban quản lý rừng địa phương"
    ],
    correct: "Bộ Nông nghiệp và Phát triển nông thôn",
    explanation: "Khoản 4 Điều 9 quy định: đối với khu rừng đặc dụng nằm trên địa bàn từ 02 tỉnh, Bộ NN&PTNT chủ trì tổ chức xây dựng dự án và trình Thủ tướng Chính phủ quyết định thành lập theo quy trình nêu trong Điều. Điều này phân biệt trách nhiệm giữa khu rừng跨 tỉnh và thuộc địa phương. "
  },

  {
    question: "Việc điều chỉnh tăng diện tích khu rừng đặc dụng từ chuyển loại rừng phòng hộ hoặc rừng sản xuất được thực hiện theo quy định nào?",
    options: [
      "Thực hiện theo quy định chung của Luật Đất đai",
      "Thực hiện theo quy định tại các khoản 1–5 Điều 9 của Nghị định 156/2018/NĐ-CP sửa đổi bổ sung về thành lập khu rừng đặc dụng",
      "Chỉ cần quyết định của Chủ tịch UBND xã",
      "Không được phép điều chỉnh"
    ],
    correct: "Thực hiện theo quy định tại các khoản 1–5 Điều 9 của Nghị định 156/2018/NĐ-CP về thành lập khu rừng đặc dụng",
    explanation: "Khoản 6 Điều 9 nêu rõ: việc điều chỉnh tăng diện tích khu rừng đặc dụng từ chuyển loại rừng phòng hộ, rừng sản xuất hoặc rừng ngoài quy hoạch lâm nghiệp phải thực hiện theo quy định tại các khoản 1–5 Điều 9 (quy trình lập dự án, lấy ý kiến, thẩm định, quyết định). Nói cách khác, phần diện tích được điều chỉnh tăng thêm phải trải qua thủ tục thành lập tương tự như lập khu rừng đặc dụng mới. "
  },
  {
    question: "Sau khi có quyết định chuyển loại rừng hoặc chuyển mục đích sử dụng, chủ rừng phải hoàn thành cập nhật hồ sơ quản lý rừng trong thời hạn bao nhiêu ngày?",
    options: ["07 ngày", "15 ngày", "30 ngày", "90 ngày"],
    correct: "30 ngày",
    explanation: "Khoản 7 Điều 9 quy định: trong thời gian 30 ngày, sau khi cấp có thẩm quyền quyết định chuyển loại rừng hoặc chuyển mục đích sử dụng rừng, chủ rừng phải hoàn thành cập nhật hồ sơ quản lý rừng. Quy định này nhằm đảm bảo thông tin quản lý kịp thời, chính xác trong hệ thống hồ sơ. "
  },
    {
    question: "Trong phân khu phục hồi sinh thái được phép xây dựng công trình phục vụ du lịch; tuy nhiên tổng diện tích công trình không được vượt quá tỉ lệ nào so với diện tích hợp đồng cho thuê/một phần phân khu này?",
    options: ["0,5%", "1%", "2%", "5%"],
    correct: "2%",
    explanation: "Điều 15 khoản 3 quy định: tổng diện tích công trình phục vụ du lịch, nghỉ dưỡng, giải trí trong phân khu phục hồi sinh thái không vượt quá 2% diện tích trong hợp đồng hợp tác, liên kết hoặc cho thuê môi trường rừng thuộc phân khu này. Quy định này nhằm đảm bảo ưu tiên phục hồi sinh thái và hạn chế tác động xây dựng. "
  },
  {
    question: "Nếu tổng diện tích xây dựng công trình phục vụ du lịch trong phân khu phục hồi sinh thái vượt quá giới hạn quy định, cơ quan nào có thể đề nghị Bộ và Thủ tướng xem xét, chấp thuận điều chỉnh?",
    options: [
      "Chủ rừng báo cáo lên Sở Tài nguyên",
      "Ủy ban nhân dân cấp tỉnh gửi văn bản đề nghị Bộ Nông nghiệp và PTNT để báo cáo Thủ tướng Chính phủ",
      "Công an tỉnh ra quyết định tạm thời",
      "Không có khả năng được xem xét"
    ],
    correct: "Ủy ban nhân dân cấp tỉnh gửi văn bản đề nghị Bộ Nông nghiệp và PTNT để báo cáo Thủ tướng Chính phủ",
    explanation: "Điều 15 khoản 3–4 nêu: trường hợp vượt quá quy định, Ủy ban nhân dân cấp tỉnh, căn cứ thực tiễn và tính chất dự án, có thể đề nghị Bộ NN&PTNT báo cáo Thủ tướng Chính phủ xem xét, chấp thuận. Quyền đề xuất này thuộc thẩm quyền tỉnh nhằm giải quyết trường hợp đặc thù."
  },
  {
    question: "Khi cho thuê môi trường rừng để kinh doanh dịch vụ du lịch sinh thái, chủ rừng phải thông báo công khai tối thiểu trong thời gian bao nhiêu ngày trước khi lựa chọn tổ chức/cá nhân thuê?",
    options: ["07 ngày", "15 ngày", "30 ngày", "60 ngày"],
    correct: "30 ngày",
    explanation: "Điều 14 khoản 6(a) quy định: việc cho thuê môi trường rừng phải được thông báo công khai, rộng rãi trong thời gian tối thiểu 30 ngày bằng các hình thức niêm yết, đăng trên trang thông tin điện tử của đơn vị hoặc cơ quan có thẩm quyền. Yêu cầu này nhằm tăng tính minh bạch trong lựa chọn nhà đầu tư."
  },
  {
    question: "Thời hạn tối đa của hợp đồng cho thuê môi trường rừng để kinh doanh dịch vụ du lịch theo Nghị định 156/2018/NĐ-CP sửa đổi bổ sung là bao nhiêu năm, và chu kỳ đánh giá hiệu quả thực hiện hợp đồng là bao nhiêu năm?",
    options: [
      "Tối đa 10 năm; đánh giá mỗi 2 năm",
      "Tối đa 20 năm; đánh giá mỗi 4 năm",
      "Tối đa 30 năm; đánh giá định kỳ 5 năm",
      "Không giới hạn; không cần đánh giá"
    ],
    correct: "Tối đa 30 năm; đánh giá định kỳ 5 năm",
    explanation: "Khoản 6(h) Điều 14 quy định thời gian thuê môi trường rừng không quá 30 năm; định kỳ 5 năm đánh giá việc thực hiện hợp đồng. Nếu bên thuê thực hiện đúng và có nhu cầu gia hạn, chủ rừng xem xét kéo dài không quá hai phần ba thời gian thuê lần đầu. Quy định này cân bằng giữa stabilty hợp đồng và quyền điều chỉnh của chủ rừng."
  },
  {
    question: "Khai thác lâm sản trong vườn quốc gia, khu dự trữ thiên nhiên, khu bảo tồn loài - sinh cảnh được phép trong trường hợp nào?",
    options: [
      "Bất kỳ khi nào chủ rừng thấy cần",
      "Khi có phương án khai thác tận thu gỗ; hoặc quyết định chuyển mục đích sử dụng rừng; hoặc chương trình/đề tài nghiên cứu khoa học được phê duyệt",
      "Chỉ khi là rừng trồng",
      "Luôn bị cấm tuyệt đối"
    ],
    correct: "Khi có phương án khai thác tận thu gỗ; hoặc quyết định chuyển mục đích sử dụng rừng; hoặc chương trình/đề tài nghiên cứu khoa học được phê duyệt",
    explanation: "Điểm a và b khoản 1 Điều 12 quy định: các đối tượng khai thác, thu thập mẫu vật trong các loại rừng đặc dụng chỉ được thực hiện khi có cơ sở pháp lý: phương án khai thác tận thu gỗ theo quy định của Bộ, quyết định chuyển mục đích sử dụng rừng (nếu khai thác do chuyển mục đích), hoặc chương trình/đề tài nghiên cứu khoa học đã phê duyệt. Điều này nhằm hạn chế tác động lên hệ sinh thái đặc dụng."
  },
  {
    question: "Những hoạt động nào bị nghiêm cấm trong rừng đặc dụng nhằm bảo vệ hệ sinh thái?",
    options: [
      "Chặt cây phục vụ sinh kế cá nhân nhỏ lẻ",
      "Các hoạt động làm thay đổi cảnh quan tự nhiên, khai thác trái phép tài nguyên, mang hóa chất độc hại, chăn thả gia súc trong phân khu bảo vệ nghiêm ngặt",
      "Xây một số công trình theo đề án được phê duyệt",
      "Cắm trại giáo dục môi trường được cấp phép"
    ],
    correct: "Các hoạt động làm thay đổi cảnh quan tự nhiên, khai thác trái phép tài nguyên, mang hóa chất độc hại, chăn thả gia súc trong phân khu bảo vệ nghiêm ngặt",
    explanation: "Điều 11 khoản 1 và 2 nêu rõ: không được tiến hành các hoạt động làm thay đổi cảnh quan tự nhiên, khai thác trái phép tài nguyên, gây ô nhiễm môi trường, mang hóa chất độc hại, và cấm chăn thả gia súc trong phân khu bảo vệ nghiêm ngặt. Các hoạt động được phép phải tuân thủ quy chế quản lý và quyết định phê duyệt. "
  },
  {
    question: "Trình tự thẩm định, phê duyệt đề án du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng đặc dụng (thuộc địa phương quản lý) có thời hạn nào để Chủ tịch UBND cấp tỉnh quyết định sau khi nhận đủ hồ sơ hợp lệ?",
    options: ["03 ngày", "10 ngày", "30 ngày", "60 ngày"],
    correct: "10 ngày",
    explanation: "Khoản 4(d) Điều 14 quy định: trong thời gian 10 ngày kể từ ngày nhận được đầy đủ hồ sơ, Chủ tịch UBND cấp tỉnh (đối với khu rừng đặc dụng thuộc địa phương quản lý) hoặc Bộ NN&PTNT (đối với khu rừng thuộc Bộ quản lý) quyết định phê duyệt đề án du lịch sinh thái, nghỉ dưỡng, giải trí. Mốc 10 ngày này là thời hạn ban hành quyết định phê duyệt đề án khi hồ sơ hợp lệ."
  },
  {
    question: "Đối với đai rừng phòng hộ chắn gió, chắn cát bay phía sau đai rừng ven biển: nếu vùng cát có diện tích từ 100 ha trở lên (hoặc là vùng cát di động), chiều rộng tối thiểu của đai rừng phía sau là bao nhiêu?",
    options: ["20 m", "30 m", "40 m", "150 m"],
    correct: "40 m",
    explanation: "Điểm 4(a–b) Điều 7 quy định: đai rừng phòng hộ chắn gió, chắn cát bay phía sau đai rừng (đai phía sau) có chiều rộng tối thiểu 40 m trong trường hợp vùng cát có diện tích từ 100 ha trở lên hoặc vùng cát di động (hoặc độ dốc lớn). Nếu vùng cát nhỏ hơn 100 ha và ổn định thì chiều rộng tối thiểu là 30 m. Quy định này chi tiết hóa tiêu chí thiết kế đai rừng phòng hộ ven biển."
  }
];