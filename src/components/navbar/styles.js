import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid lightgray;
  padding: 0 15px;
  background-color: #0d2538;
  color: white;
  display: flex;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: auto;
    }
  }
`;
