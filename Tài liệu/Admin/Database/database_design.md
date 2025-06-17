# Thiết kế Database SQL Server - Hệ thống Quản lý Bán Vật liệu Xây dựng

## 1. Các Bảng Chính

### 1.1. Bảng Danh mục Vật tư (Materials)
```sql
CREATE TABLE Materials (
    MaterialID INT IDENTITY(1,1) PRIMARY KEY,
    MaterialCode VARCHAR(20) NOT NULL UNIQUE,
    MaterialName NVARCHAR(200) NOT NULL,
    CategoryID INT NOT NULL,
    UnitID INT NOT NULL,
    MinStock INT NOT NULL DEFAULT 0,
    MaxStock INT NOT NULL DEFAULT 0,
    Description NVARCHAR(500),
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME,
    CONSTRAINT FK_Materials_Categories FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID),
    CONSTRAINT FK_Materials_Units FOREIGN KEY (UnitID) REFERENCES Units(UnitID)
);

-- Log table
CREATE TABLE Materials_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    MaterialID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL, -- INSERT, UPDATE, DELETE
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.2. Bảng Danh mục (Categories)
```sql
CREATE TABLE Categories (
    CategoryID INT IDENTITY(1,1) PRIMARY KEY,
    CategoryCode VARCHAR(20) NOT NULL UNIQUE,
    CategoryName NVARCHAR(100) NOT NULL,
    ParentID INT,
    Description NVARCHAR(500),
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME,
    CONSTRAINT FK_Categories_Parent FOREIGN KEY (ParentID) REFERENCES Categories(CategoryID)
);

-- Log table
CREATE TABLE Categories_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    CategoryID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.3. Bảng Đơn vị tính (Units)
```sql
CREATE TABLE Units (
    UnitID INT IDENTITY(1,1) PRIMARY KEY,
    UnitCode VARCHAR(20) NOT NULL UNIQUE,
    UnitName NVARCHAR(50) NOT NULL,
    Description NVARCHAR(200),
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME
);

-- Log table
CREATE TABLE Units_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    UnitID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.4. Bảng Nhà cung cấp (Suppliers)
```sql
CREATE TABLE Suppliers (
    SupplierID INT IDENTITY(1,1) PRIMARY KEY,
    SupplierCode VARCHAR(20) NOT NULL UNIQUE,
    SupplierName NVARCHAR(200) NOT NULL,
    TaxCode VARCHAR(20),
    Address NVARCHAR(500),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    ContactPerson NVARCHAR(100),
    BankAccount VARCHAR(50),
    BankName NVARCHAR(200),
    CreditLimit DECIMAL(18,2),
    PaymentTerm INT, -- Số ngày được nợ
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME
);

-- Log table
CREATE TABLE Suppliers_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    SupplierID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.5. Bảng Khách hàng (Customers)
```sql
CREATE TABLE Customers (
    CustomerID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerCode VARCHAR(20) NOT NULL UNIQUE,
    CustomerName NVARCHAR(200) NOT NULL,
    TaxCode VARCHAR(20),
    Address NVARCHAR(500),
    Phone VARCHAR(20),
    Email VARCHAR(100),
    ContactPerson NVARCHAR(100),
    CustomerType VARCHAR(20), -- Cá nhân/Doanh nghiệp
    CreditLimit DECIMAL(18,2),
    PaymentTerm INT,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME
);

-- Log table
CREATE TABLE Customers_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    CustomerID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.6. Bảng Phiếu nhập hàng (PurchaseOrders)
```sql
CREATE TABLE PurchaseOrders (
    PurchaseOrderID INT IDENTITY(1,1) PRIMARY KEY,
    PurchaseOrderCode VARCHAR(20) NOT NULL UNIQUE,
    SupplierID INT NOT NULL,
    OrderDate DATETIME NOT NULL,
    DeliveryDate DATETIME,
    TotalAmount DECIMAL(18,2) NOT NULL,
    Status VARCHAR(20) NOT NULL, -- Draft, Confirmed, Received, Cancelled
    PaymentStatus VARCHAR(20) NOT NULL, -- Unpaid, Partial, Paid
    Notes NVARCHAR(500),
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME,
    CONSTRAINT FK_PurchaseOrders_Suppliers FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

-- Log table
CREATE TABLE PurchaseOrders_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    PurchaseOrderID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.7. Bảng Chi tiết phiếu nhập (PurchaseOrderDetails)
```sql
CREATE TABLE PurchaseOrderDetails (
    PurchaseOrderDetailID INT IDENTITY(1,1) PRIMARY KEY,
    PurchaseOrderID INT NOT NULL,
    MaterialID INT NOT NULL,
    Quantity DECIMAL(18,2) NOT NULL,
    UnitPrice DECIMAL(18,2) NOT NULL,
    Amount DECIMAL(18,2) NOT NULL,
    Notes NVARCHAR(200),
    CONSTRAINT FK_PurchaseOrderDetails_PurchaseOrders FOREIGN KEY (PurchaseOrderID) REFERENCES PurchaseOrders(PurchaseOrderID),
    CONSTRAINT FK_PurchaseOrderDetails_Materials FOREIGN KEY (MaterialID) REFERENCES Materials(MaterialID)
);

-- Log table
CREATE TABLE PurchaseOrderDetails_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    PurchaseOrderDetailID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.8. Bảng Hóa đơn bán hàng (SalesOrders)
```sql
CREATE TABLE SalesOrders (
    SalesOrderID INT IDENTITY(1,1) PRIMARY KEY,
    SalesOrderCode VARCHAR(20) NOT NULL UNIQUE,
    CustomerID INT NOT NULL,
    OrderDate DATETIME NOT NULL,
    DeliveryDate DATETIME,
    TotalAmount DECIMAL(18,2) NOT NULL,
    DiscountAmount DECIMAL(18,2) DEFAULT 0,
    TaxAmount DECIMAL(18,2) DEFAULT 0,
    GrandTotal DECIMAL(18,2) NOT NULL,
    Status VARCHAR(20) NOT NULL, -- Draft, Confirmed, Delivered, Cancelled
    PaymentStatus VARCHAR(20) NOT NULL, -- Unpaid, Partial, Paid
    Notes NVARCHAR(500),
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME,
    CONSTRAINT FK_SalesOrders_Customers FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Log table
CREATE TABLE SalesOrders_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    SalesOrderID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.9. Bảng Chi tiết hóa đơn bán (SalesOrderDetails)
```sql
CREATE TABLE SalesOrderDetails (
    SalesOrderDetailID INT IDENTITY(1,1) PRIMARY KEY,
    SalesOrderID INT NOT NULL,
    MaterialID INT NOT NULL,
    Quantity DECIMAL(18,2) NOT NULL,
    UnitPrice DECIMAL(18,2) NOT NULL,
    Amount DECIMAL(18,2) NOT NULL,
    Notes NVARCHAR(200),
    CONSTRAINT FK_SalesOrderDetails_SalesOrders FOREIGN KEY (SalesOrderID) REFERENCES SalesOrders(SalesOrderID),
    CONSTRAINT FK_SalesOrderDetails_Materials FOREIGN KEY (MaterialID) REFERENCES Materials(MaterialID)
);

-- Log table
CREATE TABLE SalesOrderDetails_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    SalesOrderDetailID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.10. Bảng Tồn kho (Inventory)
```sql
CREATE TABLE Inventory (
    InventoryID INT IDENTITY(1,1) PRIMARY KEY,
    MaterialID INT NOT NULL,
    Quantity DECIMAL(18,2) NOT NULL DEFAULT 0,
    LastUpdated DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_Inventory_Materials FOREIGN KEY (MaterialID) REFERENCES Materials(MaterialID)
);

-- Log table
CREATE TABLE Inventory_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    InventoryID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

### 1.11. Bảng Thanh toán (Payments)
```sql
CREATE TABLE Payments (
    PaymentID INT IDENTITY(1,1) PRIMARY KEY,
    PaymentCode VARCHAR(20) NOT NULL UNIQUE,
    PaymentDate DATETIME NOT NULL,
    PaymentType VARCHAR(20) NOT NULL, -- Purchase, Sales
    ReferenceID INT NOT NULL, -- PurchaseOrderID hoặc SalesOrderID
    Amount DECIMAL(18,2) NOT NULL,
    PaymentMethod VARCHAR(20) NOT NULL, -- Cash, Bank Transfer, etc.
    Notes NVARCHAR(500),
    CreatedBy INT NOT NULL,
    CreatedDate DATETIME NOT NULL DEFAULT GETDATE(),
    ModifiedBy INT,
    ModifiedDate DATETIME
);

-- Log table
CREATE TABLE Payments_Log (
    LogID INT IDENTITY(1,1) PRIMARY KEY,
    PaymentID INT NOT NULL,
    ActionType VARCHAR(10) NOT NULL,
    OldData NVARCHAR(MAX),
    NewData NVARCHAR(MAX),
    ModifiedBy INT NOT NULL,
    ModifiedDate DATETIME NOT NULL DEFAULT GETDATE()
);
```

## 2. Các Trigger và Stored Procedure

### 2.1. Trigger cập nhật tồn kho
```sql
CREATE TRIGGER TR_PurchaseOrderDetails_UpdateInventory
ON PurchaseOrderDetails
AFTER INSERT
AS
BEGIN
    UPDATE Inventory
    SET Quantity = Quantity + i.Quantity,
        LastUpdated = GETDATE()
    FROM Inventory inv
    INNER JOIN inserted i ON inv.MaterialID = i.MaterialID;
END;

CREATE TRIGGER TR_SalesOrderDetails_UpdateInventory
ON SalesOrderDetails
AFTER INSERT
AS
BEGIN
    UPDATE Inventory
    SET Quantity = Quantity - i.Quantity,
        LastUpdated = GETDATE()
    FROM Inventory inv
    INNER JOIN inserted i ON inv.MaterialID = i.MaterialID;
END;
```

### 2.2. Trigger ghi log
```sql
CREATE TRIGGER TR_Materials_Log
ON Materials
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    DECLARE @ActionType VARCHAR(10)
    SET @ActionType = CASE
        WHEN EXISTS (SELECT 1 FROM inserted) AND EXISTS (SELECT 1 FROM deleted) THEN 'UPDATE'
        WHEN EXISTS (SELECT 1 FROM inserted) THEN 'INSERT'
        ELSE 'DELETE'
    END

    INSERT INTO Materials_Log (MaterialID, ActionType, OldData, NewData, ModifiedBy, ModifiedDate)
    SELECT 
        ISNULL(i.MaterialID, d.MaterialID),
        @ActionType,
        (SELECT * FROM deleted FOR JSON PATH),
        (SELECT * FROM inserted FOR JSON PATH),
        ISNULL(i.ModifiedBy, d.ModifiedBy),
        GETDATE()
    FROM inserted i
    FULL OUTER JOIN deleted d ON i.MaterialID = d.MaterialID
END;
```

## 3. Các Index

### 3.1. Index cho bảng Materials
```sql
CREATE INDEX IX_Materials_MaterialCode ON Materials(MaterialCode);
CREATE INDEX IX_Materials_CategoryID ON Materials(CategoryID);
CREATE INDEX IX_Materials_IsActive ON Materials(IsActive);
```

### 3.2. Index cho bảng PurchaseOrders
```sql
CREATE INDEX IX_PurchaseOrders_SupplierID ON PurchaseOrders(SupplierID);
CREATE INDEX IX_PurchaseOrders_OrderDate ON PurchaseOrders(OrderDate);
CREATE INDEX IX_PurchaseOrders_Status ON PurchaseOrders(Status);
```

### 3.3. Index cho bảng SalesOrders
```sql
CREATE INDEX IX_SalesOrders_CustomerID ON SalesOrders(CustomerID);
CREATE INDEX IX_SalesOrders_OrderDate ON SalesOrders(OrderDate);
CREATE INDEX IX_SalesOrders_Status ON SalesOrders(Status);
```

## 4. Các Ràng buộc và Quy tắc

### 4.1. Ràng buộc giá trị
```sql
ALTER TABLE Materials
ADD CONSTRAINT CHK_Materials_MinStock CHECK (MinStock >= 0);

ALTER TABLE Materials
ADD CONSTRAINT CHK_Materials_MaxStock CHECK (MaxStock >= MinStock);

ALTER TABLE PurchaseOrderDetails
ADD CONSTRAINT CHK_PurchaseOrderDetails_Quantity CHECK (Quantity > 0);

ALTER TABLE SalesOrderDetails
ADD CONSTRAINT CHK_SalesOrderDetails_Quantity CHECK (Quantity > 0);
```

### 4.2. Ràng buộc khóa ngoại
```sql
-- Đã được định nghĩa trong phần tạo bảng
```

## 5. Các View

### 5.1. View tồn kho
```sql
CREATE VIEW vw_Inventory AS
SELECT 
    m.MaterialCode,
    m.MaterialName,
    c.CategoryName,
    u.UnitName,
    i.Quantity,
    i.LastUpdated
FROM Inventory i
INNER JOIN Materials m ON i.MaterialID = m.MaterialID
INNER JOIN Categories c ON m.CategoryID = c.CategoryID
INNER JOIN Units u ON m.UnitID = u.UnitID;
```

### 5.2. View công nợ khách hàng
```sql
CREATE VIEW vw_CustomerDebt AS
SELECT 
    c.CustomerCode,
    c.CustomerName,
    SUM(so.GrandTotal - ISNULL(p.Amount, 0)) AS TotalDebt
FROM Customers c
LEFT JOIN SalesOrders so ON c.CustomerID = so.CustomerID
LEFT JOIN Payments p ON so.SalesOrderID = p.ReferenceID AND p.PaymentType = 'Sales'
WHERE so.Status != 'Cancelled'
GROUP BY c.CustomerCode, c.CustomerName;
```

### 5.3. View công nợ nhà cung cấp
```sql
CREATE VIEW vw_SupplierDebt AS
SELECT 
    s.SupplierCode,
    s.SupplierName,
    SUM(po.TotalAmount - ISNULL(p.Amount, 0)) AS TotalDebt
FROM Suppliers s
LEFT JOIN PurchaseOrders po ON s.SupplierID = po.SupplierID
LEFT JOIN Payments p ON po.PurchaseOrderID = p.ReferenceID AND p.PaymentType = 'Purchase'
WHERE po.Status != 'Cancelled'
GROUP BY s.SupplierCode, s.SupplierName;
``` 