import { useState } from "react";
import * as S from "./styles";

const SearchSection = () => {
  const [keyword, setKeyword] = useState<string>("");

  return (
    <S.SearchSectionCard>
      <S.Title>선생님을 찾아보세요</S.Title>
      <S.Description>
        선생님 이름이나 담당 과목을 입력하여 위치와 연락처를 확인할 수 있습니다.
      </S.Description>

      <S.SearchBarWrap>
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <S.SearchInput
          type="text"
          placeholder="선생님 이름 또는 과목 입력..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </S.SearchBarWrap>

      <S.SearchPlaceholder>
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ fontSize: "48px" }}
        />
        <p>위의 검색창에 선생님 이름을 입력해주세요.</p>
      </S.SearchPlaceholder>
    </S.SearchSectionCard>
  );
};

export default SearchSection;
