import styled from "styled-components";

export const Header = styled.header`
  color: #5e60ce;
  background: radial-gradient(
    circle,
    ${(props) => props.theme.colors.secundary} 0%,
    ${(props) => props.theme.colors.secundary} 50%,
    ${(props) => props.theme.colors.primary} 90%,
    ${(props) => props.theme.colors.primary} 100%
  );

  width: 100%;
  margin: 0 auto;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-weight: bold;
  border-bottom: 1px #0d0d0d solid;
`;

export const Main = styled.main`
  border-radius: 8px;
  padding: 20px;
  width: 70%;
  margin: -50px auto;

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 10px;
  }
`;

export const AddForm = styled.form`
  display: flex;
  margin-bottom: 40px;
  gap: 15px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  flex: 1;
  padding: 15px;
  border: 1px #0d0d0d solid;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  color: #808080;
  background-color: #262626;
`;

export const Count = styled.div`
  margin-bottom: 6px;
`;

export const TaskCount = styled.div`
  color: #4ea8de;
  margin-bottom: 5px;
`;

export const TaskNumber = styled.span`
  color: #fff;
`;

export const SubmitButton = styled.button`
  background-color: #0099ff;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableRow = styled.tr`
  border-radius: 10px;
  background-color: #333333;
  margin-bottom: 10px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1;
  }
`;

export const TableHead = styled.thead`
  margin-bottom: 50px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const TableHeaderCell = styled.th`
  padding: 10px 15px;
  text-align: center;
  color: #4ea8de;
`;

export const TableCell = styled.td`
  padding: 10px 15px;
  text-align: center;
  color: #f2f2f2;
  font-weight: 600;

  &:nth-child(1) {
    width: 50%;
    text-align: left;
  }
`;

export const Select = styled.select`
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: capitalize;
  background-color: #262626;
  color: #f2f2f2;

  &:hover {
    background-color: #333333;
  }
`;

interface ButtonActionProps {
  variant: "edit" | "delete";
}

export const ButtonAction = styled.button<ButtonActionProps>`
  border: none;
  border-radius: 5px;
  padding: 4px;
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "edit" ? "orange" : "rgba(237, 42, 42, 0.9)"};

  &:nth-child(1) {
    margin-right: 5px;
  }
`;
