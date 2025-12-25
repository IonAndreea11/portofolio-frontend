import React from "react";
import LogoLoop from "./LogoLoop";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiGithub,
  SiPostman,
  SiNpm,
  SiAxios,
  SiCanva,
  SiVercel, 
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import "../styles/TechLoop.css";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss3  />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiJavascript />, title: "JavaScript (ES6+)", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript  />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiReact />, title: "React.js", href: "https://react.dev" },
  { node: <FaReact  />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiNodedotjs  />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress  />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiBootstrap  />, title: "Bootstrap", href: "https://getbootstrap.com" },
  { node: <SiMysql  />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostgresql  />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiAxios />, title: "Axios", href: "https://axios-http.com" },
  { node: <SiVercel />, title: "DOM APIs", href: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" },
];

const toolLogos = [
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <VscVscode />, title: "VS Code", href: "https://code.visualstudio.com" },
  { node: <SiPostman  />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiNpm />, title: "npm", href: "https://www.npmjs.com" },
  { node: <SiCanva />, title: "Canva", href: "https://www.canva.com" },
  { node: <SiNetlify />, name: "Netlify" },
  { node: <SiRender />, name: "Render" },
  { node: <SiVercel />, name: "Vercel" },
];

function TechLoop() {
  return (
    <section className="techloop-section">
      <h2 className="techloop-title">Technologies I Use</h2>
      <div className="loop-container">
        <LogoLoop
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={48}
          gap={60}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="var(--secondary)"
        />
      </div>

      <h2 className="techloop-title" style={{ marginTop: "60px" }}>
        Tools I Use
      </h2>
      <div className="loop-container">
        <LogoLoop
          logos={toolLogos}
          speed={50}
          direction="right"
          logoHeight={42}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="var(--secondary)"
        />
      </div>
    </section>
  );
}

export default TechLoop;
