const features = [
    {
        title: 'Call Center',
        description: 'Giải pháp nền tảng tổng đài chuyên nghiệp với đầy đủ tính năng thiết yếu để vận hành trung tâm chăm sóc khách hàng và Telesales, hỗ trợ các kênh liên lạc truyền thống như hotline và email.',
        price: '500.000 VND',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp kênh thoại và email', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Quản lý thông tin khách hàng - customer 360°', description: 'Nothing', },
            { title: 'Quản lý phiếu ghi', description: 'Nothing' },
            { title: 'Khảo sát khách hàng', description: 'Nothing' },
            { title: 'Quản lý chiến dịch (Campaign)', description: 'Nothing' },
            { title: 'Tự động hóa quy trình (Workflow)', description: 'Nothing' },
            { title: 'Cơ sở tri thức', description: 'Nothing' },
            { title: 'Tính năng dashboard và báo cáo', description: 'Nothing' },
            { title: 'Ứng dụng mobile', description: 'Nothing' }
        ],
        marked: false
    },
    {
        title: 'OMNI-Channel CRM',
        description: 'Giải pháp tích hợp toàn diện các kênh liên lạc và công cụ quản lý, thực thi, giám sát, tự động hóa và tối ưu hoạt động marketing, bán hàng và chăm sóc khách hàng trên cùng một nền tảng thống nhất.',
        price: '1.000.000 VNĐ',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Quản lý thông tin khách hàng - customer 360°', description: 'Nothing', },
            { title: 'Quản lý phiếu ghi', description: 'Nothing' },
            { title: 'Quản lý khách hàng tiềm năng (Lead management)', description: 'Nothing' },
            { title: 'Phễu bán hàng', description: 'Nothing' },
            { title: 'Đo lường và tối ưu hiệu quả quảng cáo', description: 'Nothing' },
            { title: 'Khảo sát khách hàng', description: 'Nothing' },
            { title: 'Bán hàng qua Facebook (Meta commerce)', description: 'Nothing', tag: 'Mới' },
            { title: 'Quản lý chiến dịch (Campaign)', description: 'Nothing', tag: 'Mới' },
            { title: 'Tự động hóa quy trình (Workflow)', description: 'Nothing' },
            { title: 'Tính năng dashboard và báo cáo', description: 'Nothing', tag: 'Mới' },
            { title: 'Ứng dụng mobile', description: 'Nothing' }
        ],
        marked: true
    },
    {
        title: 'OMNI-Channel Contact Center',
        description: 'Giải pháp đa kênh tối ưu cho doanh nghiệp xây dựng trung tâm chăm sóc khách hàng chuyên nghiệp, tập trung vào tiếp nhận, phản hồi tự động, phân phối, giám sát và phân tích tương tác để nâng cao trải nghiệm và hiệu quả vận hành.',
        price: '800.000 VNĐ',
        price_tag: '/ user/ tháng',
        buy_btn_link: '/',
        buy_btn_text: 'Mua ngay',
        key_feature: 'Key feature',
        keys: [
            { title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)', description: 'Các ticket được tạo từ các nguồn sẽ được tự động chia việc cho nhân viên. Các agent, phòng ban có thể luân chuyển ticket cho nhau để cùng xử lý 1 công việc.Báo cáo chi tiết ticket: thời gian phản hồi lần đầu, thời gian xử lý trung bình, báo cáo chi tiết theo nội dung', imgUrl: 'assets/imgs/gg-logo.png' },
            { title: 'Quản lý thông tin khách hàng - customer 360°', description: 'Nothing', },
            { title: 'Quản lý phiếu ghi', description: 'Nothing' },
            { title: 'Khảo sát khách hàng', description: 'Nothing' },
            { title: 'Quản lý chiến dịch (Campaign)', description: 'Nothing' },
            { title: 'Tự động hóa quy trình (Workflow)', description: 'Nothing' },
            { title: 'Cơ sở tri thức', description: 'Nothing' },
            { title: 'Tính năng dashboard và báo cáo', description: 'Nothing' },
            { title: 'Ứng dụng mobile', description: 'Nothing' }
        ],
        marked: false
    },
]

const add_ons = [
    {
        isNew: 'Add-on',
        name: 'Chat bot',
        price: '10.000.000/ 1 lần triển khai',
        description: `Tự động tiếp nhận và phản hồi khách hàng 24x7 trên các kênh chat (Facebook, Istagram, Zalo, Livechat), tối ưu nguồn lực và nâng cao trải nghiệm khách hàng.`,
        features: [
            { title: 'Tích hợp với tất cả kênh chat', description: 'Nothing', imgUrl: false },
            { title: 'Xây dựng kịch bản hội thoại (Flow Builder)', description: 'Nothing', imgUrl: false },
            { title: 'Nhận diện nội dung và phản hồi', description: 'Nothing', imgUrl: false },
            { title: 'Thu thập và phân loại thông tin', description: 'Nothing', imgUrl: false },
            { title: 'Chuyển tiếp đến chuyên viên', description: 'Nothing', imgUrl: false },
            { title: 'Cho phép tích hợp AI', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Dùng chat bot ngay',
        btnText: 'Liên hệ chuyên viên',
    },
    {
        isNew: 'Add-on',
        name: 'AI',
        price: 'Liên hệ với chúng tôi để triển khai',
        description: `Ứng dụng AI ở tất cả các giai đoạn, từ phản hồi khách hàng tự động, hỗ trợ chuyên viên đến đánh giá mức độ tiềm năng của khách hàng, đánh giá chất lượng dịch vụ chuyên viên và nhiều ứng dụng khác`,
        features: [
            { title: 'AI chatbot - Tự động phản hồi khách hàng', description: 'Nothing', imgUrl: false },
            { title: 'AI assisstant - Hỗ trợ chuyên viên', description: 'Nothing', imgUrl: false },
            { title: 'AI Knowledge base - Kho tri thức', description: 'Nothing', imgUrl: false },
            { title: 'AI Lead scoreing - Đánh giá lead tiềm năng', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Tích hợp AI ngay',
        btnText: 'Liên hệ chuyên viên',
    },
    {
        isNew: 'Add-on',
        name: 'Smart Dialer',
        price: 'Liên hệ với chúng tôi để triển khai',
        description: `Tự động hóa việc quay số/ tự động thực hiện các cuộc gọi khảo sát, lấy xác nhận của khách hàng dựa trên kịch bản thiết lập sẵn nhằm tối ưu thời gian, nguồn lực của chuyên viên và không làm giảm trải nghiệm khách hàng.`,
        features: [
            { title: 'Tự động quay số (auto dialer)', description: 'Nothing', imgUrl: false },
            { title: 'Tạo danh sách theo bộ lọc, quản lý danh sách blacklist, tạo dữ liệu qua API', description: 'Nothing', imgUrl: false },
            { title: 'Tự động gọi (auto call)', description: 'Nothing', imgUrl: false },
            { title: 'Tự động đảo số, lựa chọn đầu số để tối ưu cước phí', description: 'Nothing', imgUrl: false },
        ],
        bottomText: 'Dùng Smart Dialer ngay',
        btnText: 'Liên hệ chuyên viên',
    },
];

const mainTableRows = [
    { id: "callcenter", title: "Call Center" },
    { id: "contactcenter", title: "Contact Center" },
    { id: "omnichannel", title: "Omni-Channel CRM" },
]

const plans = [{
    title: 'Tích hợp các kênh tương tác với khách hàng (customer engagement)',
    rows: [
        ['Kênh thoại (voice call)', true, true, true],
        ['Kênh Email', true, true, true],
        ['Kênh SMS (text message)', true, true, true],
        ['Ticket form', true, true, true],
        ['Kênh Facebook & Instagram (chat, comment, call)', true, true, false],
        ['Kênh Zalo OA (chat, video call, voice call)', true, true, false],
        ['Kênh Zalo cá nhân (chat)', true, true, false],
        ['Kênh Live chat (chat)', true, true, false],
        ['Kênh Tiktok (lead form)', true, true, false],
        ['Ladi page', true, true, false],
    ]
},
{
    title: 'Tính năng nâng cao của kênh chat',
    rows: [
        ['Chat bot', true, true, false],
        ['Trợ lý ảo tự động trả lời khách hàng', true, true, false],
        ['Trợ lý hỗ trợ chuyên viên', true, true, false],
    ]
},
{
    title: 'Tính năng nâng cao của kênh thoại',
    rows: [
        ['Voice to text', true, true, true],
        ['Smart IVR', true, true, true],
        ['Voice API', true, true, true],
    ]
},
{
    title: 'Quản lý thông tin khách hàng',
    rows: [
        ['Quản lý thông tin khách hàng cá nhân', true, true, true],
        ['Quản lý thông tin tổ chức', true, true, true],
        ['Hiển thị thông tin 360° khách hàng', true, false, false],
    ]
},
{
    title: 'Quản lý yêu cầu của khách hàng - phiếu ghi',
    rows: [
        ['Quản lý phiếu ghi', true, true, true],
        ['Quản lý SLA', true, true, true],
        ['Quản lý kho tri thức (KB)', true, true, true],
        ['Chấm điểm dịch vụ nội bộ', true, true, true],
        ['Quản lý quy trình tự động hóa nhắc việc, thông báo, gửi thông tin cho khách hàng', true, true, true],
        ['Tự động chấm điểm chất lượng bằng AI', true, true, true],
    ]
},
{
    title: 'Tính năng nâng cao của phiếu ghi',
    rows: [
        ['Tóm tắt nội dung bằng AI', true, true, true],
        ['Phân loại phiếu ghi bằng AI', true, true, true],
        ['Gợi ý phản hồi khách hàng bầng AI', true, true, true],
        ['Chấm điểm chất lượng dịch vụ bằng AI', true, true, true],
    ]
},
{
    title: 'Khảo sát khách hàng',
    rows: [
        ['Khảo sát sự hài lòng của khách hàng (CSAT) sau cuộc gọi', true, true, true],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) sau khi kết thúc chat', true, true, false],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) bằng email', true, true, true],
        ['Khảo sát sự hài lòng của khách hàng (CSAT) bằng tin nhắn (Facebook, Zalo)', true, true, false],
        ['Khảo sát lấy ý kiến khách hàng theo kịch bản gọi điện', true, true, true],
    ]
},
{
    title: 'Quản lý khách hàng tiềm năng',
    rows: [
        ['Quản lý nguồn lead', true, false, false],
        ['Quản lý danh sách lead theo từng vai trò', true, false, false],
        ['Tính năng xử lý lead cho chuyên viên', true, false, false],
        ['Phân loại và thu thập thông tin lead', true, false, false],
        ['Phân loại và thu thập thông tin lead bằng AI', true, false, false],
        ['Chuyển giao thành cơ hội bán hàng', true, false, false],
        ['Quản lý kịch bản và quy trình nuôi dưỡng, tái khai thác lead tự động', true, false, false],
        ['Gợi ý kịch bản nuôi dưỡng lead bằng AI', true, false, false],
    ]
},
{
    title: 'Quản lý cơ hội bán hàng',
    rows: [
        ['Quản lý pipeline, phễu bán hàng', true, false, false],
        ['Quản lý danh sách sản phẩm, dịch vụ', true, false, false],
        ['Quản lý danh sách Deal theo từng vai trò', true, false, false],
        ['Tính năng xử lý Deal cho chuyên viên', true, false, false],
        ['Phân loại và thu thập thông tin Deal', true, false, false],
        ['Phân loại và thu thập thông tin Deal bằng AI', true, false, false],
        ['Quản lý kịch bản và quy trình bám đuổi tự động', true, false, false],
        ['Gợi ý kịch bản tư vấn bán hàng bằng AI', true, false, false],
        ['Tích hợp thông tin cơ hội bán hàng thành công sang các hệ thống liên quan', true, false, false],
    ]
},
{
    title: 'Tính năng trợ lý ảo AI',
    rows: [
        ['Gợi ý phản hồi khách hàng bằng AI', true, false, false],
        ['Tóm tắt nội dung phiếu ghi bằng AI', true, false, false],
        ['Phân loại phiếu ghi bằng AI', true, false, false],
        ['Tra cứu thông tin bằng AI', true, false, false],
        ['Hỗ trợ nâng cao: thực hiện các tác vụ tạo bộ lọc, tạo báo cáo, tạo workflow,..theo yêu cầu bằng AI (Coming soon)', true, false, false],
    ]
},
{
    title: 'Đo lường và tối ưu hiệu quả quảng cáo',
    rows: [
        ['Đo lường kết quả quảng cáo', true, false, false],
        ['Tối ưu hiệu quả quảng cáo bằng conversion API của Meta và Google', true, false, false],
    ]
},
{
    title: 'Tính năng Meta commerce (bán hàng trực tiếp qua Facebook)',
    rows: [
        ['Quản lý sản phẩm', true, false, false],
        ['Đồng bộ danh mục sản phẩm lên meta catalog', true, false, false],
        ['Chat mua hàng (hỏi thông tin sản phẩm)', true, false, false],
        ['Giao diện đặt hàng online cho khách hàng', true, false, false],
        ['Quản lý đơn hàng ', true, false, false],
        ['Tích hợp tạo đơn hàng sang hệ thống liên quan', true, false, false],
        ['Tối ưu tỷ lệ chuyển đổi từ quảng cáo bằng conversion API của Meta', true, false, false],
    ]
},
{
    title: 'Quản lý chiến dịch marketing và chăm sóc khách hàng (Campaign)',
    rows: [
        ['Quản lý danh sách và thông tin chiến dịch', true, true, true],
        ['Thực hiện và cập nhật kết quả thực hiện chiến dịch', true, true, true],
    ]
},
{
    title: 'Tích hợp với các hệ thống liên quan',
    rows: [
        ['Hiển thị, tra cứu lịch sử giao dịch của khách hàng từ các hệ thống nghiệp vụ', true, true, true],
        ['Cập nhật & đồng bộ thông tin với các hệ thống liên quan', true, true, true],
    ]
},
{
    title: 'Công cụ lọc và kết xuất dữ liệu (Segmentation, filter & export)',
    rows: [
        ['Tạo tệp dữ liệu', true, true, true],
        ['Lọc và kết xuất dữ liệu', true, true, true],
    ]
},
{
    title: 'Công cụ workflow tự động',
    rows: [
        ['Thiết lập workflow bằng công cụ khai báo và kéo thả (no code)', true, true, true],
        ['Tạo workflow từ các mẫu có sẵn', true, true, true],
        ['Quản lý lịch sử hành động và hiệu suất của từng workflow ', true, true, true],
    ]
},
{
    title: 'Tính năng dashboard và báo cáo',
    rows: [
        ['Bộ báo cáo tổng hợp và chi tiết tương tác theo từng kênh liên lạc', true, true, true],
        ['Báo cáo phễu bán hàng', true, false, false],
        ['Bộ báo cáo tổng hợp và chi tiết phiếu ghi', true, true, true],
        ['Bộ báo cáo tổng hợp và chi tiết khách hàng', true, true, true],
        ['Bộ báo cáo tổng hợp và chi tiết lead', true, false, false],
        ['Bộ báo cáo tổng hợp và chi tiết deal', true, false, false],
        ['Dashboard tổng hợp các chỉ số nhanh về vận hành', true, true, true],
    ]
},
{
    title: 'Tính năng báo cáo nâng cao',
    rows: [
        ['Tạo báo cáo đa chiều', true, false, false]
    ]
},
{
    title: 'Tính năng quay số và gọi điện tự động (smart dialer)',
    rows: [
        ['Tự động quay số (auto dialer)', true, true, true],
        ['Tự động gọi (auto call/ call bot)', true, true, true],
    ]
},
{
    title: 'Phương thức truy cập',
    rows: [
        ['Trình duyệt máy tính', true, true, true],
        ['Ứng dụng điện thoại', true, true, true],
        ['Điện thoại IP Phone', true, true, true],
    ]
},
]

const questions = [
    {
        topic: 'Chi phí',
        questions: [
            {
                ques: "Sử dụng Caresoft, tôi có phải trả chi phí lưu trữ file ghi âm và các tài liệu đính kèm không?",
                ans: "Không. Phí phần mềm Caresoft đã bao gồm chi phí lưu trữ dữ liệu (file ghi âm, tài liệu, hình ảnh đính kèm), chỉ có giới hạn về dung lượng từng file (25Mb) và thời gian lưu trữ (12 tháng)."
            },
            {
                ques: "Dịch vụ triển khai của Caresoft gồm những hạng mục nào, thời gian triển khai trong bao lâu?",
                ans: "Dịch vụ triển khai của Caresoft bao gồm các hoạt động tư vấn xây dựng quy trình nghiệp vụ tối ưu nhất cho doanh nghiệp trên hệ thống Caresoft, thiết lập hệ thống, đào tạo và chuyển giao. Tùy phạm vi nghiệp vụ và nhu cầu quản lý của doanh nghiệp, thời gian triển khai có thể kéo dài từ 1 tuần đến 3 tuần hoặc dài hơn để đảm bảo doanh nghiệp có thể khai thác được đầy đủ nhất các tính năng của Caresoft."
            },
            {
                ques: "Caresoft có tăng giá dịch vụ khi tôi tiến hành gia hạn không?",
                ans: "Không. Caresoft cam kết không tăng giá đối với các khách hàng đang sử dụng và tiếp tục gia hạn gói dịch vụ hiện tại. Khi có chính sách giá mới, Caresoft sẽ chỉ áp dụng cho khách hàng mới từ thời điểm ban hành."
            },
            {
                ques: "Tôi có thể thiết kế gói dịch vụ gồm nhiều loại tài khoản khác nhau cho từng nhóm người dùng khác nhau không?",
                ans: "Có. Caresoft cung cấp các gói dịch vụ linh hoạt, kết hợp nhiều loại tài khoản cho từng nhóm người dùng khác nhau để tối ưu chi phí cho doanh nghiệp."
            },
            {
                ques: "Caresoft có thu các loại cước phí thoại, SMS không?",
                ans: "Không. Caresoft không thực hiện thu cước phí Thoại và SMS brandname, khách hàng sẽ ký hợp đồng và thanh toán phí dịch vụ trực tiếp cho nhà cung cấp dịch vụ."
            },
            {
                ques: "Caresoft có thu phí gửi tin nhắn Zalo không?",
                ans: "Đối với cước gửi các tin nhắn mất phí của Zalo, khách hàng có 2 lựa chọn: thứ nhất là sử dụng ví Zalo mặc định mà Caresoft đăng ký với Zalo - trường hợp này khách hàng sẽ thanh toán cước phí cho Caresoft thông qua hình thức đối soát cuối kỳ, lựa chọn thứ 2 là khách hàng sử dụng ví của đối tác khác, Caresoft sẽ thực hiện tích hợp với đối tác mà khách hàng chỉ định với điều kiện đối tác hỗ trợ việc tích hợp này."
            },
        ]
    },
    {
        topic: 'Kỹ thuật',
        questions: [
            {
                ques: "Khi sử dụng Caresoft, người dùng có phải cài đặt phần mềm lên máy tính không?",
                ans: "Không. Caresoft hoạt động trên nền tảng web, khi sử dụng Caresoft trên máy tính, người dùng chỉ cần có kết nối Internet và trình duyệt web."
            },
            {
                ques: "Tôi có cần thể sử dụng Caresoft trên điện thoại không?",
                ans: "Có. Bạn có thể tải ứng dụng Caresoft từ kho ứng dụng của Apple và Google và sử dụng song song với trình duyệt web. Dữ liệu cập nhật từ ứng dụng mobile được cập nhật và đồng bộ tức thời."
            },
            {
                ques: "Tôi có thể sử dụng máy điện thoại IP để bàn để nghe gọi cho khách hàng không?",
                ans: "Có. Bạn có thể thiết lập máy điện thoại IP phone để nghe gọi. Ngoài ra bạn cũng có thể sử dụng tai nghe và micro kết nối trực tiếp với máy tính hoặc điện thoại di động có cài ứng dụng Caresoft."
            },
            {
                ques: "Việc tích hợp Caresoft với các phần mềm quản trị doanh nghiệp khác có phức tạp không? ",
                ans: "Khi bạn quyết định sử dụng Caresoft, đội ngũ tư vấn triển khai của Caresoft sẽ cùng bạn thiết kế luồng tích hợp dữ liệu tối ưu nhất. Caresoft cung cấp đẩy đủ các API và các phương thức tích hợp để kết nối với các phần mềm ERP, POS phổ biến hiện nay."
            },
        ]
    },
    {
        topic: 'Hỗ trợ',
        questions: [
            {
                ques: "Caresoft có hỗ trợ kỹ thuật trong quá trình sử dụng không?",
                ans: "Có. Chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua hotline, email và live chat để hỗ trợ trực tiếp cho tất cả người dùng, đảm bảo SLA cam kết."
            },
            {
                ques: "Nếu tôi ngừng sử dụng thì dữ liệu có bị mất không?",
                ans: "Không. Dữ liệu của bạn sẽ được lưu trữ an toàn trong vòng 30 ngày sau khi hủy dịch vụ, và bạn có thể xuất hoặc khôi phục trong thời gian đó."
            },
            {
                ques: "Hệ thống Caresoft có đảm bảo tính ổn định không?",
                ans: "Có. Caresoft cam kết thời gian hoạt động 99%, có hệ thống giám sát và sao lưu liên tục để đảm bảo hoạt động không gián đoạn."
            },
            {
                ques: 'Bạn có câu hỏi khác?',
                ans: "Hãy liên hệ chúng tôi ngay!"
            }
        ]
    }
];
const planSection = document.querySelector('.plans')
const planContainer = planSection.querySelector('.container')


// function displayAddOns() {
const addOnsArray = []
document.querySelectorAll('part-wrapper', 'add-ons').innerHTML = "";
add_ons.forEach((addOn, addOnIndex) => {
    const addOnWrapper = document.createElement('div')
    addOnWrapper.classList.add('add-on-wrapper')
    const addOnCard = document.createElement('div');
    addOnCard.classList.add('add-on-card');

    addOnWrapper.appendChild(addOnCard);

    addOnCard.innerHTML = `
        <span class="tag">
            <span class="tag-text">${addOn.isNew}</span>
        </span>
        <h4 class="col-title">${addOn.name}</h4>
        <p class="head-text">${addOn.price}</p>
        <p class="normal-text">${addOn.description}</p>
        <ul class="feature-li">
        ${addOn.features.map(fea => `
            <li class="li-features">
                <div class="li-initial-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16"
                        viewBox="0 0 21 16" fill="currentColor">
                        <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z">
                        </path>
                    </svg>
                </div>
                <div class="li-content">
                    <div class="li-a">
                        <span class="">
                            <span class="li-text">
                                ${fea.title}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 16 16" fill="currentColor" class="search-icon-li">
                                <path
                                    d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
            </li>
            `).join('')}
        </ul>
        <p class="normal-text">${addOn.bottomText}</p>
        <button class="secondary-btn openForm">
            <span class="btn-text-bg">
                <span class="btn-span">
                    <span class="i-text">${addOn.btnText}</span>
                    <span class="af-text">${addOn.btnText}</span>
                </span>
            </span>
        </button>
`
    addOnsArray.push(addOnWrapper)
})

addOnsArray.forEach((addOn, index) => {
    if (index % 2 === 0) {
        const partWrapper = document.createElement('div');
        partWrapper.classList.add('part-wrapper', 'add-ons');


        partWrapper.appendChild(addOnsArray[index]);

        if (addOnsArray[index + 1]) {
            partWrapper.appendChild(addOnsArray[index + 1]);
        }

        const lastChild = planContainer.lastElementChild;

        if (lastChild && lastChild.classList.contains('part-wrapper') && lastChild.classList.contains('cta')) {
            planContainer.insertBefore(partWrapper, lastChild);
        } else {
            planContainer.appendChild(partWrapper);
        }
    }
});
const faqSection = document.querySelector('.ques-section')

// function displayFaq() {
questions.forEach((question, i) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('ques-sec-wrapper');

    wrapper.innerHTML = `
            <h3 class="small-title">${question.topic}</h3>
            <div class="ques-li-wrapper">
                ${question.questions.map(ques => `
                    <div class="ques-li">
                        <div class="ques-heading">
                            <button class="open-table-btn">
                                <h3 class="open-text">${ques.ques}</h3>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="m19.352 9.218-7.366 7.366-7.338-7.338L5.85 8.044l6.136 6.136 6.164-6.164z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div class="ques-content">
                            <div class="q-content-wrapper">
                                <p class="normal-text">${ques.ans}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

    faqSection.appendChild(wrapper);
});
const featuresArea = document.getElementById('features')

function featureDesktopLayout() {
    featuresArea.innerHTML = ``;
    const contentFlex = document.createElement('div');
    contentFlex.className = 'content-flex card';

    featuresArea.appendChild(contentFlex);

    // Render từng feature-col
    features.forEach((fea) => {
        const featureCol = document.createElement('div');
        featureCol.className = 'feature-col';

        featureCol.innerHTML = `
        ${fea.marked ? '<span class="marker" ><span class="marker-text">Khuyên dùng</span></span >' : ''}
            <div class="col-wrapper">
                <div class="col-content">
                    <div class='col-flex-stretch'>
                        <h4 class="col-title">${fea.title}</h4>
                        <p class="col-sub-title">${fea.description}</p>
                        <div>
                            <p class="price"><span>${fea.price}</span></p>
                            <p class="price-tag col-sub-title">${fea.price_tag}</p>
                        </div>
                    </div>
                    <div class="btns-wrapper">
                        <button class="primary-btn openForm">
                            <span class="btn-text-bg">
                                <span class="btn-span">
                                    <span class="i-text">${fea.buy_btn_text}</span>
                                    <span class="af-text">${fea.buy_btn_text}</span>
                                </span>
                            </span>
                        </button>
                        <a href="#table-plans" class="click-link col-feature">
                            <span class="click-link-text features">Tìm hiểu thêm</span>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" viewBox="0 0 16 16" style="padding-left:6px">
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M11.948 8.85H1v-1.7h10.948L9.399 4.6l1.202-1.202L15.202 8l-4.601 4.602-1.202-1.203z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <ul class="feature-li">
                    ${fea.keys.map(f => `
                        <li class="li-features">
                            <div class="li-initial-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="currentColor">
                                    <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z"></path>
                                </svg>
                            </div>
                            <div class="li-content">
                                <div class="li-a">
                                    <span class="li-text">${f.title}</span>
                                    ${f.tag ? `<span class="tag"><span class="tag-text">${f.tag}</span></span>` : ''}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="search-icon-li">
                                        <path d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8"></path>
                                    </svg>
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        contentFlex.appendChild(featureCol);
    });

    const subTitles = contentFlex.querySelectorAll('.col-sub-title');
    let maxHeight = 0;
    subTitles.forEach(el => {
        const height = el.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    subTitles.forEach(el => {
        if (!el.classList.contains('price-tag')) {
            el.style.minHeight = `${maxHeight}px`;
        }
    });
}

function featureMobileLayout() {
    featuresArea.innerHTML = `
        <div class="feature-wrapper">
            <div class="feature-p-wrapper">
                <div class="feature-m-content">
                </div>
            </div>
        </div>
        `;

    const featureContent = document.querySelector('.feature-m-content');
    featureContent.innerHTML = `
        <div class="main-card">
            <div class="slick-list">
                <div class="slick-track">
                </div>
            </div>
        </div>
        <div class="slide-nav">
            <nav class="slide-nav-wrapper">
                <button class="nav-btn" id='left-nav'>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m5.052 12.85 3.549 3.55-1.202 1.202L1.798 12l5.601-5.602 1.202 1.203-3.549 3.549H21v1.7z">
                            </path>
                        </svg>
                    </div>
                </button>
                <button class="nav-btn" id='right-nav'>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M18.948 11.15 15.399 7.6l1.202-1.202L22.202 12l-5.601 5.6-1.202-1.202 3.549-3.549H3v-1.7z">
                            </path>
                        </svg>
                    </div>
                </button>
            </nav>
        </div>
        <div class="feature-m-li"></div>
        `;

    const card = document.querySelector('.slick-track');
    card.style.width = `${features.length * 100}%`;
    const featureLi = document.querySelector('.feature-m-li');

    const liContents = [];
    const navArea = document.querySelector('.slide-nav-wrapper')
    const navButtons = navArea.querySelectorAll('.nav-btn');
    const firstNavBtn = navButtons[1];

    features.forEach((fea, index) => {
        const cardContent = `
            <div class="feature-m-col" id=${fea.title.replace(' ', '-').toLowerCase()}>
                <div>
                    <div class="tab">
                        <div class="tab-padding">
                            <div class="col-content">
                                <div>
                                    <h4 class="col-title">${fea.title}</h4>
                                    <p class="col-sub-title">${fea.description}</p>
                                    <div>
                                        <p class="price"><span>${fea.price}</span></p>
                                        <p class="price-tag col-sub-title">${fea.price_tag}</p>
                                    </div>
                                </div>
                                <div class="btns-wrapper">
                                    <div class="primary-btn openForm">
                                        <span class="btn-text-bg">
                                            <span class="btn-span">
                                                <span class="i-text">${fea.buy_btn_text}</span>
                                                <span class="af-text">${fea.buy_btn_text}</span>
                                            </span>
                                        </span>
                                    </div>
                                    <a href="#table-plans" class="click-link col-feature">
                                        <span class="click-link-text features">Tìm hiểu thêm</span>
                                        <span class="icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16" style="padding-left:6px">
                                                <path fill="currentColor" fill-rule="evenodd"
                                                    d="M11.948 8.85H1v-1.7h10.948L9.399 4.6l1.202-1.202L15.202 8l-4.601 4.602-1.202-1.203z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        card.insertAdjacentHTML('beforeend', cardContent);

        const dot = document.createElement('button');
        dot.className = 'small-nav-btn';
        dot.dataset.index = index;
        firstNavBtn.insertAdjacentElement('beforebegin', dot);

        liContents.push(`
            <div class="slick-list">
                <div class="li-wrapper card">
                    <h4 class="col-title">${fea.title}</h4>
                    <ul class="feature-li">
                    ${fea.keys.map(f => `
                            <li class="li-features">
                                <div class="li-initial-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="16" viewBox="0 0 21 16" fill="currentColor">
                                        <path d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z"></path>
                                    </svg>
                                </div>
                                <div class="li-content">
                                    <a class="li-a">
                                        <span class="li-text">${f.title}</span>
                                        ${f.tag ? `<span class="tag"><span class="tag-text">${f.tag}</span></span>` : ''}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="search-icon-li">
                                            <path d="m0 14.098 1.509 1.509 3.771-3.772-1.508-1.508zM9.741 0a5.867 5.867 0 1 0 0 11.735A5.867 5.867 0 0 0 9.742 0m0 1.067c2.647 0 4.8 2.154 4.8 4.8s-2.153 4.8-4.8 4.8-4.8-2.154-4.8-4.8 2.153-4.8 4.8-4.8"></path>
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
            `);
    });

    let currentIndex = 0;
    let isAutoScrolling = false;

    const slickList = document.querySelector('.slick-list');
    const dots = document.querySelectorAll('.small-nav-btn');

    const updateView = (index) => {
        currentIndex = index;
        isAutoScrolling = true;
        slickList.scrollTo({
            left: index * slickList.clientWidth,
            behavior: 'smooth'
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('choosen', i === index);
        });
        featureLi.innerHTML = liContents[index];

        setTimeout(() => {
            isAutoScrolling = false;
        }, 500);
    };

    updateView(currentIndex);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateView(i);
        });
    });

    document.getElementById('left-nav').addEventListener('click', () => {
        if (currentIndex > 0) {
            updateView(currentIndex - 1);
        }
    });

    document.getElementById('right-nav').addEventListener('click', () => {
        if (currentIndex < features.length - 1) {
            updateView(currentIndex + 1);
        }
    });

    slickList.addEventListener('scroll', () => {
        if (isAutoScrolling) return;

        const scrollLeft = slickList.scrollLeft;
        const containerWidth = slickList.clientWidth;
        const index = Math.round(scrollLeft / containerWidth);

        if (index !== currentIndex) {
            currentIndex = index;
            dots.forEach((dot, i) => {
                dot.classList.toggle('choosen', i === index);
            });
            featureLi.innerHTML = liContents[index];
        }
    });
} const carousel = document.querySelector('.logo-gallery-wrapper');
const gallery = document.getElementById('logo-slider');
const prevBtn = document.getElementById("gallery-prev");
const nextBtn = document.getElementById("gallery-next");

const imgSrcList = generateImgSrc(48);
const imgQueue = [];
let singleImgWidth = 150;

const startIdx = 10
let currentIndex = startIdx; // đã load 13 cái đầu
let offset = 0; // vị trí dịch hiện tại
let clickTimeOut = 500 //ms

function generateImgSrc(total) {
    const arr = [];
    for (let i = 1; i <= total; i++) {
        arr.push(`img/logos/logo (${i}).png`);
    }
    return arr;
}

function initialQueue() {
    const first13 = imgSrcList.slice(0, startIdx);
    imgQueue.push(...first13);
    generateFristLoad();
}

function generateFristLoad() {
    gallery.innerHTML = "";
    console.log("Length:", imgQueue.length);
    imgQueue.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = src;
        img.style.width = singleImgWidth + "px";
        gallery.appendChild(img);
    });
}
let carouselInterval = null;

function startCarousel() {
    if (carouselInterval) return; // nếu đang chạy thì không tạo mới
    carouselInterval = setInterval(() => {
        gallery.style.animation = "scroll 1s ease 1";
        gallery.addEventListener("animationend", () => {
            gallery.style.animation = "none";
            imgQueue.shift();
            imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
            currentIndex++;
            generateFristLoad();
        }, { once: true });
    }, 1500);
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

carousel.addEventListener("mouseenter", stopCarousel);
carousel.addEventListener("mouseleave", startCarousel);

let clickAble = true;

let isAnimating = false;

function waitAnimationEnd(element) {
    return new Promise(resolve => {
        element.addEventListener("animationend", () => resolve(), { once: true });
    });
}

async function handleNext() {
    if (isAnimating) return;
    isAnimating = true;

    gallery.style.animation = `scrollNext ${clickTimeOut}ms ease 1`;
    await waitAnimationEnd(gallery);

    gallery.style.animation = "none";
    imgQueue.shift();
    imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
    currentIndex++;
    imgQueue.shift();
    imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
    currentIndex++;
    generateFristLoad();

    isAnimating = false;
}

async function handlePrev() {
    if (isAnimating) return;
    isAnimating = true;

    gallery.style.animation = `scrollPrev ${clickTimeOut}ms ease 1`;
    await waitAnimationEnd(gallery);

    gallery.style.animation = "none";
    imgQueue.pop();
    imgQueue.pop();
    currentIndex -= 2;
    if (currentIndex < 0) currentIndex += imgSrcList.length;
    imgQueue.unshift(imgSrcList[(currentIndex) % imgSrcList.length]);
    imgQueue.unshift(imgSrcList[(currentIndex + 1) % imgSrcList.length]);
    generateFristLoad();

    isAnimating = false;
}

// Sửa startCarousel để dùng cùng flag
function startCarousel() {
    if (carouselInterval) return;
    carouselInterval = setInterval(async () => {
        if (isAnimating) return;
        isAnimating = true;

        gallery.style.animation = "scroll 1s ease 1";
        await waitAnimationEnd(gallery);

        gallery.style.animation = "none";
        imgQueue.shift();
        imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
        currentIndex++;
        generateFristLoad();

        isAnimating = false;
    }, 1500);
}
nextBtn.addEventListener("click", () => {
    if (!clickAble) return;
    clickAble = false;
    handleNext();
    setTimeout(() => {
        clickAble = true;
    }, clickTimeOut);
});
prevBtn.addEventListener("click", () => {
    if (!clickAble) return;
    clickAble = false;
    handlePrev();
    setTimeout(() => {
        clickAble = true;
    }, clickTimeOut);
});

initialQueue();
startCarousel();
const mainTable = document.getElementById('main')

const tableHead = document.createElement('thead');
tableHead.classList.add('table-header');

const headRow = document.createElement('tr');
headRow.classList.add('header-row')

const mainBody = document.getElementById('mainBody');

function laptopTable() {
    mainBody.innerHTML = '';
    headRow.innerHTML = '';
    tableHead.classList.remove('mobile');
    mainTableRows.forEach(item => {
        const th = document.createElement('th');
        th.innerHTML = `<p key=${item.id} class="head-text">${item.title}</p>`
        headRow.appendChild(th);
    });

    tableHead.appendChild(headRow);
    mainTable.insertBefore(tableHead, mainTable.firstChild);

    const nonOpen = plans.filter(plan => plan.title === null);
    const noOpenRow = document.createElement('tr')
    noOpenRow.classList.add('main-tr', 'no-ex');
    noOpenRow.innerHTML = ` 
    <td class="no-ex-td">
        <table class="compare-table">
            <tbody class="main-body"></tbody>
        </table>
    </td>`;
    const noOpenRowTable = noOpenRow.querySelector('tbody');
    nonOpen.forEach((item) => {
        noOpenRowTable.innerHTML = '';
        item.rows.forEach((row) => {
            const tds = row.map(cell => `
            <td class="main-td">
                <p class="normal-text">${cell}</p>
            </td>
        `).join('');
            const tr = document.createElement('tr');
            tr.classList.add('sub-tr');
            tr.innerHTML = tds;
            noOpenRowTable.appendChild(tr);
        });
    });
    mainBody.appendChild(noOpenRow);

    const openPlans = plans.filter(plan => plan.title !== null);
    openPlans.forEach((plan) => {
        const smallTable = document.createElement('table');
        smallTable.className = 'compare-table';

        plan.rows.forEach((row) => {
            const subTr = document.createElement('tr');
            subTr.className = 'sub-tr';

            row.forEach(cell => {
                const td = document.createElement('td');
                td.className = 'main-td';

                const p = document.createElement('p');
                p.className = 'normal-text';
                p.textContent = cell;

                td.appendChild(p);
                subTr.appendChild(td);
            });

            smallTable.appendChild(subTr);
        });

        const tr = document.createElement('tr');
        tr.className = 'main-tr';

        const td = document.createElement('td');
        td.classList.add('open-td', 'open');
        td.innerHTML = `
        <div class="td-open-content">
            <div class="tr-header">
                <button class="open-table-btn">
                    <h3 class="open-text">${plan.title}</h3>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="m19.352 9.218-7.366 7.366-7.338-7.338L5.85 8.044l6.136 6.136 6.164-6.164z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="tr-content"></div>
        </div>
    `;
        const trContent = td.querySelector('.tr-content');
        trContent.appendChild(smallTable);

        tr.appendChild(td);
        mainBody.appendChild(tr);
    });

    changeWidthByCols();
    replaceIcon()
    toggleTable();
}

function mobileTable() {
    mainBody.innerHTML = '';
    headRow.innerHTML = '';

    let currentPlanIdx = 0
    renderTableByIndex(currentPlanIdx + 1)
    tableHead.classList.add('mobile');
    const th = document.createElement('th');
    const selectedText = mainTableRows[currentPlanIdx].title ?? 'Chọn gói'; // fallback nếu rỗng
    th.innerHTML = `
    <div class="mobile-thead">
      <h3>Plans</h3>
      <div class="custom-select" id="customSelect">
        <div class="select-trigger">
          <span class="selected">${selectedText}</span>
          <span class="arrow">▾</span>
        </div>
      </div>
    </div>
  `;
    const selectBox = th.querySelector('.custom-select');
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    mainTableRows.forEach((text, index) => {
        const option = document.createElement('div');
        option.className = 'option';
        option.dataset.value = index;
        option.textContent = text.title;
        optionsDiv.appendChild(option);
    });
    selectBox.appendChild(optionsDiv);
    headRow.appendChild(th);
    tableHead.appendChild(headRow);
    mainTable.insertBefore(tableHead, mainTable.firstChild);

    const selected = selectBox.querySelector('.selected');
    const selectTrigger = selectBox.querySelector('.select-trigger');

    optionsDiv.addEventListener('click', (e) => {
        if (e.target.classList.contains('option')) {
            const index = Number(e.target.dataset.value);
            currentPlanIdx = index;
            selected.textContent = e.target.textContent;
            optionsDiv.style.display = 'none';
            renderTableByIndex(currentPlanIdx + 1);
            toggleTable();
        }
    });

    selectTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = optionsDiv.style.display === 'block';
        optionsDiv.style.display = isOpen ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        optionsDiv.style.display = 'none';
    });
    replaceIcon();
    toggleTable();
}

function renderTableByIndex(index) {
    mainBody.innerHTML = '';
    const nonOpen = plans.filter(plan => plan.title === null);
    const noOpenRow = document.createElement('tr')
    noOpenRow.classList.add('main-tr', 'no-ex');
    noOpenRow.innerHTML = ` 
    <td class="no-ex-td">
        <table class="compare-table">
            <tbody class="main-body"></tbody>
        </table>
    </td>`;
    const noOpenRowTable = noOpenRow.querySelector('tbody');
    nonOpen.forEach((item) => {
        noOpenRowTable.innerHTML = '';
        item.rows.forEach((row) => {
            const labelCell = row[0] ?? '';
            const valueCell = row[index] ?? '-';
            const tds = `
                <td class="main-td">
                    <p class="normal-text">${labelCell}</p>
                </td>
                <td class="main-td">
                    <p class="normal-text">${valueCell}</p>
                </td>
            `;
            const tr = document.createElement('tr');
            tr.classList.add('sub-tr');
            tr.innerHTML = tds;
            noOpenRowTable.appendChild(tr);
        });
    });
    mainBody.appendChild(noOpenRow);

    const openPlans = plans.filter(plan => plan.title !== null);
    openPlans.forEach((plan) => {
        const smallTable = document.createElement('table');
        smallTable.className = 'compare-table';

        plan.rows.forEach((row) => {
            const subTr = document.createElement('tr');
            subTr.className = 'sub-tr';

            [0, index].forEach(i => {
                const cell = row[i];
                const td = document.createElement('td');
                td.className = 'main-td';

                const p = document.createElement('p');
                p.className = 'normal-text';
                p.textContent = cell ?? '';

                td.appendChild(p);
                subTr.appendChild(td);
            });

            smallTable.appendChild(subTr);
        });

        const tr = document.createElement('tr');
        tr.className = 'main-tr';

        const td = document.createElement('td');
        td.className = 'open-td';

        td.innerHTML = `
        <div class="td-open-content">
            <div class="tr-header">
                <button class="open-table-btn">
                    <h3 class="open-text">${plan.title}</h3>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd"
                        d="m19.352 9.218-7.366 7.366-7.338-7.338L5.85 8.044l6.136 6.136 6.164-6.164z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <div class="tr-content"></div>
        </div>
    `;
        const trContent = td.querySelector('.tr-content');
        trContent.appendChild(smallTable);

        tr.appendChild(td);
        mainBody.appendChild(tr);
        replaceIcon();
    });
}

function replaceIcon() {
    const iconCheck = `
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="16"
                                                viewBox="0 0 21 16" fill="currentColor">
                                                <path
                                                    d="M21.053 1.758 19.295 0 6.771 12.52 1.764 7.513 0 9.277 6.771 16z">
                                                </path>
                                            </svg>`;

    const iconCross = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                    d="m2 13.964 12.021-12.02" vector-effect="non-scaling-stroke">
                                                </path>
                                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                    d="m2.098 1.998 12.02 12.021" vector-effect="non-scaling-stroke">
                                                </path>
                                            </svg>`;
    document.querySelectorAll('.main-td .normal-text').forEach(p => {
        const text = p.textContent.trim().toLowerCase();

        if (text === 'true') {
            p.innerHTML = iconCheck;
        } else if (text === 'false') {
            p.innerHTML = iconCross;
        }
    });
    // toggleTable();
}

function changeWidthByCols() {
    const colWidth = `${65 / mainTableRows.length}%`;
    const ths = headRow.querySelectorAll(':scope > th'); // chỉ th con trực tiếp
    const tds = document.querySelectorAll('.main-td')

    tds.forEach(td => {
        const currentFlexGrow = parseFloat(getComputedStyle(td).flexGrow);
        if (currentFlexGrow !== 1) {
            td.style.flex = `0 0 ${colWidth}`;
        }
    });

    ths.forEach(th => {
        th.style.width = colWidth;
    });
} function displayForm() {
    const openFormBtns = document.querySelectorAll('.openForm')
    openFormBtns.forEach((btn) => {
        btn.onclick = () => {
            toggleOverlay()
            const formWrapper = overlay.querySelector('.form-wrapper');
            if (formWrapper && formWrapper.style.display !== 'flex') {
                formWrapper.style.display = 'flex';
            }
        }
    })
}

const form = document.getElementById('contact-form')
const submitModal = document.querySelector('.form-submited-wrapper')
const formElements = form.querySelectorAll('input, textarea, select');
// 👉 gom validate vào 1 hàm chung
function validateInput(inp) {
    if (inp.dataset.req !== 'false') {
        const regexPattern = inp.dataset.regex
        const regex = new RegExp(regexPattern)
        const warnEl = inp.parentElement.querySelector('.warn-text')

        if (inp.value.length === 0) {
            inp.dataset.inputStage = 'blank'
            if (warnEl) warnEl.textContent = inp.dataset.blankMess
        }
        else if (!regex.test(inp.value) && regexPattern !== 'none') {
            inp.dataset.inputStage = 'cons'
            if (warnEl) warnEl.textContent = inp.dataset.consMess
        }
        else {
            inp.dataset.inputStage = 'normal'
            if (warnEl) warnEl.textContent = ''
        }
    }
}

formElements.forEach((inp) => {
    inp.addEventListener('blur', () => {
        if (inp.dataset.initial === 'true') {
            inp.dataset.initial = 'false'
        }
        validateInput(inp)
    })

    inp.addEventListener('input', () => {
        if (inp.dataset.initial !== 'true') {
            validateInput(inp)
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    Array.from(formElements).forEach(inp => {
        inp.dataset.initial = 'false';
        validateInput(inp)
    });

    const isValid = Array.from(formElements).every(item => item.dataset.inputStage === 'normal');
    if (!isValid) {
        console.warn("Form chưa hợp lệ!");

        const firstInvalid = Array.from(formElements).find(inp =>
            inp.dataset.inputStage === 'blank' || inp.dataset.inputStage === 'cons'
        );

        if (firstInvalid) {
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstInvalid.focus({ preventScroll: true });
        }

        return;
    }

    overlay.querySelector('.form-wrapper').style.display = 'none';
    submitModal.style.display = 'block'
    const data = {
        name: form.name.value.trim(),
        company: form.company.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
        agree: form.agree.checked
    };
    console.log(data);
})
let lastMode = window.innerWidth < 768 ? 'mobile' : 'desktop';

function applyResponsiveLayout(mode) {
    if (mode === 'mobile') {
        featureMobileLayout();
        mobileTable();
    } else {
        featureDesktopLayout();
        laptopTable();
        highlightMainHeader(2);
        highlightPopularColumn(3);
    }
    displayForm()
}

window.addEventListener('load', () => {
    applyResponsiveLayout(lastMode);
});

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const mode = width < 768 ? 'mobile' : 'desktop';

    if (mode !== lastMode) {
        lastMode = mode;
        applyResponsiveLayout(mode);
    }
});
const overlay = document.querySelector('.overlay');

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        toggleOverlay();
    }
})

function toggleOverlay() {
    overlay.classList.toggle('open');
    if (overlay.classList.contains('open')) {
        document.body.classList.add('no-scroll');
    } else {
        Array.from(overlay.children).forEach(child => {
            child.style.display = 'none';
        });
        document.body.classList.remove('no-scroll');
    }
}

function highlightPopularColumn(index) {
    const tables = Array.from(document.querySelectorAll('table.compare-table'))
        .filter(table => table.id !== 'main');

    const lastTable = tables[tables.length - 1];
    tables.forEach(table => {
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach((tr, rowIndex) => {
            const cells = tr.children;
            if (cells[index]) {
                cells[index].classList.add('popular');
                if (table === lastTable && rowIndex === rows.length - 1) {
                    cells[index].classList.add('popular-bottom');
                }
            }
        });
    });
}

function highlightMainHeader(index) {
    const mainTable = document.querySelector('table.compare-table#main');
    if (!mainTable) return;
    const headerRow = mainTable.querySelector('thead tr');
    if (!headerRow) return;
    const th = headerRow.children[index];
    if (!th) return;
    th.classList.add('popular');

    const marker = document.createElement('span');
    marker.className = 'marker';

    const markerText = document.createElement('span');
    markerText.className = 'marker-text';
    markerText.textContent = 'Khuyên dùng';

    marker.appendChild(markerText);

    th.appendChild(marker);
}
{/* < span class="marker" ><span class="marker-text">Khuyên dùng</span></span > */ }
function toggleTable() {
    const tableToggles = document.querySelectorAll('.tr-header');
    tableToggles.forEach(row => {
        row.addEventListener('click', () => {
            const parentRow = row.closest('.td-open-content');
            if (parentRow) {
                parentRow.classList.toggle('open');
            }
        });
    });
};

// function toggleFaq() {
const faqToggles = document.querySelectorAll('.ques-heading');
faqToggles.forEach(row => {
    row.addEventListener('click', () => {
        const parentRow = row.closest('.ques-li');
        if (parentRow) {
            parentRow.classList.toggle('open');
        }
    });
});


// function toggleMobileNav() {
const toggleBtn = document.querySelector('.m-nav-toggle-menu');
const menu = document.getElementById('menu')
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open')
})

document.addEventListener('click', (e) => {
    if (menu.classList.contains('open')
        && !menu.contains(e.target)
        && !toggleBtn.contains(e.target)) {
        menu.classList.remove('open');
    }
});

