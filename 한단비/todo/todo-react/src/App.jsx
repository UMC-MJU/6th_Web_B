import React from "react";
import {useState} from "react";
import Todo from "./Todo.jsx";

const App = () => {
    // 할 일
    const [todos, setTodos] = useState([
        {
            id: Date.now(),
            contents: '놀고싶어',
            isDone: false
        }
    
    ]);

    // 한 일
    const [doneTodo, setDoneTodo] = useState([]);
    const [contents, setContents] = useState('');

    // 엔터로 입력
    const submitEnter = (event) => {
        if(event.key === "Enter"){
            const newTodo = {
                id: Date.now(),
                contents: contents,
                isDone: false,
            };
            setTodos([...todos, newTodo]);
            setContents(''); // 입력창 초기화
        }
    }

    // 할 일 완료
    const todoDone = (dt) => {
        console.log("---------"+dt);
        // 완료 버튼 클릭 시 ?
        const newDoneTodo = {
            id: dt.id,
            contents: dt.contents,
            isDone: true,
        };
        console.log(newDoneTodo);
        setDoneTodo([...doneTodo, newDoneTodo]); // 이미 완료한 list를 복사, 완료 list에 넣어줌 !!
        setTodos(todos.filter((t) => t.id !== dt.id)); // todos list에서 제거
    }

    // 한 일 삭제
    const deleteDone = (dt) => {
        setDoneTodo(doneTodo.filter((t) => t.id !== dt.id)); // dt는 props ?
    };

    // 엔터 인식하면, addTodo
    return (
        <div className="container">
            <h1>UMC Study Plan</h1>
            <input id="write" value={contents} onChange = {(e) => setContents(e.target.value)} placeholder="스터디 계획을 작성해보세요!" 
            onKeyDown={(e) => submitEnter(e)}/>
            <div className="listContainer">
                <div className="todo">
                    <h4>해야 할 일</h4>
                    {todos.map((todos) => {
                        return (
                            <Todo
                                todos={todos}
                                key={todos.id}
                                contents={todos.contents}
                                handler={todoDone}
                                buttonName='완료'
                                color='#FFB8B0'
                            />
                        );
                    })}
                </div>
                <div className="done">
                    <h4>해낸 일</h4>
                    {doneTodo.map((dT) => {
                        return (
                            <Todo
                            todos={dT}
                            key={dT.id}
                            contents={dT.contents}
                            handler={deleteDone}
                            buttonName='삭제'
                            color='#FFB8B0'
                            />  
                        );
                    })}
                    
                </div>
            </div>
        </div>
    )
}
export default App;