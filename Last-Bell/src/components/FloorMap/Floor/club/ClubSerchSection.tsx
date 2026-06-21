import { useState } from "react";
import * as S from "../styles";
import { CLUBS } from "./mokData";
import type { Club } from "./mokData";
import ClubModal from "./ClubModal";

const ClubSearchSection = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const filtered = keyword.trim()
    ? CLUBS.filter((c) => c.name.includes(keyword.trim()))
    : CLUBS;

  return (
    <S.SearchSectionCard>
      <S.Title>동아리실 위치 찾기</S.Title>

      <S.SearchBarWrap>
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <S.SearchInput
          type="text"
          placeholder="동아리 이름 입력..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </S.SearchBarWrap>

      <S.DropdownList>
        {filtered.length > 0 ? (
          filtered.map((club) => (
            <S.DropdownItem
              key={club.name}
              onClick={() => {
                setSelectedClub(club);
                setKeyword("");
              }}
            >
              {club.name} · {club.room}
            </S.DropdownItem>
          ))
        ) : (
          <S.DropdownItem style={{ color: "#999", cursor: "default" }}>
            검색 결과가 없습니다.
          </S.DropdownItem>
        )}
      </S.DropdownList>

      {selectedClub && (
        <ClubModal club={selectedClub} onClose={() => setSelectedClub(null)} />
      )}
    </S.SearchSectionCard>
  );
};

export default ClubSearchSection;
