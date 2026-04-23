import styled from "styled-components";
import { Colors } from "../styles/color";
import { FaBell } from "react-icons/fa";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <Right>
          <Bell>
            <FaBell />
          </Bell>
          <ProfileWrapper>
            <ProfileImg></ProfileImg>
            <ProfileName>이태연</ProfileName>
          </ProfileWrapper>
        </Right>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 50px;
  background-color: ${Colors.Blue100};
`;

const Right = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Bell = styled.div`
  margin-top: 8px;
  transform: scale(1.3);
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ProfileImg = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${Colors.Blue400};
`;

const ProfileName = styled.div`
  font-size: 16px;
`;
