import "./Overlay.css";

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
        
      </div>
    </div>
  );
}

export default Overlay;
