import React from 'react';

function Modal({ isOpen, onClose }) {
  return (
    isOpen && (
      <div className="modalContainer">
        <div className="modal">
          <div className="title">안녕하세요</div>
          <p>모달 내용은 어쩌고 저쩌고..</p>
          <div className="closeContainer">
            <button id="close" onClick={onClose}>닫기</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
