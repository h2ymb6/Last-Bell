import styled from "styled-components";
import DefaultMainImg from "@/assets/DefaultMainImg.png";
import { Colors } from "@/styles/color";
import { useRef, useState } from "react";
import {
  getSchoolClassSetting,
  saveSchoolClassSetting,
} from "@/utils/schoolClassStorage";

const PROFILE_NAME_STORAGE_KEY = "profileName";

export default function Profile() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const savedSchoolClass = getSchoolClassSetting();
  const savedProfileName =
    localStorage.getItem(PROFILE_NAME_STORAGE_KEY) || "000";

  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState({
    name: savedProfileName,
    email: "example@mail.com",
    grade: savedSchoolClass.grade,
    classNumber: savedSchoolClass.classNumber,
    image: DefaultMainImg,
  });

  const [editProfile, setEditProfile] = useState(profile);

  const handleChange = (
    key: "name" | "grade" | "classNumber" | "studentNumber" | "image",
    value: string,
  ) => {
    setEditProfile((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleEdit = () => {
    setEditProfile(profile);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setEditProfile(profile);
    setIsEdit(false);
  };

  const handleSave = () => {
    const nextProfile = {
      ...editProfile,
      name: editProfile.name.trim() || "000",
    };

    setProfile(nextProfile);
    localStorage.setItem(PROFILE_NAME_STORAGE_KEY, nextProfile.name);
    saveSchoolClassSetting({
      grade: nextProfile.grade,
      classNumber: nextProfile.classNumber,
    });
    setIsEdit(false);
    alert("수정되었습니다!");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    handleChange("image", imageUrl);
  };

  return (
    <Wrapper $isEdit={isEdit}>
      <Header>
        <Title>사용자 프로필</Title>
        {!isEdit && (
          <EditButton type="button" onClick={handleEdit}>
            수정
          </EditButton>
        )}
      </Header>

      <ProfileBody>
        <HiddenFileInput
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <UserInfo>
          {isEdit ? (
            <Input
              value={editProfile.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          ) : (
            <Name>{profile.name}</Name>
          )}

          <Email>{profile.email}</Email>
        </UserInfo>
      </ProfileBody>

      <ClassBox>
        <ClassLabel>학급 정보</ClassLabel>

        {isEdit ? (
          <ClassSelectBox>
            <Select
              value={editProfile.grade}
              onChange={(e) => handleChange("grade", e.target.value)}
            >
              <option value="1">1학년</option>
              <option value="2">2학년</option>
              <option value="3">3학년</option>
            </Select>

            <Select
              value={editProfile.classNumber}
              onChange={(e) => handleChange("classNumber", e.target.value)}
            >
              <option value="1">1반</option>
              <option value="2">2반</option>
              <option value="3">3반</option>
              <option value="4">4반</option>
            </Select>
          </ClassSelectBox>
        ) : (
          <ClassText>
            {profile.grade}학년 {profile.classNumber}반
          </ClassText>
        )}
      </ClassBox>

      {isEdit && (
        <ButtonBox>
          <CancelButton type="button" onClick={handleCancel}>
            취소
          </CancelButton>
          <SaveButton type="button" onClick={handleSave}>
            저장
          </SaveButton>
        </ButtonBox>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $isEdit: boolean }>`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  width: 300px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
  height: ${({ $isEdit }) => ($isEdit ? "305px" : "235px")};
  box-sizing: border-box;
  transition: width 0.25s ease;
`;

const Header = styled.div`
  border-bottom: 2px solid ${Colors.Blue200};
  padding-bottom: 12px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const EditButton = styled.button`
  border: none;
  background-color: ${Colors.Blue100};
  color: ${Colors.Blue800};
  border-radius: 10px;
  padding: 7px 12px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Blue200};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  border: 1.5px solid ${Colors.Blue300};
  outline: none;
  border-radius: 10px;
  background-color: ${Colors.Blue100};
  padding: 0 12px;
  box-sizing: border-box;
  font-size: 15px;
  font-family: inherit;
  font-weight: 700;
  color: #222;

  &:focus {
    border-color: ${Colors.Blue500};
    background-color: white;
    box-shadow: 0 0 0 3px rgba(126, 170, 232, 0.22);
  }

  &::placeholder {
    color: #999;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const CancelButton = styled.button`
  flex: 1;
  height: 36px;
  border: none;
  border-radius: 10px;
  background-color: #eef2f7;
  color: #555;
  font-weight: 700;
  cursor: pointer;
`;

const SaveButton = styled.button`
  flex: 1;
  height: 36px;
  border: none;
  border-radius: 10px;
  background-color: ${Colors.Blue400};
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Blue800};
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ClassSelectBox = styled.div`
  display: flex;
  gap: 6px;
`;

const Select = styled.select`
  height: 32px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: white;
  padding: 0 8px;
  font-size: 13px;
  font-family: inherit;
  font-weight: 600;
`;
