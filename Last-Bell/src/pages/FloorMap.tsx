import styled from "styled-components";
import { MainLayOut } from "../layouts/mainLayout";
import SearchSection from "../components/Floor/SerchSection";
import Floor from "../components/Floor/Floor";

export const FloorMap = () => {
  return (
    <MainLayOut title="층별 지도">
      <MainContainer>
        <SearchSection />

        <Floor title="ㅇㅇㅇ" description="설명" icon="d" />
      </MainContainer>
    </MainLayOut>
  );
};

const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
