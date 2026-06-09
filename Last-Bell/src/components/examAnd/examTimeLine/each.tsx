import styled from "styled-components";
import { Colors } from "../../../styles/color";

const Each = ({ title, date }) => {
  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <ExamDate>{date}</ExamDate>
      </Wrapper>
    </>
  );
};

export default Each;

const Title = styled.div`
  font-size: 20px;
`;

const ExamDate = styled.div`
  font-size: 17px;
`;

const Wrapper = styled.div`
  background-color: ${Colors.Blue100};
  width: 180px;
  height: 80px;
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 7px;
`;
