import { MainLayOut } from "../layouts/mainLayout";
import styled from "styled-components";
import Profile from "../components/setting/Profile";

const Setting = () => {
  return (
    <MainLayOut title="설정">
      <MainContainer>
        <Profile />
      </MainContainer>
    </MainLayOut>
  );
};

export default Setting;

const MainContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 30px;
`;
