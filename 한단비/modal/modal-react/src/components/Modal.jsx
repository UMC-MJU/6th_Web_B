import React from "react";

// 부모 컴포넌트로부터 props 전달 받음 !
const Modal = ({closeModal}) => {
    return (
        <>
            {/* <p>안녕하세요</p>
        <p>모달 내용은 어쩌고 저쩌고..</p>
        <button>닫기</button> */}

            <div class="modal-wrapper">
                <div class="modal">
                    <div class="modal-title">안녕하세요</div>
                    <p>모달 내용은 어쩌고 어쩌고..</p>
                    <div class="close-wrapper">
                        <button className={'modal-close'} onClick={closeModal}>닫기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;
// Modal 컴포넌트의 매개변수에서 closeModal 함수를 객체 구조 분해 할당을 통해 올바르게 추출해야 합니다.