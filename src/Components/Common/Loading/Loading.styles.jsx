import styled from "styled-components";
import {Text} from "../Texts.styles";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  max-height: 500px;
`;

export const LoadingGIF = styled.img`
  height: 40%;
  max-height: 200px;
  width: auto;
  margin-bottom: 32px;
`;

export const LoadingText = styled(Text)`
`;