import { SubjectEach } from "./subjectEach";
import styled from "styled-components";

const TaskAssessment = () => {
  return (
    <>
      <WrapperREAL>
        <Text>수행평가 관리</Text>
        <Wrapper>
          <SubjectEach title="긴급 (마감 임박)" subtitle='마감임박' color="Red" />
          <SubjectEach title="진행 중" color="orange" />
          <SubjectEach title="준비 중" color="Green" />
        </Wrapper>
      </WrapperREAL>
    </>
  );
};

export default TaskAssessment;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-left: 30px;
  margin-bottom: 10px;
  padding-top: 25px;
`;

const WrapperREAL = styled.div`
  background-color: white;
  width: 940px;
  height: 420px;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  margin-left: 30px;
  margin-top: 30px;
`;
