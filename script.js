// Lấy phần tử card
var cardElement = document.querySelector(".card");

// Hàm để cập nhật vị trí của card
function updateCardPosition() {
  // Lấy chiều rộng và chiều cao của cửa sổ
  var windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
}

// Gọi hàm cập nhật vị trí khi trang được tải và khi cửa sổ được cuộn hoặc thay đổi kích thước
window.addEventListener("load", updateCardPosition);
window.addEventListener("scroll", updateCardPosition);
window.addEventListener("resize", updateCardPosition);
