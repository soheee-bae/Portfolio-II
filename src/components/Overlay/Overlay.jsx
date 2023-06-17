import { Blog, Email, Github, Instagram, Linkedin } from "../../icons";
import "./Overlay.css";

function Overlay({ toggle }) {
  const color = toggle === 0 ? "#000000" : "#ffffff";

  const contacts = [
    {
      icon: <Github color={color} />,
      href: "https://github.com/soheee-bae",
    },
    { icon: <Email color={color} />, href: "baesoheee@gmail.com" },
    {
      icon: <Linkedin color={color} />,
      href: "https://www.linkedin.com/in/sohee-bae-b37a9a166/",
    },
    {
      icon: <Instagram color={color} />,
      href: "https://www.instagram.com/50h333ba3/",
    },
    { icon: <Blog color={color} />, href: "https://soheee-bae.github.io/" },
  ];

  return (
    <div className="overlay" style={{ color: `${color}` }}>
      <div className="imageContainer">
        <div className="arrows">
          <img className="arrow1" src="./image/arrow.png" alt="arrow" />
          <img className="arrow2" src="./image/arrow.png" alt="arrow" />
        </div>
        <img className="profile" src="./image/profile.jpg" alt="profile" />
      </div>
      <div className="bio">
        <p>
          남다른 도전정신을 가진 개발자,{" "}
          <span style={{ borderBottom: `3px solid ${color}` }}>배소희</span>
          입니다.
        </p>
        <p>
          새로운 환경이나 영역에 긍정적으로 도전하는것을 즐기며 <br />
          꾸준히 성장하는 습관을 만들어 가고 있습니다.
        </p>
      </div>
      <div className="contacts">
        {contacts.map((contact) => (
          <a target="_blank" href={contact.href}>
            {contact.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Overlay;
