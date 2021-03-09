import styled from "styled-components";

export const ArticlesContainer = styled.div`
  padding: 30px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
  }
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.h5`
  text-align: center;
  color: grey;
  padding: 0 50px;
`;
