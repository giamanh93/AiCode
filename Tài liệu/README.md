# Cấu trúc thư mục tài liệu

```
Tài liệu/
├── 01-Business-Analysis/     # Tài liệu phân tích nghiệp vụ
│   ├── Requirements/        # Yêu cầu nghiệp vụ
│   ├── User-Stories/       # User stories
│   └── Use-Cases/          # Use cases
│
├── 02-Design/              # Tài liệu thiết kế
│   ├── Architecture/       # Kiến trúc hệ thống
│   ├── UI-Design/         # Thiết kế giao diện
│   └── Database/          # Thiết kế cơ sở dữ liệu
│
├── 03-Database/           # Tài liệu cơ sở dữ liệu
│   ├── Schemas/          # Cấu trúc database
│   ├── Queries/          # Các câu query mẫu
│   └── Migrations/       # Script migration
│
├── 04-Development/        # Tài liệu phát triển
│   ├── Setup-Guides/     # Hướng dẫn cài đặt
│   ├── Coding-Standards/ # Quy chuẩn code
│   └── API-Docs/         # Tài liệu API
│
└── 05-Notes/             # Ghi chú và tài liệu tham khảo
    ├── Meetings/         # Biên bản họp
    ├── References/       # Tài liệu tham khảo
    └── Ideas/           # Ý tưởng và đề xuất
```

## Mô tả chi tiết

### 1. Business Analysis (01-Business-Analysis)
- Lưu trữ tất cả tài liệu liên quan đến phân tích nghiệp vụ
- Bao gồm yêu cầu, user stories, use cases
- Giúp team hiểu rõ về nghiệp vụ và yêu cầu của dự án

### 2. Design (02-Design)
- Tài liệu về thiết kế hệ thống
- Bao gồm kiến trúc, UI/UX, database design
- Là cơ sở để phát triển và triển khai

### 3. Database (03-Database)
- Tài liệu về cơ sở dữ liệu
- Schema, queries, migrations
- Hướng dẫn quản lý và bảo trì database

### 4. Development (04-Development)
- Tài liệu kỹ thuật cho developers
- Hướng dẫn cài đặt, coding standards
- API documentation và technical guides

### 5. Notes (05-Notes)
- Ghi chú từ các cuộc họp
- Tài liệu tham khảo
- Ý tưởng và đề xuất cải tiến

## Quy ước đặt tên

1. **Tên file**:
   - Sử dụng chữ thường
   - Từ khóa phân cách bằng dấu gạch ngang
   - Ví dụ: `setup-guide.md`, `database-schema.sql`

2. **Tên thư mục**:
   - Sử dụng PascalCase cho tên chính
   - Sử dụng chữ thường cho tên phụ
   - Ví dụ: `Business-Analysis/requirements/`

3. **Version control**:
   - Sử dụng Git để quản lý phiên bản
   - Commit message rõ ràng và có prefix
   - Ví dụ: `docs: update database schema`

## Cập nhật tài liệu

1. **Quy trình cập nhật**:
   - Tạo branch mới cho mỗi lần cập nhật
   - Review trước khi merge
   - Cập nhật README nếu cần

2. **Format tài liệu**:
   - Sử dụng Markdown cho tài liệu
   - Sử dụng SQL cho database scripts
   - Sử dụng PlantUML cho diagrams

3. **Backup**:
   - Định kỳ backup tài liệu
   - Lưu trữ phiên bản cũ
   - Đánh dấu phiên bản rõ ràng 