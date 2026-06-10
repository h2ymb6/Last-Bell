import styled from "styled-components";
import { addDays, format, startOfWeek } from "date-fns";
import { ko } from "date-fns/locale";
import { Colors } from "../../styles/color";

interface CalendarSectionProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  handleActiveStartDateChange?: (args: {
    activeStartDate: Date | null;
  }) => void;
  hasSchedule: (date: Date) => boolean;
}

function WeekendCalender({
  selectedDate,
  setSelectedDate,
  handleActiveStartDateChange,
  hasSchedule,
}: CalendarSectionProps) {
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }, (_, index) =>
    addDays(weekStart, index),
  );

  const moveWeek = (amount: number) => {
    const nextDate = addDays(selectedDate, amount * 7);
    setSelectedDate(nextDate);

    handleActiveStartDateChange?.({
      activeStartDate: startOfWeek(nextDate, { weekStartsOn: 0 }),
    });
  };

  const isSameDate = (a: Date, b: Date) =>
    format(a, "yyyy-MM-dd") === format(b, "yyyy-MM-dd");

  return (
    <CalendarWrapper>
      <Header>
        <MoveButton onClick={() => moveWeek(-1)}>‹</MoveButton>
        <MonthTitle>
          {format(selectedDate, "yyyy년 M월", { locale: ko })}
        </MonthTitle>
        <MoveButton onClick={() => moveWeek(1)}>›</MoveButton>
      </Header>

      <WeekDays>
        {weekDays.map((date) => (
          <WeekDay key={date.toISOString()} $day={date.getDay()}>
            {format(date, "EEE", { locale: ko })}
          </WeekDay>
        ))}
      </WeekDays>

      <DateGrid>
        {weekDays.map((date) => (
          <DateTile
            key={date.toISOString()}
            type="button"
            onClick={() => setSelectedDate(date)}
            $active={isSameDate(date, selectedDate)}
            $day={date.getDay()}
          >
            <span>{format(date, "d")}</span>
            {hasSchedule(date) && <ScheduleDot />}
          </DateTile>
        ))}
      </DateGrid>
    </CalendarWrapper>
  );
}

export default WeekendCalender;

const CalendarWrapper = styled.div`
  width: 60%;
  background-color: white;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
`;

const MoveButton = styled.button`
  border: none;
  background: transparent;
  font-size: 32px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  padding: 4px 12px;
`;

const MonthTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 12px;
`;

const WeekDay = styled.div<{ $day: number }>`
  color: ${({ $day }) => {
    if ($day === 0) return "red";
    if ($day === 6) return "blue";
    return "#333";
  }};
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 8px;
`;

const DateTile = styled.button<{ $active: boolean; $day: number }>`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $day }) => {
    if ($day === 0) return "red";
    if ($day === 6) return "blue";
    return "#333";
  }};

  position: relative;
  border-radius: 50%;
  background-color: ${({ $active }) =>
    $active ? Colors.Blue300 : "transparent"};
  border: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ $active }) =>
      $active ? Colors.Blue300 : "#f0f5ff"};
  }
`;

const ScheduleDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${Colors.Blue800};
  position: absolute;
  bottom: 8px;
`;
