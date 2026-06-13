import Each from "./Each";
import styled from "styled-components";
import type { TaskAssessment } from "../../../utils/AssessmentStorage";

interface SubjectEachProps {
  title: string;
  color: string;
  subtitle?: string;
  items: TaskAssessment[];
}

export const SubjectEach = ({
  title,
  color,
  subtitle = "",
  items,
}: SubjectEachProps) => {
  return (
    <Wrapper>
      <Title $color={color}>
        {title} <Subtitle>{subtitle}</Subtitle>
      </Title>

      <WrapperEach>
        {items.length > 0 ? (
          items.map((item) => (
            <Each
              key={item.id}
              title={item.subject}
              text={item.title}
              date={`~${item.dueDate}`}
            />
          ))
        ) : (
          <Empty>없음</Empty>
        )}
      </WrapperEach>
    </Wrapper>
  );
};

const Subtitle = styled.span`
  font-size: 16px;
  margin-top: 4px;
  margin-left: 3px;
`;

const Wrapper = styled.div`
  width: 280px;
  min-height: 310px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  border-radius: 0px 0px 10px 10px;
`;

const WrapperEach = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div<{ $color: string }>`
  width: 250px;
  color: ${({ $color }) => $color};
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 600;
  border-bottom: 3px solid ${({ $color }) => $color};
`;

const Empty = styled.div`
  font-size: 14px;
  color: #aaa;
  padding: 10px 0;
`;
