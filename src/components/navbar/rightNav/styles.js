import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;

  li,
  a {
    padding: 18px 5px;
    color: white;
    font-size: 0.85rem;
  }

  @media (max-width: 920px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    background-color: #0d2538;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    align-items: flex-start;
    transition: transform 0.3s ease-in-out;
  }
`;
