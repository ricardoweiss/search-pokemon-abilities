import styled from "styled-components";

export const ButtonContainer = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 32px;
  padding: 1.5rem 3.125rem;
  background-color: #3498db;
  border: none;
  border-radius: 0.3125rem;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #324c5d
  }
`;

export const ButtonText = styled.p`
  font-size: 16px;
  color: white
`;