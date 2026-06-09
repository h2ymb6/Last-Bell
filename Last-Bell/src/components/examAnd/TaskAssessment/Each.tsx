import styled from "styled-components";

const Each = ({ title, text, date }) => {
  return (
    <>
      <Wrapper>
        <Top>
          <Title>{title}</Title>
          <ExamDate>{date}</ExamDate>
        </Top>
        <Text>{text}</Text>
      </Wrapper>
    </>
  );
};

export default Each;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
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
  background-color: White;
  width: 250px;
  height: 90px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 7px;
  border: 1px solid #e8e8e8;
  padding-bottom: 15px;
`;
