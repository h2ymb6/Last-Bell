import styled from "styled-components";

const Each = ({ title, text, date }) => {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <ExamDate>{date}</ExamDate>
      </Wrapper>
    </>
  );
};

export default Each;

const Title = styled.div`
  font-size: 19px;
`;

const Text = styled.div`
  font-size: 21px;
  font-weight: 600;
`;

const ExamDate = styled.div`
  font-size: 17px;
  color: gray;
`;

const Wrapper = styled.div`
  background-color: White;
  width: 250px;
  height: 90px;
  box-sizing: border-box;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  
  gap: 7px;
`;
