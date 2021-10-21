import styled from "styled-components";
import {Text} from "../../../Common/Texts.styles";

export const AbilityRow = styled.div`
  display: flex;
  align-items: center;  
  height: 100px;
  justify-content: center;
  width: 80%;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: none
  }
`

export const AbilityName = styled(Text)`
`;