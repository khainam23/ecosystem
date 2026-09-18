# Về trang chung này

Trang được thiết kế theo kiến trúc monolith — một app duy nhất, đơn giản, dễ maintain.

## Phần 1 — Cấu trúc

Tổ chức theo mô hình trang đơn gồm các section nối tiếp nhau:
Hero giới thiệu → Danh sách dự án → Quy trình làm việc → Thông tin thêm.

Tham khảo layout tổng thể:

![PC Template](./docs/images/template.png)

## Phần 2 — Giao diện và màu sắc

Giao diện bắt mắt, tối ưu trải nghiệm.

## Phần 3 — Dữ liệu

Dữ liệu tĩnh (danh sách dự án, quy trình) lưu trong file JSON ở `public/` — cập nhật không cần chạm code.
