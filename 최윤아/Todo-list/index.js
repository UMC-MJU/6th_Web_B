document.getElementById('plan').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && this.value !== '') {
        addTask(this.value);
        this.value = ''; // 입력 필드 초기화
    }
});

function addTask(task) {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = task;

    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.className = 'complete';
    completeButton.addEventListener('click', function() {
        completeTask(this.parentNode);
    });

    li.appendChild(completeButton);
    todoList.appendChild(li);
}

function completeTask(taskItem) {
    const doneList = document.getElementById('doneList');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        this.parentNode.remove();
    });

    taskItem.removeChild(taskItem.querySelector('.complete'));
    taskItem.appendChild(deleteButton);
    doneList.appendChild(taskItem);
}