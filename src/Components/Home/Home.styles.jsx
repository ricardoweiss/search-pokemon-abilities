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
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 10px;
  border: 1px solid grey;
  margin-bottom: 32px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

export const ButtonText = styled.p`
  font-size: 16px;
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
