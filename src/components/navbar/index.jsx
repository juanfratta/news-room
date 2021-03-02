import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { categories } from "../../utils/variables";
import { setCategory } from "../../redux/actions/categoriesActions";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {categories.map((category) => (
        <Link
          to={category.name === "home" ? "/" : category.name}
          key={category.id}
          style={{ textDecoration: "none" }}
          id={category.id}
          onClick={(e) => dispatch(setCategory(e.target.id))}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
