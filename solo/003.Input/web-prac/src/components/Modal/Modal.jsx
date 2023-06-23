import React, { useState } from "react";
import ModalCotroll from "./ModalCotroll";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [number, setNumber] = useState("");

  // 모달창 노출
  const showModal = (e) => {
    // console.log(e.target.value);
    setNumber(e.target.value);
    setModalOpen(true, e.target);
  };

  return (
    <div>
      <h1>Modal</h1>
      <button onClick={showModal} value="one">
        open modal
      </button>
      {modalOpen && (
        <ModalCotroll setModalOpen={setModalOpen} number={number} />
      )}

      <button onClick={showModal} value="two">
        open modal
      </button>
      {modalOpen && (
        <ModalCotroll setModalOpen={setModalOpen} number={number} />
      )}
    </div>
  );
}

export default Modal;
