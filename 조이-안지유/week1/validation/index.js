// 메세지 설정 함수
const setMessage = (element, message, isValid) => {
  element.textContent = message;
  element.className = isValid ? "message-success" : "message-error";
}

// 이름 유효성 검사 함수
const validateName = () => {
  const name = document.getElementById("name").value.trim();
  const nameMessage = document.getElementById("nameMessage");

  if (/^[가-힣A-Za-z]+$/.test(name)) {
    setMessage(nameMessage, "멋진 이름이네요!", true);
    return true;
  } else {
    setMessage(nameMessage, "필수 입력 항목입니다!", false);
    return false;
  }
}

// 이메일 유효성 검사 함수
const validateEmail = () => {
  const email = document.getElementById("email").value.trim();
  const emailMessage = document.getElementById("emailMessage");

  if (/^\S+@\S+\.\S+$/.test(email)) {
    setMessage(emailMessage, "올바른 이메일 형식입니다!", true);
    return true;
  } else {
    setMessage(emailMessage, "올바른 이메일 형식이 아닙니다!", false);
    return false;
  }
}

// 나이 유효성 검사 함수
const validateAge = () => {
  const age = document.getElementById("age");
  const ageValue = parseFloat(age.value);
  const ageMessage = document.getElementById("ageMessage");

  if (age.value == "") {
    setMessage(ageMessage, "나이를 입력해주세요!", false);
    return false;
  } else if (isNaN(ageValue)) {
    setMessage(ageMessage, "나이는 숫자형식이어야 합니다!", false);
    return false;
  } else if (ageValue < 0) {
    setMessage(ageMessage, "나이는 음수가 될 수 없습니다!", false);
    return false;
  } else if (!Number.isInteger(ageValue)) {
    setMessage(ageMessage, "나이는 소수가 될 수 없습니다!", false);
    return false;
  } else if (ageValue < 19) {
    setMessage(ageMessage, "미성년자는 가입할 수 없습니다!", false);
    return false;
  } else {
    setMessage(ageMessage, "올바른 나이 형식입니다!", true);
    return true;
  }
}

// 비밀번호 유효성 검사 함수
const validatePassword = () => {
  const password = document.getElementById("password").value;
  const passwordMessage = document.getElementById("passwordMessage");
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{4,12}$/;

  if (password.length < 4) {
    setMessage(passwordMessage, "비밀번호는 최소 4자리 이상이어야 합니다.", false);
    return false;
  } else if (password.length > 12) {
    setMessage(passwordMessage, "비밀번호는 최대 12자리까지 가능합니다.", false);
    return false;
  } else if (!regex.test(password)) {
    setMessage(passwordMessage, "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.", false);
    return false;
  } else {
    setMessage(passwordMessage, "올바른 비밀번호입니다!", true);
    return true;
  }
}

// 비밀번호 확인 유효성 검사 함수
const checkPasswords = () => {
  const password = document.getElementById("password").value;
  const checkPassword = document.getElementById("checkPassword").value;
  const checkPasswordMessage = document.getElementById("checkPasswordMessage");

  if (checkPassword === "") {
    setMessage(checkPasswordMessage, "비밀번호를 입력해주세요.", false);
    return false;
  } else {
    if (password !== checkPassword) {
      setMessage(checkPasswordMessage, "비밀번호가 일치하지 않습니다.", false);
      return false;
    } else {
      setMessage(checkPasswordMessage, "비밀번호가 일치합니다.", true);
      return true;
    }
  }
}

// 유효성 검사 실행 함수
const validationForm = () => {
  const validations = [
    validateName(),
    validateEmail(),
    validateAge(),
    validatePassword(),
    checkPasswords(),
  ];

  // 모든 유효성 검사가 true인지 확인
  const isFormValid = validations.every(validation => validation === true);

  // 모든 검사를 통과하면 버튼 활성화, 그렇지 않으면 비활성화
  document.getElementById("submitButton").disabled = !isFormValid;
}

// 이름 입력창
document.getElementById("name").addEventListener("input", () => {
  validateName();
  validationForm();
});

// 이메일 입력창
document.getElementById("email").addEventListener("input", () => {
  validateEmail();
  validationForm();
});

// 나이 입력창
document.getElementById("age").addEventListener("input", () => {
  validateAge();
  validationForm();
});

// 비밀번호 입력창
document.getElementById("password").addEventListener("input", () => {
  validatePassword();
  validationForm();
});

// 비밀번호 확인 입력창
document.getElementById("checkPassword").addEventListener("input", () => {
  checkPasswords();
  validationForm();
});

// 모달
const modal = document.querySelector(".modalContainer");
const close = document.getElementById("close");

document.getElementById("submitButton").addEventListener("click", () => {
  console.log("제출됐고 모달을 띄우다...");
  modal.style.display = "flex";
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});
