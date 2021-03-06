import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/categoriesActions";

import { Button, Input, SearchContainer } from "./styles";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handlerText = (text) => {
    dispatch(setCategory(text));
    setText("");
  };

  return (
    <SearchContainer>
      <Input
        placeholder={"Buscar..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button onClick={() => text !== "" && handlerText(text)}>
        &#x1f50d;&#xfe0e;
      </Button>
    </SearchContainer>
  );
};

export default Search;
