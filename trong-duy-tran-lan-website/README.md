# Website thiệp cưới — Trọng Duy & Trần Lan

## Cấu trúc thư mục

- `index.html`: Page 1 — trang mở đầu / Save The Date. Nút **Mở thiệp** dẫn sang `page-2.html`.
- `page-2.html`: Page 2 — nội dung thiệp cưới, gia đình, album, lịch, đếm ngược, địa điểm, hộp quà.
- `css/style.css`: toàn bộ giao diện, responsive và hiệu ứng CSS.
- `js/invitation.js`: đồng hồ đếm ngược, lịch, album ảnh/lightbox và hiệu ứng xuất hiện khi cuộn.
- `js/effects.js`: cánh hoa rơi nhẹ.
- `assets/images/`: nơi thêm ảnh cưới của bạn.

## Cách xem website

Mở `index.html` bằng trình duyệt. Để chạy ổn định và tránh giới hạn trình duyệt với một số tính năng, nên chạy bằng máy chủ tĩnh (ví dụ VS Code Live Server) hoặc tải cả thư mục lên hosting.

## Cách thay ảnh cưới

1. Chép ảnh vào `assets/images/`, ví dụ `anh-cuoi-01.jpg`.
2. Mở `page-2.html`, tìm các thẻ `<img>` trong phần `intro-photo` và `gallery`.
3. Thay URL ảnh hiện tại bằng đường dẫn tương đối, ví dụ `assets/images/anh-cuoi-01.jpg`.
4. Muốn thêm ảnh album: thêm một thẻ `<img>` trong `<div class="gallery" id="gallery">` và đặt `onclick="showImage(SỐ_THỨ_TỰ)"` theo thứ tự ảnh, bắt đầu từ 0.

Ảnh đang có trong bản mẫu vẫn dùng URL CDN của website thiệp gốc. Bạn có thể thay bằng ảnh riêng để website tự chủ động và không phụ thuộc đường dẫn bên ngoài.

## Chỉnh thông tin

- Tên, ngày cưới, giờ, địa chỉ, lời mời: sửa trực tiếp trong `page-2.html`.
- Ngày giờ đếm ngược: sửa biến `wedding` ở đầu `js/invitation.js` theo định dạng `YYYY-MM-DDTHH:mm:ss+07:00`.
- Thông tin tài khoản và mã QR: sửa trong phần `Hộp quà mừng` của `page-2.html`.
- Màu sắc, font, khoảng cách: sửa các biến CSS ở đầu `css/style.css`.

## Lưu ý

Bản này tái tạo cấu trúc và phong cách từ nội dung có thể đọc được của trang tham chiếu; không phải bản sao mã nguồn gốc của Chung Đôi. Các ảnh, QR và nội dung nhúng bên ngoài có thể thay đổi hoặc không còn hoạt động nếu nguồn gốc thay đổi. Thư mục `assets/images/` hiện để trống để bạn thêm ảnh gốc của mình.


## Nhạc nền và tự cuộn

- Chép một file MP3 mà bạn có quyền sử dụng vào `assets/` và đặt tên chính xác là `music.mp3`.
- Khi khách bấm **Mở thiệp** ở `index.html`, trang 2 sẽ thử tự phát nhạc. Do chính sách tự phát của Safari/Chrome, một số điện thoại có thể yêu cầu khách chạm nút **Bật nhạc** ở góc dưới bên phải.
- Ở `page-2.html`, trang tự cuộn xuống chậm sau khoảng 1,8 giây. Khách có thể bấm **Tạm dừng cuộn** hoặc tự vuốt/cuộn để dừng; bấm **Tiếp tục cuộn** để chạy lại.
- Chỉnh tốc độ tự cuộn tại biến `speed` trong `js/music-scroll.js` (đơn vị pixel/giây; mặc định 17).
- Đổi nhạc bằng cách thay file `assets/music.mp3`, không cần sửa HTML.

**Lưu ý về nhạc gốc:** bản xem công khai của link Chung Đôi không cung cấp được tệp âm thanh hoặc tên bài nhạc để xác minh, vì vậy thư mục này chưa nhúng một bản nhạc giả định. Bạn chỉ cần thêm file MP3 đúng tên ở trên để bật nhạc.
