import { useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "@/styles/color";
import {
  saveMotivationImage,
  getMotivationImage,
  removeMotivationImage,
} from "@/utils/motivationImageStorage";

export default function MotivationImageUpload() {
  const [preview, setPreview] = useState<string | null>(getMotivationImage());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileInputRef.current?.click();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result as string;
      setPreview(image);
      saveMotivationImage(image); //이미지 저장
    };

    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setPreview(null);
    removeMotivationImage();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>메인 이미지</Title>
      </Header>

      <PreviewBox onClick={handleClick}>
        {preview ? (
          <PreviewImg src={preview} />
        ) : (
          <Placeholder>클릭해서 이미지 업로드</Placeholder>
        )}
      </PreviewBox>

      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      <ButtonRow>
        <UploadBtn onClick={handleClick}>이미지 변경</UploadBtn>

        {preview && <RemoveBtn onClick={handleRemove}>기본 이미지로</RemoveBtn>}
      </ButtonRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  width: 300px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
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

const PreviewBox = styled.div`
  width: 100%;
  height: 160px;
  border-radius: 14px;
  background-color: ${Colors.Blue100};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 14px;
`;

const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Placeholder = styled.p`
  font-size: 14px;
  color: ${Colors.Blue800};
  font-weight: 600;
`;

const HiddenInput = styled.input`
  display: none;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 8px;
`;

const UploadBtn = styled.button`
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

const RemoveBtn = styled.button`
  flex: 1;
  height: 36px;
  border: none;
  border-radius: 10px;
  background-color: #eef2f7;
  color: #555;
  font-weight: 700;
  cursor: pointer;
`;
