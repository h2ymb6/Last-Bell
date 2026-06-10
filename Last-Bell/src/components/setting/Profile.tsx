import styled from "styled-components";
import dog from "../../assets/dog.png";
import { Colors } from "../../styles/color";

export default function Profile() {
  return (
    <Wrapper>
      <Header>
        <Title>사용자 프로필</Title>
      </Header>

      <ProfileBody>
        <ProfileImg src={dog} alt="프로필 이미지" />

        <UserInfo>
          <Name>이태연</Name>
          <Email>example@mail.com</Email>
        </UserInfo>
      </ProfileBody>

      <ClassBox>
        <ClassLabel>학급 정보</ClassLabel>
        <ClassText>2학년 1반 14번</ClassText>
      </ClassBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  height: 250px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
  width: 300px;
  box-sizing: border-box;
`;

const Header = styled.div`
  border-bottom: 2px solid ${Colors.Blue200};
  padding-bottom: 12px;
  margin-bottom: 18px;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 600;
  margin: 0;
`;

const ProfileBody = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

const ProfileImg = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${Colors.Blue100};
  border: 3px solid ${Colors.Blue200};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const Email = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #777;
  margin: 0;
`;

const ClassBox = styled.div`
  background-color: ${Colors.Blue100};
  border-radius: 14px;
  padding: 14px 16px;
  box-sizing: border-box;
`;

const ClassLabel = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${Colors.Blue800};
  margin: 0 0 6px;
`;

const ClassText = styled.p`
  font-size: 17px;
  font-weight: 700;
  margin: 0;
`;
