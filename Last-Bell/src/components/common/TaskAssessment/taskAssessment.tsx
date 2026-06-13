import { SubjectEach } from "./subjectEach";
import styled from "styled-components";
import { getSchoolClassSetting } from "../../../utils/schoolClassStorage";
import {
  getTaskAssessments,
  getTaskStatus,
} from "../../../utils/AssessmentStorage";

const TaskAssessment = () => {
  const { grade, classNumber } = getSchoolClassSetting();
  const allTasks = getTaskAssessments();

  const all = allTasks.filter(
    (i) =>
      String(i.grade) === String(grade) &&
      String(i.classNumber) === String(classNumber),
  );

  const urgent = all.filter(
    (i) => getTaskStatus(i.dueDate).status === "urgent",
  );

  const ongoing = all.filter(
    (i) => getTaskStatus(i.dueDate).status === "ongoing",
  );

  const ready = all.filter((i) => getTaskStatus(i.dueDate).status === "ready");

  return (
    <WrapperREAL>
      <Text>
        {grade}학년 {classNumber}반 수행평가 관리
      </Text>

      <Wrapper>
        <SubjectEach
          title="마감임박"
          subtitle={`${urgent.length}개`}
          color="#FF4D4F"
          items={urgent}
        />

        <SubjectEach
          title="진행 중"
          subtitle={`${ongoing.length}개`}
          color="#FAAD14"
          items={ongoing}
        />

        <SubjectEach
          title="준비 중"
          subtitle={`${ready.length}개`}
          color="#52C41A"
          items={ready}
        />
      </Wrapper>
    </WrapperREAL>
  );
};

export default TaskAssessment;

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
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
  min-height: 400px;
  box-sizing: border-box;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;
