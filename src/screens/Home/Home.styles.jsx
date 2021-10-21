import styled from "styled-components";

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
