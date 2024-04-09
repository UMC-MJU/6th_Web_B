import React, { useState } from 'react';
import Modal from './components/Modal.jsx';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log("모달이 켜짐");
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("모달이 꺼짐");
    setModalOpen(false);
  };

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button id="open" onClick={openModal}>버튼 열기</button>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
