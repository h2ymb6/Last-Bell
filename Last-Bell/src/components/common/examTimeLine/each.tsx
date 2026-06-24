import styled from "styled-components";
import { Colors } from "@/styles/color";

type Props = {
  title: string;
  date: string;
};

const Each = ({ title, date }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ExamDate>{date}</ExamDate>
    </Wrapper>
  );
};

export default Each;

const Title = styled.div`
  font-size: 18px;
`;

const ExamDate = styled.div`
  font-size: 16px;
`;

const Wrapper = styled.div`
  background-color: ${Colors.Blue100};
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 7px;
`;
