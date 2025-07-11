import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaUser, FaCrown, FaStar, FaGem, FaMedal } from "react-icons/fa";
import Dropdown from "./Dropdown"; // ✅ 추가

const getCardStyle = (grade) => {
  switch (grade) {
    case "신규불안형":
      return { icon: <FaUser />, gradient: "linear-gradient(45deg, #888888, #bbbbbb)" };
    case "줒대좌_VVIP":
      return { icon: <FaCrown />, gradient: "linear-gradient(45deg, #ffcc00, #ffdd55)" };
    case "불안탐색형":
      return { icon: <FaStar />, gradient: "linear-gradient(45deg, #ff9900, #ffbb33)" };
    case "고액탐색형":
      return { icon: <FaGem />, gradient: "linear-gradient(45deg, #6ec6ff, #90e0ff)" };
    case "단골고집형":
      return { icon: <FaMedal />, gradient: "linear-gradient(45deg, #c0c0c0, #e0e0e0)" };
    default:
      return { icon: <FaUser />, gradient: "linear-gradient(45deg, #888888, #bbbbbb)" };
  }
};

const Card = styled.div`
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
  background: ${(props) => props.gradient};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #28a745, #20c997);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(40, 167, 69, 0.3);

  &:hover {
    background: linear-gradient(135deg, #218838, #17a589);
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(40, 167, 69, 0.5);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 3px 8px rgba(40, 167, 69, 0.3);
  }
`;

const UserCard = ({ user, onSend }) => {
  const { icon, gradient } = getCardStyle(user.grade);
  const messages = ["할인 혜택 안내", "신제품 소식", "특별 이벤트 초대"];

  const [selectedMessage, setSelectedMessage] = useState(messages[0]); // ✅ 선택된 메시지 상태

  return (
    <Card gradient={gradient}>
      <Title>{icon} {user.grade}</Title>
      <DetailsRow>
        <Dropdown 
          options={messages} 
          onChange={(e) => setSelectedMessage(e.target.value)} 
        />
        <SendButton onClick={() => onSend(user.grade, selectedMessage)}> {/* ✅ 선택된 메시지 전송 */}
          메시지 전송
        </SendButton>
      </DetailsRow>
    </Card>
  );
};


UserCard.propTypes = {
  user: PropTypes.shape({
    grade: PropTypes.string.isRequired,
  }).isRequired,
  onSend: PropTypes.func.isRequired,
};

export default UserCard;
