import { ErrorMessage } from "formik";
import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: ${(props) => props.theme.fonts.h1};
    font-weight: ${(props) => props.theme.fonts.bold};
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fonts.h3};
    font-weight: ${(props) => props.theme.fonts.bold};
    margin-top: 1rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;

    label {
      font-size: ${(props) => props.theme.fonts.p};
      font-weight: ${(props) => props.theme.fonts.bold};
      display: flex;
      flex-direction: column;
    }

    input {
      padding: 0.5rem;
      border: 1px solid ${(props) => props.theme.colors.border};
      border-radius: 5px;
      font-size: ${(props) => props.theme.fonts.p};

      &:focus {
        border: 1px solid ${(props) => props.theme.colors.border};
      }
    }

    button {
      padding: 1rem 5rem;
      border: none;
      border-radius: 8px;
      width: 100%;
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
      font-size: ${(props) => props.theme.fonts.p};
      font-weight: ${(props) => props.theme.fonts.regular};
      cursor: pointer;
    }

    .delete {
      background-color: #e92121;
    }

    .info {
      font-size: ${(props) => props.theme.fonts.p};
      font-weight: ${(props) => props.theme.regular};
      color: #e92121;
    }
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;
