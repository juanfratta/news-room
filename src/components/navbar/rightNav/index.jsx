import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { categories } from "../../../utils/variables";
import { setCategory } from "../../../redux/actions/categoriesActions";

import { Ul } from "./styles";
import { Search } from "../..";

const RightNav = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handlerCategoryAndClose = (e) => {
    dispatch(setCategory(e.target.id));
    setOpen(!open);
  };

  return (
    <>
      <Ul open={open}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={category.name === "home" ? "/" : category.name}
              key={category.id}
              style={{ textDecoration: "none" }}
              id={category.id}
              onClick={(e) => handlerCategoryAndClose(e)}
            >
              {category.name}
            </Link>
          </li>
        ))}
        <Search open={open} setOpen={setOpen} />
      </Ul>
    </>
  );
};

export default RightNav;
