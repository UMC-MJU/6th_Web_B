// MARK: - Property
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");
var number = document.getElementById("number");


//버튼 클릭 이벤트 핸들러
increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
  };
  
  decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
  };