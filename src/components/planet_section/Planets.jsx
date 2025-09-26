import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sun from "../../assets/planets/0_Sun.png";
import Mercury from "../../assets/planets/1_Mercury.png";
import Venus from "../../assets/planets/2_Venus.png";
import Earth from "../../assets/planets/3_Earth.png";
import Mars from "../../assets/planets/4_Mars.png";
import Jupiter from "../../assets/planets/5_Jupiter.png";
import Saturn from "../../assets/planets/6_Saturn.png";
import Uranus from "../../assets/planets/7_Uranus.png";
import Neptune from "../../assets/planets/8_Neptune.png";
import "./Planets.css";

const inputCSS = `
0% {
  transform: translate(300px, 0px) scale(0.82);
}
2.78% {
  transform: translate(296px, 26px) scale(0.84);
}
5.56% {
  transform: translate(285px, 52px) scale(0.86);
}
8.33% {
  transform: translate(265px, 77px) scale(0.88);
}
11.11% {
  transform: translate(238px, 100px) scale(0.9);
}
13.89% {
  transform: translate(206px, 121px) scale(0.92);
}
16.67% {
  transform: translate(169px, 139px) scale(0.94);
}
19.44% {
  transform: translate(130px, 145px) scale(0.96);
}
22.22% {
  transform: translate(90px, 150px) scale(0.98);
}
25% {
  transform: translate(50px, 150px) scale(1);
}
27.78% {
  transform: translate(10px, 148px) scale(0.98);
}
30.56% {
  transform: translate(-30px, 143px) scale(0.96);
}
33.33% {
  transform: translate(-70px, 130px) scale(0.94);
}
36.11% {
  transform: translate(-108px, 113px) scale(0.92);
}
38.89% {
  transform: translate(-141px, 94px) scale(0.9);
}
41.67% {
  transform: translate(-170px, 72px) scale(0.88);
}
44.44% {
  transform: translate(-192px, 47px) scale(0.86);
}
47.22% {
  transform: translate(-208px, 21px) scale(0.84);
}
50% {
  transform: translate(-216px, 0px) scale(0.82);
}
52.78% {
  transform: translate(-208px, -21px) scale(0.8);
}
55.56% {
  transform: translate(-192px, -47px) scale(0.78);
}
58.33% {
  transform: translate(-170px, -72px) scale(0.76);
}
61.11% {
  transform: translate(-141px, -94px) scale(0.74);
}
63.89% {
  transform: translate(-108px, -113px) scale(0.72);
}
66.67% {
  transform: translate(-70px, -130px) scale(0.7);
}
69.44% {
  transform: translate(-30px, -143px) scale(0.68);
}
72.22% {
  transform: translate(10px, -148px) scale(0.66);
}
75% {
  transform: translate(50px, -150px) scale(0.64);
}
77.78% {
  transform: translate(90px, -150px) scale(0.66);
}
80.56% {
  transform: translate(130px, -145px) scale(0.68);
}
83.33% {
  transform: translate(169px, -139px) scale(0.7);
}
86.11% {
  transform: translate(206px, -121px) scale(0.72);
}
88.89% {
  transform: translate(238px, -100px) scale(0.74);
}
91.67% {
  transform: translate(265px, -77px) scale(0.76);
}
94.44% {
  transform: translate(285px, -52px) scale(0.78);
}
97.22% {
  transform: translate(296px, -26px) scale(0.8);
}
100% {
  transform: translate(300px, 0px) scale(0.82);
}
`;

const scaleX = 900 / 300;
const scaleY = 330 / 150;

const scaledCSS = inputCSS.replace(
  /translate\((-?\d+\.?\d*)px,\s*(-?\d+\.?\d*)px\)/g,
  (_, x, y) => {
    const newX = (parseFloat(x) * scaleX).toFixed(2);
    const newY = (parseFloat(y) * scaleY).toFixed(2);
    return `translate(${newX}px, ${newY}px)`;
  }
);
// console.log(scaledCSS);

const planetDescriptions = [
  { name: "mercury", label: "Contact" },
  { name: "venus", label: "Timeline" },
  { name: "earth", label: "About Me" },
  { name: "mars", label: "Socials" },
  { name: "jupiter", label: "Skills" },
  { name: "saturn", label: "Projects" },
  { name: "uranus", label: "Languages" },
  { name: "neptune", label: "Resume and Certificates" },
];

export default function Planets() {
  const navigate = useNavigate();
  const [activePlanet, setActivePlanet] = useState(null);

  return (
    <div className="planets">
      <div>
        <img
          className="sun"
          src={Sun}
          alt="SUN"
          onClick={() => {
            navigate("");
          }}
        />
        {planetDescriptions.map(({ name, label }) => (
          <p
            key={name}
            className={
              activePlanet === name ? "description-on" : "description-off"
            }
          >
            {label}
          </p>
        ))}
      </div>
      <div>
        <img
          src={Mercury}
          className="mercury"
          alt="Mercury"
          onClick={() => {
            navigate("/contact");
          }}
          onMouseEnter={() => setActivePlanet("mercury")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>
      <div>
        <img
          className="venus"
          src={Venus}
          alt="VENUS"
          onClick={() => {
            navigate("/timeline");
          }}
          onMouseEnter={() => setActivePlanet("venus")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>

      <div>
        <img
          className="earth"
          src={Earth}
          alt="EARTH"
          onClick={() => {
            navigate("/about");
          }}
          onMouseEnter={() => setActivePlanet("earth")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>

      <div>
        <img
          className="mars"
          src={Mars}
          alt="MARS"
          onClick={() => {
            navigate("/links");
          }}
          onMouseEnter={() => setActivePlanet("mars")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>

      <div>
        <img
          className="jupiter"
          src={Jupiter}
          alt="JUPITER"
          onClick={() => {
            navigate("/skills");
          }}
          onMouseEnter={() => setActivePlanet("jupiter")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>

      <div>
        <img
          className="saturn"
          src={Saturn}
          alt="SATURN"
          onClick={() => {
            navigate("/projects");
          }}
          onMouseEnter={() => setActivePlanet("saturn")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>

      <div>
        <img
          className="uranus"
          src={Uranus}
          alt="URANUS"
          onClick={() => {
            navigate("/languages");
          }}
          onMouseEnter={() => setActivePlanet("uranus")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>
      <div>
        <img
          className="neptune"
          src={Neptune}
          alt="NEPTUNE"
          onClick={() => {
            navigate("/resume");
          }}
          onMouseEnter={() => setActivePlanet("neptune")}
          onMouseLeave={() => setActivePlanet(null)}
        />
      </div>
    </div>
  );
}
