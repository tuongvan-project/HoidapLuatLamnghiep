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
            "SP chế biến từ gỗ được lắp ráp đầy đủ các bộ phận theo công dụng của sản phẩm, các chi tiết tháo rời của SP, khi lắp ráp có thể sử dụng được ngay theo công dụng của SP", 
            "Mọi nguyên liệu gỗ thô khai thác trực tiếp từ rừng chưa qua chế biến.", 
            "Các sản phẩm thủ công mỹ nghệ từ đất, đá, kim loại nhưng có hình dáng giống gỗ"
        ], 
        correct: "SP chế biến từ gỗ được lắp ráp đầy đủ các bộ phận theo công dụng của sản phẩm, các chi tiết tháo rời của SP, khi lắp ráp có thể sử dụng được ngay theo công dụng của SP",
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
        question: "Theo Thông tư 26/2025/TT-BNNMT gỗ tròn (trừ gỗ rừng trồng, rừng tràm, rừng ngập mặn) là gỗ có kích thước như thế nào?", 
        options: ["có đường kính đầu nhỏ từ 6 cm đến dưới 20 cm và chiều dài từ 01 mét trở lên", "có đường kính đầu nhỏ từ 10 cm đến dưới 20 cm và chiều dài từ 01 mét trở lên", "có đường kính đầu to từ 10 cm đến dưới 20 cm và chiều dài từ 01 mét trở lên", "các đáp án trên đều đúng"], 
        correct: "có đường kính đầu nhỏ từ 10 cm đến dưới 20 cm và chiều dài từ 01 mét trở lên",
        explanation: "điểm c khoản 1 Điều 3 Thông tư 26/2025/TT-BNNMT, gỗ tròn là Gỗ có đường kính đầu nhỏ từ 10 (cm) đến dưới 20 cm và chiều dài từ 01 (m) trở lên; Gỗ có đường kính đầu nhỏ từ 20 cm trở lên và chiều dài từ 30 cm trở lên"
    },
    
{ 
        question: "Theo Thông tư 26/2025/TT-BNNMT, kiểu gỗ nào sau đây không được coi là 'gỗ tròn'?", 
        options: ["Gỗ nguyên khai cắt khúc", "Gỗ bóc vỏ", "Gỗ lóc lõi", "Gỗ xẻ thành thanh, tấm"], 
        correct: "Gỗ xẻ thành thanh, tấm",
        explanation: "Khoản 2 Thông tư 26/2025/TT-BNNMT: Gỗ tròn là gỗ nguyên khai, còn nguyên hình dạng sau khai thác chưa cắt khúc hoặc đã cắt khúc, gỗ bóc vỏ, gỗ lóc lõi nếu đáp ứng tiêu chuẩn về kích thước. Trong khi đó, gỗ đã đã bị tác động thành hình dạng thanh, tấm, hộp, tròn, khối trụ đa giác hoặc hình thù khác được coi là gỗ xẻ, gỗ đẽo."
    },
    { 
        question: "Theo Thông tư 26/2025/TT-BNNMT, 'thực vật ngoài gỗ' gồm nhóm nào sau đây?", 
        options: ["Song, mây, tre, nứa, cau, dừa, tuế, sim, mua; thực vật rừng thân thảo; nấm; củi, dẫn xuất, hạt, củ, quả, hoa, các bộ phận khác của cây gỗ", "Gỗ tròn", "Gỗ xẻ", "Ngà voi"], 
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
        question: "Trong trường hợp phải xác minh nguồn gốc lâm sản, thời hạn tối đa cơ quan Kiểm lâm trả kết quả xác nhận Bảng kê lâm sản kể từ ngày nhận đủ hồ sơ hợp lệ là bao lâu?", 
        options: ["02 ngày làm việc", "04 ngày làm việc", "03 ngày", "04 ngày"], 
        correct: "04 ngày làm việc",
        explanation: "Khoản 7 Điều 5 Thông tư 26/2025/TT-BNNMT Trường hợp cần xác minh nguồn gốc lâm sản trong 01 ngày làm việc kể từ ngày nhận được hồ sơ hợp lệ, cơ quan Kiểm lâm thông báo cho chủ lâm sản về việc xác minh; trong thời hạn không quá 03 ngày làm việc kể từ ngày thông báo, cơ quan Kiểm lâm sở tại tiến hành xác minh, và hoàn thành xác nhận Bảng kê lâm sản"
    },
{ 
        question: "Hồ sơ đề nghị xác nhận bảng kê lâm sản sau khai thác của chủ rừng phải có tài liệu nào sau đây?", 
        options: ["Bản sao bảng kê lâm sản đề nghị xác nhận", "Bản sao Sổ theo dõi nhập, xuất lâm sản đối với chủ lâm sản là tổ chức, hộ kinh doanh xuất bán lâm sản", "Bản sao Phương án khai thác", "Bản sao Bảng kê lâm sản mua bán, chuyển giao quyền sở hữu liền kề trước đó"], 
        correct: "Bản sao Phương án khai thác",
        explanation: "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT quy định ngoài bản chính đơn đề nghị xác nhận và bảng kê lâm sản, còn thêm Bản sao Phương án khai thác đối với trường hợp xác nhận bảng kê lâm sản sau khai thác"
    },
{ 
        question: "Trong trường hợp động vật nguy cấp, quý, hiếm đe dọa xâm hại tài sản hoặc tính mạng của con người, tổ chức, hộ gia đình, cá nhân phải làm gì sau đây là đúng nhất?", 
        options: ["Áp dụng các biện pháp ngăn chặn, xua đuổi, hạn chế gây tổn thương đến động vật, đồng thời thông tin ngay đến Sở NN&MT hoặc UBND cấp xã gần nhất", "Được phép tự do săn bắt, bẫy hoặc giết động vật để bảo đảm an toàn cho người và tài sản", "Tự ý nuôi nhốt động vật để bàn giao sau khi thấy không còn nguy hiểm", "Báo tin cho cơ quan công an địa phương nhưng không cần thực hiện biện pháp ngăn chặn, xua đuổi"], 
        correct: "Áp dụng các biện pháp ngăn chặn, xua đuổi, hạn chế gây tổn thương đến động vật, đồng thời thông tin ngay đến Sở NN&MT hoặc UBND cấp xã gần nhất",
        explanation: "Điều 9 Thông tư 27/2025/TT-BNNMT Trong trường hợp động vật nguy cấp, quý, hiếm đe dọa xâm hại tài sản hoặc tính mạng của con người, phải áp dụng các biện pháp ngăn chặn, xua đuổi, hạn chế gây tổn thương đến động vật, thông tin đến Sở NN&MT hoặc UBND cấp xã"
    },

{ 
        question: "Theo Thông tư số 27/2025/TT-BNNMT, khái niệm động vật rừng thế hệ F2 hoặc thế hệ kế tiếp là gì?", 
        options: ["Là cá thể được sinh ra trong môi trường có kiểm soát bởi cặp bố, mẹ từ thế hệ F1 trở đi", "là cá thể được sinh ra trong môi trường có kiểm soát, trong đó có ít nhất bố hoặc mẹ được khai thác từ tự nhiên", "Là cá thể được sinh ra trong môi trường có kiểm soát từ cặp bố, mẹ đều có nguồn gốc từ tự nhiên (thế hệ gốc)", "Là cá thể được sinh ra trong môi trường có kiểm soát từ cặp bố, mẹ đều có nguồn gốc từ tự nhiên (thế hệ gốc)"], 
        correct: "Là cá thể được sinh ra trong môi trường có kiểm soát bởi cặp bố, mẹ từ thế hệ F1 trở đi",
        explanation: "Khoản 19 Điều 3 Thông tư 26/2025/TT-BNNMT quy định Là cá thể được sinh ra trong môi trường có kiểm soát bởi cặp bố, mẹ từ thế hệ F1 trở đi"
    },
{ 
        question: "Theo Thông tư số 27/2025/TT-BNNMT, hình thức nuôi động vật rừng để sản sinh ra thế hệ kế tiếp trong môi trường có kiểm soát còn được goi là gì?", 
        options: ["Nuôi sinh trưởng", "Nuôi sinh sản", "Nuôi bán hoang dã", "Nuôi thuần dưỡng"], 
        correct: "Nuôi sinh sản",
        explanation: "Khoản 16 Điều 3 Thông tư 26/2025/TT-BNNMT quy định Nuôi sinh sản là hình thức nuôi động vật để sản sinh ra thế hệ kế tiếp trong môi trường có kiểm soát"
    },
{ 
        question: "Trong thời hạn bao lâu kể từ ngày đưa động vật, thực vật về cơ sở nuôi, trồng, tổ chức, cá nhân gửi thông báo và bản sao hồ sơ nguồn gốc mẫu vật đến cơ quan Kiểm lâm sở tại?", 
        options: ["03 ngày", "04 ngày", "02 ngày làm việc", "03 ngày làm việc"], 
        correct: "03 ngày làm việc",
        explanation: "Khoản 3 Điều 24 và khoản 1 Điều 25 Thông tư 26/2025/TT-BNNMT trong thời hạn 03 ngày làm việc, kể từ ngày đưa động vật, thực vật về cơ sở nuôi, trồng, tổ chức, cá nhân gửi thông báo và bản sao hồ sơ nguồn gốc mẫu vật đến cơ quan Kiểm lâm sở tại"
    },

{ 
        question: "Theo Thông tư số 27/2025/TT-BNNMT, khái niệm động vật rừng thế hệ F1 là gì?", 
        options: ["Là cá thể được sinh ra trong môi trường tự nhiên, không có tác động của con người", "Là cá thể được sinh ra trong môi trường có kiểm soát, trong đó có ít nhất bố hoặc mẹ được khai thác từ tự nhiên", "Là cá thể được sinh ra trong môi trường tự nhiên không kiểm soát, trong đó có ít nhất bố hoặc mẹ được nuôi nhốt", "Là cá thể được sinh ra trong môi trường có kiểm soát, trong đó cả bố và mẹ đều là F1"], 
        correct: "Là cá thể được sinh ra trong môi trường có kiểm soát, trong đó có ít nhất bố hoặc mẹ được khai thác từ tự nhiên",
        explanation: "Khoản 18 Điều 3 Thông tư 26/2025/TT-BNNMT quy định Là cá thể được sinh ra trong môi trường có kiểm soát, trong đó có ít nhất bố hoặc mẹ được khai thác từ tự nhiên"
    },
{ 
        question: "Trường hợp chủ cơ sở nuôi động vật rừng đề nghị xác nhận bảng kê lâm sản đối với động vật, sản phẩm của chúng thuộc Danh mục loài nguy cấp, quý, hiếm; Danh mục ĐVR thông thường..., ngoài bản chính bảng kê lâm sản và đơn đề nghị xác nhận BKLS, phải cung cấp thêm tài liệu gì để hồ sơ hợp lệ?", 
        options: ["Tất cả các phương án đều đúng", "Bản chính Mã số cơ sở nuôi do Cơ quan Kiểm lâm cấp tỉnh cấp", "Bản chính Sổ theo dõi nuôi động vật theo quy định của Bộ Nông nghiệp và Môi trường", "Bản sao Sổ theo dõi nuôi động vật theo quy định của Bộ Nông nghiệp và Môi trường"], 
        correct: "Bản chính Sổ theo dõi nuôi động vật theo quy định của Bộ Nông nghiệp và Môi trường",
        explanation: "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT quy định Bản chính Sổ theo dõi nuôi, trồng đối với chủ cơ sở nuôi động vật, trồng thực vật thuộc Danh mục loài nguy cấp, quý, hiếm hoặc động vật, thực vật hoang dã nguy cấp thuộc Phụ lục CITES"
    },

{ 
        question: "Hồ sơ đề nghị xác nhận bảng kê lâm sản sau khai thác của chủ rừng phải có tài liệu nào sau đây?", 
        options: ["Bản sao bảng kê lâm sản đề nghị xác nhận", "Bản sao Sổ theo dõi nhập, xuất lâm sản đối với chủ lâm sản là tổ chức, hộ kinh doanh xuất bán lâm sản", "Bản sao Phương án khai thác", "Bản sao Bảng kê lâm sản mua bán, chuyển giao quyền sở hữu liền kề trước đó"], 
        correct: "Bản sao Phương án khai thác",
        explanation: "Khoản 6 Điều 5 Thông tư 26/2025/TT-BNNMT quy định ngoài bản chính đơn đề nghị xác nhận và bảng kê lâm sản, còn thêm Bản sao Phương án khai thác đối với trường hợp xác nhận bảng kê lâm sản sau khai thác"
    },
    
{ 
        question: "Trong trường hợp không xác minh nguồn gốc lâm sản, thời hạn cơ quan Kiểm lâm trả kết quả xác nhận Bảng kê lâm sản kể từ ngày nhận đủ hồ sơ hợp lệ là bao lâu?", 
        options: ["01 ngày làm việc", "02 ngày làm việc", "02 ngày", "04 ngày"], 
        correct: "02 ngày làm việc",
        explanation: "Khoản 7 Điều 5 Thông tư 26/2025/TT-BNNMT quy định: trong thời hạn 02 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ, cơ quan Kiểm lâm sở tại phải xác nhận Bảng kê lâm sản. Đây là thời hạn tối đa, bảo đảm sự kịp thời trong lưu thông hàng hóa"
    },
    { 
        question: "Thông tư 26/2025/TT-BNNMT quy định thực vật rừng thông thường là gì?", 
        options: ["Loài thực vật có nguồn gốc từ rừng thuộc danh mục loài thực vật rừng thông thường", "Loài thực vật có nguồn gốc từ rừng không thuộc Danh mục loài nguy cấp, quý, hiếm và không thuộc Phụ lục CITES", "Loài thực vật không thuộc Danh mục loài nguy cấp, quý, hiếm", "Loài thực vật có nguồn gốc từ rừng không thuộc Danh mục loài nguy cấp, quý, hiếm và không thuộc Phụ lục CITES"], 
        correct: "Loài thực vật có nguồn gốc từ rừng không thuộc Danh mục loài nguy cấp, quý, hiếm và không thuộc Phụ lục CITES",
        explanation: "Khoản 7 Điều 3 Thông tư 26/2025/TT-BNNMT quy định: Thực vật rừng thông thường là loài thực vật có nguồn gốc từ rừng không thuộc Danh mục loài nguy cấp, quý, hiếm và không thuộc Phụ lục CITES"
    },

 { 
        question: "Gỗ tròn, gỗ xẻ, gỗ đẽo, ván các loại, dăm gỗ, bột gỗ, sợi gỗ và các loại gỗ đã chế biến hoặc chưa qua chế biến được sử dụng để làm nguyên liệu sản xuất sản phẩm gỗ được gọi chung là gì?", 
        options: ["Lâm sản tiền sản phẩm gỗ", "Gỗ nguyên liệu", "Gỗ bán thành phẩm", "Gỗ công nghiệp"], 
        correct: "Gỗ nguyên liệu",
        explanation: "Khoản 6 Điều 3 Thông tư 26/2025/TT-BNNMT quy định Gỗ nguyên liệu là gỗ tròn, gỗ xẻ, gỗ đẽo, ván các loại, dăm gỗ, bột gỗ, sợi gỗ và các loại gỗ đã chế biến hoặc chưa qua chế biến được sử dụng để làm nguyên liệu sản xuất sản phẩm gỗ"
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
        question: "Hồ sơ nhập khẩu gỗ thuộc Phụ lục CITES cần loại giấy tờ gì sau đây, chọn đáp án đúng nhất?", 
        options: ["Bản sao giấy phép CITES xuất khẩu hoặc tái xuất khẩu", "Bản chính hoặc bản điện tử giấy phép CITES nhập khẩu", "Cả giấy phép CITES từ nước xuất khẩu và giấy phép CITES nhập khẩu do Cơ quan CITES Việt Nam cấp", "Bảng kê lâm sản theo Thông tư 26/2025/TT-BNNMT"], 
        correct: "Cả giấy phép CITES từ nước xuất khẩu và giấy phép CITES nhập khẩu do Cơ quan CITES Việt Nam cấp",
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
        question: "Cơ quan nào sau đây có thẩm quyền cấp mã số cơ sở nuôi, cơ sở trồng các loài động vật thuộc Phụ lục Công ước CITES?", 
        options: ["Hạt Kiểm lâm sở tại", "Chi cục Chăn nuôi, thú y và thuỷ sản", "Cơ quan Kiểm lâm cấp tỉnh", "UBND cấp xã nơi đặt cơ sở nuôi, trồng"], 
        correct: "Cơ quan Kiểm lâm cấp tỉnh",
        explanation: "điểm a khoản 1 Điều 26 Thông tư 27/2025/TT-BNNMT quy định Cơ quan Kiểm lâm cấp tỉnh cấp mã số cơ sở nuôi, cơ sở trồng các loài động vật, thực vật thuộc Phụ lục Công ước CITES"
    },
{ 
        question: "Rắn hổ mang Trung Quốc, tên khoa học Naja atra thuộc loài động vật rừng nhóm nào sau đây?", 
        options: ["guy cấp, quý hiếm IB", "nguy cấp, quý hiếm IIB", "nhóm I CITES", "loài thông thường"], 
        correct: "nguy cấp, quý hiếm IIB",
        explanation: "Danh mục loài nguy cấp, quý, hiếm ban hành tại Phụ lục I kèm theo Thông tư 27/2025/TT-BNNMT"
    },
    { 
        question: "Cầy vòi mốc tên khoa học Paguma larvata, thuộc loài động vật rừng nhóm nào sau đây?", 
        options: ["guy cấp, quý hiếm IB", "nguy cấp, quý hiếm IIB", "nhóm I CITES", "loài thông thường"], 
        correct: "nguy cấp, quý hiếm IIB",
        explanation: "Danh mục loài nguy cấp, quý, hiếm ban hành tại Phụ lục I kèm theo Thông tư 27/2025/TT-BNNMT"
    },

 { 
        question: "Tài liệu nào sau đây nằm trong danh mục Hồ sơ đề nghị cấp mã số cơ sở nuôi, trồng các loài động vật, thực vật nguy cấp, quý hiếm, thuộc Phụ lục Công ước CITES?", 
        options: ["Hoá đơn mua bán động vật, thực vật nguy cấp, quý hiếm, thuộc Phụ lục Công ước CITES", " Giấy chứng nhận kiểm dịch động vật, sản phẩm động vật", "Bản chính phương án nuôi, trồng", "Bản sao phương án nuôi, trồng"], 
        correct: "Bản chính phương án nuôi, trồng",
        explanation: "điểm a khoản 1 Điều 26 Thông tư 27/2025/TT-BNNMT quy định Cơ quan Kiểm lâm cấp tỉnh cấp mã số cơ sở nuôi, cơ sở trồng các loài động vật, thực vật thuộc Phụ lục Công ước CITES"
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
        question: "Khi nào doanh nghiệp thuộc đối tượng tham gia phân loại doanh nghiệp được phân loại vào Nhóm II?", 
        options: ["Chưa tuân thủ quy định pháp luật về bảo đảm gỗ hợp pháp và quy định về quản lý, truy xuất nguồn gốc lâm sản", "Tuân thủ đầy đủ quy định của pháp luật trong việc thành lập và hoạt động ít nhất 01 năm kể từ ngày đăng ký thành lập doanh nghiệp", "Tuân thủ chế độ báo cáo và lưu giữ hồ sơ gốc theo quy định của pháp luật", "Khi doanh nghiệp chỉ xuất khẩu gỗ sang thị trường ngoài EU"], 
        correct: "Chưa tuân thủ quy định pháp luật về bảo đảm gỗ hợp pháp và quy định về quản lý, truy xuất nguồn gốc lâm sản",
        explanation: "quy định tại Điều 12 Nghị định số 102/2020/NĐ-CP"
    },
    { 
        question: "Theo Luật Lâm nghiệp, diện tích liền vùng tối thiểu là bao nhiêu để một hệ sinh thái gồm các loài thực vật rừng, động vật rừng, nấm, vi sinh vật, đất rừng..., trong đó thành phần chính là một hoặc một số loài cây thân gỗ, tre, nứa, cây họ cau có chiều cao được xác định theo hệ thực vật trên núi đất, núi đá, đất ngập nước, đất cát được coi là rừng?", 
        options: ["0.5 ha", "1.0 ha", "0.2 ha", "0.3 ha"], 
        correct: "0.3 ha",
        explanation: "khoản 3 Điều 2 luật Lâm nghiệp quy định diện tích liền vùng từ 0,3 ha trở lên"
    },
   { 
        question: "Theo Luật Lâm nghiệp, Rừng là một hệ sinh thái có độ tàn che (mức độ che kín của tán cây rừng theo phương thẳng đứng trên một đơn vị diện tích rừng được biểu thị bằng tỷ lệ phần mười) tối thiểu là bao nhiêu?", 
        options: ["0.2 ha", "0.5 ha", "0.1 ha", "0.3 ha"], 
        correct: "0.1 ha",
        explanation: "khoản 3 Điều 2 luật Lâm nghiệp quy định khai niệm rừng có độ tàn che từ 0,1 trở lên"
    },
    { 
        question: "Theo Luật Lâm nghiệp, Rừng tự nhiên là gì?", 
        options: ["Rừng được hình thành do di thực giống cây từ nơi khác về, có giá trị phòng hộ và bảo tồn", "Rừng có sẵn trong tự nhiên hoặc phục hồi bằng tái sinh tự nhiên hoặc tái sinh có trồng bổ sung", "Rừng hình thành từ việc trồng mới hoàn toàn bằng các loài cây bản địa", "Rừng được trồng lại sau khai thác, có sự hỗ trợ của con người là chủ yếu"], 
        correct: "Rừng có sẵn trong tự nhiên hoặc phục hồi bằng tái sinh tự nhiên hoặc tái sinh có trồng bổ sung",
        explanation: "khái niệm rừng tự nhiên được quy định tại khoản 6 Điều 2 Luật Lâm nghiệp"
    },
    { 
        question: "Theo Luật Lâm nghiệp, rừng trồng được hình thành do?", 
        options: ["phục hồi tự nhiên sau hoạt động nương rẫy của con người", "Tự tái sinh sau khi cháy rừng", "Rừng có nguồn gốc tự nhiên nhưng được con người khoanh nuôi và bảo vệ", "Con người trồng mới trên đất chưa có rừng; cải tạo rừng tự nhiên; trồng lại hoặc tái sinh sau khai thác rừng trồng"], 
        correct: "Con người trồng mới trên đất chưa có rừng; cải tạo rừng tự nhiên; trồng lại hoặc tái sinh sau khai thác rừng trồng",
        explanation: "khái niệm rừng trồng được quy định tại khoản 7 Điều 2 Luật Lâm nghiệp"
    },
    { 
        question: "Theo Luật Lâm nghiệp, chủ rừng (tổ chức, hộ gia đình, cá nhân, cộng đồng dân cư) gồm các đối tượng nào dưới đây?", 
        options: ["Được giao đất, cho thuê đất để trồng rừng; tự phục hồi, phát triển rừng", "Nhận chuyển nhượng, tặng cho, thừa kế rừng KHÔNG theo quy định của pháp luật", "Tự chiếm đất của tổ chức, cá nhân để trồng rừng của mình", "Cả A và B"], 
        correct: "Được giao đất, cho thuê đất để trồng rừng; tự phục hồi, phát triển rừng",
        explanation: "Khoản 9 Điều 2 Luật Lâm nghiệp: Chủ rừng là tổ chức, hộ gia đình, cá nhân, cộng đồng dân cư được Nhà nước giao rừng, cho thuê rừng; giao đất, cho thuê đất để trồng rừng; tự phục hồi, phát triển rừng; nhận chuyển nhượng, tặng cho, thừa kế rừng THEO quy định của pháp luật"
    },
{ 
        question: "Theo Luật Lâm nghiệp, Quyền sở hữu rừng sản xuất là rừng trồng bao gồm các quyền nào?", 
        options: ["Quyền định đoạt đối với cây trồng do chủ rừng đầu tư trong thời hạn được giao, được thuê để trồng rừng", "Quyền chiếm hữu đối với cây trồng do chủ rừng đầu tư không trong thời hạn được giao, được thuê để trồng rừng", "Quyền định đoạt của chủ rừng đối với cây trồng, vật nuôi và tài sản khác gắn liền với rừng không do chủ rừng đầu tư", "Quyền sử dụng của chủ rừng đối với cây trồng, vật nuôi và tài sản khác gắn liền với rừng không do chủ rừng đầu tư"], 
        correct: "Quyền định đoạt đối với cây trồng do chủ rừng đầu tư trong thời hạn được giao, được thuê để trồng rừng",
        explanation: "Khoản 10 Điều 2 Luật Lâm nghiệp: Quyền sở hữu rừng sản xuất là rừng trồng bao gồm quyền chiếm hữu, quyền sử dụng, quyền định đoạt của chủ rừng đối với cây trồng, vật nuôi và tài sản khác gắn liền với rừng do chủ rừng đầu tư trong thời hạn được giao, được thuê để trồng rừng"
    },
{ 
        question: "Theo Luật Lâm nghiệp, Lâm sản là gì?", 
        options: ["Lâm sản là sản phẩm thu được từ hoạt động nuôi trồng thủy sản trong rừng ngập mặn", "là sản phẩm khai thác từ rừng bao gồm thực vật rừng, động vật rừng và các sinh vật rừng khác gồm cả gỗ, lâm sản ngoài gỗ, sản phẩm gỗ, song, mây, tre, nứa đã chế biến", "là sản phẩm khai thác từ rừng bao gồm thực vật rừng, động vật rừng và các sinh vật rừng (gỗ, lâm sản ngoài gỗ), không bao gồm sản phẩm gỗ, song, mây, tre, nứa đã chế biến", "Lâm sản là mọi loại khoáng sản, thổ nhưỡng và nguồn nước được khai thác trong khu vực rừng"], 
        correct: "là sản phẩm khai thác từ rừng bao gồm thực vật rừng, động vật rừng và các sinh vật rừng khác gồm cả gỗ, lâm sản ngoài gỗ, sản phẩm gỗ, song, mây, tre, nứa đã chế biến",
        explanation: "Khoản 16 Điều 2 Luật Lâm nghiệp: Lâm sản là sản phẩm khai thác từ rừng bao gồm thực vật rừng, động vật rừng và các sinh vật rừng khác gồm cả gỗ, lâm sản ngoài gỗ, sản phẩm gỗ, song, mây, tre, nứa đã chế biến."
    },
{ 
        question: "Theo quy định về phân loại rừng, căn cứ vào mục đích sử dụng chủ yếu, rừng tự nhiên và rừng trồng được phân thành mấy loại?", 
        options: ["04 loại", "02 loại", "05 loại", "03 loại"], 
        correct: "03 loại",
        explanation: "Khoản 1 Điều 5 Luật Lâm nghiệp: Căn cứ vào mục đích sử dụng chủ yếu, rừng tự nhiên và rừng trồng được phân thành 03 loại Rừng đặc dụng; Rừng phòng hộ; Rừng sản xuất"
    },
{ 
        question: "Phân theo mức độ xung yếu, rừng phòng hộ bao gồm?", 
        options: ["Rừng phòng hộ chắn gió, chắn cát bay ven biển; rừng phòng hộ bảo vệ đê điều; rừng phòng hộ cảnh quan đô thị", "Rừng phòng hộ chắn gió, chắn cát bay; rừng phòng hộ chắn sóng, lấn biển; rừng phòng hộ quốc gia", "Rừng phòng hộ chắn gió, chắn cát bay; rừng phòng hộ chắn sóng, lấn biển; rừng phòng hộ dự trữ thiên nhiên", "Rừng phòng hộ đầu nguồn; rừng bảo vệ nguồn nước của cộng đồng dân cư; rừng phòng hộ biên giới"], 
        correct: "Rừng phòng hộ đầu nguồn; rừng bảo vệ nguồn nước của cộng đồng dân cư; rừng phòng hộ biên giới",
        explanation: "Khoản 3 Điều 5 Luật Lâm nghiệp: RPH bao gồm: Rừng phòng hộ đầu nguồn; rừng bảo vệ nguồn nước của cộng đồng dân cư; rừng phòng hộ biên giới; Rừng phòng hộ chắn gió, chắn cát bay; rừng phòng hộ chắn sóng, lấn biển"
    },
{ 
        question: "Rừng sản xuất được sử dụng chủ yếu để làm gì?", 
        options: ["để bảo tồn đa dạng sinh học, bảo vệ di tích lịch sử và nghiên cứu khoa học, cung ứng dịch vụ môi trường rừng", "cung cấp lâm sản; sản xuất, kinh doanh lâm, nông, ngư nghiệp kết hợp; du lịch sinh thái, nghỉ dưỡng, giải trí; cung ứng dịch vụ môi trường rừng", "để phòng sản xuất ở đầu nguồn, bảo vệ nguồn nước và môi trường sinh thái", "để làm khu vực định cư, phát triển đô thị và hạ tầng giao thông trong rừng"], 
        correct: "cung cấp lâm sản; sản xuất, kinh doanh lâm, nông, ngư nghiệp kết hợp; du lịch sinh thái, nghỉ dưỡng, giải trí; cung ứng dịch vụ môi trường rừng",
        explanation: "Khoản 4 Điều 5 Luật Lâm nghiệp: Rừng sản xuất được sử dụng chủ yếu để cung cấp lâm sản; sản xuất, kinh doanh lâm, nông, ngư nghiệp kết hợp; du lịch sinh thái, nghỉ dưỡng, giải trí; cung ứng dịch vụ môi trường rừng"
    },
{ 
        question: "Nhà nước là đại diện chủ sở hữu đối với rừng nào?", 
        options: ["Rừng do hộ gia đình, cá nhân, cộng đồng dân cư đầu tư", "Rừng trồng do các công ty lâm nghiệp đầu tư", "Rừng tự nhiên", "Rừng được do cá nhân nhận chuyển nhượng, tặng cho, thừa kế rừng từ chủ rừng khác theo quy định của pháp luật"], 
        correct: "Rừng tự nhiên",
        explanation: "Khoản 1 Điều 7 Luật Lâm nghiệp: Nhà nước là đại diện chủ sở hữu đối với rừng thuộc sở hữu toàn dân: Rừng tự nhiên; Rừng trồng do Nhà nước đầu tư toàn bộ; Rừng trồng do Nhà nước thu hồi, được tặng cho hoặc trường hợp chuyển quyền sở hữu rừng trồng khác theo quy định của pháp luật"
    },
{ 
        question: "Những đối tượng nào sau đây không phải là chủ rừng?", 
        options: ["Hộ gia đình, cá nhân trong nước", "Cộng đồng dân cư", "Doanh nghiệp có vốn đầu tư nước ngoài được Nhà nước cho thuê đất để trồng rừng sản xuất", "Tổ chức khoa học và công nghệ, đào tạo, giáo dục nghề nghiệp về lâm nghiệp nước ngoài"], 
        correct: "Tổ chức khoa học và công nghệ, đào tạo, giáo dục nghề nghiệp về lâm nghiệp nước ngoài",
        explanation: "chỉ Doanh nghiệp có vốn đầu tư nước ngoài được Nhà nước cho thuê đất để trồng rừng sản xuất mới được coi là chủ rừng có yếu tố nước ngoài"
    },
{ 
        question: "Đâu là hành vi bị nghiêm cấm trong hoạt động lâm nghiệp?", 
        options: ["Trồng rừng sản xuất bằng cây ngoại lai đã được phép đưa vào trồng ở Việt Nam", "Săn, bắt, nuôi, nhốt, giết, tàng trữ, vận chuyển, buôn bán động vật rừng, thu thập mẫu vật các loài thực vật rừng, động vật rừng trái quy định của pháp luật", "Khai thác lâm sản ngoài gỗ từ rừng tự nhiên theo hạn ngạch và giấy phép hợp pháp", "Tổ chức hoạt động tham quan, du lịch sinh thái trong khu rừng đặc dụng theo quy hoạch được phê duyệt"], 
        correct: "Săn, bắt, nuôi, nhốt, giết, tàng trữ, vận chuyển, buôn bán động vật rừng, thu thập mẫu vật các loài thực vật rừng, động vật rừng trái quy định của pháp luật",
        explanation: "Hành vi bị nghiêm cấm trong hoạt động lâm nghiệp quy định tại Điều 9 Luật Lâm nghiệp"
    },
{ 
        question: "Các dự án nào sau đây được chuyển mục đích sử dụng rừng tự nhiên sang mục đích khác?", 
        options: ["Dự án phát triển khu du lịch sinh thái, nghỉ dưỡng và giải trí thương mại phục theo kế hoạch của địa phương", "Dự án xây dựng khu đô thị, khu dân cư mới trên đất rừng tự nhiên", "Dự án quan trọng quốc gia; dự án phục vụ quốc phòng, an ninh", "Dự án khai thác khoáng sản, thủy điện thương mại nhằm mục đích kinh tế"], 
        correct: "Dự án quan trọng quốc gia; dự án phục vụ quốc phòng, an ninh",
        explanation: "khoản 2 Điều 14 Luật Lâm nghiệp: Không chuyển mục đích sử dụng rừng tự nhiên sang mục đích khác, trừ các dự án quan trọng quốc gia; dự án phục vụ quốc phòng, an ninh; dự án cấp thiết khác theo tiêu chí do Chính phủ quy định."
    },
{ 
        question: "Chủ rừng có được cho tổ chức, hộ gia đình, cá nhân khác thuê diện tích rừng tự nhiên, rừng trồng do Nhà nước đầu tư không?", 
        options: ["Không", "Có, nhưng chỉ được thuê ngắn hạn dưới 5 năm và phải được cơ quan quản lý nhà nước phê duyệt", "Có, nếu mục đích thuê để phát triển du lịch sinh thái và không làm thay đổi hiện trạng rừng", "Có, miễn là bên thuê cam kết bảo vệ và phát triển rừng theo quy hoạch"], 
        correct: "Không",
        explanation: "khoản 4 Điều 14 Luật Lâm nghiệp: Chủ rừng không được cho tổ chức, hộ gia đình, cá nhân khác thuê diện tích rừng tự nhiên, rừng trồng do Nhà nước đầu tư."
    },
{ 
        question: "Quy định nào là đúng về khai thác rừng phòng hộ là rừng trồng?", 
        options: ["Được khai thác toàn bộ rừng phòng hộ là rừng trồng bằng phương thức chặt trắng không cần theo quy hoạch", "Được khai thác cây trồng chính khi đạt tiêu chuẩn khai thác theo phương thức khai thác chọn hoặc chặt trắng theo băng, đám rừng", "Chỉ được khai thác khi toàn bộ rừng phòng hộ là rừng trồng đã quá tuổi sinh trưởng, không phân biệt loài cây", "Được khai thác tự do các loài cây phụ trợ và cây chính trong mọi giai đoạn phát triển của rừng"], 
        correct: "Được khai thác cây trồng chính khi đạt tiêu chuẩn khai thác theo phương thức khai thác chọn hoặc chặt trắng theo băng, đám rừng",
        explanation: "điểm b khoản 3 Điều 55 Luật Lâm nghiệp: Được khai thác cây trồng chính khi đạt tiêu chuẩn khai thác theo phương thức khai thác chọn hoặc chặt trắng theo băng, đám rừng"
    },
{ 
        question: "Có được khai thác cây phụ trợ, chặt tỉa thưa khi rừng trồng phòng hộ có mật độ lớn hơn mật độ quy định không?", 
        options: ["Không, rừng phòng hộ là rừng trồng chỉ được phép khai thác khi toàn bộ rừng đến tuổi", "Không, mọi hoạt động chặt tỉa trong rừng phòng hộ đều bị cấm để giữ nguyên mật độ", "Không, chỉ được phép khai thác cây phụ trợ khi có quyết định đặc biệt của Thủ tướng Chính phủ", "Có"], 
        correct: "Có",
        explanation: "điểm a khoản 3 Điều 55 Luật Lâm nghiệp: Được khai thác cây phụ trợ, chặt tỉa thưa khi rừng trồng có mật độ lớn hơn mật độ quy định"
    },
{ 
        question: "Đáp án nào dưới đây được coi là dịch vụ môi trường rừng?", 
        options: ["Bảo vệ đất, hạn chế xói mòn và bồi lắng lòng hồ, lòng sông, lòng suối", "Khai thác lâm sản ngoài gỗ để phát triển kinh tế hộ gia đình", "Chăn thả gia súc, gia cầm trong rừng để tận dụng thảm thực bì", "Xây dựng khu nghỉ dưỡng sinh thái và thu phí dịch vụ du lịch"], 
        correct: "Bảo vệ đất, hạn chế xói mòn và bồi lắng lòng hồ, lòng sông, lòng suối",
        explanation: "Điều 61 Luật Lâm nghiệp: có 5 loại dịch vụ môi trường rừng, trong đó có dịch vụ: Bảo vệ đất, hạn chế xói mòn và bồi lắng lòng hồ, lòng sông, lòng suối"
    },
{ 
        question: "Có mấy loại dịch vụ môi trường rừng?", 
        options: ["4", "5", "6", "7"], 
        correct: "5",
        explanation: "Điều 61 Luật Lâm nghiệp: có 5 loại dịch vụ môi trường rừng."
    },
{ 
        question: "Đối tượng nào sau đây khi sử dụng dịch vụ phải chi trả tiền dịch vụ môi trường rừng?", 
        options: ["Trường học, bệnh viện công lập hoạt động trong khu vực miền núi", "Hộ gia đình sử dụng nước sinh hoạt hàng ngày từ sông, suối", "Cơ sở sản xuất thủy điện, sản xuất và cung ứng nước sạch, Tổ chức, cá nhân kinh doanh dịch vụ du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng", "Doanh nghiệp khai thác khoáng sản trong khu vực rừng đặc dụng"], 
        correct: "Cơ sở sản xuất thủy điện, sản xuất và cung ứng nước sạch, Tổ chức, cá nhân kinh doanh dịch vụ du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng",
        explanation: "khoản 2 Điều 63 Luật Lâm nghiệp: có 7 nhóm đối tượng phải chi trả tiền dịch vụ môi trường rừng bao gồm Cơ sở sản xuất thủy điện, sản xuất và cung ứng nước sạch, Tổ chức, cá nhân kinh doanh dịch vụ du lịch sinh thái, nghỉ dưỡng, giải trí trong rừng"
    },
{ 
        question: "Đáp án nào sau đây là nghĩa vụ của Cơ sở thương mại lâm sản?", 
        options: ["Được Kinh doanh những mặt hàng lâm sản Nhà nước không cấm", "Chỉ cần đăng ký kinh doanh theo quy định, không bắt buộc tuân thủ các quy định về hồ sơ lâm sản hợp pháp", "Có nghĩa vụ ưu tiên xuất khẩu lâm sản thô thay vì chế biến sâu trong nước", "Tuân thủ quy định của pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, lao động, tài chính; QĐ về hồ sơ lâm sản hợp pháp và kiểm tra nguồn gốc lâm sản"], 
        correct: "Tuân thủ quy định của pháp luật về đầu tư, doanh nghiệp, bảo vệ môi trường, lao động, tài chính; QĐ về hồ sơ lâm sản hợp pháp và kiểm tra nguồn gốc lâm sản",
        explanation: "khoản 2 Điều 71 Luật Lâm nghiệp: quy định nghĩa vụ của Cơ sở thương mại lâm sản"
    },
{ 
        question: "Đáp án nào sau đây là đúng nhất về nghĩa vụ chung của chủ rừng?", 
        options: ["Tất cả các đáp án đều đúng", "Thực hiện quy định về theo dõi diễn biến rừng", "Trả lại rừng khi Nhà nước thu hồi rừng theo quy định", "Phòng cháy và chữa cháy rừng; phòng, trừ sinh vật gây hại rừng"], 
        correct: "Tất cả các đáp án đều đúng",
        explanation: "Điều 74 Luật Lâm nghiệp: quy định Nghĩa vụ chung của chủ rừng bao gồm tất cả các đáp án trên"
    },
{ 
        question: "Theo Nghị định số 156/2018/NĐ-CP ngày 16 tháng 11 năm 2018 của Chính phủ quy định chi tiết thi hành một số điều của Luật Lâm nghiệp Diện tích liền vùng là?", 
        options: ["Diện tích vùng đất có rừng tập trung, khoảng cách giữa các dải rừng không vượt quá 50 m và tổng diện tích khoảng trống không quá 20%", "diện tích vùng đất có rừng tập trung, liên tục, khoảng cách giữa các dải rừng không vượt quá 30 m và tổng diện tích các khoảng trống không quá 30% diện tích", "Diện tích vùng đất có rừng phân tán, khoảng cách giữa các dải rừng không vượt quá 100 m và tổng diện tích khoảng trống không quá 40%", "Diện tích vùng đất có rừng tập trung, liên tục, khoảng cách giữa các dải rừng không vượt quá 20 m và tổng diện tích khoảng trống không quá 10%"], 
        correct: "Diện tích vùng đất có rừng tập trung, liên tục, khoảng cách giữa các dải rừng không vượt quá 30 m và tổng diện tích các khoảng trống không quá 30% diện tích",
        explanation: "Khái niệm diện tích liền vùng được quy định tại khoản 2 Điều 3 Nghị định số 156/2018/NĐ-CP"
    },
{ 
        question: "Theo Luật Xử lý vi phạm hành chính, người từ đủ 14 tuổi đến dưới 16 tuổi bị xử phạt vi phạm hành chính khi nào?", 
        options: ["Bị xử phạt vi phạm hành chính về mọi hành vi, dù cố ý hay vô ý", "Vi phạm hành chính do cố ý", "Chỉ bị xử phạt vi phạm hành chính khi gây thiệt hại về tài sản từ 2 triệu đồng trở lên", "Không bị xử phạt vi phạm hành chính trong bất kỳ trường hợp nào, chỉ áp dụng biện pháp giáo dục"], 
        correct: "Vi phạm hành chính do cố ý",
        explanation: "điểm a khoản 1 Điều 5 Luật xử lý Vi phạm hành chính quy định Người từ đủ 14 tuổi đến dưới 16 tuổi bị xử phạt vi phạm hành chính về vi phạm hành chính do cố ý; người từ đủ 16 tuổi trở lên bị xử phạt vi phạm hành chính về mọi vi phạm hành chính"
    },
{ 
        question: "Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp là bao nhiêu?", 
        options: ["01 năm", "06 tháng", "02 năm", "03 năm"], 
        correct: "02 năm",
        explanation: "điểm a khoản 1 Điều 6 Luật xử lý Vi phạm hành chính quy định Thời hiệu xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp là 02 năm"
    },
{ 
        question: "Trong Luật Xử lý vi phạm hành chính, tình tiết nào sau đây được quy định la tình tiết giảm nhẹ?", 
        options: ["Người vi phạm hành chính đã có hành vi ngăn chặn, làm giảm bớt hậu quả của vi phạm hoặc tự nguyện khắc phục hậu quả, bồi thường thiệt hại", "Người vi phạm hành chính đã tự nguyện khai báo, thành thật hối lỗi", "Vi phạm hành chính do trình độ lạc hậu", "Tất cả các đáp án đều đúng"], 
        correct: "Tất cả các đáp án đều đúng",
        explanation: " Điều 9 Luật xử lý Vi phạm hành chính quy định tình tiết giảm nhẹ bao gồm tất cả các đáp án trên"
    },
{ 
        question: "Trong Luật Xử lý vi phạm hành chính, tình tiết nào sau đây được quy định la tình tiết giảm nhẹ?", 
        options: ["Vi phạm hành chính vì hoàn cảnh đặc biệt khó khăn", "Vi phạm hành chính do trình độ lạc hậu", "Người vi phạm hành chính thuộc hộ nghèo theo quy định của pháp luật", "Tất cả các đáp án đều đúng"], 
        correct: "Vi phạm hành chính do trình độ lạc hậu",
        explanation: "khoản 7 Điều 9 Luật xử lý Vi phạm hành chính quy định tình tiết giảm nhẹ Vi phạm hành chính do trình độ lạc hậu. Các tình tiết còn lại không được coi là tình tiết giảm nhẹ"
    },
{ 
        question: "Trong Luật Xử lý vi phạm hành chính, tình tiết nào sau đây được quy định la tình tiết tăng nặng?", 
        options: ["Lợi dụng hoàn cảnh chiến tranh, thiên tai, thảm họa, dịch bệnh hoặc những khó khăn đặc biệt khác của xã hội để vi phạm hành chính", "Sau khi vi phạm đã không trốn tránh, che giấu vi phạm hành chính", "Vi phạm hành chính có quy mô không nhỏ, số lượng hoặc trị giá hàng hóa không nhỏ", "Chấm dứt hành vi vi phạm hành chính khi người có thẩm quyền đã yêu cầu"], 
        correct: "Lợi dụng hoàn cảnh chiến tranh, thiên tai, thảm họa, dịch bệnh hoặc những khó khăn đặc biệt khác của xã hội để vi phạm hành chính",
        explanation: "quy định tại điểm g khoản 1 Điều 10 Luật xử lý Vi phạm hành chính"
    },
{ 
        question: "Trong Luật Xử lý vi phạm hành chính, tình tiết nào sau đây được quy định la tình tiết tăng nặng?", 
        options: ["Lợi dụng hoàn cảnh các ngày lễ, tết, sự kiện kỷ niệm trọng đại của quốc gia để vi phạm hành chính", "Che giấu cho người vi phạm hành chính", "Vi phạm hành chính nhiều lần; tái phạm", "Vi phạm hành chính vượt quá giới hạn phòng vệ chính đáng; vượt quá yêu cầu của tình thế cấp thiết"], 
        correct: "Vi phạm hành chính nhiều lần; tái phạm",
        explanation: "quy định tại điểm g khoản 1 Điều 10 Luật xử lý Vi phạm hành chính"
    },
{ 
        question: "Theo Luật Xử lý vi phạm hành chính, vi phạm hành chính nhiều lần là?", 
        options: ["Cá nhân, tổ chức thực hiện hành vi VPHC mà trước đó đã thực hiện hành vi VPHC này nhưng chưa bị xử lý và chưa hết thời hiệu xử lý", "Cá nhân, tổ chức thực hiện hành vi VPHC mà trước đó đã thực hiện hành vi VPHC này nhưng chưa bị xử lý và đã hết thời hiệu xử lý", "cá nhân, tổ chức câu kết với cá nhân, tổ chức khác để cùng thực hiện hành vi vi phạm hành chính", "cá nhân, tổ chức đã bị ra quyết định xử phạt VPHC nhưng chưa hết thời hạn được coi là chưa bị xử phạt VPHC mà lại thực hiện hành vi VPHC đã bị xử phạt"], 
        correct: "Cá nhân, tổ chức thực hiện hành vi VPHC mà trước đó đã thực hiện hành vi VPHC này nhưng chưa bị xử lý và chưa hết thời hiệu xử lý",
        explanation: "quy định tại khoản 6 Điều 2 Luật xử lý Vi phạm hành chính"
    },
{ 
        question: "Theo Luật Xử lý vi phạm hành chính, tái phạm là?", 
        options: ["Trường hợp cá nhân, tổ chức thực hiện hành vi VPHC mà trước đó đã thực hiện hành vi VPHC này nhưng chưa bị xử lý ", "Cá nhân, tổ chức đã bị ra quyết định xử phạt VPHC nhưng chưa hết thời hạn được coi là chưa bị xử phạt VPHC mà lại thực hiện hành vi VPHC đã bị xử phạt", "Cá nhân, tổ chức đã bị ra quyết định xử phạt VPHC, đã đến thời hạn được coi là chưa bị xử phạt VPHC mà lại thực hiện hành vi VPHC đã bị xử phạt", "Trường hợp cá nhân, tổ chức thực hiện hành vi VPHC mà trước đó đã thực hiện hành vi VPHC và đã bị xử lý"], 
        correct: "Cá nhân, tổ chức đã bị ra quyết định xử phạt VPHC nhưng chưa hết thời hạn được coi là chưa bị xử phạt VPHC mà lại thực hiện hành vi VPHC đã bị xử phạt",
        explanation: "quy định tại khoản 5 Điều 2 Luật xử lý Vi phạm hành chính"
    },
{ 
        question: "Theo Luật Xử lý vi phạm hành chính, quy định bao nhiêu hình thức xử phạt?", 
        options: ["5", "4", "6", "3"], 
        correct: "5",
        explanation: "khoản 1 Điều 51 Luật xử lý Vi phạm hành chính quy định 5 hình thức xử phạt: Cảnh cáo; Phạt tiền; Tước quyền sử dụng giấy phép, chứng chỉ hành nghề có thời hạn hoặc đình chỉ hoạt động có thời hạn; Tịch thu tang vật VPHC, phương tiện được sử dụng để VPHC; Trục xuất"
    },
{ 
        question: "Trường hợp nào cá nhân bị xử phạt được áp dụng hoãn thi hành quyết định phạt tiền?", 
        options: ["Cá nhân đang gặp khó khăn về kinh tế", "Cá nhân chưa có việc làm ổn định hoặc có thu nhập thấp", "Cá nhân đang gặp khó khăn về kinh tế do thiên tai, thảm họa, hỏa hoạn, dịch bệnh, mắc bệnh hiểm nghèo, tai nạn", "Cá nhân đang cư trú ở vùng sâu, vùng xa, đi lại khó khăn để nộp phạt"], 
        correct: "Cá nhân đang gặp khó khăn về kinh tế do thiên tai, thảm họa, hỏa hoạn, dịch bệnh, mắc bệnh hiểm nghèo, tai nạn",
        explanation: "điểm b khoản 1 Điều 76 Luật xử lý Vi phạm hành chính quy định trường hợp cá nhân đang gặp khó khăn theo quy định trên phải có xác nhận của cơ quan, tổ chức có thẩm quyền"
    },
{ 
        question: "Nếu quá thời hạn thi hành quyết định xử phạt, ngoài việc bị bị cưỡng chế thi hành quyết định xử phạt, cá nhân, tổ chức vi phạm phải...?", 
        options: ["Cứ mỗi ngày chậm nộp tiền phạt phải nộp thêm 0,5% tính trên số tiền phạt chưa nộp", "Cứ mỗi tuần chậm nộp tiền phạt phải nộp thêm 0,05% tính trên tổng số tiền phạt", "Cứ mỗi ngày chậm nộp tiền phạt phải nộp thêm 0,005% tính trên số tiền phạt còn lại", "Cứ mỗi ngày chậm nộp tiền phạt phải nộp thêm 0,05% tính trên tổng số tiền phạt chưa nộp"], 
        correct: "Cứ mỗi ngày chậm nộp tiền phạt phải nộp thêm 0,05% tính trên tổng số tiền phạt chưa nộp",
        explanation: "khoản 1 Điều 78 Luật xử lý Vi phạm hành chính quy định Nếu quá thời hạn nêu trên sẽ bị cưỡng chế thi hành quyết định xử phạt và cứ mỗi ngày chậm nộp tiền phạt thì cá nhân, tổ chức vi phạm phải nộp thêm 0,05% tính trên tổng số tiền phạt chưa nộp"
    },
{ 
        question: "Trường hợp người bị xử phạt đang gặp khó khăn đặc biệt về kinh tế và có đơn đề nghị nộp tiền phạt nhiều lần, tổng thời hạn để nộp tiền và mức nộp phạt tối thiểu lần thứ nhất là bao nhiêu?", 
        options: ["Thời hạn không quá 3 tháng và mức nộp phạt tối thiểu là 30% tổng số tiền phạt", "Thời hạn không quá 6 tháng và mức nộp phạt tối thiểu là 40% tổng số tiền phạt", "Thời hạn không quá 6 tháng và mức nộp phạt tối thiểu là 50% tổng số tiền phạt", "Thời hạn không quá 3 tháng và mức nộp phạt tối thiểu là 50% tổng số tiền phạt"], 
        correct: "Thời hạn không quá 6 tháng và mức nộp phạt tối thiểu là 40% tổng số tiền phạt",
        explanation: "Điều 79 Luật xử lý Vi phạm hành chính quy định Thời hạn nộp tiền phạt nhiều lần không quá 06 tháng, kể từ ngày quyết định xử phạt có hiệu lực; số lần nộp tiền phạt tối đa không quá 03 lần. Mức nộp phạt lần thứ nhất tối thiểu là 40% tổng số tiền phạt"
    },
{ 
        question: "Cá nhân có quyền giải trình trực tiếp hoặc bằng văn bản với người có thẩm quyền xử phạt vi phạm hành chính trong trường hợp nào sau đây?", 
        options: ["Mức tối đa của khung tiền phạt đối với hành vi đó từ 5.000.000 đồng trở lên", "Mức tối đa của khung tiền phạt đối với hành vi đó từ 10.000.000 đồng trở lên", "Mức tối đa của khung tiền phạt đối với hành vi đó từ 20.000.000 đồng trở lên", "Mức tối đa của khung tiền phạt đối với hành vi đó từ 15.000.000 đồng trở lên"], 
        correct: "Mức tối đa của khung tiền phạt đối với hành vi đó từ 15.000.000 đồng trở lên",
        explanation: "Điều 61 Luật xử lý Vi phạm hành chính quy định hình thức giải trình trực tiếp hoặc bằng văn bản, cá nhân, tổ chức VPHC phải gửi văn bản cho người có thẩm quyền xử phạt VPHC trong thời hạn 02 hoặc 05 ngày làm việc, kể từ ngày lập biên bản vi phạm hành chính"
    },
{ 
        question: "Nghị định của Chính phủ về xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp quy định Lấn, chiếm rừng là gì?", 
        options: ["Tự ý chuyển mục đích sử dụng đất rừng sang đất nông nghiệp hoặc đất ở", "Tự ý dịch chuyển mốc giới, ranh giới rừng hoặc chiếm rừng của chủ rừng khác; rừng thuộc sở hữu toàn dân", "Tự ý phát, đốt rừng làm nương rẫy để canh tác lúa và hoa màu","Tự ý dịch chuyển ranh giới đất trồng rừng hoặc chiếm đất rừng của chủ rừng khác; rừng thuộc sở hữu toàn dân"], 
        correct: "Tự ý dịch chuyển mốc giới, ranh giới rừng hoặc chiếm rừng của chủ rừng khác; rừng thuộc sở hữu toàn dân",
        explanation: "Điều 7 Nghị định số 35/2019/NĐ-CP quy định lấn, chiếm rừng là Hành vi dịch chuyển mốc giới, ranh giới rừng hoặc chiếm rừng của chủ rừng khác; rừng thuộc sở hữu toàn dân chưa giao, chưa cho thuê"
    },
{ 
        question: "Nghị định của Chính phủ về xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp quy định Khai thác trái phép môi trường rừng và thực hiện các dịch vụ, kinh doanh trái phép trong rừng là gì?", 
        options: ["Tổ chức các dịch vụ, kinh doanh trong rừng mà không được phép của chủ rừng", "Tổ chức du lịch, tham quan trong rừng mà không được phép của chủ rừng", "Tất cả các đáp án đều đúng","Tổ chức nghỉ dưỡng, giải trí trong phân khu bảo vệ nghiêm ngặt của rừng đặc dụng"], 
        correct: "Tất cả các đáp án đều đúng",
        explanation: "Điều 8 Nghị định số 35/2019/NĐ-CP quy định Khai thác trái phép môi trường rừng và thực hiện các dịch vụ, kinh doanh trái phép trong rừng"
    },
{ 
        question: "Hành vi không xây dựng, trình cấp có thẩm quyền phê duyệt phương án quản lý rừng bền vững hoặc không thực hiện đúng phương án quản lý rừng bền vững đã được cấp có thẩm quyền phê duyệt bị xử phạt bao nhiêu tiền?",
        options: ["Từ 1.000.000 đồng đến 3.000.000 đồng", "Từ 2.000.000 đồng đến 4.000.000 đồng", "Tất cả các đáp án đều đúng", "Từ 2.000.000 đồng đến 5.000.000 đồng"], 
        correct: "Từ 1.000.000 đồng đến 3.000.000 đồng",
        explanation: "Điều 10 Nghị định số 35/2019/NĐ-CP quy định hành vi không xây dựng, trình phê duyệt phương án quản lý rừng bền vững hoặc không thực hiện đúng phương án quản lý rừng bền vững đã được phê duyệt bị Phạt tiền từ 1.000.000 đồng đến 3.000.000 đồng"
    },
{ 
        question: "Theo Nghị định về xử phạt vi phạm hành chính trong lĩnh vực lâm nghiệp, mức phạt đối với hành vi khai thác rừng trái pháp luật trường hợp gỗ thuộc loài thông thường trong rừng sản xuất là rừng tự nhiên là bao nhiêu?",
        options: ["Từ 1.000.000 đồng đến 100.000.000 đồng", "Từ 500.000 đồng đến 100.000.000 đồng", "Từ 500.000 đồng đến 70.000.000 đồng", "Từ 2.500.000 đồng đến 100.000.000 đồng"], 
        correct: "Từ 500.000 đồng đến 100.000.000 đồng",
        explanation: "Điều 13 Nghị định số 35/2019/NĐ-CP quy định hành vi khai thác rừng trái pháp luật trường hợp gỗ thuộc loài thông thường trong rừng sản xuất là rừng tự nhiên bị Phạt tiền Từ 500.000 đồng đến 100.000.000 đồng"
    },
{ 
        question: "Tên gọi của hành vi khai thác lâm sản trong rừng không được phép của cơ quan có thẩm quyền được quy định tại Nghị định số 35/2019/NĐ-CP?",
        options: ["Vi phạm quy định về hồ sơ, thủ tục khai thác lâm sản có nguồn gốc hợp pháp", "Khai thác rừng trái phép", "Khai thác lâm sản trái pháp luật", "Khai thác rừng trái pháp luật"], 
        correct: "Khai thác rừng trái pháp luật",
        explanation: "Điều 13 Nghị định số 35/2019/NĐ-CP Tên gọi của hành vi khai thác lâm sản trong rừng không được phép của cơ quan có thẩm quyền là Khai thác rừng trái pháp luật"
    },
{ 
        question: "Theo Nghị định số 35/2019/NĐ-CP, hành vi khai thác trái pháp luật trong rừng sản xuất là rừng trồng đối với gỗ loài thông thường có khung tiền phạt tối thiểu là bao nhiêu?",
        options: ["từ 500.000 đồng đến 1.000.000 đồng", "từ 1.000.000 đồng đến 3.000.000 đồng", "từ 750.000 đồng đến 1.500.000 đồng", "Không có đáp án nào đúng"], 
        correct: "từ 500.000 đồng đến 1.000.000 đồng",
        explanation: "điểm a khoản 1 Điều 13 Nghị định số 35/2019/NĐ-CP hành vi khai thác trái pháp luật trong rừng sản xuất là rừng trồng đối với gỗ loài thông thường có khung tiền phạt tối thiểu là từ 500.000 đồng đến 1.000.000 đồng"
    },
{ 
        question: "Theo Nghị định số 35/2019/NĐ-CP, hành vi khai thác trái pháp luật trong rừng phòng hộ là rừng trồng đối với gỗ loài thông thường có khung tiền phạt tối đa là bao nhiêu?",
        options: ["Từ 80.000.000 đồng đến 100.000.000 đồng", "Từ 70.000.000 đồng đến 120.000.000 đồng", "từ 70.000.000 đồng đến 100.000.000 đồng", "Không có đáp án nào đúng"], 
        correct: "từ 70.000.000 đồng đến 100.000.000 đồng",
        explanation: "điểm a khoản 2 Điều 13 Nghị định số 35/2019/NĐ-CP hành vi khai thác trái pháp luật trong rừng phòng hộ là rừng trồng đối với gỗ loài thông thường có khung tiền phạt tối thiểu là từ từ 70.000.000 đồng đến 100.000.000 đồng"
    },
{ 
        question: "Hành vi tận thu trái pháp luật gỗ nằm, trục, vớt gỗ trái pháp luật dưới sông, suối, ao, hồ trong rừng thì xử phạt như thế nào?",
        options: ["Xử phạt như khai thác trái pháp luật trong rừng phòng hộ", "Xử phạt như khai thác trái pháp luật trong rừng đặc dụng", "Xử phạt như khai thác trái pháp luật trong rừng sản xuất", "Xử phạt như khai thác trái pháp luật trong rừng tự nhiên"], 
        correct: "Xử phạt như khai thác trái pháp luật trong rừng sản xuất",
        explanation: "khoản 6 Điều 13 Nghị định số 35/2019/NĐ-CP tận thu trái pháp luật gỗ nằm, trục, vớt gỗ trái pháp luật dưới sông, suối, ao, hồ trong rừng thì xử phạt theo quy định tại khoản 1 tức là xử phạt như khai thác trong rừng sản xuất"
    },
{ 
        question: "Khi bị xử phạt về hành vi khai thác rừng trái pháp luật, người bị xử phạt còn có thể bị phạt bổ sung Tịch thu phương tiện cơ giới trong trường hợp nào?",
        options: ["Khai thác rừng trái pháp luật đối với gỗ thông thường trong rừng sản xuất từ 10 m3 gỗ rừng trồng trở lên hoặc 3 m3 gỗ rừng tự nhiên trở lên", "Khai thác rừng trái pháp luật đối với gỗ thông thường trong rừng sản xuất từ 5 m3 gỗ rừng trồng trở lên hoặc 2 m3 gỗ rừng tự nhiên trở lên", "Người bị xử phạt chỉ bị tịch thu phương tiện giao thông thô sơ đường bộ và các dụng cụ, công cụ được sử dụng để thực hiện hành vi ", "Khai thác rừng trái pháp luật đối với gỗ thông thường trong rừng sản xuất từ 05 m3 gỗ rừng trồng trở lên hoặc 2,5 m3 gỗ rừng tự nhiên trở lên"], 
        correct: "Khai thác rừng trái pháp luật đối với gỗ thông thường trong rừng sản xuất từ 05 m3 gỗ rừng trồng trở lên hoặc 2,5 m3 gỗ rừng tự nhiên trở lên",
        explanation: "điểm c khoản 8 Điều 13 Nghị định số 35/2019/NĐ-CP Tịch thu phương tiện cơ giới khi khai thác rừng trái pháp luật đối với gỗ thông thường trong rừng sản xuất từ 05 m3 gỗ rừng trồng trở lên hoặc 2,5 m3 gỗ rừng tự nhiên trở lên"
    },
{ 
        question: "Hành vi Không báo cáo kết quả sản xuất, kinh doanh giống cây trồng lâm nghiệp khi có yêu cầu của cơ quan quản lý nhà nước về lâm nghiệp tại địa phương bị xử phạt như thế nào?",
        options: ["Phạt tiền từ 500.000 đồng đến 1.000.000 đồng ", "Phạt tiền từ 750.000 đồng đến 1.000.000 đồng ", "Phạt tiền từ 200.000 đồng đến 500.000 đồng", "Không có quy định xử phạt VPHC đối với hành vi này"], 
        correct: "Phạt tiền từ 500.000 đồng đến 1.000.000 đồng ",
        explanation: "điểm a khoản 1 Điều 14 Nghị định số 35/2019/NĐ-CP Phạt tiền từ 500.000 đồng đến 1.000.000 đồng khi Không báo cáo kết quả sản xuất, kinh doanh giống cây trồng lâm nghiệp khi có yêu cầu của cơ quan quản lý nhà nước về lâm nghiệp tại địa phương"
    },
{ 
        question: "Sản xuất giống cây trồng lâm nghiệp không đảm bảo chất lượng; kinh doanh giống cây trồng lâm nghiệp không đảm bảo chất lượng hoặc không có hồ sơ giống cây trồng lâm nghiệp theo quy định bị xử phạt như thế nào?",
        options: ["Phạt tiền từ 500.000 đồng đến 10.000.000 đồng và buộc nộp lại toàn bộ lợi nhuận thu được", "Phạt tiền từ 5.000.000 đồng đến 50.000.000 đồng và tịch thu toàn bộ lô giống cây trồng lâm nghiệp", "Phạt tiền từ 1.000.000 Đồng đến 40.000.000 Đồng và Buộc tiêu hủy lô giống cây trồng lâm nghiệp", "Phạt tiền từ 2.000.000 đồng đến 30.000.000 đồng và chỉ cảnh cáo, không áp dụng biện pháp khắc phục hậu quả"], 
        correct: "Phạt tiền từ 1.000.000 Đồng đến 40.000.000 Đồng và Buộc tiêu hủy lô giống cây trồng lâm nghiệp",
        explanation: "khoản 4 và 5 Điều 14 Nghị định số 35/2019/NĐ-CP quy định mức tiền phạt và biện pháp khắc phục hậu quả đối với hành vi sản xuất giống cây trồng lâm nghiệp không đảm bảo chất lượng; kinh doanh giống cây trồng lâm nghiệp không đảm bảo chất lượng hoặc không có hồ sơ giống cây trồng lâm nghiệp theo quy định"
    },
{ 
        question: "Hành vi nào dưới đây là hành vi Vi phạm các quy định chung của Nhà nước về bảo vệ rừng?",
        options: ["Chủ rừng không thực hiện trồng lại rừng ngay trong vụ trồng rừng kế tiếp sau khi khai thác trắng", "Mang các loại dụng cụ, công cụ vào rừng sản xuất hoặc rừng phòng hộ mà không được phép của chủ rừng", "Mang hóa chất độc hại, chất nổ, chất dễ cháy trái quy định của pháp luật vào rừng sản xuất là rừng trồng", "Chủ rừng không báo cáo hoặc báo cáo không đúng thời hạn cho cơ quan có thẩm quyền khi có biến động về diện tích rừng theo quy định của pháp luật"], 
        correct: "Chủ rừng không báo cáo hoặc báo cáo không đúng thời hạn cho cơ quan có thẩm quyền khi có biến động về diện tích rừng theo quy định của pháp luật",
        explanation: "Điều 16 Nghị định số 35/2019/NĐ-CP quy định 26 hành vi Vi phạm các quy định chung của Nhà nước về bảo vệ rừng"
    },
{ 
        question: "Hành vi chăn thả gia súc, gia cầm, vật nuôi khác trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc đối với rừng sản xuất hoặc rừng phòng hộ bị xử phạt như thế nào?",
        options: ["Phạt tiền từ 500.000 đồng đến 1.000.000 đồng", "Phạt tiền từ 750.000 đồng đến 1.000.000 đồng", "Phạt tiền từ 100.000 đồng đến 300.000 đồng", "Phạt tiền từ 500.000 đồng đến 1.000.000 đồng và buộc trồng lại rừng cho chủ rừng nếu rừng bị thiệt hại"], 
        correct: "Phạt tiền từ 500.000 đồng đến 1.000.000 đồng",
        explanation: "Điều 16 Nghị định số 35/2019/NĐ-CP Hành vi chăn thả gia súc, gia cầm, vật nuôi khác trên diện tích mới trồng rừng, đang trong thời kỳ chăm sóc đối với rừng sản xuất hoặc rừng phòng hộ bị Phạt tiền từ 500.000 đồng đến 1.000.000 đồng"
    },
{ 
        question: "Trường hợp khai thác rừng tự nhiên hoặc rừng do Nhà nước đại diện chủ sở hữu có nguồn gốc hợp pháp nhưng không chấp hành đầy đủ về hồ sơ lâm sản hoặc trình tự, thủ tục khai thác lâm sản bị xử phạt về hành vi nào?",
        options: ["Huỷ hoại rừng", "Vi phạm các quy định chung của Nhà nước về bảo vệ rừng", "Khai thác rừng trái pháp luật", "Vi phạm quy định về hồ sơ, thủ tục khai thác lâm sản có nguồn gốc hợp pháp"], 
        correct: "Vi phạm quy định về hồ sơ, thủ tục khai thác lâm sản có nguồn gốc hợp pháp",
        explanation: "Điều 11 Nghị định số 35/2019/NĐ-CP Hành vi Vi phạm quy định về hồ sơ, thủ tục khai thác lâm sản có nguồn gốc hợp pháp là khai thác, tận dụng, tận thu gỗ rừng tự nhiên hoặc rừng trồng do nhà nước đại diện chủ sở hữu có nguồn gốc hợp pháp nhưng không chấp hành đầy đủ về hồ sơ lâm sản hoặc trình tự, thủ tục khai thác lâm sản theo quy định của pháp luật"
    },



];