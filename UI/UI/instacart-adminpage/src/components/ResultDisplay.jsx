import styled from "styled-components";
import PropTypes from "prop-types";
import MessageItem from "./MessageItem";

const ResultDisplay = ({ messages, onClear }) => {
  console.log("📩 전달된 메시지 배열:", messages); // ✅ 메시지가 제대로 전달되는지 확인

  return (
    <PhoneWrapper>
      <Screen>
        {messages.length === 0 ? (
          <MessageText>전송된 메시지가 없습니다.</MessageText>
        ) : (
          <MessageList>
            {messages.map((msg) => (
              <MessageItem key={msg.id} text={msg.text} grade={msg.grade} /> // ✅ grade 전달 추가
            ))}
          </MessageList>
        )}
        {messages.length > 0 && <ClearButton onClick={onClear}>Clear</ClearButton>}
      </Screen>
    </PhoneWrapper>
  );
};

ResultDisplay.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      grade: PropTypes.string.isRequired, // ✅ grade 추가
    })
  ).isRequired,
  onClear: PropTypes.func.isRequired,
};

export default ResultDisplay;

/* 🔹 스타일 */
const PhoneWrapper = styled.div`
  width: 400px;
  height: 700px;
  border-radius: 40px;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const Screen = styled.div`
  width: 360px;
  height: 620px;
  background: linear-gradient(135deg, #d7e9ff, #ffffff); /* 블루+화이트 */
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 255, 0.1), 0 2px 10px rgba(0, 0, 255, 0.2);
  overflow-y: auto;
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%; // ✅ 메시지가 화면을 꽉 채우도록 수정
`;

const MessageText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: black;
  font-weight: bold;
`;

const ClearButton = styled.button`
  position: absolute;
  top: 25px;
  right: 20px;
  background: linear-gradient(135deg, #ff4b4b, #d80000); /* 🔥 강렬한 레드 그라데이션 */
  color: white;
  border: none;
  padding: 6px 12px; /* ✅ 크기 축소 */
  border-radius: 6px; /* ✅ 둥글기 조절 */
  cursor: pointer;
  font-size: 0.85rem; /* ✅ 폰트 크기 축소 */
  font-weight: bold;
  text-transform: uppercase; /* 대문자로 변환 */
  letter-spacing: 0.8px; /* 자간 조절 */
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 6px rgba(255, 0, 0, 0.3); /* 🔥 작은 그림자 효과 */

  &:hover {
    background: linear-gradient(135deg, #d80000, #ff1a1a); /* 🚀 더 강렬한 레드 */
    transform: scale(1.05); /* 살짝 확대 */
    box-shadow: 0 3px 8px rgba(255, 0, 0, 0.4);
  }

  &:active {
    transform: scale(0.92); /* 클릭 시 약간 축소 */
    box-shadow: 0 2px 5px rgba(255, 0, 0, 0.2);
  }
`;


