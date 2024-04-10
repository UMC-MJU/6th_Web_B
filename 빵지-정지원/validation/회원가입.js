document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const email = document.getElementById('email');
    

    
    const submit = document.getElementsByClassName('button')[0];
    submit.addEventListener('click',function(){
        console.log("클릭");
        validationName();
        validationEmail();
        validationAge(); 
        validationPassword();
        validationPasswordCheck();
    });
    const close = document.getElementById('close');
    close.addEventListener('click',function(){

    });

    function validationName(){
        let namecheck = 0;
        let messageContainer;
        if(/^[가-힣a-zA-Z]+$/.test(nameInput.value)){ 
            namecheck=1;
        }
        if(namecheck == 0){
            messageContainer="필수 입력 항목입니다!"
            document.getElementById('name_validation').className='validation_error';
        } else {
            messageContainer="멋진 이름입니다!"
            document.getElementById('name_validation').className='validation_success';
        }
        document.getElementById('name_validation').innerHTML=messageContainer;
    }

    function validationEmail(){
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //이메일 패턴
        let messageContainer=document.getElementById('email_validation');

        if(emailPattern.test(email.value)){
            messageContainer.textContent="올바른 이메일 형식입니다!"
            messageContainer.className='validation_success'
        } else{
            messageContainer.textContent="이메일 형식이 올바르지 않습니다!"
            messageContainer.className='validation_error'
        }
        messageContainer.innerHTML=messageContainer.textContent;
    }
    
    function validationAge(){
        const age = document.getElementById('age').value.trim();
        let messageContainer=document.getElementById('age_validation');

        if (age === "") {
            messageContainer.textContent = '나이를 입력해주세요.';
            messageContainer.className = 'validation_error';
        } else if (!Number.isInteger(+age)) {
            messageContainer.textContent = '나이는 소수가 될 수 없습니다.';
            messageContainer.className = 'validation_error';
        } else if (+age < 0) {
            messageContainer.textContent = '나이는 음수가 될 수 없습니다.';
            messageContainer.className = 'validation_error';
        } else if (+age < 19) {
            messageContainer.textContent = '우리 영화 사이트는 19살 이상만 가입이 가능합니다.';
            messageContainer.className = 'validation_error';
        } else {
            messageContainer.textContent = '올바른 나이 형식입니다!';
            messageContainer.className = 'validation_success';
        }
        messageContainer.innerHTML=messageContainer.textContent;
    }
    
    function validationPassword(){
        const password = document.getElementById('password').value;
        let messageContainer=document.getElementById('password_validation');
        var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,12}$/;

        messageContainer.className='validation_error';
        if (password.length < 4) {
            messageContainer.textContent = '비밀번호는 최소 4자리 이상이어야 합니다.';
        } else if (password.length > 12) {
            messageContainer.textContent = '비밀번호는 최대 12자리까지 가능합니다.';
        } else if (!pattern.test(password)) {
            messageContainer.textContent = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
        } else {
            messageContainer.textContent = '올바른 비밀번호입니다!';
            messageContainer.className = 'validation_success';
        }
        messageContainer.innerHTML=messageContainer.textContent;
    }

    function validationPasswordCheck(){
        const password =document.getElementById('password').value;
        const password_check = document.getElementById('passweord_check').value;
        let messageContainer=document.getElementById('password_check_validation');

        if (password !== password_check) {
            messageContainer.textContent = '비밀번호가 일치하지 않습니다.';
            messageContainer.className = 'validation_error';
        } else {
            messageContainer.textContent = '비밀번호가 일치합니다';
            messageContainer.className = 'validation_success';
        }
        messageContainer.innerHTML=messageContainer.textContent;
    }
    
    function checkFormValidity() {
        var nameValid = document.getElementById('name').value !== '';
        var emailValid = document.getElementById('email').value !== '';
        var ageValid = document.getElementById('age').value !== '';
        var passwordValid =document.getElementById('password').value !== '';
        var passwordCheck = document.getElementById('passweord_check').value !== '';
        document.getElementById('submit').disabled = !(nameValid && emailValid && ageValid && passwordValid && passwordsCheck);
    }
});