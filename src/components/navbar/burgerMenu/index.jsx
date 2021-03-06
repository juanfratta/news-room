import { useState } from "react";

import { BurgerIcon } from "./styles";
import RightNav from "../rightNav";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerIcon open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerIcon>
      <RightNav open={open} />
    </>
  );
};

export default BurgerMenu;
