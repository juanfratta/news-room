import styled from "styled-components";

export const CardArticleContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const CardArticleImage = styled.img`
  width: 100%;
  height: auto;
`;

export const CardArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CardLinkButton = styled.a`
  border: 0.5px solid #0d2538;
  text-decoration: none;
  color: grey;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 10px;

  &:hover {
    color: lightgray;
    background-color: #0d2538;
  }
`;

export const CardArticleMedia = styled.span`
  color: grey;
  font-weight: bold;
  font-style: italic;
`;
