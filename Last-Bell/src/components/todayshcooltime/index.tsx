import styled from "styled-components";
import { useEffect, useState } from "react";
import TimetableApi from "../../apis/TimeTable/index";
import { Colors } from "../../styles/color";

type TimetableItem = {
  PERIO: string | number;
  ITRT_CNTNT: string;
  GRADE: string;
  CLASS_NM: string;
};

const PERIOD_TIMES = [
  { period: "1", start: "08:40", end: "09:30" },
  { period: "2", start: "09:40", end: "10:30" },
  { period: "3", start: "10:40", end: "11:30" },
  { period: "4", start: "11:40", end: "12:30" },
  { period: "5", start: "13:30", end: "14:20" },
  { period: "6", start: "14:30", end: "15:20" },
  { period: "7", start: "15:30", end: "16:20" },
];

const getMinutes = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);

  return hour * 60 + minute;
};

const getCurrentPeriod = () => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentPeriod = PERIOD_TIMES.find(({ start, end }) => {
    const startMinutes = getMinutes(start);
    const endMinutes = getMinutes(end);

    if (startMinutes > endMinutes) {
      return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
    }

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  });

  return currentPeriod?.period;
};

function TodaySchoolTimetable() {
  const [timetable, setTimetable] = useState<TimetableItem[]>([]);
  const [currentPeriod, setCurrentPeriod] = useState(getCurrentPeriod);

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

        const filtered = (rowData || []).filter(
          (item: TimetableItem) => !String(item.ITRT_CNTNT).includes("휴업일"),
        );

        setTimetable(filtered);
      } catch (error) {
        console.error("시간표 로드 에러:", error);
      }
    };

    load();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPeriod(getCurrentPeriod());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <Title>오늘의 시간표</Title>

      <TimetableList>
        {timetable.length > 0 ? (
          timetable.map((item, i) => {
            const isCurrentPeriod = String(item.PERIO) === currentPeriod;

            return (
              <PeriodCon key={i} $isCurrent={isCurrentPeriod}>
                <PeriodNum>{item.PERIO}교시</PeriodNum>
                <SubjectName>{item.ITRT_CNTNT}</SubjectName>
              </PeriodCon>
            );
          })
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
  width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;

const Title = styled.h1`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const TimetableList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PeriodCon = styled.div<{ $isCurrent: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ $isCurrent }) =>
    $isCurrent ? Colors.Yellow200 : Colors.Blue100};
  color: ${({ $isCurrent }) => ($isCurrent ? Colors.Black : Colors.Blue900)};
  padding: 15px 25px;
  border-radius: 15px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: ${({ $isCurrent }) =>
    $isCurrent ? `0 8px 18px rgba(254, 197, 33, 0.28)` : "none"};
`;

const PeriodNum = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: inherit;
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
