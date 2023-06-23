import React, { useState } from "react";
import ModalCotroll from "./ModalCotroll";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <h1>Modal</h1>
      <button onClick={showModal}>open modal</button>
      {modalOpen && <ModalCotroll setModalOpen={setModalOpen} number="1" />}

      <button>open modal</button>
    </div>
  );
}

export default Modal;
