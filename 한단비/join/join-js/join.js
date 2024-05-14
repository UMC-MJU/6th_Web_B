let userName = document.getElementById('name');
let nameText = document.querySelector('.nameText');
let emailText = document.querySelector('.emailText');
let ageText = document.querySelector('.ageText');
let pwdText = document.querySelector('.pwdText');
let repwdText = document.querySelector('.repwdText');

let userEmail = document.getElementById('email');
let userAge = document.getElementById('age');
let userPwd = document.getElementById('pwd');
let userRepwd = document.getElementById('repwd');

const joinB = document.getElementById('joinB');
const modalWrapper = document.querySelector('.modal-wrapper');
const close = document.getElementById('closeB');

// 맨 처음에 폼 유효성 검사를 해야 함
validForm();

// 이름
userName.addEventListener('input', function(event){
    event.preventDefault();
    validName(userName.value);
    validForm(); // 입력이 발생할 때마다 폼의 유효성을 검사하고 버튼의 활성화 상태를 업데이트
});

// 이메일
userEmail.addEventListener('input',function (event){
    event.preventDefault();
    validEmail(userEmail.value);
    validForm();
});

// 나이
userAge.addEventListener('input',function (event){
    event.preventDefault();
    validAge(userAge.value);
    validForm();
});

// 비밀번호
userPwd.addEventListener('input',function (event){
    event.preventDefault();
    validPwd(userPwd.value);
    validForm();
});

// 비밀번호 확인
userRepwd.addEventListener('input',function (event){
    event.preventDefault();
    isMatch(userPwd.value, userRepwd.value);
    validForm();
});

// 가입하기 버튼 리스터
joinB.addEventListener('click', function (event) {
    event.preventDefault();
    modalWrapper.style.display = "flex";
});

// 모달 창 닫기 버튼 리스터
close.addEventListener('click', function(event){
    event.preventDefault();
    modalWrapper.style.display = "none";
})

// 이름 유효성 검사
function validName(value) {
    var pattern = /^[A-Za-z가-힣]+$/;
    if(pattern.test(value)){
        nameText.textContent = "멋진 이름이네요!";
        nameText.className = 'right';
        return true;
    }else{
        nameText.textContent = "필수 입력 항목입니다!";
        nameText.className = 'error';
        return false;
    }
}

// 이메일 유효성 검사
function validEmail(value) {
    var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(pattern.test(value)){
        emailText.textContent = "올바른 이메일 형식입니다!";
        emailText.className = 'right';
        return true;
    }else{
        emailText.textContent = "올바른 이메일 형식이 아닙니다!";
        emailText.className = 'error';
        return false;
    }
}

// 나이 유효성 검사
// 여기서 소수가 prime이 아닌데 착각해서 고치기 귀찮아서 냅둠..
function validAge(value) {
    if(value.length == 0){ // 미입력
        ageText.textContent = "나이를 입력해주세요.";
        ageText.className = 'error';
        return false;
    }else if(value % 1 !== 0){ // 소수
        ageText.textContent = "나이는 소수가 될 수 없습니다.";
        ageText.className = 'error';
        return false;
    }else if(value < 0 ){ // 음수
        ageText.textContent = "나이는 음수가 될 수 없습니다.";
        ageText.className = 'error';
        return false;
    }else if(value <= 19){ // 19세 이하
        ageText.textContent = "미성년자는 가입할 수 없습니다.";
        ageText.className = 'error';
        return false;
    }else{ // 성공
        ageText.textContent = "올바른 나이입니다!";
        ageText.className = 'right';
        return true;
    }
}

// 비밀번호 유효성 검사
function validPwd(value) {
    var letter = /[a-zA-Z]/.test(value);
    var num = /\d/.test(value);
    var spe = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);

    if(value.length < 4){ // 최소 길이
        pwdText.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
        pwdText.className = 'error';
        return false;
    }else if(value.length > 12){ // 최대 길이
        pwdText.textContent = "비밀번호는 최대 12자리까지 가능합니다.";
        pwdText.className = 'error';
        return false;
    }else if(!(letter && num && spe)){ // 조합
        pwdText.textContent = "비밀번호는 영어, 숫자, 특수문자를 조합해야 합니다."
        pwdText.className = 'error';
        return false;
    }else{ // 성공
        pwdText.textContent = "올바른 비밀번호입니다!";
        pwdText.className = 'right';
        return true;
    }
}

// 비밀번호 일치 검사
function isMatch(pwd, repwd) {
    if(pwd.length === 0){
        repwdText.textContent = "비밀번호가 일치하지 않습니다.";
        repwdText.className= 'error';
        return false;
    }
    if(pwd !== repwd){
        repwdText.textContent = "비밀번호가 일치하지 않습니다.";
        repwdText.className= 'error';
        return false;
    }else{
        repwdText.textContent = "비밀번호가 일치합니다.";
        repwdText.className= 'right';
        return true;
    }
}

// 폼의 유효성 검사
function validForm(){

    const isValidName = validName(userName.value);
    const isValidEmail = validEmail(userEmail.value);
    const isValidAge = validAge(userAge.value);
    const isValidPwd = validPwd(userPwd.value);
    const isPwdMatched = isMatch(userPwd.value, userRepwd.value);

     joinB.disabled = !(isValidName && isValidEmail && isValidAge && isValidPwd && isPwdMatched);

}