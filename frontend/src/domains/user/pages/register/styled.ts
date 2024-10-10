import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secundary} 100%
  );

  .content {
    display: flex;
    min-width: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

    h1,
    h3 {
      color: ${(props) => props.theme.colors.h1};
    }
    h1,
    h3,
    p {
      font-family: ${(props) => props.theme.fonts.Montserrat};
    }

    p {
      font-size: ${(props) => props.theme.fonts.p};
      color: ${(props) => props.theme.colors.p};
    }

    h1 {
      font-size: ${(props) => props.theme.fonts.h1};
      margin-bottom: 2rem;
      font-weight: ${(props) => props.theme.fonts.bold};
    }

    h3 {
      font-size: ${(props) => props.theme.fonts.h3};
      font-weight: ${(props) => props.theme.fonts.semibold};
    }

    span {
      margin-top: 1rem;
      color: ${(props) => props.theme.colors.p};
      a {
        color: ${(props) => props.theme.colors.h1};
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  label {
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.label};
    font-weight: ${(props) => props.theme.fonts.regular};
  }

  input {
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.7rem;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 5px;
    outline: none;
    font-size: ${(props) => props.theme.fonts.p};

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.border};
    }

    &::placeholder {
      font-family: ${(props) => props.theme.fonts.Montserrat};
      color: ${(props) => props.theme.colors.placeholder};
      font-weight: ${(props) => props.theme.fonts.regular};
    }
  }

  .erro {
    color: #ff0000 !important;
    font-size: ${(props) => props.theme.fonts.erro} !important;
    margin-top: 0.8rem;
    align-self: center;
  }

  button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.background_button};
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    border: none;
  }
`;
