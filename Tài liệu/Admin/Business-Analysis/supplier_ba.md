# Tài liệu Phân tích Nghiệp vụ (BA) - Chức năng Quản lý Nhà cung cấp vật tư

## 1. Tổng quan
Chức năng Quản lý Nhà cung cấp vật tư cho phép hệ thống theo dõi và quản lý thông tin của các nhà cung cấp vật liệu xây dựng, bao gồm thông tin liên hệ, danh mục vật tư cung cấp, lịch sử giao dịch và đánh giá.

## 2. Các chức năng chính

### 2.1. Quản lý thông tin nhà cung cấp
- Thêm mới nhà cung cấp
- Cập nhật thông tin nhà cung cấp
- Xem chi tiết nhà cung cấp
- Xóa nhà cung cấp (nếu cần)
- Quản lý trạng thái hoạt động

### 2.2. Thông tin nhà cung cấp cần lưu trữ
- Mã nhà cung cấp (tự động sinh)
- Tên công ty/nhà cung cấp
- Mã số thuế
- Địa chỉ trụ sở
- Số điện thoại liên hệ
- Email liên hệ
- Người đại diện
- Danh mục vật tư cung cấp
- Điều khoản thanh toán
- Thời gian giao hàng
- Đánh giá chất lượng (1-5 sao)
- Trạng thái (Hoạt động/Không hoạt động)
- Ghi chú

### 2.3. Quản lý danh mục vật tư
- Thêm/sửa/xóa vật tư cung cấp
- Cập nhật giá vật tư
- Quản lý tồn kho tối thiểu
- Theo dõi lịch sử giá

### 2.4. Phân quyền
- Admin: Có toàn quyền quản lý nhà cung cấp
- Quản lý kho: Có quyền xem và cập nhật thông tin nhà cung cấp
- Nhân viên mua hàng: Có quyền xem thông tin và tạo đơn đặt hàng

## 3. Quy trình nghiệp vụ

### 3.1. Thêm mới nhà cung cấp
1. Nhân viên mua hàng truy cập form thêm mới
2. Điền đầy đủ thông tin bắt buộc
3. Hệ thống kiểm tra trùng lặp (mã số thuế, email)
4. Quản lý phê duyệt thông tin
5. Lưu thông tin nhà cung cấp

### 3.2. Cập nhật thông tin nhà cung cấp
1. Tìm kiếm nhà cung cấp cần cập nhật
2. Chỉnh sửa thông tin cần thiết
3. Lưu thay đổi và ghi log

### 3.3. Quản lý đơn hàng
1. Tạo đơn đặt hàng với nhà cung cấp
2. Theo dõi trạng thái đơn hàng
3. Cập nhật thông tin giao hàng
4. Đánh giá chất lượng sau khi nhận hàng

## 4. Yêu cầu phi chức năng

### 4.1. Hiệu năng
- Thời gian tải trang danh sách < 2 giây
- Thời gian tìm kiếm < 1 giây
- Hỗ trợ xử lý đồng thời nhiều đơn hàng

### 4.2. Bảo mật
- Mã hóa thông tin nhạy cảm
- Ghi log đầy đủ các thao tác
- Phân quyền chi tiết theo vai trò
- Lưu trữ lịch sử thay đổi

### 4.3. Tính khả dụng
- Giao diện trực quan, dễ sử dụng
- Hỗ trợ tìm kiếm nâng cao
- Tích hợp thông báo realtime
- Xuất báo cáo đa dạng định dạng

## 5. Giao diện người dùng

### 5.1. Danh sách nhà cung cấp
- Hiển thị dạng bảng với các cột: Mã NCC, Tên công ty, Mã số thuế, SĐT, Email, Trạng thái
- Bộ lọc nâng cao
- Phân trang
- Sắp xếp theo nhiều tiêu chí

### 5.2. Form thêm/sửa nhà cung cấp
- Bố cục rõ ràng
- Validate dữ liệu realtime
- Upload tài liệu đính kèm
- Lịch sử thay đổi

### 5.3. Quản lý vật tư
- Danh sách vật tư theo nhà cung cấp
- Biểu đồ theo dõi giá
- Cảnh báo tồn kho
- Lịch sử giao dịch

## 6. Tích hợp
- Tích hợp với module Quản lý kho
- Tích hợp với module Mua hàng
- Tích hợp với module Tài chính
- Tích hợp với module Báo cáo

## 7. Báo cáo
- Báo cáo danh sách nhà cung cấp
- Báo cáo đánh giá nhà cung cấp
- Báo cáo lịch sử giao dịch
- Báo cáo thống kê vật tư theo nhà cung cấp
- Báo cáo chi phí mua hàng
- Báo cáo thời gian giao hàng

## 8. Quy trình đánh giá nhà cung cấp
- Tiêu chí đánh giá:
  + Chất lượng vật tư
  + Thời gian giao hàng
  + Giá cả
  + Dịch vụ hỗ trợ
  + Khả năng đáp ứng
- Tần suất đánh giá: Hàng quý
- Xếp hạng nhà cung cấp: A, B, C, D
- Cơ chế cập nhật và thông báo kết quả đánh giá 