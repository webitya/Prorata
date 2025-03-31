import { Link } from "react-router-dom";
import FooterEl from "../FooterEl";
import NavbarEl from "../NavbarEl";

const LayoutEl = (data) => {
  return (
    <>
      <NavbarEl />
      {data.children}
      <FooterEl />

     
    </>
  );
};

export default LayoutEl;
