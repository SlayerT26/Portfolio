import "./App.css";
import { Layout } from "./components";
import { Route } from "react-router";
import About from "./screens/About/About";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";

function App() {
  return (
    <>
      <Layout>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/contacts" exact>
          <Contact />
        </Route>
      </Layout>
    </>
  );
}

export default App;
