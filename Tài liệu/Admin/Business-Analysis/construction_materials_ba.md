# Tài liệu Phân tích Nghiệp vụ (BA) - Hệ thống Quản lý Bán Vật liệu Xây dựng

## 1. Tổng quan
Hệ thống quản lý bán vật liệu xây dựng tập trung vào việc quản lý quy trình nhập hàng từ nhà cung cấp và bán hàng cho khách hàng, theo dõi công nợ, quản lý tồn kho và báo cáo tài chính.

## 2. Các Chức năng Chính

### 2.1. Quản lý Nhập hàng
- Tạo phiếu nhập hàng từ nhà cung cấp
- Quản lý danh sách nhà cung cấp
- Theo dõi giá nhập
- Quản lý công nợ nhà cung cấp
- In hóa đơn nhập hàng
- Cập nhật tồn kho

### 2.2. Quản lý Bán hàng
- Tạo hóa đơn bán hàng
- Quản lý danh sách khách hàng
- Tính giá bán và chiết khấu
- Quản lý công nợ khách hàng
- In hóa đơn bán hàng
- Cập nhật tồn kho

### 2.3. Quản lý Tồn kho
- Theo dõi số lượng tồn
- Cảnh báo tồn kho thấp
- Kiểm kê định kỳ
- Báo cáo tồn kho
- Quản lý vị trí kho

### 2.4. Quản lý Công nợ
- Theo dõi công nợ khách hàng
- Theo dõi công nợ nhà cung cấp
- Quản lý thanh toán
- Báo cáo công nợ
- Cảnh báo công nợ quá hạn

### 2.5. Quản lý Tài chính
- Theo dõi doanh thu
- Theo dõi chi phí
- Tính lợi nhuận
- Báo cáo tài chính
- Phân tích lợi nhuận

## 3. Quy trình Nghiệp vụ

### 3.1. Quy trình Nhập hàng
1. Tạo phiếu nhập hàng
   - Chọn nhà cung cấp
   - Chọn vật tư
   - Nhập số lượng, đơn giá
   - Tính tổng tiền

2. Xác nhận nhập hàng
   - Kiểm tra hàng hóa
   - Cập nhật tồn kho
   - Tạo công nợ nhà cung cấp
   - In hóa đơn nhập

### 3.2. Quy trình Bán hàng
1. Tạo hóa đơn bán hàng
   - Chọn khách hàng
   - Chọn vật tư
   - Nhập số lượng
   - Tính giá bán
   - Áp dụng chiết khấu

2. Xác nhận bán hàng
   - Kiểm tra tồn kho
   - Cập nhật tồn kho
   - Tạo công nợ khách hàng
   - In hóa đơn bán

### 3.3. Quy trình Thanh toán
1. Thanh toán cho nhà cung cấp
   - Chọn nhà cung cấp
   - Chọn hóa đơn cần thanh toán
   - Nhập số tiền thanh toán
   - Cập nhật công nợ

2. Thu tiền khách hàng
   - Chọn khách hàng
   - Chọn hóa đơn cần thu
   - Nhập số tiền thu
   - Cập nhật công nợ

## 4. Báo cáo và Thống kê

### 4.1. Báo cáo Kinh doanh
- Doanh thu theo ngày/tháng/quý/năm
- Chi phí theo ngày/tháng/quý/năm
- Lợi nhuận theo ngày/tháng/quý/năm
- Tỷ suất lợi nhuận
- So sánh với kỳ trước

### 4.2. Báo cáo Tồn kho
- Tồn kho hiện tại
- Tồn kho tối thiểu
- Vật tư sắp hết
- Vật tư tồn kho lâu
- Biến động tồn kho

### 4.3. Báo cáo Công nợ
- Công nợ khách hàng
- Công nợ nhà cung cấp
- Công nợ quá hạn
- Tuổi nợ
- Dự báo thu chi

## 5. Cảnh báo và Thông báo

### 5.1. Cảnh báo Tồn kho
- Tồn kho thấp
- Hết hàng
- Tồn kho quá nhiều
- Hàng sắp hết hạn
- Hàng tồn kho lâu

### 5.2. Cảnh báo Công nợ
- Công nợ quá hạn
- Công nợ sắp đến hạn
- Công nợ vượt hạn mức
- Cảnh báo thanh toán
- Cảnh báo thu tiền

## 6. Yêu cầu Phi chức năng

### 6.1. Hiệu năng
- Thời gian xử lý giao dịch < 3 giây
- Thời gian in hóa đơn < 5 giây
- Hỗ trợ nhiều người dùng đồng thời
- Xử lý được khối lượng lớn giao dịch

### 6.2. Bảo mật
- Phân quyền chi tiết
- Mã hóa dữ liệu nhạy cảm
- Ghi log đầy đủ
- Sao lưu dữ liệu

### 6.3. Tính khả dụng
- Giao diện trực quan
- Dễ sử dụng
- Hỗ trợ in ấn
- Xuất báo cáo đa dạng

## 7. Tích hợp

### 7.1. Tích hợp Nội bộ
- Module Quản lý kho
- Module Bán hàng
- Module Mua hàng
- Module Tài chính
- Module Báo cáo

### 7.2. Tích hợp Bên ngoài
- Máy in hóa đơn
- Cân điện tử
- Hệ thống thanh toán
- SMS/Email thông báo
- Công cụ phân tích 