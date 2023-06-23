import React, { useState } from "react";
import ModalControl from "./ModalControl";

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [number, setNumber] = useState("");

  // 모달창 노출
  const showModal = (e) => {
    setNumber(e.target.value);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Modal</h1>
      <button onClick={showModal} value="one">
        open modal
      </button>
      {modalOpen && number === "one" && (
        <ModalControl
          setModalOpen={setModalOpen}
          number={number}
          closeModal={closeModal}
        />
      )}

      <button onClick={showModal} value="two">
        open modal
      </button>
      {modalOpen && number === "two" && (
        <ModalControl
          setModalOpen={setModalOpen}
          number={number}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default Modal;
