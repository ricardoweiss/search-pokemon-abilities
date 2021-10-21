import styled from "styled-components";
import {MainTitle} from "../../Common/Texts.styles";

export const HomeTitle = styled(MainTitle)`
  margin-bottom: 32px;
  padding-top: 32px;
`;

export const Input = styled.input`
  width: 80%;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 32px;
  max-width: 500px;
  &:focus {
    outline: none;
  }
`;
