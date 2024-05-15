//폼 제출시 기본 동작 방지, 이름 유효성 검사
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    validateName();
});

// 이름 입력 필드에 입력이 있을 때마다 이름의 유효성 검사 실행
document.getElementById('name').addEventListener('input', function() {
    validateName();
});


//Function:- 이름의 유효성 검사: 영어와 한글로만 이루어져 있는지 확인
function validateName() {
    var name = document.getElementById('name').value;
    var messageContainer = document.getElementById('nameValidationMessage');


    // 이름이 영어와 한글로만 이루어져 있는지 확인
    if (/^[가-힣a-zA-Z]+$/.test(name)) {
        messageContainer.textContent = '멋진 이름이에요!';
        messageContainer.className = 'validation-message success';
    } else {
        messageContainer.textContent = '필수 입력 항목입니다!';
        messageContainer.className = 'validation-message error';
    }
}

// 이메일 입력 필드에 입력이 있을 때마다 유효성 검사, 폼의 전체 유효성 검사 실행
document.getElementById('email').addEventListener('input', function() {
    validateEmail();
    checkFormValidity();
});


//Function:- 이메일의 유효성 검사: 올바른 이메일 형식인지 확인
function validateEmail() {
    var email = document.getElementById('email').value;
    var messageContainer = document.getElementById('emailValidationMessage');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 패턴

    if (emailPattern.test(email)) {
        messageContainer.textContent = '올바른 이메일 형식입니다!';
        messageContainer.className = 'validation-message success';
    } else {
        messageContainer.textContent = '올바른 이메일 형식이 아닙니다!';
        messageContainer.className = 'validation-message error';
    }
}

// 나이 입력 필드에 입력이 있을 때마다 유효성 검사 + 폼의 전체 유효성 검사 실행
document.getElementById('age').addEventListener('input', function() {
    validateAge();
    checkFormValidity();
});

//Function:- 나이 유효성 검사: 숫자이며 19세 이상인지 확인
function validateAge() {
    var age = document.getElementById('age').value;
    var messageContainer = document.getElementById('ageValidationMessage');
    
    if (age === "") {
        messageContainer.textContent = '나이를 입력해주세요.';
        messageContainer.className = 'validation-message error';
    } else if (!Number.isInteger(+age)) {
        messageContainer.textContent = '나이는 소수가 될 수 없습니다.';
        messageContainer.className = 'validation-message error';
    } else if (+age < 0) {
        messageContainer.textContent = '나이는 음수가 될 수 없습니다.';
        messageContainer.className = 'validation-message error';
    } else if (+age < 19) {
        messageContainer.textContent = '우리 영화 사이트는 19살 이상만 가입이 가능합니다.';
        messageContainer.className = 'validation-message error';
    } else {
        messageContainer.textContent = '';
        messageContainer.className = 'validation-message';
    }
}

// 비밀번호 입력 필드에 입력이 있을 때마다 유효성 검사 실행
document.getElementById('password').addEventListener('input', function() {
    validatePassword();
    checkFormValidity();
});

//Function:- 비밀번호의 유효성 검사: 길이와 문자 조합 요구 사항 충족 여부 확인
function validatePassword() {
    var password = document.getElementById('password').value;
    var messageContainer = document.getElementById('passwordValidationMessage');
    var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,12}$/;

    if (password.length < 4) {
        messageContainer.textContent = '비밀번호는 최소 4자리 이상이어야 합니다.';
        messageContainer.className = 'validation-message error';
    } else if (password.length > 12) {
        messageContainer.textContent = '비밀번호는 최대 12자리까지 가능합니다.';
        messageContainer.className = 'validation-message error';
    } else if (!pattern.test(password)) {
        messageContainer.textContent = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
        messageContainer.className = 'validation-message error';
    } else {
        messageContainer.textContent = '';
        messageContainer.className = 'validation-message';
    }
}


document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 기본 제출 동작 방지
    validatePassword();
    matchPasswords(); // 비밀번호 일치 검사 추가
    checkFormValidity(); // 최종 유효성 검사 후 제출 버튼 활성화 상태 결정
});


// 비밀번호 확인 입력 필드에 입력이 있을 때마다 일치 검사 실행
document.getElementById('confirmPassword').addEventListener('input', function() {
    matchPasswords();
    checkFormValidity();
});


//Function:- 비밀번호 일치 검사: 입력된 비밀번호와 비밀번호 확인 값이 동일한지 확인
function matchPasswords() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var messageContainer = document.getElementById('confirmPasswordValidationMessage');
    
    if (password !== confirmPassword) {
        messageContainer.textContent = '비밀번호가 일치하지 않습니다.';
        messageContainer.className = 'validation-message error';
    } else {
        messageContainer.textContent = '';
        messageContainer.className = 'validation-message';
    }
}


// 폼의 유효성을 검사하고 제출 버튼의 활성화 상태를 결정
function checkFormValidity() {
    var nameValid = document.getElementById('name').value !== '';
    var emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value);
    var age = document.getElementById('age').value;
    var ageValid = age !== '' && Number.isInteger(+age) && +age >= 19;
    var passwordValid = document.getElementById('password').value.length >= 4 &&
                        document.getElementById('password').value.length <= 12 &&
                        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{4,12}$/.test(document.getElementById('password').value);
    var passwordsMatch = document.getElementById('password').value === document.getElementById('confirmPassword').value;

    // 모든 필드의 유효성 검사 결과에 따라 제출 버튼의 활성화 여부 결정
    document.getElementById('submitButton').disabled = !(nameValid && emailValid && ageValid && passwordValid && passwordsMatch);
}