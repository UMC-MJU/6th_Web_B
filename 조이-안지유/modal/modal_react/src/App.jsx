import {useState} from 'react'
import Modal from "./components/Modal.jsx";

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    console.log("모달이 켜짐");
  };
  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      <button onClick={openModal}>버튼 열기</button>
      {modal && <Modal setModal={setModal}/>}
    </>
  )
}

export default App
