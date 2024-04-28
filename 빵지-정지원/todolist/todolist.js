



window.onload=function(){
    var todoText = document.getElementById('input_text');
    todoText.addEventListener("keyup",function(event){
        if(event.key == 'Enter' && todoText.value!=''){ //event.keyCode === 13 엔터의 키코드는 13이다 
            // console.log("입력된 텍스트:", todoText.value);
            event.preventDefault(); //엔터 누르면 초기화
            addList(todoText.value);
            todoText.value='';
        }
    });
};



function addList(value) {
    var todoList = document.createElement('li'); // 새로운 li 요소 생성
    var textNode = document.createTextNode(value);
    todoList.appendChild(textNode); // li 안에 값 넣기

    var btn = document.createElement('button');
    btn.innerHTML = "완료"; // 버튼 글자
    todoList.appendChild(btn);

    var ulBox = document.getElementById('todo_ul');
    ulBox.appendChild(todoList); // ul에 새로운 li 요소 추가

    
    btn.addEventListener('click', function() {
        moveList(todoList);
    });
};

function moveList(item){ //item 은 어떻게 생겼는가?
    // console.log("완료 버튼 눌림");
    // console.log(item);
    var doneList = document.getElementById('done_ul');
    var deleteBtn = document.createElement('button');
    item.removeChild(item.querySelector('button'));
    deleteBtn.innerHTML = "삭제";
    deleteBtn.addEventListener('click', function() {
        item.remove();
    });

    doneList.appendChild(item);
    item.appendChild(deleteBtn);
};