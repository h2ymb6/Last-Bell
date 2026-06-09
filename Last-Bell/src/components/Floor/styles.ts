import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  font-family:
    "Pretendard",
    -apple-system,
    sans-serif;
`;

export const SearchSectionCard = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(140, 170, 210, 0.15);
`;

export const Title = styled.h2`
  font-size: 21px;
  color: #1a2538;
  margin: 0 0 10px 0;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #627289;
  margin: 0 0 24px 0;
`;

export const SearchBarWrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  .search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #9cb1cc;
    font-size: 18px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 52px;
  border: 1.5px solid #cce0ff;
  border-radius: 30px;
  font-size: 15px;
  color: #333;
  outline: none;
  background-color: #fafbfe;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus {
    border-color: #4a90e2;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(74, 144, 226, 0.2);
  }
`;

export const SearchPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  gap: 16px;
  color: #cbdcf2;

  p {
    font-size: 14px;
    color: #8294ad;
    margin: 0;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardContainer = styled.article`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 4px 16px rgba(140, 170, 210, 0.15);
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconBox = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e1eefc;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: #3b82f6;
  font-size: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #1a2538;
  margin: 0 0 10px 0;
  font-weight: 700;
`;

export const CardDescription = styled.p`
  font-size: 13px;
  color: #627289;
  line-height: 1.5;
  margin: 0 0 24px 0;
  min-height: 39px; 
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #ffffff;
  border: 1px solid #cce0ff;
  border-radius: 8px;
  color: #3b82f6;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto; 
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f6ff;
    border-color: #3b82f6;
  }
`;
