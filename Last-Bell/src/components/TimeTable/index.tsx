import styled from "styled-components";
import { useEffect, useState } from "react";
import TimetableApi from "../../apis/TimeTable/index";
import { Colors } from "../../styles/color";

function TodaySchoolTimetable() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const today = new Date()
      .toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\. /g, "")
      .replace(/\./, "");

    const load = async () => {
      try {
        const res = await TimetableApi(today);
        const rowData = res.data?.hisTimetable?.[1]?.row;

        setTimetable(rowData || []);
      } catch (error) {
        console.error("시간표 로드 에러:", error);
      }
    };

    load();
  }, []);

  return (
    <Wrapper>
      <TodayDate>{new Date().toLocaleDateString()}</TodayDate>
      <Title>오늘의 시간표</Title>

      <TimetableList>
        {timetable.length > 0 ? (
          timetable.map((item, i) => (
            <PeriodCon key={i}>
              <PeriodNum>{item.PERIO}교시</PeriodNum>
              <SubjectName>{item.ITRT_CNTNT}</SubjectName>
            </PeriodCon>
          ))
        ) : (
          <NoData>오늘은 시간표 정보가 없거나 주말입니다. 😎</NoData>
        )}
      </TimetableList>
    </Wrapper>
  );
}

export default TodaySchoolTimetable;

// --- 아래 스타일 컴포넌트는 형님 코드와 동일 ---
const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid ${Colors.Blue300};
  box-shadow: 0px 0px 10px 2px ${Colors.Blue300};
  border-radius: 20px;
`;

const TodayDate = styled.div`
  font-size: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const TimetableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PeriodCon = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.Blue200};
  padding: 15px 25px;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const PeriodNum = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.Blue900};
  margin-right: 30px;
  width: 60px;
`;

const SubjectName = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const NoData = styled.div`
  font-size: 18px;
  color: #777;
  padding: 20px 0;
`;
