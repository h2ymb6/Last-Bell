import styled from "styled-components";

interface EachProps {
  title: string;
  date: string;
  text: string;
}

const Each = ({ title, text, date }: EachProps) => {
  return (
    <Wrapper>
      <Top>
        <Title>{title}</Title>
        <ExamDate>{date}</ExamDate>
      </Top>
      <Bottom>
        <Text>{text}</Text>
      </Bottom>
    </Wrapper>
  );
};

export default Each;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 15px;
  color: gray;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const ExamDate = styled.div`
  font-size: 14px;
  color: gray;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 250px;
  min-height: 90px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 7px;
  border: 1px solid #e8e8e8;
`;

const Actions = styled.div`
  display: flex;
  gap: 4px;
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;
