import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

export const HomeTitle = styled.h2`
 width: 80%;
 text-align: center;
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

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  max-height: 500px;
`;

export const ErrorImage = styled.img`
  height: 40%;
  max-height: 200px;
  width: auto;
  margin-bottom: 32px;
`;

export const ErrorText = styled.h3`
  width: 80%;
  text-align: center;
`;

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

export const LoadingText = styled.h3`
  font-size: 16px;
`;

export const PokemonImage = styled.img`
  height: 200px;
  width: auto;
`;

export const Title = styled.h2`
  text-transform: capitalize;
`;
