import { useEffect, useState } from "react";
import styled from "styled-components";
import TimetableApi from "@/apis/TimetableApi";
import { getKSTYYYYMMDD } from "@/utils/today";
import TimetableItem from "./TimetableItem";
import { getCurrentPeriod } from "./timetable.utils";

type TimetableItemType = {
  PERIO: string | number;
  ITRT_CNTNT: string;
  GRADE: string;
  CLASS_NM: string;
};

export default function TodaySchoolTimetable() {
  const [timetable, setTimetable] = useState<TimetableItemType[]>([]);
  const [currentPeriod, setCurrentPeriod] = useState(getCurrentPeriod);

  useEffect(() => {
    const load = async () => {
      const today = getKSTYYYYMMDD();

      try {
        const res = await TimetableApi(today);

        const rowData = res.data?.hisTimetable?.[1]?.row;

        const filtered = (rowData || []).filter(
          (item: TimetableItemType) =>
            !String(item.ITRT_CNTNT).includes("휴업일"),
        );

        setTimetable(filtered);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

useEffect(() => { //현재 교시 계산
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
          timetable.map((item) => (
            <TimetableItem
              key={item.PERIO}
              period={String(item.PERIO)}
              subject={item.ITRT_CNTNT}
              isCurrent={String(item.PERIO) === currentPeriod}
            />
          ))
        ) : (
          <NoData>오늘은 시간표 정보가 없거나 주말입니다.</NoData>
        )}
      </TimetableList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
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

const NoData = styled.div`
  font-size: 18px;
  color: #777;
  padding: 20px 0;
`;
