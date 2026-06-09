import Each from "./Each";
import styled from "styled-components";
import { Colors } from "../../../styles/color";

interface SubjectEachProps {
  title: string;
  color: string;
  subtitle?: string;
}

export const SubjectEach = ({
  title,
  color,
  subtitle = "",
}: SubjectEachProps) => {
  return (
    <>
      <Wrapper>
        <Title color={color}>
          {title} <Subtitle>{subtitle}</Subtitle>
        </Title>

        <WrapperEach>
          <Each title="국어" text="수필 제출" date="~12.12" />
          <Each title="영어" text="ppt발표" date="~12.12" />
        </WrapperEach>
      </Wrapper>
    </>
  );
};

const Subtitle = styled.div`
  font-size: 16px;
  margin-top: 4px;
  margin-left: 3px;
`;

const Wrapper = styled.div`
  width: 280px;
  height: 310px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
`;

const WrapperEach = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  width: 250px;
  color: ${(props) => props.color};
  display: flex;
  justify-content: start;
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 600;
  border-bottom: 3px solid ${(props) => Colors[`${props.color}500`]};
`;
