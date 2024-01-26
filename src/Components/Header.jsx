import Carousel from "./Carousel";
import MainNavbar from "./MainNavbar";
import Navbar from "./Navbar";
import Notice from "./Notice";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <MainNavbar></MainNavbar>
      <Carousel></Carousel>
      <Notice></Notice>
    </div>
  );
};

export default Header;
