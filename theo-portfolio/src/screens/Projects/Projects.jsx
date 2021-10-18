import "./Projects.css";

function Projects() {
  return (
    <>
      <div className="Projects-Grid">
        <div className="Project1">
          <img
            src="https://i.imgur.com/PS1xGAT.png"
            alt="Time2Riddle"
            className="Project1Photo"
          />
          <div className="Project1Info">
            <h1 className="Project1Title">Time2Riddle</h1>
            <p className="Project1Paragraph">
              I enjoy riddles, like The Riddler loves tormenting Batman. So I
              designed and built this app, so users could login, create riddles,
              and solve riddles. Users can also keep record of all the riddles
              they created on there profile page.
            </p>
            <a
              className="ProjectSite"
              href="https://time2riddle.netlify.app/"
              rel="none"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="Project2">
          <img
            src="https://i.imgur.com/nvX4N6O.png"
            alt="Tech-Care"
            className="Project2Photo"
          />
          <div className="Project2Info">
            <h1 className="Project2Title">Tech-Care</h1>
            <p className="Project2Paragraph">
              Tech-Care was a grouped based project. We designed and built this
              app to help students or people interested in coding find the
              perfect laptop. Users can sign in and view laptops. As well as,
              create a suggested laptop that they beleive is reliable and
              affordable.
            </p>
            <a
              className="ProjectSite"
              href="https://tech-care.netlify.app/"
              rel="none"
            >
              Deployed Site
            </a>
          </div>
        </div>
        <div className="Project3">
          <img
            src="https://i.imgur.com/dx2ANti.png"
            alt="Party-On"
            className="Project3Photo"
          />
          <div className="Project3Info">
            <h1 className="Project3Title">Party-On</h1>
            <p className="Project3Paragraph">
              Party-On is an App that Users can create, delete, and view: Party
              drinks, Party Platters, and Party Music suggestions. The app was
              themed after legendary rock stars Wayne Cambell and Garth Algar.
              From the amazing movie "Wayne's World".
            </p>
            <a
              className="ProjectSite"
              href="https://party-on.netlify.app/"
              rel="none"
            >
              Deployed Site
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
