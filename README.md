# Task Management API

Đây là một hệ thống RESTful API đơn giản để quản lý danh sách công việc (Todo List) bằng Node.js và Express.

## 🚀 Tính năng
- Quản lý công việc (Tasks) hoàn toàn trong bộ nhớ (In-memory array).
- Hỗ trợ đầy đủ các phương thức CRUD (Create, Read, Update, Delete).
- Đã cài đặt trình tự động tải lại server mỗi khi thay đổi code (Nodemon).

## 🛠️ Cài đặt & Chạy ứng dụng

1. **Cài đặt các gói phụ thuộc:**
   ```bash
   npm install
   ```

2. **Chạy server (ở chế độ phát triển):**
   ```bash
   npm start
   ```
   Server sẽ lắng nghe tại cổng **3002**: [http://localhost:3002](http://localhost:3002)

## 📡 Danh sách API

| Thao tác | Phương thức | Endpoint | Mô tả |
| :--- | :---: | :--- | :--- |
| **Tạo Task** | `POST` | `/tasks` | Thêm công việc mới vào danh sách. |
| **Lấy tất cả** | `GET` | `/tasks` | Lấy danh sách toàn bộ các công việc. |
| **Lấy theo ID** | `GET` | `/tasks/:id` | Xem chi tiết một công việc cụ thể. |
| **Cập nhật** | `PUT` | `/tasks/:id` | Đổi tiêu đề hoặc trạng thái hoàn thành. |
| **Xóa Task** | `DELETE` | `/tasks/:id` | Loại bỏ một công việc khỏi hệ thống. |

## 📝 Cấu trúc dữ liệu của 1 Task
```json
{
  "id": 1,
  "title": "Learn Node.js",
  "completed": false
}
```

---
Dự án được xây dựng cho bài kiểm tra kỹ năng Node.js cơ bản.
