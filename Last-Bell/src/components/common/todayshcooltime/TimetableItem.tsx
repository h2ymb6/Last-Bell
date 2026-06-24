import styled from "styled-components";
import { Colors } from "@/styles/color";

interface Props {
  period: string;
  subject: string;
  isCurrent: boolean;
}

export default function TimetableItem({
  period,
  subject,
  isCurrent,
}: Props) {
  return (
    <PeriodCon $isCurrent={isCurrent}>
      <PeriodNum>{period}교시</PeriodNum>
      <SubjectName>{subject}</SubjectName>
    </PeriodCon>
  );
}

const PeriodCon = styled.div<{ $isCurrent: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ $isCurrent }) =>
    $isCurrent ? Colors.Yellow200 : Colors.Blue100};

  color: ${({ $isCurrent }) =>
    $isCurrent ? Colors.Black : Colors.Blue900};

  padding: 15px 25px;
  border-radius: 15px;

  box-shadow: ${({ $isCurrent }) =>
    $isCurrent
      ? `0 8px 18px rgba(254, 197, 33, 0.28)`
      : "none"};
`;

const PeriodNum = styled.div`
  font-size: 18px;
  font-weight: 700;
  width: 60px;
`;

const SubjectName = styled.div`
  font-size: 18px;
`;