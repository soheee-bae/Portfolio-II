import { Highlight } from "../../icons";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BookIcon from "@mui/icons-material/Book";
import EmailIcon from "@mui/icons-material/Email";
import Tooltip from "@mui/material/Tooltip";

import "./Overlay.css";

function Overlay({ toggle }) {
  const color = toggle === 0 ? "#000000" : "#ffffff";
  const arrowSrc =
    toggle === 0 ? "./image/arrow.png" : "./image/arrowWhite.png";

  const contacts = [
    {
      icon: <GitHubIcon sx={{ color: color }} />,
      href: "https://github.com/soheee-bae",
      label: "Github",
    },
    {
      icon: <EmailIcon sx={{ color: color }} />,
      href: "baesoheee@gmail.com",
      label: "Email",
    },
    {
      icon: <LinkedInIcon sx={{ color: color }} />,
      href: "https://www.linkedin.com/in/sohee-bae-b37a9a166/",
      label: "Linkedin",
    },
    {
      icon: <InstagramIcon sx={{ color: color }} />,
      href: "https://www.instagram.com/50h333ba3/",
      label: "Instagram",
    },
    {
      icon: <BookIcon sx={{ color: color }} />,
      href: "https://soheee-bae.github.io/",
      label: "Blog",
    },
  ];

  return (
    <div className="overlay" style={{ color: `${color}` }}>
      <div className="imageContainer">
        <div className="arrows">
          <img className="arrow1" src={arrowSrc} alt="arrow" />
          <img className="arrow2" src={arrowSrc} alt="arrow" />
        </div>
        <img className="profile" src="./image/profile.jpg" alt="profile" />
      </div>
      <div className="bio">
        <p>
          남다른 도전정신을 가진 개발자,{" "}
          <span>
            배소희
            <Highlight />
          </span>
          입니다.
        </p>
        <p>
          새로운 환경이나 영역에 긍정적으로 도전하는 것을 즐기며 <br /> 꾸준히
          성장하는 습관을 만들어 가고 있습니다.
        </p>
      </div>
      <div className="contacts">
        {contacts.map((contact) => (
          <Tooltip title={contact.label}>
            <a target="_blank" href={contact.href}>
              {contact.icon}
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Overlay;
