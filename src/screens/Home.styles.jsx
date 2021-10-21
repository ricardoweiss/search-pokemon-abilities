import styled from "styled-components";
import { MainTitle } from "../Components/Common/Texts.styles";

export const Page = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width: 1024px) {
    min-height: 100%;
    padding: 32px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  @media(min-width: 1024px) {
    padding: 32px;
    border: 1px solid grey;
    border-radius:20px;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2);
  }
`;

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

export const Button = styled.button`
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

export const PokemonImage = styled.img`
  height: 200px;
  width: auto;
`;

export const CapitalizedTitle = styled(MainTitle)`
  text-transform: capitalize;
`;
