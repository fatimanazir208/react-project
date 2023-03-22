import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  function handleClick(path) {
    console.log("handle click");
    navigate(path);
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand" onClick={() => handleClick("/")}>E-mart</div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row align-items-center">
          <li className="nav-link mx-2" onClick={() => handleClick("/")}>Cart</li>
          <li className="nav-link mx-2" onClick={() => handleClick("/new/item")}>Create item</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
