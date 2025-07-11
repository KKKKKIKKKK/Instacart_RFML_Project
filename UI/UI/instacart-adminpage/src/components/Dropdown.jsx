import styled from "styled-components";
import PropTypes from "prop-types";

/* 🔹 드롭다운 스타일 */
const MessageDropdown = styled.select`
  appearance: none;
  width: 250px; /* ✅ 드롭다운과 옵션의 너비를 고정 */
  height: 40px;
  // padding: 8px;
  font-size: 1.5rem;
  font-weight: 900;
  text-align: left;
  text-align-last: center; /* 옵션 목록도 왼쪽 정렬 */
  border: 2px solid white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  

  /* 기본 드롭다운 화살표 제거 */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    border-color: #ccc;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  }
`;

/* 🔹 옵션 목록 스타일 */
const StyledOption = styled.option`
  font-size: 1rem;
  font-weight: bold;
  background-color: #f8f9fa; /* 기본 배경 연한 회색 */
  color: black;
  padding: 10px;
  width: 250px; /* ✅ 드롭다운과 옵션 크기 동일하게 설정 */
  box-sizing: border-box;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */

  &:hover,
  &:focus {
    background-color: #007bff; /* 선택 시 파란색 강조 */
    color: white;
  }
`;

const Dropdown = ({ options, onChange }) => {
  return (
    <MessageDropdown onChange={onChange} defaultValue={options[0]}>
      {options.map((msg, index) => (
        <StyledOption key={index} value={msg}>
          {msg}
        </StyledOption>
      ))}
    </MessageDropdown>
  );
};


/* 🔹 PropTypes 정의 */
Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
