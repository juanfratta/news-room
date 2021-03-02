import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/categoriesActions";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch(setCategory(text))}>Buscar</button>
    </>
  );
};

export default Search;
