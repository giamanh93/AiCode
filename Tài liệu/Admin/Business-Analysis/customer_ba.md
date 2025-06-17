# Tài liệu Phân tích Nghiệp vụ (BA) - Chức năng Quản lý Khách hàng

## 1. Tổng quan
Chức năng Quản lý Khách hàng cho phép hệ thống theo dõi và quản lý thông tin của khách hàng trong hệ thống bán vật liệu xây dựng.

## 2. Các chức năng chính

### 2.1. Quản lý thông tin khách hàng
- Thêm mới khách hàng
- Cập nhật thông tin khách hàng
- Xem chi tiết khách hàng
- Xóa khách hàng (nếu cần)

### 2.2. Thông tin khách hàng cần lưu trữ
- Mã khách hàng (tự động sinh)
- Họ và tên
- Số điện thoại
- Email
- Địa chỉ
- Loại khách hàng (Cá nhân/Doanh nghiệp)
- Ngày đăng ký
- Trạng thái (Hoạt động/Không hoạt động)
- Ghi chú

### 2.3. Phân quyền
- Admin: Có toàn quyền quản lý khách hàng
- Nhân viên bán hàng: Có quyền xem và thêm mới khách hàng
- Nhân viên kho: Chỉ có quyền xem thông tin khách hàng

## 3. Quy trình nghiệp vụ

### 3.1. Thêm mới khách hàng
1. Nhân viên bán hàng truy cập vào form thêm mới khách hàng
2. Điền đầy đủ thông tin bắt buộc
3. Hệ thống kiểm tra trùng lặp (số điện thoại, email)
4. Lưu thông tin khách hàng

### 3.2. Cập nhật thông tin khách hàng
1. Tìm kiếm khách hàng cần cập nhật
2. Chỉnh sửa thông tin cần thiết
3. Lưu thay đổi

## 4. Yêu cầu phi chức năng

### 4.1. Hiệu năng
- Thời gian tải trang danh sách khách hàng < 2 giây
- Thời gian tìm kiếm khách hàng < 1 giây

### 4.2. Bảo mật
- Mã hóa thông tin nhạy cảm của khách hàng
- Ghi log các thao tác thay đổi thông tin khách hàng
- Phân quyền truy cập theo vai trò

### 4.3. Tính khả dụng
- Giao diện thân thiện, dễ sử dụng
- Hỗ trợ tìm kiếm nhanh
- Có tính năng lọc và sắp xếp dữ liệu

## 5. Giao diện người dùng

### 5.1. Danh sách khách hàng
- Hiển thị dạng bảng với các cột: Mã KH, Họ tên, SĐT, Email, Địa chỉ, Trạng thái
- Có thanh tìm kiếm và bộ lọc
- Phân trang

### 5.2. Form thêm/sửa khách hàng
- Bố cục rõ ràng, dễ nhập liệu
- Validate dữ liệu realtime
- Thông báo lỗi rõ ràng

## 6. Tích hợp
- Tích hợp với module Bán hàng
- Tích hợp với module Báo cáo
- Tích hợp với module Quản lý đơn hàng

## 7. Báo cáo
- Báo cáo danh sách khách hàng
- Báo cáo thống kê khách hàng theo loại
- Báo cáo khách hàng mới theo thời gian 