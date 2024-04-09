import React from 'react';
import "../styles/modal.css";

const Modal = (props) => {
  const {setModal} = props;
  const closeModal = () => {
    setModal(false);
    console.log("모달이 꺼짐");
  }
  return (
    <>
      <div className="modal_container">
        <div className="modal">
          <div className="modal_title">안녕하세요</div>
          <p className="modal_text">모달 내용은 어쩌고 어쩌고..</p>
          <div className="btn-container">
            <button onClick={closeModal}>닫기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
