import { Blog, Email, Github, Instagram, Linkedin } from "../../icons";
import "./Overlay.css";

const contacts = [
  { icon: <Github />, href: "https://github.com/soheee-bae" },
  { icon: <Email />, href: "baesoheee@gmail.com" },
  {
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/sohee-bae-b37a9a166/",
  },
  { icon: <Instagram />, href: "https://www.instagram.com/50h333ba3/" },
  { icon: <Blog />, href: "https://soheee-bae.github.io/" },
];

function Overlay() {
  return (
    <div className="overlay">
      <img src="./image/profile.jpg" alt="profile" />
      <div className="bio">
        <p>
          남다른 도전정신을 가진 개발자, <span>배소희</span>입니다.
        </p>
        <p>
          새로운 환경이나 영역에 긍정적으로 도전하는것을 즐기며 <br />
          꾸준히 성장하는 습관을 만들어 가고 있습니다.
        </p>
      </div>
      <div className="contacts">
        {contacts.map((contact) => (
          <a href={contact.href}>{contact.icon}</a>
        ))}
      </div>
    </div>
  );
}

export default Overlay;
