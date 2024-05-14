document.getElementById("input").addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
      add();
    }
});

// 계획 추가
const add = () => {
    const todoInput = document.getElementById("input");
    const todoList = document.getElementById("todo")

    if (todoInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = todoInput.value;
        li.className = "todoItem";
    
        const completeButton = createButton("완료", complete);
        li.appendChild(completeButton);
        todoList.appendChild(li);
    
        todoInput.value = "";
    }
}

// 버튼 만들기
const createButton = (text, clickHandler) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", () => clickHandler(button.parentElement));
    return button;
}

// 완료 버튼
const complete = (li) => {
    const completedList = document.getElementById("done");
    completedList.appendChild(li);
    li.className = "completedItem";

    const completeButton = li.querySelector("button");
    li.removeChild(completeButton);
    const removeButton = createButton("삭제", remove);
    li.appendChild(removeButton);
}

// 삭제 버튼
const remove = (li) => {
    const parentList = li.parentElement;
    parentList.removeChild(li);
}


