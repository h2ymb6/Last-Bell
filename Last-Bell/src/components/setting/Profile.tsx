import styled from "styled-components";
import dog from "../../assets/dog.png";

export default function Profile() {
  return (
    <Wrapper>
      <Title>사용자 프로필</Title>
      <ProfileImg src={dog}></ProfileImg>
      <Name>이태연</Name>
      <Email>example@mail</Email>
      <Class>2학년 1반 14번</Class>
    </Wrapper>
  );
}

const Title = styled.h1``;

const Email = styled.p``;

const Wrapper = styled.div``;

const ProfileImg = styled.img``;

const Name = styled.p``;

const Class = styled.p``;
