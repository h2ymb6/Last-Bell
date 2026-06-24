import styled from "styled-components";
import { format } from "date-fns";
import { Colors } from "@/styles/color";

interface ScheduleItem {
  EVENT_NM: string;
  AA_YMD: string;
}

interface ScheduleListSectionProps {
  selectedDate: Date;
  selectedSchedules: ScheduleItem[];
}

export default function SideSchudule({
  selectedDate,
  selectedSchedules,
}: ScheduleListSectionProps) {
  return (
    <SideScheduleWrapper>
      <SideHeader>
        <SideTitle>{format(selectedDate, "M월 d일")} 학사 일정</SideTitle>
      </SideHeader>
      <ScheduleList>
        {selectedSchedules.length > 0 ? (
          selectedSchedules.map((item, i) => (
            <ScheduleRow key={i}>
              <EventText>{item.EVENT_NM}</EventText>
            </ScheduleRow>
          ))
        ) : (
          <NoData>오늘은 등록된 일정이 없어요</NoData>
        )}
      </ScheduleList>
    </SideScheduleWrapper>
  );
}

const SideScheduleWrapper = styled.div`
  margin-top: 20px;
  background-color: white;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  align-self: flex-start;
  height: 180px;
  width: 300px;
`;

const SideHeader = styled.div`
  border-bottom: 2px solid ${Colors.Blue200};
  padding-bottom: 12px;
  margin-bottom: 16px;
`;

const SideTitle = styled.h2`
  font-size: 21px;
  font-weight: 600;
  margin: 0;
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ScheduleRow = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.Blue200};
  padding: 12px 20px;
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const EventText = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const NoData = styled.div`
  font-size: 15px;
  color: #777;
  padding: 20px 0;
  text-align: center;
`;
