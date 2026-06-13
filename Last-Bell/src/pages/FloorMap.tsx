import styled from "styled-components";
import { MainLayOut } from "../layouts/mainLayout";
import {
  ClubSearchSection,
  TeacherSearchSection,
} from "../components/FloorMap";

export const FloorMap = () => {
  return (
    <MainLayOut title="층별 지도">
      <MainContainer>
        <TeacherSearchSection />
        <ClubSearchSection />
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
