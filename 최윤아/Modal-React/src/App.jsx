import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <div>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={toggleModal}>버튼 열기</button>
      
      {showModal && (
        <div className="modal-wrapper" onClick={toggleModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title">안녕하세요</div>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div className="close-wrapper">
              <button onClick={toggleModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;