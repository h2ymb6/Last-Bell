import Each from "../TaskAssessment/Each";
import styled from "styled-components";
import { Colors } from "../../../styles/color";

export const SubjectEach = ({ title, color }) => {
  return (
    <>
      <div>
        <Title color={color}>{title}</Title>
        <Wrapper color={color}>
          <Each title="국어" text="수필 제출" date="12월 19일 마감" />
          <Each title="영어" text="ppt발표" date="12월 19일 마감" />
        </Wrapper>
      </div>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${(props) => Colors[`${props.color}200`]};
  width: 280px;
  height: 230px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
`;

const Title = styled.div`
  width: 280px;
  height: 70px;
  border-radius: 10px 10px 0px 0px;
  color: white;
  font-size: 20px;
  display: grid;
  place-items: center;
  background-color: ${(props) => Colors[`${props.color}500`]};
`;
