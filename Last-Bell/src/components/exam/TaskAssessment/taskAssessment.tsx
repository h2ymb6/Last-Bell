import { SubjectEach } from "./subjectEach";
import styled from "styled-components";

const TaskAssessment = () => {
  return (
    <>
      <WrapperREAL>
        <Text>수행평가 관리</Text>
        <Wrapper>
          <SubjectEach title="긴급" subtitle="(마감임박)" color="Red" />
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
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px;
`;

const Text = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-left: 30px;
  padding-top: 25px;
`;

const WrapperREAL = styled.div`
  padding-top: 5px;
  background-color: white;
  width: 904px;
  height: 400px;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;
