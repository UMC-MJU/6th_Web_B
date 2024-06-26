let writeBox =document.getElementById('write'); // 입력창
// let shouldList= document.getElementById('shouldList'); // 해야 할 일 리스트
let result = document.getElementById('result'); // 추가된 할 일
// let doneList = document.getElementById('doneList'); // 해낸 일 리스트

// 입력창에서 엔터 누르면 해야 할 일 리스트에 추가
writeBox.addEventListener("keyup", function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        // 할 일 리스트 추가
        addList();
    }
})

// 할 일 리스트 추가 함수
function addList(){
    console.log('123');
    // if(writeBox.value !== ""){ // 입력 내용이 있다면
        let list = document.createElement("li");
        let doneBtn = document.createElement('button');
        list.className = "List";
        doneBtn.className = "Btn";
        doneBtn.innerText = "완료"; 
        list.innerHTML = writeBox.value;
        list.style.borderBottom = "2px solid #2A58B2";
        list.appendChild(doneBtn);
        result.appendChild(list);
        writeBox.value = "";
        doneBtn.addEventListener("click", function(){ // 완료 버튼 클릭
            console.log('click');
            moveList(this.parentNode);
        })
        
    // }
}

// 한 일 리스트로 이동
function moveList(item){
    let completedList = document.getElementById('completed');
    completedList.appendChild(item);
    item.lastChild.innerText = "삭제"; 
    item.lastChild.addEventListener("click", function(){ // 삭제 버튼 클릭
        item.parentNode.removeChild(item);
    })
}