import NavBar from "../NavBar/NavBar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <>
      <div className="Layout-Background">
        <NavBar />
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
