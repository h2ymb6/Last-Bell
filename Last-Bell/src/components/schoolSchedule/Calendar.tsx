import styled from "styled-components";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { Colors } from "@/styles/color";
import "react-calendar/dist/Calendar.css";

interface CalendarSectionProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  handleActiveStartDateChange: (args: { activeStartDate: Date | null }) => void;
  hasSchedule: (date: Date) => boolean;
}

function CalendarSection({
  selectedDate,
  setSelectedDate,
  handleActiveStartDateChange,
  hasSchedule,
}: CalendarSectionProps) {
  return (
    <CalendarWrapper>
      <StyledCalendar>
        <Calendar
          onChange={(value) => {
            if (value instanceof Date) {
              setSelectedDate(value);
            }
          }}
          value={selectedDate}
          onActiveStartDateChange={handleActiveStartDateChange}
          formatDay={(_, date) => format(date, "d")}
          calendarType="gregory"
          next2Label={null}
          prev2Label={null}
          formatMonthYear={(_, date) => format(date, "yyyy년 M월")}
          tileContent={({ date, view }) => {
            if (view === "month" && hasSchedule(date)) {
              return <ScheduleDot />;
            }
            return null;
          }}
        />
      </StyledCalendar>
    </CalendarWrapper>
  );
}

export default CalendarSection;

const CalendarWrapper = styled.div`
  width: 60%;
  background-color: white;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
`;

const StyledCalendar = styled.div`
  .react-calendar {
    width: 100%;
    border: none;
  }

  .react-calendar__navigation {
    margin-bottom: 24px;

    button {
      font-size: 24px;
      color: #333;
      cursor: pointer;
      padding: 4px 12px;
    }

    .react-calendar__navigation__label {
      font-size: 24px;
      font-weight: 700;
    }
  }

  .react-calendar__month-view__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 12px;

    abbr {
      text-decoration: none;
    }

    &__weekday:nth-child(1) abbr {
      color: red;
    }
    &__weekday:nth-child(7) abbr {
      color: blue;
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 8px;
  }

  .react-calendar__tile {
    max-width: none !important;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    border-radius: 50%;
    background: transparent;
    border: none;
    cursor: pointer;

    &:enabled:hover,
    &:enabled:focus {
      background-color: #f0f5ff;
    }
  }

  .react-calendar__month-view__days__day:nth-child(7n + 1) {
    color: red;
  }
  .react-calendar__month-view__days__day:nth-child(7n) {
    color: blue;
  }

  .react-calendar__tile--active {
    background-color: ${Colors.Blue300} !important;
    color: #333 !important;
    font-weight: 600;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #ccc !important;
  }
`;

const ScheduleDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${Colors.Blue800};
  position: absolute;
  bottom: 8px;
`;
