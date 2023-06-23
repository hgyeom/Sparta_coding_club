import { styled, css } from "styled-components";
import { useEffect, useRef } from "react";
const ModalContainer = styled.div`
  /* 모달창 크기 */
  width: 300px;
  height: 200px;

  /* 최상단 위치 */
  z-index: 999;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

function ModalCotroll({ setModalOpen, number }) {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    if (number === "two") {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [number, setModalOpen]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return number === "one" ? (
    <ModalContainer ref={modalRef}>
      <p>
        닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
      </p>
      <button onClick={closeModal}>취소</button>
      <button>확인</button>
    </ModalContainer>
  ) : (
    <ModalContainer ref={modalRef}>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
    </ModalContainer>
  );
}

export default ModalCotroll;
