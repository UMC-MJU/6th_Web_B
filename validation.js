// 가입하기 버튼을 누를 때 실행되는 함수
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // 이름 입력란 가져오기
    var nameInput = document.getElementById("nameInput");
    // 이름 입력란 아래에 메시지를 표시할 요소 가져오기
    var nameMessage = document.getElementById("nameMessage");
    var NameValid = false;
    // 이름 입력란이 비어 있는지 확인
    if (nameInput.value.trim() === "") {
        // 비어 있다면 빨간색으로 메시지 표시
        nameMessage.style.color = "red";
        nameMessage.innerText = "필수 입력 항목입니다!";
    } else {
        // 비어 있지 않다면 초록색으로 메시지 표시
        nameMessage.style.color = "green";
        nameMessage.innerText = "멋진 이름이에요!";
        NameValid = true;
    }

///////////////////////////////////////////////////////////////////////

    //이메일 입력란 가져오기
    var emailInput = document.getElementById("emailInput");
    //이메일 입력란 아래에 메시지를 표기할 요소 가져오기
    var emailMessage = document.getElementById("emailMessage");
    var emailValid = false;
        // 이메일 입력란이 비어 있는지 확인
    if (emailInput.value.trim() === "") {
            // 비어 있다면 빨간색으로 메시지 표시
        emailMessage.style.color = "red";
        emailMessage.innerText = "올바른 이메일 형식이 아닙니다!";
    } else {
            // 비어 있지 않다면 초록색으로 메시지 표시
        emailMessage.style.color = "green";
        emailMessage.innerText = "올바른 이메일 형식입니다!";
        emailValid = true;
    }

///////////////////////////////////////////////////////////////////////

     //나이 입력란 가져오기
     var ageInput = document.getElementById("ageInput");
     //나이 입력란 아래에 메시지를 표기할 요소 가져오기
     var ageMessage = document.getElementById("ageMessage");
     var ageValid = false;
     // 나이는 숫자만 입력가능 -> 문자열 입력시 나이는 숫자 형식이어야 합니다! 출력
     if (isNaN(ageInput.value)) { //isNaN : 값이 숫자인지 확인한다.
        ageMessage.style.color = "red";
        ageMessage.innerText = "나이는 숫자 형식이어야 합니다!";
        //return; 
    }
     // 나이는 양수만 가능 -> 나이는 음수가 될 수 없습니다! 출력
     else if(ageInput.value < 0){
        ageMessage.style.color = "red";
        ageMessage.innerText = "나이는 음수가 될 수 없습니다!";
        //return;
     }
     // 나이가 소수일 때 -> 나이는 소수가 될 수 없습니다! 출력
     else if (Number.isInteger(parseFloat(ageInput.value)) === false) {
        ageMessage.style.color = "red";
        ageMessage.innerText = "나이는 소수가 될 수 없습니다!";
        //return; 
    }
     // 19살 이상만 가입 가능 -> 미성년자는 가입할 수 없습니다! 출력
    else if(ageInput.value < 19 ){
        ageMessage.style.color = "red";
        ageMessage.innerText = "미성년자는 가입할 수 없습니다!";
        //return;
    }


         // 나이 입력란이 비어 있는지 확인
    else if (ageInput.value.trim() === "") {
             // 비어 있다면 빨간색으로 메시지 표시
        ageMessage.style.color = "red";
        ageMessage.innerText = "나이를 입력해주세요!";
     } else {
             // 비어 있지 않다면 초록색으로 메시지 표시
        ageMessage.style.color = "green";
        ageMessage.innerText = "올바른 나이 형식입니다!";
        ageValid = true;
     }

   
///////////////////////////////////////////////////////////////////////

    //비밀번호 입력란 가져오기
    var passInput = document.getElementById("passInput");
     //비밀번호 입력란 아래에 메시지를 표기할 요소 가져오기
    var passMessage = document.getElementById("passMessage");
     // 특수문자 정의
    var passwordCharset = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{4,12}$/;
    var passVaild = false;
    // 최소 4자리 이상 -> 비밀번호는 최소 4자리 이상이어야 합니다. 출력
    if(passInput.value.length < 4 ){
        passMessage.style.color = "red";
        passMessage.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";

    }
    // 최소 12자리까지 가능 -> 비밀번호는 최대 12자리까지 가능합니다. 출력
    else if(passInput.value.length > 12 ){
        passMessage.style.color = "red";
        passMessage.innerText = " 비밀번호는 최대 12자리까지 가능합니다.";

    }
    // 영어, 숫자, 특수 문자를 모두 조합해서 작성 -> 영어, 숫자, 특수 문자를 조합해야 합니다. 출력
    else if (!passwordCharset.test(passInput.value)) {
        passMessage.style.color = "red";
        passMessage.innerText = "비밀번호는 영어, 숫자, 특수 문자를 조합해야 합니다.";

    } 
    // 비밀번호 입력란이 비어 있는지 확인
    else if (passInput.value.trim() === "") {
        // 비어 있다면 빨간색으로 메시지 표시
        passMessage.style.color = "red";
        passMessage.innerText = "비밀번호를 입력해주세요";

     }
     else {
        // 비어 있지 않다면 초록색으로 메시지 표시
        passMessage.style.color = "green";
        passMessage.innerText = "올바른 비밀번호입니다!";
        passVaild = true;
        //return;
     }
     
    //비밀번호 확인 입력란 가져오기
    var passchInput = document.getElementById("passchInput");
    //비밀번호 확인 입력란 아래에 메시지를 표기할 요소 가져오기
    var passchMessage = document.getElementById("passchMessage");
    var passchVaild = false; 
    // 비밀번호 확인 입력란이 비어 있는지 확인
    if (passchInput.value.trim() === "") {
        // 비밀번호가 일치하지 않다면 빨간색으로 메시지 표시
        passchMessage.style.color = "red";
        passchMessage.innerText = "비밀번호를 확인해주세요";
    } else {
        // 비밀번호와 일치하다면 초록색으로 메시지 표시
        if(passInput.value === passchInput.value){
            passchMessage.style.color = "green";
            passchMessage.innerText = "비밀번호가 일치합니다!";  
            passchVaild = true; 
        } else {
            // 비밀번호가 일치하지 않다면 빨간색으로 메시지 표시
            passchMessage.style.color = "red";
            passchMessage.innerText = "비밀번호가 일치하지 않습니다";
        }
    }
   
    
    var allConditionsMet = NameValid,ageValid,passVaild,passchVaild,emailValid;
    if (allConditionsMet) {
        var successModal = document.getElementById("successModal");
        successModal.style.display = "block";

        //닫기 버튼 
        var closeModal = document.getElementsByClassName("close")[0];
        closeModal.onclick = function() {
            successModal.style.display = "none";
        }
    }
});


