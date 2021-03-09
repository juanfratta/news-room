import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/actions/categoriesActions";

import { Button, Input, SearchContainer } from "./styles";

const Search = ({ open, setOpen }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handlerTextAndClose = (text) => {
    dispatch(setCategory(text));
    setText("");
    setOpen(!open);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder={"Buscar..."}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && text !== "" && handlerTextAndClose(text)
        }
      />
      <Button onClick={() => text !== "" && handlerTextAndClose(text)}>
        &#x1f50d;&#xfe0e;
      </Button>
    </SearchContainer>
  );
};

export default Search;
