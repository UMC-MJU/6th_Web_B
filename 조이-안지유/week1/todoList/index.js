document.getElementById("todoInput").addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    addTodo();
  }
});

const addTodo = () => {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList")

  if (todoInput.value.trim() !== "") { // trim() 함수는 문자열 앞뒤 공백 제거
    const li = document.createElement("li");
    li.textContent = todoInput.value;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "완료";
    completeBtn.addEventListener("click", () => {
      const completedList = document.getElementById("completedList");
      completedList.appendChild(li);
      console.log("완료버튼 클릭!");

      // 완료 버튼을 삭제 버튼으로
      li.removeChild(completeBtn);
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "삭제";
      deleteBtn.addEventListener("click", () => {
        completedList.removeChild(li);
        console.log("삭제버튼 클릭!");
      });
      li.appendChild(deleteBtn);
    });
    li.appendChild(completeBtn);
    todoList.appendChild(li);

    todoInput.value = "";
  }
}
