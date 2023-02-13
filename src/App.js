import React from "react";
import "./style.css";
import logo from "./img/logo.svg";
import CVPT from "./img/CVPT.pdf";

function App() {
  return (
    <div className="App">
      <header>
          <div className="header-container">
            <img className="logo" src={logo} alt=""></img>
            <nav>
              <ul>
                <li><a>Home</a></li>
                <li><a>Projetos</a></li>
                <li><a>Sobre</a></li>
              </ul>
            </nav>
          </div>
      </header>
      <div className="container">
        <section className="landing">
            <div>
              <h1>Bem-vindo, meu nome é Matheus Castanheira.</h1>
              <h2>Eu sou um desenvolvedor web.</h2>
              <nav className="flex">
                <ul>
                  <li><a href="https://github.com/MccPaiva" target="_blank">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/matheuscastanheira/" target="_blank">Linkedin</a></li>
                  <li><a href={CVPT} target="_blank">Currículo</a></li>
                </ul>
              </nav>
            </div>
        </section>
        <section className="projects">
          <h1 className="project-title">Projetos</h1>
          
          <div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

// 
//         <iframe
//           src={CVPT}
//           frameBorder="0"
//           scrolling="auto"
//           height="100%"
//           width="100%"
//           >
//         </iframe>