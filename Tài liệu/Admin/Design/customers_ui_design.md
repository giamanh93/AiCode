# Thiết kế UI/UX - Quản lý Khách hàng

## 1. Tổng quan
Chức năng quản lý khách hàng cho phép người dùng thêm, sửa, xóa và xem thông tin khách hàng. Giao diện được thiết kế dựa trên ng-zorro-antd với các components chính sau:

## 2. Cấu trúc màn hình

### 2.1. Danh sách khách hàng (Customer List)
```typescript
// Components chính
- nz-table: Hiển thị danh sách khách hàng
- nz-input: Tìm kiếm
- nz-button: Thêm mới, Xuất Excel
- nz-modal: Form thêm/sửa khách hàng
- nz-form: Form nhập liệu
- nz-select: Chọn loại khách hàng
- nz-date-picker: Chọn ngày
```

#### Layout
```
+------------------------------------------+
|  Tìm kiếm  [Thêm mới] [Xuất Excel]      |
+------------------------------------------+
|  Mã KH | Tên KH | Loại | Địa chỉ | ...   |
|------------------------------------------|
|  CUS001| ABC    | DN   | HCM     | ...   |
|  CUS002| XYZ    | CN   | HN      | ...   |
+------------------------------------------+
```

#### Các cột trong bảng
1. Mã khách hàng (customerCode)
2. Tên khách hàng (customerName)
3. Loại khách hàng (customerType)
4. Địa chỉ (address)
5. Số điện thoại (phone)
6. Email (email)
7. Người liên hệ (contactPerson)
8. Hạn mức tín dụng (creditLimit)
9. Thời hạn thanh toán (paymentTerm)
10. Trạng thái (isActive)
11. Thao tác (Sửa/Xóa)

### 2.2. Form thêm/sửa khách hàng
```typescript
// Components
- nz-form
- nz-form-item
- nz-input
- nz-select
- nz-input-number
- nz-switch
```

#### Layout
```
+------------------------------------------+
|  Thông tin khách hàng                    |
+------------------------------------------+
|  Mã KH:     [          ]                 |
|  Tên KH:    [          ]                 |
|  Loại KH:   [          ]                 |
|  Địa chỉ:   [          ]                 |
|  Số ĐT:     [          ]                 |
|  Email:     [          ]                 |
|  Người LH:  [          ]                 |
|  Hạn mức:   [          ]                 |
|  Thời hạn:  [          ]                 |
|  Trạng thái:[          ]                 |
+------------------------------------------+
|  [Hủy]                    [Lưu]          |
+------------------------------------------+
```

## 3. Các tính năng chính

### 3.1. Tìm kiếm
- Tìm theo mã, tên, số điện thoại, email
- Lọc theo loại khách hàng
- Lọc theo trạng thái

### 3.2. Thêm mới
- Validate dữ liệu đầu vào
- Tự động sinh mã khách hàng
- Kiểm tra trùng lặp

### 3.3. Sửa thông tin
- Load thông tin hiện tại
- Validate dữ liệu
- Lưu lịch sử thay đổi

### 3.4. Xóa khách hàng
- Kiểm tra ràng buộc
- Xác nhận trước khi xóa
- Soft delete

### 3.5. Xuất Excel
- Xuất toàn bộ danh sách
- Xuất theo bộ lọc

## 4. Validation Rules

### 4.1. Bắt buộc nhập
- Mã khách hàng
- Tên khách hàng
- Loại khách hàng
- Số điện thoại
- Email

### 4.2. Format
- Email: email hợp lệ
- Số điện thoại: 10-11 số
- Mã số thuế: 10-13 số (nếu có)
- Hạn mức tín dụng: số dương
- Thời hạn thanh toán: số nguyên dương

## 5. States & Loading

### 5.1. Loading States
- Loading danh sách
- Loading form
- Loading thao tác

### 5.2. Error States
- Lỗi kết nối
- Lỗi validate
- Lỗi server

## 6. Responsive Design
- Desktop: Hiển thị đầy đủ cột
- Tablet: Ẩn một số cột ít quan trọng
- Mobile: Chuyển sang dạng card view

## 7. Theme & Styling
```scss
// Colors
$primary-color: #1890ff;
$success-color: #52c41a;
$warning-color: #faad14;
$error-color: #f5222d;

// Typography
$font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;

// Spacing
$spacing-unit: 8px;
$spacing-small: $spacing-unit;
$spacing-medium: $spacing-unit * 2;
$spacing-large: $spacing-unit * 3;
```

## 8. Accessibility
- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast

## 9. Performance
- Lazy loading
- Virtual scrolling
- Debounce search
- Cache data

## 10. Security
- XSS prevention
- Input sanitization
- Role-based access
- Audit logging 