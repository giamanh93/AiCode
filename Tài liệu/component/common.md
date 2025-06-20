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




FORM

Tôi muốn xây dựng lên một form chung mà ở các page chỉ cần gọi đến và truyền vào data và cấu hình fields thì sẽ tự động tạo ra form hiển thị lên được màn hình 

đây là cấu trúc form fields demo bạn có thể từ cấu hình này tạo ra 1 component form-detail chung

{
  "formGroupTitle": "Thông tin nhà cung cấp",
  "fields": [
    {
      "key": "supplier_code",
      "type": "input",
      "label": "Mã nhà cung cấp",
      "required": true,
      "readonly": true,
      "placeholder": "Tự động sinh",
      "columns": "col-6"
    },
    {
      "key": "supplier_name",
      "type": "input",
      "label": "Tên nhà cung cấp",
      "required": true,
      "placeholder": "Nhập tên",
      "columns": "col-6"
    },
    {
      "key": "phone",
      "type": "input",
      "label": "Số điện thoại",
      "placeholder": "VD: 0901234567",
      "validators": {
        "pattern": "^[0-9]{10,11}$"
      },
      "columns": "col-6"
    },
    {
      "key": "active",
      "type": "checkbox",
      "label": "Đang hoạt động",
      "defaultValue": true,
      "columns": "col-6"
    },
    {
      "key": "supplier_type",
      "type": "select",
      "label": "Loại nhà cung cấp",
      "options": [
        { "label": "Cá nhân", "value": "personal" },
        { "label": "Doanh nghiệp", "value": "business" }
      ],
      "required": true,
      "columns": "col-12"
    }
  ]
}