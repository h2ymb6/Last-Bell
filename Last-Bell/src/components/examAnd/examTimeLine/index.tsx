import { Colors } from "../../../styles/color";
import Each from "./each";
import styled from "styled-components";

const ExamTimeLine = () => {
  return (
    <>
      <Wrapper>
        <Title>시험 과목별 일정</Title>

        <BottomWrapper>
          <Each title="국어" date="00월 00일(수) 1교시" />
          <Each title="수학" date="00월 00일(수) 3교시" />
          <Each title="영어" date="00월 00일(목) 1교시" />
          <Each title="과학" date="00월 00일(목) 3교시" />
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default ExamTimeLine;

const Wrapper = styled.div`
  background-color: White;
  width: 400px;
  height: 230px;
  gap: 10px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 2px ${Colors.Blue300};
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  align-self: flex-start;
  padding-left: 20px;
`;

const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  
`;
