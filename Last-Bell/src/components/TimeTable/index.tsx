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
          <NoData>오늘은 시간표 정보가 없거나 주말입니다.</NoData>
        )}
      </TimetableList>
    </Wrapper>
  );
}

export default TodaySchoolTimetable;

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 22px;
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
  background-color: ${Colors.Blue100};
  padding: 15px 25px;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const PeriodNum = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${Colors.Blue900};
  margin-right: 30px;
  width: 60px;
`;

const SubjectName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const NoData = styled.div`
  font-size: 18px;
  color: #777;
  padding: 20px 0;
`;
