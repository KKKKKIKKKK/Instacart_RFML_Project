import { useState } from 'react';
import styled from 'styled-components';
import UserCollection from './UserCollection';
import PropTypes from 'prop-types';
// 제공해주신 고객 정보 데이터
export const usersDB = [
  { id: "newbie", password: "1234*", name: "김철수", grade: "신규불안형" },
  { id: "vvip", password: "1234*", name: "이영희", grade: "줒대좌_VVIP" },
  { id: "seeker", password: "1234*", name: "박지훈", grade: "불안탐색형" },
  { id: "highspender", password: "1234*", name: "정수민", grade: "고액탐색형" },
  { id: "loyal", password: "1234*", name: "한가을", grade: "단골고집형" },
];

const UserManagement = ({ onSend }) => {
  const [users] = useState(usersDB); 

  return (
    <PageContainer>
      <UserManagementContainer>
        <Title>프로모션 메시지 전송</Title>
        <UserCollection users={users} onSend={onSend} />
      </UserManagementContainer>
    </PageContainer>
  );
};

UserManagement.propTypes = {
  onSend: PropTypes.func.isRequired,
}

export default UserManagement;


const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-align: center;
  margin: 0;
  color: #333; /* 기본 검은색 계열 텍스트 */
  text-shadow: none;
  border-bottom: none;
  padding-bottom: 0;
`;


// 전체 페이지 배경은 흰색
const PageContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  padding: 20px;
`;

const UserManagementContainer = styled.div`
  /* 기존 스타일 유지 */
  background: linear-gradient(135deg, #f7f9fc 0%, #ffffff 100%);
  padding: 40px;
  margin: 40px auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e7f1;
  max-width: 1000px;
  
  /* 컴포넌트 자체 크기를 80%로 축소 */
  transform: scale(0.6);
  transform-origin: top center;
  
  h1 {
    font-size: 2rem;
    margin-bottom: 40px;
    color: #333;
  }
  
  @media (max-width: 600px) {
    padding: 20px;
    margin: 20px;
  }
`;

