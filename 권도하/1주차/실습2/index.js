// 변수 선언
var open = document.getElementById("open");
var close = document.getElementById("close");
var modal = document.querySelector(".modal")

// 이벤트 핸들러
open.onclick = () => {
  modal.style.display = "block";
};
close.onclick = () => {
  modal.style.display = "none";
};