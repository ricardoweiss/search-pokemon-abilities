import styled from "styled-components";

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

export const AbilityName = styled.p`
  font-size: 16px;
  text-align: center;
`;