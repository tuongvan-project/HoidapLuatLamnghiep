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
        explanation: "Điều 1 Thông tư 26/2025/TT-BNNMT nêu rõ phạm vi điều chỉnh bao gồm quản lý lâm sản; xử lý lâm sản, thủy sản là tài sản được xác lập quyền sở hữu toàn dân. Điều này có nghĩa Thông tư không chỉ tập trung vào rừng đặc dụng hay thủy sản riêng lẻ mà bao quát cả lâm sản, thủy sản khi đã trở thành tài sản toàn dân. Các phương án khác chỉ phản ánh một phần nhỏ, không đúng phạm vi điều chỉnh."
    },
    { 
        question: "Thông tư 26/2025/TT-BNNMT áp dụng đối với đối tượng nào?", 
        options: [
            "Chỉ cơ quan nhà nước", 
            "Tổ chức, cá nhân, hộ kinh doanh, hộ gia đình, cộng đồng dân cư có hoạt động liên quan", 
            "Chỉ doanh nghiệp chế biến gỗ", 
            "Chỉ UBND cấp xã"
        ], 
        correct: "Tổ chức, cá nhân, hộ kinh doanh, hộ gia đình, cộng đồng dân cư có hoạt động liên quan",
        explanation: "Điều 2 Thông tư 26/2025/TT-BNNMT xác định đối tượng áp dụng là tổ chức, cá nhân, hộ gia đình, hộ kinh doanh, cộng đồng dân cư có hoạt động liên quan đến quản lý, bảo vệ, chế biến, vận chuyển và kinh doanh lâm sản. Không chỉ riêng cơ quan nhà nước hay doanh nghiệp mà còn mở rộng đến mọi thành phần xã hội. Đây là điểm quan trọng nhằm huy động sự tham gia rộng rãi vào công tác quản lý lâm sản."
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
        explanation: "Khoản 2 Điều 3 Thông tư 26/2025/TT-BNNMT giải thích từ ngữ, trong đó 'cơ quan Kiểm lâm sở tại' bao gồm Hạt Kiểm lâm hoặc cơ quan Kiểm lâm cấp tỉnh ở nơi không có Hạt Kiểm lâm. Điều này đảm bảo tính linh hoạt trong quản lý khi ở một số địa phương chưa thành lập Hạt Kiểm lâm. Các phương án khác đều không chính xác vì hoặc quá hẹp (chỉ Hạt Kiểm lâm huyện) hoặc không đúng thẩm quyền (Công an)."
    },
    { 
        question: "Gỗ tròn theo Thông tư 26/2025/TT-BNNMT có đường kính đầu nhỏ tối thiểu bao nhiêu cm đối với rừng trồng?", 
        options: ["10 cm", "8 cm", "6 cm", "12 cm"], 
        correct: "6 cm",
        explanation: "Theo Phụ lục kèm Thông tư 26/2025/TT-BNNMT, gỗ tròn được định nghĩa là gỗ chưa qua chế biến, có chiều dài tối thiểu 1 m và đường kính đầu nhỏ từ 6 cm trở lên đối với rừng trồng. Đây là tiêu chí kỹ thuật quan trọng để phân biệt gỗ tròn với gỗ nguyên liệu khác. Các con số 8, 10 hoặc 12 cm không đúng với quy định hiện hành."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, sản phẩm nào sau đây không được coi là 'gỗ tròn'?", 
        options: ["Gỗ nguyên khai cắt khúc", "Gỗ bóc vỏ", "Gỗ lóc lõi", "Gỗ xẻ thành thanh, tấm"], 
        correct: "Gỗ xẻ thành thanh, tấm",
        explanation: "Điều 3 và phụ lục định nghĩa rõ: gỗ tròn là gỗ còn nguyên dạng, chưa qua chế biến thành thanh, tấm. Các loại gỗ bóc vỏ, gỗ nguyên khai, gỗ lóc lõi vẫn thuộc phạm vi gỗ tròn nếu đáp ứng tiêu chuẩn về kích thước. Trong khi đó, gỗ đã xẻ thành thanh, tấm được coi là gỗ xẻ, không còn là gỗ tròn."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, 'thực vật ngoài gỗ' gồm nhóm nào sau đây?", 
        options: ["Tre, nứa, song, mây, nấm, củi...", "Gỗ tròn", "Gỗ xẻ", "Ngà voi"], 
        correct: "Tre, nứa, song, mây, nấm, củi...",
        explanation: "Khoản 4 Điều 3 Thông tư 26/2025/TT-BNNMT quy định 'thực vật ngoài gỗ' là nhóm lâm sản không phải gỗ, bao gồm tre, nứa, song, mây, lồ ô, nấm, củi và một số sản phẩm thực vật khác. Điều này phân biệt rõ giữa lâm sản gỗ và lâm sản phi gỗ. Các phương án khác như gỗ tròn, gỗ xẻ hay ngà voi không phải nhóm 'thực vật ngoài gỗ'."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, sản phẩm nào được coi là 'sản phẩm của động vật'?", 
        options: ["Thanh gỗ", "Trứng, da, xương, ngà, móng...", "Cây rừng trồng", "Củi"], 
        correct: "Trứng, da, xương, ngà, móng...",
        explanation: "Khoản 5 Điều 3 Thông tư 26/2025/TT-BNNMT định nghĩa sản phẩm của động vật bao gồm các bộ phận như trứng, da, lông, xương, sừng, ngà, móng, mật, tuyến... Đây là những bộ phận thu được từ động vật rừng. Các phương án khác như gỗ hay cây trồng không liên quan đến nhóm này."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, cơ quan nào có thẩm quyền xác nhận Bảng kê lâm sản?", 
        options: ["UBND cấp xã", "Sở Tài nguyên và Môi trường", "Cơ quan Kiểm lâm sở tại", "Công an huyện"], 
        correct: "Cơ quan Kiểm lâm sở tại",
        explanation: "Điều 6 Thông tư 26/2025/TT-BNNMT quy định thẩm quyền xác nhận Bảng kê lâm sản thuộc cơ quan Kiểm lâm sở tại. Điều này nhằm đảm bảo tính chuyên môn và thẩm quyền pháp lý trong quản lý, kiểm soát nguồn gốc lâm sản. UBND xã, công an hay Sở Tài nguyên Môi trường không có chức năng này."
    },
    { 
        question: "Trường hợp nào lâm sản không phải xác nhận Bảng kê lâm sản?", 
        options: ["Gỗ rừng tự nhiên", "Gỗ nguyên liệu của doanh nghiệp Nhóm I", "Động vật thuộc CITES", "Lâm sản quý hiếm"], 
        correct: "Gỗ nguyên liệu của doanh nghiệp Nhóm I",
        explanation: "Theo Điều 8 Thông tư 26/2025/TT-BNNMT, doanh nghiệp được phân loại Nhóm I có uy tín và hồ sơ quản lý minh bạch thì gỗ nguyên liệu khi vận chuyển không cần xác nhận Bảng kê lâm sản. Đây là chính sách ưu đãi nhằm giảm thủ tục hành chính. Các trường hợp còn lại vẫn phải xác nhận vì tính chất nhạy cảm, quý hiếm."
    },
    { 
        question: "Thời hạn cơ quan Kiểm lâm xác nhận Bảng kê lâm sản sau khi nhận đủ hồ sơ hợp lệ là bao lâu?", 
        options: ["01 ngày", "02 ngày", "03 ngày", "05 ngày"], 
        correct: "02 ngày",
        explanation: "Điều 7 Thông tư 26/2025/TT-BNNMT quy định rõ: trong thời hạn 02 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại phải xác nhận Bảng kê lâm sản. Đây là thời hạn tối đa, bảo đảm sự kịp thời trong lưu thông hàng hóa. Các mốc thời gian khác không đúng với quy định."
    },
    { 
        question: "Cơ quan nào có thẩm quyền phê duyệt phương án khai thác của hộ gia đình, cá nhân?", 
        options: ["Chủ tịch UBND cấp xã", "Sở Nông nghiệp và Môi trường", "Thủ tướng Chính phủ", "Chi cục Kiểm lâm"], 
        correct: "Chủ tịch UBND cấp xã",
        explanation: "Điều 9 Thông tư 26/2025/TT-BNNMT quy định phương án khai thác rừng trồng sản xuất của hộ gia đình, cá nhân được UBND cấp xã xem xét và phê duyệt. Điều này phù hợp với thẩm quyền quản lý đất đai, rừng sản xuất đã giao cho hộ gia đình tại địa phương. Các cơ quan cấp cao hơn không trực tiếp phê duyệt các phương án nhỏ lẻ này."
    },
    { 
        question: "Đối với khai thác động vật rừng thông thường từ tự nhiên, cơ quan nào phê duyệt phương án?", 
        options: ["UBND cấp huyện", "Cơ quan Kiểm lâm sở tại", "Sở Nông nghiệp và Môi trường", "Thủ tướng Chính phủ"], 
        correct: "Cơ quan Kiểm lâm sở tại",
        explanation: "Điều 11 Thông tư 26/2025/TT-BNNMT quy định phương án khai thác động vật rừng thông thường từ tự nhiên phải được cơ quan Kiểm lâm sở tại phê duyệt. Điều này nhằm đảm bảo kiểm soát chặt chẽ, tránh việc khai thác tràn lan gây hại đến đa dạng sinh học. UBND cấp huyện hoặc Chính phủ không trực tiếp làm nhiệm vụ này."
    },
    { 
        question: "Thời hạn phê duyệt phương án khai thác động vật rừng thông thường từ tự nhiên là bao nhiêu ngày làm việc?", 
        options: ["03 ngày", "05 ngày", "06 ngày", "07 ngày"], 
        correct: "06 ngày",
        explanation: "Theo Điều 11 khoản 3 Thông tư 26/2025/TT-BNNMT, trong thời hạn 06 ngày làm việc kể từ ngày nhận đủ hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại phải xem xét và phê duyệt phương án. Mốc 6 ngày đảm bảo vừa có thời gian thẩm định vừa kịp tiến độ khai thác. Các mốc 3, 5 hoặc 7 ngày không phù hợp với văn bản."
    },
    { 
        question: "Trong hồ sơ lâm sản có nguồn gốc khai thác trong nước, gỗ từ rừng tự nhiên cần có giấy tờ nào?", 
        options: ["Bảng kê lâm sản có xác nhận Kiểm lâm", "Hóa đơn VAT", "Giấy phép xây dựng", "Quyết định đấu giá"], 
        correct: "Bảng kê lâm sản có xác nhận Kiểm lâm",
        explanation: "Điều 12 Thông tư 26/2025/TT-BNNMT quy định rõ hồ sơ gỗ từ rừng tự nhiên khai thác trong nước phải có Bảng kê lâm sản được cơ quan Kiểm lâm xác nhận. Đây là bằng chứng pháp lý về nguồn gốc hợp pháp của gỗ. Các loại giấy tờ như hóa đơn VAT hay quyết định đấu giá chỉ là chứng từ thương mại, không thay thế được."
    },
    { 
        question: "Hồ sơ nhập khẩu thực vật ngoài gỗ thuộc Phụ lục CITES cần có gì?", 
        options: ["Giấy phép CITES nhập khẩu", "Giấy phép lái xe", "Biên bản kiểm lâm", "Quyết định phê duyệt dự án"], 
        correct: "Giấy phép CITES nhập khẩu",
        explanation: "Theo Điều 13 Thông tư 26/2025/TT-BNNMT, việc nhập khẩu thực vật ngoài gỗ thuộc danh mục CITES phải kèm theo Giấy phép CITES nhập khẩu do cơ quan quản lý CITES Việt Nam cấp. Đây là yêu cầu bắt buộc để bảo đảm tuân thủ các cam kết quốc tế. Các giấy tờ khác hoàn toàn không liên quan."
    },
    { 
        question: "Hồ sơ lâm sản sau xử lý tịch thu gồm những giấy tờ nào?", 
        options: ["Quyết định phê duyệt phương án xử lý và Bảng kê lâm sản", "Giấy khai sinh", "Hóa đơn điện nước", "Phiếu thu ngân sách"], 
        correct: "Quyết định phê duyệt phương án xử lý và Bảng kê lâm sản",
        explanation: "Điều 15 Thông tư 26/2025/TT-BNNMT quy định lâm sản sau xử lý tịch thu phải kèm theo Quyết định phê duyệt phương án xử lý và Bảng kê lâm sản do cơ quan Kiểm lâm lập. Đây là căn cứ chứng minh lâm sản đã được xử lý đúng pháp luật. Các giấy tờ dân sự hoặc hành chính khác không thay thế được."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, vận chuyển lâm sản trong nước cần có gì?", 
        options: ["Bảng kê lâm sản", "Hộ chiếu", "Phiếu thu ngân sách", "Biên bản họp thôn"], 
        correct: "Bảng kê lâm sản",
        explanation: "Điều 16 Thông tư 26/2025/TT-BNNMT quy định việc vận chuyển lâm sản trong nước bắt buộc phải kèm theo Bảng kê lâm sản hợp pháp. Đây là giấy tờ chứng minh nguồn gốc lâm sản, tránh buôn bán gỗ lậu. Các giấy tờ như hộ chiếu hay biên bản thôn không có giá trị pháp lý trong trường hợp này."
    },
    { 
        question: "Đối với hồ sơ xuất khẩu gỗ thuộc Phụ lục CITES, cần giấy phép gì?", 
        options: ["Giấy phép CITES xuất khẩu", "Giấy phép lao động", "Giấy chứng nhận đăng ký xe", "Hóa đơn điện"], 
        correct: "Giấy phép CITES xuất khẩu",
        explanation: "Điều 17 Thông tư 26/2025/TT-BNNMT quy định xuất khẩu gỗ và lâm sản thuộc danh mục CITES phải có Giấy phép CITES xuất khẩu do cơ quan có thẩm quyền cấp. Đây là điều kiện bắt buộc để bảo đảm tính hợp pháp trong thương mại quốc tế. Các loại giấy phép khác không liên quan đến hoạt động xuất khẩu lâm sản."
    },
    { 
        question: "Cơ sở chế biến gỗ cần lưu giữ loại hồ sơ nào?", 
        options: ["Hồ sơ nguồn gốc lâm sản, bảng kê, sổ theo dõi nhập xuất", "Giấy phép lái xe", "Giấy khai sinh", "Giấy chứng nhận tiêm chủng"], 
        correct: "Hồ sơ nguồn gốc lâm sản, bảng kê, sổ theo dõi nhập xuất",
        explanation: "Điều 18 Thông tư 26/2025/TT-BNNMT yêu cầu cơ sở chế biến gỗ phải lưu giữ hồ sơ về nguồn gốc lâm sản, Bảng kê và sổ theo dõi nhập xuất. Điều này giúp cơ quan quản lý dễ dàng kiểm tra, đối chiếu nguồn gốc nguyên liệu. Các loại giấy tờ cá nhân như giấy khai sinh hay tiêm chủng hoàn toàn không liên quan."
    },
    { 
        question: "Cơ sở nuôi động vật thuộc Phụ lục CITES cần có gì?", 
        options: ["Mã số cơ sở nuôi hoặc Giấy chứng nhận cơ sở bảo tồn đa dạng sinh học", "Giấy phép xây dựng", "Giấy chứng minh nhân dân", "Giấy khai sinh"], 
        correct: "Mã số cơ sở nuôi hoặc Giấy chứng nhận cơ sở bảo tồn đa dạng sinh học",
        explanation: "Điều 19 Thông tư 26/2025/TT-BNNMT quy định các cơ sở nuôi động vật thuộc Phụ lục CITES phải có Mã số cơ sở nuôi do cơ quan có thẩm quyền cấp, hoặc Giấy chứng nhận cơ sở bảo tồn đa dạng sinh học. Đây là điều kiện pháp lý để bảo đảm tính hợp pháp trong hoạt động nuôi sinh sản, nuôi sinh trưởng. Các giấy tờ như giấy phép xây dựng hay giấy khai sinh không có giá trị trong trường hợp này."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, mẫu vật nào bắt buộc phải đánh dấu?", 
        options: ["Động vật thuộc Phụ lục I CITES", "Mọi loài gỗ tròn", "Củi", "Nấm rừng"], 
        correct: "Động vật thuộc Phụ lục I CITES",
        explanation: "Điều 20 Thông tư 26/2025/TT-BNNMT quy định các mẫu vật thuộc Phụ lục I CITES (loài nguy cấp, quý, hiếm) phải được đánh dấu để quản lý, truy xuất nguồn gốc. Đây là yêu cầu bắt buộc nhằm ngăn chặn tình trạng buôn bán trái phép. Các loại như củi, nấm rừng hoặc gỗ tròn thông thường không bắt buộc đánh dấu."
    },
    { 
        question: "Việc đánh dấu mẫu vật có thể thực hiện bằng hình thức nào?", 
        options: ["Chip, vòng, thẻ, mã QR...", "Dấu vân tay", "Chữ ký điện tử", "Ảnh chụp"], 
        correct: "Chip, vòng, thẻ, mã QR...",
        explanation: "Theo Điều 21 Thông tư 26/2025/TT-BNNMT, việc đánh dấu mẫu vật có thể thực hiện bằng gắn chip, vòng, thẻ, tem, mã vạch, mã QR hoặc các hình thức điện tử khác. Mục đích là quản lý bằng phương tiện hiện đại, dễ truy xuất. Các phương án như dấu vân tay, chữ ký điện tử hay ảnh chụp không phải là biện pháp đánh dấu hợp pháp cho mẫu vật."
    },
    { 
        question: "Sau khi đánh dấu mẫu vật, chủ mẫu vật phải làm gì trong 01 ngày làm việc?", 
        options: ["Ghi thông tin vào sổ theo dõi đánh dấu mẫu vật", "Bán ra thị trường", "Xin cấp giấy chứng tử", "Không phải làm gì"], 
        correct: "Ghi thông tin vào sổ theo dõi đánh dấu mẫu vật",
        explanation: "Điều 21 khoản 4 Thông tư 26/2025/TT-BNNMT yêu cầu chủ mẫu vật trong vòng 01 ngày làm việc kể từ khi đánh dấu phải ghi thông tin vào sổ theo dõi đánh dấu mẫu vật. Đây là cơ sở để cơ quan quản lý giám sát. Nếu không ghi nhận, mẫu vật có thể bị coi là không hợp pháp."
    },
    { 
        question: "Đối tượng nào phải chấp hành kiểm tra theo Thông tư 26/2025/TT-BNNMT?", 
        options: ["Chỉ cơ quan Kiểm lâm", "Tổ chức, cá nhân có hoạt động khai thác, vận chuyển, chế biến, mua bán lâm sản", "Chỉ doanh nghiệp FDI", "Chỉ UBND tỉnh"], 
        correct: "Tổ chức, cá nhân có hoạt động khai thác, vận chuyển, chế biến, mua bán lâm sản",
        explanation: "Điều 23 Thông tư 26/2025/TT-BNNMT xác định đối tượng phải chấp hành kiểm tra bao gồm tất cả tổ chức, hộ gia đình, cá nhân có hoạt động khai thác, chế biến, vận chuyển, kinh doanh lâm sản. Không phân biệt loại hình kinh tế, miễn có liên quan đến lâm sản thì đều thuộc phạm vi quản lý."
    },
    { 
        question: "Có mấy hình thức kiểm tra lâm sản theo Thông tư 26/2025/TT-BNNMT?", 
        options: ["2 hình thức", "3 hình thức", "4 hình thức", "5 hình thức"], 
        correct: "3 hình thức",
        explanation: "Điều 24 Thông tư 26/2025/TT-BNNMT quy định có 3 hình thức kiểm tra lâm sản: kiểm tra định kỳ, kiểm tra đột xuất và kiểm tra chuyên đề. Đây là ba công cụ quản lý chính để giám sát hoạt động liên quan đến lâm sản. Các phương án 2, 4 hoặc 5 hình thức không chính xác."
    },
    { 
        question: "Thẩm quyền ban hành quyết định kiểm tra thuộc về ai?", 
        options: ["Cục trưởng Cục Lâm nghiệp và Kiểm lâm, Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh, Hạt trưởng Hạt Kiểm lâm...", "Công an xã", "Chủ tịch UBND xã", "Doanh nghiệp gỗ"], 
        correct: "Cục trưởng Cục Lâm nghiệp và Kiểm lâm, Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh, Hạt trưởng Hạt Kiểm lâm...",
        explanation: "Điều 25 Thông tư 26/2025/TT-BNNMT giao thẩm quyền ban hành quyết định kiểm tra cho Cục trưởng Cục Lâm nghiệp và Kiểm lâm, Chi cục trưởng Chi cục Kiểm lâm cấp tỉnh, Hạt trưởng Hạt Kiểm lâm. Đây là những cấp có thẩm quyền pháp lý. Các cơ quan như UBND xã hay công an xã không có thẩm quyền này."
    },
    { 
        question: "Trước ngày nào hằng năm, cơ quan Kiểm lâm phải xây dựng kế hoạch kiểm tra năm sau?", 
        options: ["30/11", "31/12", "01/01", "15/10"], 
        correct: "30/11",
        explanation: "Điều 26 Thông tư 26/2025/TT-BNNMT quy định trước ngày 30 tháng 11 hằng năm, cơ quan Kiểm lâm phải xây dựng và trình phê duyệt kế hoạch kiểm tra năm sau. Quy định này nhằm đảm bảo công tác kiểm tra có tính chủ động. Các mốc thời gian khác không đúng."
    },
    { 
        question: "Doanh nghiệp nào phải đăng ký phân loại theo Thông tư 26/2025/TT-BNNMT?", 
        options: ["Doanh nghiệp có hoạt động trồng, khai thác, chế biến, nhập khẩu, xuất khẩu gỗ", "Doanh nghiệp thủy sản", "Doanh nghiệp vận tải", "Doanh nghiệp xây dựng"], 
        correct: "Doanh nghiệp có hoạt động trồng, khai thác, chế biến, nhập khẩu, xuất khẩu gỗ",
        explanation: "Điều 28 Thông tư 26/2025/TT-BNNMT quy định các doanh nghiệp có hoạt động liên quan trực tiếp đến lâm sản như trồng, khai thác, chế biến, nhập khẩu, xuất khẩu gỗ phải đăng ký phân loại. Các doanh nghiệp không hoạt động trong lĩnh vực lâm nghiệp như thủy sản, vận tải, xây dựng không thuộc diện này."
    },
    { 
        question: "Trong bao lâu kể từ ngày nhận hồ sơ hợp lệ, cơ quan có thẩm quyền phải ban hành Quyết định phê duyệt phương án khai thác?", 
        options: ["05 ngày", "07 ngày", "10 ngày", "15 ngày"], 
        correct: "07 ngày",
        explanation: "Điều 29 Thông tư 26/2025/TT-BNNMT nêu rõ thời hạn giải quyết hồ sơ phương án khai thác là 07 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ. Đây là mốc thời gian phù hợp để cơ quan thẩm định và ra quyết định. Các mốc khác không đúng với quy định."
    },
    { 
        question: "Thông tin nào được sử dụng để xác minh tính trung thực trong phân loại doanh nghiệp?", 
        options: ["Cổng thông tin đăng ký doanh nghiệp, cơ quan thuế, cơ quan môi trường...", "Trang Facebook cá nhân", "Thông tin quảng cáo", "Ý kiến cộng đồng"], 
        correct: "Cổng thông tin đăng ký doanh nghiệp, cơ quan thuế, cơ quan môi trường...",
        explanation: "Điều 30 Thông tư 26/2025/TT-BNNMT quy định việc xác minh thông tin phân loại doanh nghiệp phải căn cứ vào nguồn chính thống như Cổng thông tin đăng ký doanh nghiệp quốc gia, dữ liệu cơ quan thuế, cơ quan môi trường và các cơ quan quản lý nhà nước khác. Các nguồn như Facebook, quảng cáo hay ý kiến cộng đồng không phải căn cứ pháp lý."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, trong trường hợp vận chuyển gỗ rừng tự nhiên mà không có Bảng kê lâm sản hợp lệ, hành vi này bị coi là gì?", 
        options: ["Hợp pháp nếu có hóa đơn", "Vi phạm quy định về quản lý lâm sản", "Không vi phạm", "Chỉ vi phạm khi khối lượng > 2 m³"], 
        correct: "Vi phạm quy định về quản lý lâm sản",
        explanation: "Điều 31 Thông tư 26/2025/TT-BNNMT quy định rõ mọi trường hợp vận chuyển gỗ rừng tự nhiên mà không có Bảng kê lâm sản hợp lệ đều bị coi là vi phạm. Hóa đơn thương mại không thay thế được Bảng kê, và không có ngưỡng khối lượng miễn trừ. Đây là cơ sở để xử lý tình trạng vận chuyển gỗ lậu."
    },
    { 
        question: "Hồ sơ nhập khẩu gỗ từ quốc gia có hiệp định VPA/FLEGT với Việt Nam cần kèm theo loại giấy phép nào?", 
        options: ["Giấy phép CITES", "Giấy phép FLEGT", "Giấy phép khai thác", "Giấy phép vận tải"], 
        correct: "Giấy phép FLEGT",
        explanation: "Điều 32 Thông tư 26/2025/TT-BNNMT quy định rõ hồ sơ nhập khẩu gỗ từ các quốc gia đã ký Hiệp định Đối tác tự nguyện VPA/FLEGT với Việt Nam phải kèm theo Giấy phép FLEGT. Đây là chứng từ bảo đảm nguồn gốc hợp pháp của gỗ. Các loại giấy phép khác không áp dụng trong trường hợp này."
    },
    { 
        question: "Nếu tổ chức khai thác gỗ rừng trồng sản xuất của hộ gia đình nhưng không lập phương án khai thác được UBND xã xác nhận thì hồ sơ lâm sản có hợp pháp không?", 
        options: ["Hợp pháp vì là rừng trồng", "Không hợp pháp do thiếu phương án", "Chỉ hợp pháp nếu có hóa đơn", "Hợp pháp nếu có xác nhận thôn bản"], 
        correct: "Không hợp pháp do thiếu phương án",
        explanation: "Điều 33 Thông tư 26/2025/TT-BNNMT yêu cầu khai thác rừng trồng sản xuất phải có phương án khai thác được UBND xã xác nhận. Nếu không có, hồ sơ lâm sản không hợp pháp, kể cả khi đó là rừng trồng. Hóa đơn hay xác nhận thôn bản không thay thế được thủ tục này."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, trong thời hạn bao nhiêu ngày kể từ khi kết thúc kiểm tra, cơ quan kiểm tra phải ban hành Kết luận kiểm tra?", 
        options: ["05 ngày", "07 ngày", "10 ngày", "15 ngày"], 
        correct: "07 ngày",
        explanation: "Điều 34 Thông tư 26/2025/TT-BNNMT nêu rõ: trong vòng 07 ngày kể từ khi kết thúc kiểm tra, cơ quan kiểm tra phải ban hành Kết luận kiểm tra. Đây là mốc thời gian bảo đảm tính minh bạch và kịp thời. Các phương án khác không phù hợp với quy định."
    },
    { 
        question: "Khi phát hiện sai lệch giữa Bảng kê lâm sản và thực tế, cơ quan Kiểm lâm phải xử lý thế nào?", 
        options: ["Cho phép bổ sung giấy tờ", "Lập biên bản, xử lý theo pháp luật", "Không xử lý", "Chỉ cảnh báo"], 
        correct: "Lập biên bản, xử lý theo pháp luật",
        explanation: "Điều 35 Thông tư 26/2025/TT-BNNMT quy định nếu phát hiện sai lệch giữa Bảng kê lâm sản và thực tế, cơ quan Kiểm lâm phải lập biên bản và xử lý theo pháp luật. Đây là biện pháp nghiêm khắc nhằm răn đe hành vi gian dối. Việc chỉ cảnh báo hay cho bổ sung giấy tờ không đảm bảo tính ràng buộc pháp lý."
    },
    { 
        question: "Trong trường hợp nào thủy sản khai thác bị tịch thu sẽ được xử lý như lâm sản tịch thu?", 
        options: ["Khi là loài quý hiếm", "Khi thuộc đối tượng xác lập quyền sở hữu toàn dân", "Khi khối lượng lớn", "Khi vận chuyển không giấy tờ"], 
        correct: "Khi thuộc đối tượng xác lập quyền sở hữu toàn dân",
        explanation: "Điều 36 Thông tư 26/2025/TT-BNNMT quy định thủy sản bị tịch thu khi thuộc đối tượng xác lập quyền sở hữu toàn dân thì sẽ được xử lý như lâm sản tịch thu. Đây là sự thống nhất về cách quản lý tài nguyên bị tịch thu. Các trường hợp khác như khối lượng lớn hay không giấy tờ chỉ là dấu hiệu vi phạm chứ không phải tiêu chí xử lý."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, ai chịu trách nhiệm lập và lưu giữ sổ theo dõi nhập xuất lâm sản?", 
        options: ["UBND xã", "Doanh nghiệp, cơ sở chế biến", "Cơ quan Kiểm lâm", "Chi cục Thuế"], 
        correct: "Doanh nghiệp, cơ sở chế biến",
        explanation: "Điều 37 Thông tư 26/2025/TT-BNNMT quy định doanh nghiệp, cơ sở chế biến lâm sản có trách nhiệm lập và lưu giữ sổ theo dõi nhập xuất. Đây là nghĩa vụ để bảo đảm minh bạch và phục vụ công tác kiểm tra. UBND xã, Chi cục Thuế hay cơ quan Kiểm lâm chỉ có vai trò giám sát chứ không trực tiếp thực hiện."
    },
    { 
        question: "Trong kiểm tra định kỳ doanh nghiệp chế biến gỗ, thời gian báo trước tối thiểu là bao lâu?", 
        options: ["03 ngày", "05 ngày", "07 ngày", "10 ngày"], 
        correct: "05 ngày",
        explanation: "Điều 38 Thông tư 26/2025/TT-BNNMT nêu rõ việc kiểm tra định kỳ doanh nghiệp chế biến gỗ phải thông báo trước ít nhất 05 ngày. Điều này nhằm giúp doanh nghiệp chuẩn bị hồ sơ, sổ sách. Các mốc thời gian khác không đúng với quy định."
    },
    { 
        question: "Nếu động vật rừng thuộc Phụ lục CITES được nuôi sinh sản hợp pháp, hồ sơ vận chuyển cần gì?", 
        options: ["Chỉ bảng kê lâm sản", "Giấy phép CITES và chứng nhận cơ sở nuôi", "Giấy chứng nhận kiểm dịch thực vật", "Không cần giấy tờ"], 
        correct: "Giấy phép CITES và chứng nhận cơ sở nuôi",
        explanation: "Điều 39 Thông tư 26/2025/TT-BNNMT quy định động vật thuộc Phụ lục CITES nuôi sinh sản hợp pháp khi vận chuyển phải có Giấy phép CITES và chứng nhận cơ sở nuôi. Đây là bằng chứng hợp pháp để phân biệt với động vật khai thác trái phép. Các loại giấy tờ khác không đáp ứng yêu cầu."
    },
    { 
        question: "Trong hồ sơ lâm sản tịch thu bán đấu giá, ngoài Quyết định phê duyệt xử lý còn cần gì?", 
        options: ["Giấy phép xây dựng", "Hợp đồng mua bán hoặc hóa đơn bán hàng", "Phiếu chi", "Giấy khai sinh"], 
        correct: "Hợp đồng mua bán hoặc hóa đơn bán hàng",
        explanation: "Điều 40 Thông tư 26/2025/TT-BNNMT yêu cầu hồ sơ lâm sản tịch thu bán đấu giá phải kèm theo Hợp đồng mua bán hoặc hóa đơn bán hàng hợp pháp, ngoài Quyết định phê duyệt xử lý. Đây là chứng từ chứng minh việc chuyển nhượng tài sản tịch thu đúng quy định. Các loại giấy tờ khác không có giá trị pháp lý trong trường hợp này."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, thời hạn xem xét, phân loại doanh nghiệp kể từ ngày nhận đủ hồ sơ là bao lâu?", 
        options: ["15 ngày", "20 ngày", "25 ngày", "30 ngày"], 
        correct: "30 ngày",
        explanation: "Điều 41 Thông tư 26/2025/TT-BNNMT quy định thời hạn phân loại doanh nghiệp là 30 ngày kể từ ngày nhận đủ hồ sơ hợp lệ. Đây là thời gian để cơ quan quản lý xem xét, thẩm tra và đưa ra quyết định chính thức. Các mốc 15, 20 hoặc 25 ngày không đúng theo quy định."
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