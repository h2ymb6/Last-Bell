import Each from "./each";
import styled from "styled-components";
import { getExamSchedule } from "./data";

const ExamTimeLine = () => {
  const schedules = getExamSchedule();

  const grouped = schedules.reduce<Record<string, typeof schedules>>(
    (acc, item) => {
      if (!acc[item.date]) acc[item.date] = [];
      acc[item.date].push(item);
      return acc;
    },
    {},
  );

  return (
    <Wrapper>
      <Title>시험 과목별 일정</Title>

      <ScrollArea>
        {Object.entries(grouped).map(([date, items]) => (
          <DateGroup key={date}>
            <DateLabel>{date}</DateLabel>
            <ItemRow>
              {items.map((item, i) => (
                <Each
                  key={i}
                  title={`${item.subject}`}
                  date={`${item.period}교시`}
                />
              ))}
            </ItemRow>
          </DateGroup>
        ))}
      </ScrollArea>
    </Wrapper>
  );
};

export default ExamTimeLine;

const Wrapper = styled.div`
  background-color: white;
  width: 410px;
  margin-top: 20px;
  border-radius: 20px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

const ScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  padding-left: 5px;
  margin-bottom: 5px;
`;

const DateGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DateLabel = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0px;
  color: #444;
  padding-left: 4px;
  border-left: 4px solid #4a90e2;
  padding-left: 8px;
`;
