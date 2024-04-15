// MARK: - Property
var openBtn =document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");


//버튼 클릭 이벤트 핸들러
openBtn.onclick = function() {
    popup.style.display = "block";
}

closeBtn.onclick = function() {
    popup.style.display = "none";
}