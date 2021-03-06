import BurgerMenu from "./burgerMenu";
import { Nav } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">News-Room</div>
      <BurgerMenu />
    </Nav>
  );
};

export default Navbar;
