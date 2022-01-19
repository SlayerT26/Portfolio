import "./HelloWorld.css";
import { Link } from "react-scroll";
import Typing from "react-typing-animation";

function HelloWorld() {
  return (
    <>
      <div className="HelloWorldPage">
        <div></div>
        <div className="HelloWorldMainDiv">
          <div className="HelloWorldDiv1">
            <div className="PythonDiv">
              <Typing>
                <h1 className="Python">
                  <span className="PythonSpan1">print</span>(
                  <span className="PythonSpan2">"Hello World"</span>)
                </h1>
              </Typing>
            </div>
            <div className="JavaScriptDiv">
              <Typing>
                <h1 className="JavaScript">
                  <span className="JavaScriptSpan1">console</span>.
                  <span className="JavaScriptSpan2">log</span>(
                  <span className="JavaScriptSpan3">"Hello World"</span>)
                </h1>
              </Typing>
            </div>
          </div>

          <div id="HelloWorldID" to="/#about">
            <h1 className="HelloWorldH1">Hello World</h1>
          </div>

          <div className="HelloWorldDiv2">
            <div className="CDiv">
              <Typing>
                <h1 className="C">
                  cout &lt;&lt; "Hello World" &lt;&lt; endl;
                </h1>
              </Typing>
            </div>
            <div className="RubyDiv">
              <Typing>
                <h1 className="Ruby">
                  <span className="RubySpan1">put </span>
                  <span className="RubySpan2"> Hello World</span>
                </h1>
              </Typing>
            </div>
          </div>

          <div></div>
        </div>
        <div className="ScrollDiv">
          <Link to="about" id="ScrollDivH3" smooth={true} duration={1000}>
            Scroll Down
          </Link>
        </div>
      </div>
    </>
  );
}

export default HelloWorld;
