import { useState } from "react";
import * as S from "../styles";
import { TEACHERS, type Teacher } from "./mokData";
import TeacherModal from "./Floor";

const TeacherSearchSection = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filtered = keyword.trim()
    ? TEACHERS.filter((t) => t.name.includes(keyword.trim()))
    : TEACHERS;

  return (
    <S.SearchSectionCard>
      <S.Title>선생님 교무실 위치 찾기</S.Title>

      <S.SearchBarWrap>
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <S.SearchInput
          type="text"
          placeholder="선생님 이름 입력..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </S.SearchBarWrap>

      {filtered.length > 0 && (
        <S.DropdownList>
          {filtered.map((teacher) => (
            <S.DropdownItem
              key={teacher.name}
              onClick={() => {
                setSelectedTeacher(teacher);
                setKeyword("");
              }}
            >
              {teacher.name} · {teacher.description}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}

      {keyword.trim() && filtered.length === 0 && (
        <S.SearchPlaceholder>검색 결과가 없습니다.</S.SearchPlaceholder>
      )}

      {!keyword.trim() && filtered.length === 0 && (
        <S.SearchPlaceholder>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ fontSize: "48px" }}
          />
        </S.SearchPlaceholder>
      )}

      {selectedTeacher && (
        <TeacherModal
          teacher={selectedTeacher}
          onClose={() => setSelectedTeacher(null)}
        />
      )}
    </S.SearchSectionCard>
  );
};

export default TeacherSearchSection;
