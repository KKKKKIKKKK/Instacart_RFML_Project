import styled from "styled-components";
import PropTypes from "prop-types";

/* 🔹 고객 등급별 스타일 적용 */
const getMessageStyle = (grade) => {
  switch (grade) {
    case "신규불안형":
      return { gradient: "linear-gradient(45deg, #888888, #bbbbbb)" };
    case "줒대좌_VVIP":
      return { gradient: "linear-gradient(45deg, #ffcc00, #ffdd55)" };
    case "불안탐색형":
      return { gradient: "linear-gradient(45deg, #ff9900, #ffbb33)" };
    case "고액탐색형":
      return { gradient: "linear-gradient(45deg, #6ec6ff, #90e0ff)" };
    case "단골고집형":
      return { gradient: "linear-gradient(45deg, #c0c0c0, #e0e0e0)" };
    default:
      return { gradient: "linear-gradient(45deg, #888888, #bbbbbb)" };
  }
};

const MessageItem = ({ text, grade }) => {
  const { gradient } = getMessageStyle(grade);

  return <StyledMessage gradient={gradient}>{text}</StyledMessage>;
};

MessageItem.propTypes = {
  text: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired, // 고객 등급을 기반으로 스타일 적용
};

export default MessageItem;

/* 🔹 개별 메시지 스타일 */
const StyledMessage = styled.div`
  background: ${(props) => props.gradient}; /* ✅ 올바르게 전달된 그라데이션 적용 */
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  /* ✅ 텍스트 대비 */
  color: black;
  // text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  /* ✅ 긴 텍스트 자동 줄바꿈 */
  word-break: break-word;
`;
