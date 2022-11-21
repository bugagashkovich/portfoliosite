import wiz from "../img/wizard1.gif";
import vk_icon from "../img/vk.png";
import telegram_icon from "../img/telegram.png";
import hh_icon from "../img/hh.png";

function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg bg-transparent">
      <div className="container">
        <img src={wiz} className="img-fluid wizard1" />
        <div>
          {" "}
          <a href="https://vk.com/id2285894">
            {" "}
            <img src={vk_icon} className="icon" />
          </a>
          <a href="https://t.me/GlushikhinAS">
            <img src={telegram_icon} className="icon" />
          </a>
          <a href="https://spb.hh.ru/resume/8b8510aaff09eef2240039ed1f454647557559">
            <img src={hh_icon} className="icon" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
