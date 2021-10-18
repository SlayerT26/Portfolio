import "./About.css";

function About() {
  return (
    <>
      <div className="About-Div">
        <div className="Image-Div">
          <img
            className="Profile-Pic"
            src="https://i.imgur.com/Fx1RWQo.jpg"
            alt="myself"
          />
        </div>
        <div className="About-Me-Div">
          <h1 className="About-Me-Title">About Me</h1>
          <p className="About-Me-Bio">
            Greetings! I am a full-stack engineer, who is enthusiastic about
            learning new skills and taking on challenges. As a CAD Designer
            Specialist, I've always had a passion for technology, but never
            really knew what I wanted to do. Until I discovered coding. At that
            moment, I knew what I wanted to do.
            <br />
            <br />I decided to take a leap of faith with General Assembly, to
            begin my new career choice and journey. And after 12 weeks and 400+
            hours of immersive instruction and work. I graduated with a higher
            passion to learn more and begin my next chapter.
          </p>
        </div>
      </div>
      <div className="Skill-Div">
        <div>
          <h1 className="Skill-h1">Skills</h1>
          <p className="Skill-p">
            Current known languages/frameworks. But always willing to learn
            more!
          </p>
        </div>
        <div className="All-Skill-Logo">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACFFJREFUeNrsXU9sFFUYf7O7taEWaFIOqIVwoUVOLQoHDbWJ8WJC4GTiyX9XE7l7oBw9qQePop5MPLVZ48UoUxIukNjtyXbhMEARDlSL1Jbuzsxj3uwsrGR3/rz/7833S1423W63M9/3e9+/9743CMkFHjBoPns55TN5xnzyPXMpnzk/4Nrmcnxv0ftVggoCpOFCNMb6vP+lLTcIBEjHWB9lE6swDQQoDz5MTH6XEBdsujkgQD50rcB3A1yCsahpch3zFH/T6PPe9AAFecl4/r28mE6Ufw7mgpgsoMhIw+UckXmRiJ4lu4AsAAAxAAAIYCyyYgQXCGA/AS4O+N1X0ViCLIAf+glah3ybBHQfRONIz3ubyfWeF5j1fF8wS7EyDdSl4PJRkl30/rzJ+J1Z9+bKIgC4gGy4icknWEgGBIElAzH5jWT2W4Ua6DYXiMmfgTQQgMAC8I/2eXy2ix8GpGcuRbpHWwdwGe8hz/8GAAAAAAAAAAAAAACABg6vL1o/MzmPLNsxqzEuTtSb8zy+iGclsAF6kQZusuZJgE3QizRs6kgAQJljgCQOwCBS8Yj8vwMWAAAEALCD93Kwi541UhqB4VH95kB7J0RhkCpjbQlgHF4YdTQkgLkuAFJBDkiZ/dxlzJsAK6A+4VjRmQAAsbNfexfggQrZgAMsVcZAAPOgNQEAjAh8s10ArAgyBwFyZcyVABP1JqSBgsFbxuACNIPfkrueJoIA4AbEweX9hSJKwdQmqnb2E1Q9+7E0aQ4NDaF9+/dL1eBu/Zt4DEwDJS+ogwuQnedvP0qPAdvmu4AlUcKxIshfX1UiWyMsAL5zo9wZYCD/f4ogAKSCqVbu38G/yy4Db5pAAOosAD+4bz0BgjurSmRrhgt4cA9cgAUuwANDP0DBG3fTJ0AgX7bcCTBRbzJdJL5tbyCIN/5SKlsj6gB4Z6u0FiLw5bdViCIAlIP7BoB/ppM/lC9TUbuCqdMVvLqM0FT+I/mCxUv01qZaQbvje+QRoHldu/Ta+G3h4dofKCSkocTuwao+FqIFLqAU5WBKLJlEgIfUBChaDt6z144MQVFbrfGrgZXDR+2oEbSxVQRw6V1AedNAUTI1qw5QtBB04KAdFiBAVlkAaSuCzoGX7IgBAjUyFUKAiXqTqWhR9kUhETI1KgjEG/mXhZ1xW1yAXUEggQcugFsM4JWKADavCOo2mfQsBRdMBYcvXaX6NzK3hWdtBw99+1wArAj2IGsrmIqVQNEEoC4HkwUe67DzSIksjcwCSmcdWurO19TSBdhYDvbXrrH8uWsiAeg3hZQsC8AKD9gFFyBDwZn9gBYSYKLeZDNbFrkBxn5AdlmaaAHCEvUJqioDyyAA9Ami9H7ADgHUyVA0ARj6BO1ZEdStH7AX2u4KDq/+gpDgZlHabeGV8VfQ0Bvn+F2HQhcgmgAeNQFWl5m2e+cFzbbw2tSpQgTI6glUtRIowwXcstGnO+MvF5vhbD2Bt0wmgJUgLoCbq/PVPmZJNAE8oEt6TyCWfDIoEIADqoeOFUwDmVYChaaBWvcGFtnoEa4to/YXn8qJAUb28bMOLcXuTNc6QAwLysGMHcFCy8DCCcB6sHGRcrCzZ1SeC5g8ya8GgO0OAuWlZpr2CGaVgYM2sp4A9CZMw1ZxZ6RYNzJjGdgttQXAt28WU46EHoHqoVf53mNgvwuQ2CeoX5dQ5maQQK3sZBCA+jl3Oq4IFi0DM24GWbGBAPSzZ+NeQeWIdwFcy8CBehnLKAR50m7m/c9Q5cTpzkri2jK3zaWk8ledPIVqUydRbfrtYkp+cJfF/3ulJkBYVIEjo6gyMxuPrguJiRARIli+kruwRGZ5lSibKD1SeNHI/3/3kLEUXAYC0IOxEkiygirJDN58N7rRz2OLQAgRRmTo3WtAFNyd4eS1aK2fFrKfEWi9C8gkxOGjqErGO+91fr6xgl4c38e1sleoBqB4JVBKEMh6wDGZscLYf/x1YcqPwdYPKOU5jLAhRCH8FlZ+DbIIQG/KDD45VNd+QBUEYOgTvGmtBcDqDQC4AKEK1uwZgSrTQHLQ8RyVGV38Nq4HVI7NRPn9ae0PhSKRf9C8Fpn/68hv/MYqM2sIwIQ4byeFnB+/jglQmZqJK36VqRNx8Uf1LCeK9iOlB5HS8xZ+dCgDyyQAt3SGVPcCMkjnEPFhxDJERIitg6RNIWSbFwnwiOJp1/tVPCNQJQGEFTSedhBFroJYg+rMLHJiUsxwcxdkVpPZ3SYKj2a6pGcaNGwigBxsb3UsQ2IdiEXouIvZ+LVQ7EHMeuLHGev54AKQojZxUvsPyPj1p467IAtFA4LJp8Fb43fW/D2nC8j8iCdDRo4sZayfmcQ6GQtCgNrx19DeA8OFgjdeaG1htLs1eDFgot50bLIA+uXoUSDZvvIzait6aFTg6zEfZBaCPAR4RkBFJ4MCAcyAtJipBrKWNONx50RQ/zGOX8uWBXTN2lyZlE56//3HCLV3cdG6f8NGAjy0XuFBMst3O7M8R++/clmBC2BEV9l+S4/VPZ2DQNcWs97axmj77xA9uh+gnX9C1PoP81a+a6MFMPLQSBK8dQM3icGbvHY6mcJcPzM5lgSCZ5PXI6oVvLdPIaijbKrgjSVFXkCdPQCujM2gSgjQhxCEAOTAvbeSVyUE4Bi8FZnhbqLwBdad08YSoA8heq3DtJQgqCptZY6kdovJDNcmHtKKAH2sw1yPdRgzLHzwnpvlWsZAjinSjAgx3eMu5jS9TLdnlhvx1DQHGQiNgsmnwVuk8AUTZWkkARQGk5vPzXLPdNlZQQDBwaSWwRsQQFwwaUTwBgTgG0z2FmFK9cjbJwIMAEgMwXqQm4mMAAAAAElFTkSuQmCC"
            alt="html5"
            className="Skill-Logo1"
          />
          <img
            src="https://hannaboorom.dev/static/media/cssLogo.4e67641b.png"
            alt="CSS"
            className="Skill-Logo2"
          />
          <img
            src="https://hannaboorom.dev/static/media/js-logo.838ce517.png"
            alt="JS"
            className="Skill-Logo3"
          />
          <img
            src="https://hannaboorom.dev/static/media/react_js_logo.6e086d6c.png"
            alt="React"
            className="Skill-Logo4"
          />
          <img
            src="https://hannaboorom.dev/static/media/node_js_logo.67ddd61a.png"
            alt="Node-JS"
            className="Skill-Logo5"
          />
          <img
            src="https://hannaboorom.dev/static/media/mongodb-logo.0ceb38c8.png"
            alt="MongoDB"
            className="Skill-Logo6"
          />
          <img
            src="https://hannaboorom.dev/static/media/postgreSqlLogo.53535cdd.png"
            alt="PostgreSQL"
            className="Skill-Logo7"
          />
          <img
            src="https://hannaboorom.dev/static/media/rubyOnRailsLogo.e20d131d.png"
            alt="Rails"
            className="Skill-Logo8"
          />
          <img
            src="https://hannaboorom.dev/static/media/gitLogo.dcc8b2cb.png"
            alt="Github"
            className="Skill-Logo9"
          />
        </div>
      </div>
    </>
  );
}

export default About;
