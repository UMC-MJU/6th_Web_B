import React from "react";
import CustomBtn from "./CustomBtn";

const Todo = (props) => {
    const {contents, todos, buttonName} = props;
    // if(buttonName === '완료') // 할 일
    //     return (
    //         <div className="todoList">
    //             {contents}
    //             <CustomBtn
    //                 buttonColor='#c1e8d4'
    //                 onClick={() => props.handler(todos.id)}
    //             >{buttonName}
    //             </CustomBtn>
    //         </div>
    //     );
    console.log(todos, buttonName);
    return( // 한 일
        <div className= {buttonName === "완료" ? "todoList" : "doneList"}>
            {contents}
            <CustomBtn
                buttonColor='#c1e8d4'
                onClick={() => props.handler(todos)}
            >{buttonName}
            </CustomBtn>
        </div>
    )
}

export default Todo;