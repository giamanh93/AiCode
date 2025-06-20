Table:

Tôi muốn xây dựng lên một table chung mà ở các mà các page chỉ cần import và truyền data (1 mảng json) , columns vào thì sẽ hiển thị được danh sách ra màn hinh

Trong columns sẽ là cấu hình các trường hiển thị gồm 
Thông tin cần có cho mỗi column
Thuộc tính	Mô tả
field	Tên trường trong DB hoặc API (ví dụ: supplier_code)
label / header	Tiêu đề hiển thị trên giao diện người dùng (ví dụ: Mã nhà cung cấp)
type	Kiểu dữ liệu: text, number, date, boolean, select, image, button, custom
sortable	Có cho phép sắp xếp không (true/false)
filterable	Có cho phép lọc không (true/false)
editable	Có cho phép sửa không (true/false)
required	Có bắt buộc không (true/false)
visible	Có hiển thị hay không
width	Chiều rộng cột (px, %, hoặc auto)
align	Căn lề: left, center, right
format	Định dạng hiển thị (dùng cho date, currency, v.v.)
options	Dùng cho select hoặc lookup, danh sách lựa chọn
customRender	Hàm hoặc component để render tùy chỉnh

