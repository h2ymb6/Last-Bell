import styled from "styled-components";
import { Colors } from "../../styles/color";
import { useState } from "react";

export default function SendFeedback() {
  const [text, setText] = useState("");

  const handleOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (!text.trim()) {
      alert("피드백 내용을 입력해주세요!");
      return;
    }

    setText("");
    alert("전송되었습니다!");
  };

  return (
    <Wrapper>
      <Header>
        <Title>피드백 보내기</Title>
      </Header>

      <Textarea
        onChange={handleOnchange}
        value={text}
        placeholder="개선했으면 하는 점을 적어주세요"
      />

      <SendButton onClick={handleSubmit} type="button">
        send
      </SendButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
  width: 300px;
  height: 250px;
  box-sizing: border-box;
`;

const Header = styled.div`
  border-bottom: 2px solid ${Colors.Blue200};
  padding-bottom: 5px;
  margin-bottom: 18px;
  height: 42px;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 21px;
  font-weight: 600;
  margin: 0;
  margin-top: -3px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 86px;
  resize: none;
  border: none;
  outline: none;
  background-color: ${Colors.Blue100};
  border-radius: 14px;
  padding: 14px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: inherit;

  &::placeholder {
    color: #777;
  }
`;

const SendButton = styled.button`
  width: 100%;
  height: 42px;
  margin-top: 14px;
  border: none;
  border-radius: 12px;
  background-color: ${Colors.Blue400};
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Blue800};
  }
`;
