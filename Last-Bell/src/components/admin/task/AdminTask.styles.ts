import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px;
`;

export const Header = styled.div`
  margin-bottom: 32px;
  h1 {
    font-size: 28px;
    font-weight: 700;
  }
`;

export const FormBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 13px;
    font-weight: 600;
    color: #666;
  }

  input {
    padding: 10px 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    &:focus {
      border-color: #3b82f6;
    }
  }
`;

export const BtnRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const SubmitBtn = styled.button`
  flex: 1;
  height: 40px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  flex: 1;
  height: 40px;
  background: #eef2f7;
  color: #555;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export const TableBox = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
  }

  th {
    font-weight: 700;
    color: #555;
  }
`;

export const EditBtn = styled.button`
  background: #e0f0ff;
  color: #3b82f6;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  margin-right: 6px;
  font-size: 13px;
`;

export const DeleteBtn = styled.button`
  background: #fee2e2;
  color: #ef4444;
  border: none;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 13px;
`;
