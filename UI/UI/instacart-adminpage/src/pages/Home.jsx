import styled from "styled-components";
import PromotionManager from "../components/PromotionManager"; // 🆕 새 컨테이너 가져오기

const Home = () => {
  return (
    <HomeContainer>
      <PromotionManager />
    </HomeContainer>
  );
};

export default Home;

// ✅ Home 전체를 감싸는 컨테이너
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  padding: 16px;
`;
