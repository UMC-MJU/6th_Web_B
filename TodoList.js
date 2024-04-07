const inputBox = document.getElementById("input-box");
const ListDo = document.getElementById("list-do");
const ListFinish = document.getElementById("list-finsh");

function addTask() {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    if (inputBox.value.trim() === '') return;
    // 완료 버튼 추가
    let completeButton = document.createElement("button");
    completeButton.innerHTML = "완료";
    completeButton.addEventListener("click", function() {
        moveTask(li);
    });

    li.appendChild(completeButton);

    ListDo.appendChild(li);
    inputBox.value = ""; // 입력 초기화
}

function moveTask(task) {
    // 클릭된 작업이 "해야 할 일" 목록에서 제거되고 "해낸 일" 목록으로 이동
    ListDo.removeChild(task);

    // 완료 버튼 제거
    task.removeChild(task.querySelector("button"));

    // 삭제 버튼 추가
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "삭제";
    deleteButton.addEventListener("click", function() {
        removeTask(task);
    });
    task.appendChild(deleteButton);

    ListFinish.appendChild(task);
}

function removeTask(task) {
    task.parentNode.removeChild(task);
}

// Enter 키 이벤트 처리
inputBox.addEventListener("keydown", function(event) {
    if (event.keyCode == 13) { // (Enter  키 코드는 13 )
        addTask(); 
    }
});

