import { useState } from "react";
import styled from "styled-components";
import { MainLayOut } from "../layouts/mainLayout";
import SearchSection from "../components/Floor/SerchSection";
import Floor from "../components/Floor/Floor";

export const FloorMap = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <MainLayOut title="층별 지도">
      <MainContainer>
        <SearchSection />

        <Floor title="ㅇㅇㅇ" description="설명" buttonText="버튼" />
        <SearchSectionCard>
          <Title>선생님을 찾아보세요</Title>
          <Description>
            선생님 이름이나 담당 과목을 입력하여 위치와 연락처를 확인할 수
            있습니다.
          </Description>

          <SearchBarWrap>
            <i className="fa-solid fa-magnifying-glass search-icon" />
            <SearchInput
              type="text"
              placeholder="선생님 이름 또는 과목 입력..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </SearchBarWrap>

          <SearchPlaceholder>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ fontSize: "48px" }}
            />
            <p>위의 검색창에 선생님 이름을 입력해주세요.</p>
          </SearchPlaceholder>
        </SearchSectionCard>

        <FloorPlaceHolder>
          <p>지도 영역 (Floor Component)</p>
        </FloorPlaceHolder>
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

const SearchSectionCard = styled.section`
  flex: 1;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(140, 170, 210, 0.15);
  box-sizing: border-box;
  font-family:
    "Pretendard",
    -apple-system,
    sans-serif;
`;

const FloorPlaceHolder = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(140, 170, 210, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8294ad;
  border: 1px dashed #cbdcf2;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #1a2538;
  margin: 0 0 10px 0;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 14px;
  color: #627289;
  margin: 0 0 24px 0;
`;

const SearchBarWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  .search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #9cb1cc;
    font-size: 18px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 52px;
  border: 1.5px solid #cce0ff;
  border-radius: 30px;
  font-size: 15px;
  color: #333;
  outline: none;
  background-color: #fafbfe;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus {
    border-color: #4a90e2;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(74, 144, 226, 0.2);
  }
`;

const SearchPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 16px;
  color: #cbdcf2;

  p {
    font-size: 14px;
    color: #8294ad;
    margin: 0;
  }
`;
