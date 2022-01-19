import "./Layout.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Layout(props) {
  return (
    <>
      <div>
        <NavBar />
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Layout;
