import { useState } from "react";
import styled from "styled-components";
import UserManagement from "./UserManagement";
import ResultDisplay from "./ResultDisplay";

const PromotionManager = () => {
  const [messages, setMessages] = useState([]);

  const messagesByTypeAndGrade = {
    "할인 혜택 안내": {
      "신규불안형": "🎟️ 신규 고객님! 첫 구매 10% 할인 쿠폰을 드려요!",
      "줏대좌_VVIP": "🎟️ VVIP 고객님! 특별 할인 혜택을 확인하세요!",
      "불안탐색형": "🎟️ (광고) 갠차나 딩딩딩딩~ 🎵 지금 접속하면 추가 할인!",
      "고액탐색형": "🎟️ 프리미엄 제품 15% 할인! 고액 고객님을 위한 특별 혜택!",
      "단골고집형": "🎟️ 단골 고객님을 위한 5% 추가 할인 혜택!"
    },
    "신제품 소식": {
      "신규불안형": "🆕 새롭게 출시된 베스트셀러! 한 번 경험해 보세요!",
      "줏대좌_VVIP": "🆕 VVIP 고객님! 신제품 선구매 기회 제공!",
      "불안탐색형": "🆕 신제품 없으면 식탁이 그냥 NPC 모드… 🍽️😴 제대로 된 플레이어라면 필수템!!",
      "고액탐색형": "🆕 한정판 신제품 출시! 이거 알고 나면 ‘그 돈 주고 안 사?’ 소리 절로 나옴",
      "단골고집형": "🆕 고객님이 신제품 찾는 속도 = 치킨 도착하자마자 뜯는 속도 🍗🔥 묶음 할인으로 더 오래오래 행복하게 드세요!"
    },
    "특별 이벤트 초대": {
      "신규불안형": "✉️ (광고) [ㄱㄱ이벤트] 과일도 저렴한데 ㄱㅈ까지 주는 미친 가성비 맛집!",
      "줏대좌_VVIP": "✉️ (광고) VVIP 고객 전용 초청 이벤트가 준비되어 있습니다!",
      "불안탐색형": "✉️ (광고) 후기 작성하면 장바구니에 넣은 제품 500원",
      "고액탐색형": "✉️ (광고) 프리미엄 고객 전용 럭셔리 이벤트! 지금 신청하세요!",
      "단골고집형": "✉️ (광고) 오랫동안 사랑해주신 고객님을 위한 감사 이벤트!"
    }
  };

  const getMessageContent = (grade, messageType) => {
    return messagesByTypeAndGrade[messageType]?.[grade] || "해당 메시지가 없습니다.";
  };
  
  // ✅ 메시지 전송 기능
  const handleSend = (grade, messageType) => {
    const generatedMessage = getMessageContent(grade, messageType);

    const newMessage = {
      id: Date.now(),
      text: `📢 [${grade}] ${messageType} → ${generatedMessage}`,
      grade: grade
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  // ✅ 메시지 전체 삭제 기능
  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <ContentWrapper>
      <UserManagementContainer>
        <UserManagement onSend={handleSend} />
      </UserManagementContainer>

      <ResultDisplayContainer>
        <ResultDisplay messages={messages} onClear={handleClearMessages} />
      </ResultDisplayContainer>
    </ContentWrapper>
  );
};

export default PromotionManager;

// ✅ 레이아웃 스타일
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  gap: 80px;
`;

const UserManagementContainer = styled.div`
  width: 750px;
`;

const ResultDisplayContainer = styled.div`
  flex-grow: 1;
`;
