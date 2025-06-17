-- Mock data cho hệ thống quản lý vật liệu xây dựng

-- 1. Insert Categories
INSERT INTO Categories (CategoryCode, CategoryName, ParentID, Description, IsActive, CreatedBy, CreatedDate)
VALUES 
('CAT001', N'Gạch xây dựng', NULL, N'Các loại gạch xây dựng', 1, 1, GETDATE()),
('CAT002', N'Xi măng', NULL, N'Các loại xi măng', 1, 1, GETDATE()),
('CAT003', N'Sắt thép', NULL, N'Các loại sắt thép xây dựng', 1, 1, GETDATE()),
('CAT004', N'Cát đá', NULL, N'Các loại cát đá xây dựng', 1, 1, GETDATE()),
('CAT005', N'Sơn', NULL, N'Các loại sơn', 1, 1, GETDATE());

-- 2. Insert Units
INSERT INTO Units (UnitCode, UnitName, Description, IsActive, CreatedBy, CreatedDate)
VALUES 
('UNT001', N'Viên', N'Đơn vị tính theo viên', 1, 1, GETDATE()),
('UNT002', N'Bao', N'Đơn vị tính theo bao', 1, 1, GETDATE()),
('UNT003', N'Kg', N'Đơn vị tính theo kilogram', 1, 1, GETDATE()),
('UNT004', N'm3', N'Đơn vị tính theo mét khối', 1, 1, GETDATE()),
('UNT005', N'Thùng', N'Đơn vị tính theo thùng', 1, 1, GETDATE());

-- 3. Insert Materials
INSERT INTO Materials (MaterialCode, MaterialName, CategoryID, UnitID, MinStock, MaxStock, Description, IsActive, CreatedBy, CreatedDate)
VALUES 
('MT001', N'Gạch đặc 6.5x10.5x22', 1, 1, 1000, 10000, N'Gạch đặc kích thước 6.5x10.5x22', 1, 1, GETDATE()),
('MT002', N'Gạch ống 8x8x19', 1, 1, 1000, 10000, N'Gạch ống kích thước 8x8x19', 1, 1, GETDATE()),
('MT003', N'Xi măng Hà Tiên', 2, 2, 50, 500, N'Xi măng Hà Tiên bao 50kg', 1, 1, GETDATE()),
('MT004', N'Thép Việt Nhật', 3, 3, 100, 1000, N'Thép Việt Nhật phi 6', 1, 1, GETDATE()),
('MT005', N'Cát xây dựng', 4, 4, 10, 100, N'Cát xây dựng loại 1', 1, 1, GETDATE()),
('MT006', N'Sơn nội thất', 5, 5, 20, 200, N'Sơn nội thất cao cấp', 1, 1, GETDATE());

-- 4. Insert Suppliers
INSERT INTO Suppliers (SupplierCode, SupplierName, TaxCode, Address, Phone, Email, ContactPerson, BankAccount, BankName, CreditLimit, PaymentTerm, IsActive, CreatedBy, CreatedDate)
VALUES 
('SUP001', N'Công ty TNHH Vật liệu Xây dựng ABC', '1234567890', N'123 Đường ABC, Quận 1, TP.HCM', '0123456789', 'contact@abc.com', N'Nguyễn Văn A', '1234567890', N'Vietcombank', 1000000000, 30, 1, 1, GETDATE()),
('SUP002', N'Công ty CP Vật liệu XYZ', '0987654321', N'456 Đường XYZ, Quận 2, TP.HCM', '0987654321', 'contact@xyz.com', N'Trần Văn B', '0987654321', N'Techcombank', 2000000000, 45, 1, 1, GETDATE()),
('SUP003', N'Công ty TNHH Thép DEF', '1122334455', N'789 Đường DEF, Quận 3, TP.HCM', '0123456788', 'contact@def.com', N'Lê Văn C', '1122334455', N'ACB', 1500000000, 30, 1, 1, GETDATE());

-- 5. Insert Customers
INSERT INTO Customers (CustomerCode, CustomerName, TaxCode, Address, Phone, Email, ContactPerson, CustomerType, CreditLimit, PaymentTerm, IsActive, CreatedBy, CreatedDate)
VALUES 
('CUS001', N'Công ty TNHH Xây dựng 123', '2233445566', N'111 Đường 123, Quận 4, TP.HCM', '0123456777', 'contact@123.com', N'Phạm Văn D', N'Doanh nghiệp', 500000000, 30, 1, 1, GETDATE()),
('CUS002', N'Công ty CP Xây dựng 456', '3344556677', N'222 Đường 456, Quận 5, TP.HCM', '0123456666', 'contact@456.com', N'Hoàng Văn E', N'Doanh nghiệp', 1000000000, 45, 1, 1, GETDATE()),
('CUS003', N'Anh Nguyễn Văn F', NULL, N'333 Đường 789, Quận 6, TP.HCM', '0123456555', 'contact@789.com', N'Nguyễn Văn F', N'Cá nhân', 100000000, 0, 1, 1, GETDATE());

-- 6. Insert PurchaseOrders
INSERT INTO PurchaseOrders (PurchaseOrderCode, SupplierID, OrderDate, DeliveryDate, TotalAmount, Status, PaymentStatus, Notes, CreatedBy, CreatedDate)
VALUES 
('PO001', 1, DATEADD(day, -30, GETDATE()), DATEADD(day, -25, GETDATE()), 50000000, 'Received', 'Paid', N'Đơn hàng tháng 1', 1, GETDATE()),
('PO002', 2, DATEADD(day, -20, GETDATE()), DATEADD(day, -15, GETDATE()), 75000000, 'Received', 'Partial', N'Đơn hàng tháng 2', 1, GETDATE()),
('PO003', 3, DATEADD(day, -10, GETDATE()), DATEADD(day, -5, GETDATE()), 100000000, 'Confirmed', 'Unpaid', N'Đơn hàng tháng 3', 1, GETDATE());

-- 7. Insert PurchaseOrderDetails
INSERT INTO PurchaseOrderDetails (PurchaseOrderID, MaterialID, Quantity, UnitPrice, Amount, Notes)
VALUES 
(1, 1, 5000, 5000, 25000000, N'Gạch đặc'),
(1, 3, 100, 250000, 25000000, N'Xi măng'),
(2, 2, 3000, 6000, 18000000, N'Gạch ống'),
(2, 4, 500, 114000, 57000000, N'Thép'),
(3, 5, 20, 5000000, 100000000, N'Cát xây dựng');

-- 8. Insert SalesOrders
INSERT INTO SalesOrders (SalesOrderCode, CustomerID, OrderDate, DeliveryDate, TotalAmount, DiscountAmount, TaxAmount, GrandTotal, Status, PaymentStatus, Notes, CreatedBy, CreatedDate)
VALUES 
('SO001', 1, DATEADD(day, -25, GETDATE()), DATEADD(day, -20, GETDATE()), 30000000, 0, 3000000, 33000000, 'Delivered', 'Paid', N'Đơn hàng tháng 1', 1, GETDATE()),
('SO002', 2, DATEADD(day, -15, GETDATE()), DATEADD(day, -10, GETDATE()), 45000000, 4500000, 4050000, 44550000, 'Delivered', 'Partial', N'Đơn hàng tháng 2', 1, GETDATE()),
('SO003', 3, DATEADD(day, -5, GETDATE()), DATEADD(day, 0, GETDATE()), 20000000, 0, 2000000, 22000000, 'Confirmed', 'Unpaid', N'Đơn hàng tháng 3', 1, GETDATE());

-- 9. Insert SalesOrderDetails
INSERT INTO SalesOrderDetails (SalesOrderID, MaterialID, Quantity, UnitPrice, Amount, Notes)
VALUES 
(1, 1, 3000, 6000, 18000000, N'Gạch đặc'),
(1, 3, 50, 240000, 12000000, N'Xi măng'),
(2, 2, 2000, 7000, 14000000, N'Gạch ống'),
(2, 4, 300, 120000, 36000000, N'Thép'),
(3, 5, 10, 2000000, 20000000, N'Cát xây dựng');

-- 10. Insert Inventory
INSERT INTO Inventory (MaterialID, Quantity, LastUpdated)
VALUES 
(1, 2000, GETDATE()),
(2, 1000, GETDATE()),
(3, 50, GETDATE()),
(4, 200, GETDATE()),
(5, 10, GETDATE()),
(6, 20, GETDATE());

-- 11. Insert Payments
INSERT INTO Payments (PaymentCode, PaymentDate, PaymentType, ReferenceID, Amount, PaymentMethod, Notes, CreatedBy, CreatedDate)
VALUES 
('PAY001', DATEADD(day, -20, GETDATE()), 'Purchase', 1, 50000000, 'Bank Transfer', N'Thanh toán đơn PO001', 1, GETDATE()),
('PAY002', DATEADD(day, -10, GETDATE()), 'Purchase', 2, 25000000, 'Bank Transfer', N'Thanh toán đơn PO002', 1, GETDATE()),
('PAY003', DATEADD(day, -15, GETDATE()), 'Sales', 1, 33000000, 'Cash', N'Thanh toán đơn SO001', 1, GETDATE()),
('PAY004', DATEADD(day, -5, GETDATE()), 'Sales', 2, 20000000, 'Bank Transfer', N'Thanh toán đơn SO002', 1, GETDATE()); 