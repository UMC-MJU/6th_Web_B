import React from "react";
import {useState} from "react";
import Modal from "./components/Modal.jsx";

const App = () =>{
    const [open, setOpen] = useState(false);
    return (
        <>
        <h1>안녕하세요!</h1>
        <p>내용내용내용</p>
        <button className={'modal-open'} onClick={() => setOpen(true)}>모달 열기</button>

        {open && <Modal closeModal={() => setOpen(false)}/>} 
        </>
    )
}

export default App;
// Modal 컴포넌트에 props 전달