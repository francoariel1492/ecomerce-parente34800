import Bienvenida from "../Bienvenida/Bienvenida";
import LoginSignIn from "../LoginSignIn/LoginSignIn";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  
  return (
    <div>
      <Bienvenida />
      <LoginSignIn />
      <NavBar />
    </div>
  );
};

export default Header;
