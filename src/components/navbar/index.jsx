import { Link } from "react-router-dom";
import { setCategory } from "../../redux/actions/categoriesActions";
import { useDispatch } from "react-redux";

import { Nav } from "./styles";

import BurgerMenu from "./burgerMenu";
import logo from "../../images/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Nav>
      <div className="logo">
        <Link to={"/"}>
          <img
            src={logo}
            alt="news-room"
            loading="lazy"
            onClick={() => dispatch(setCategory("0"))}
          />
        </Link>
      </div>
      <BurgerMenu />
    </Nav>
  );
};

export default Navbar;
