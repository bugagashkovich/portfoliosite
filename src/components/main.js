import { Fade } from "react-awesome-reveal";
import wizard from "../img/wizard.gif";

function Main() {
  return (
    <Fade>
      <div className="container" id="main">
        <h4 className="text-center">
          Страничка разработчика, которого Вы ищите!
        </h4>
        <div className="card shadow">
          <div className="card-body">
            <h3 className="card-title">Здравствуй, HR! </h3>
            <h4 className="card-subtitle mb-2">
              Меня зовут Александр. Приятно познакомиться!
            </h4>
            <div className="row">
              <div className="col-md-6">
                <hr></hr>
                <p className="card-text">
                  Я ищу команду, в которой мог бы{" "}
                  <span className="text-bg">
                    работать, раскрывать таланты и развиваться.
                  </span>
                </p>
                <p className="card-text">
                  Еще в школе я увлекался программированием, а всерьез взялся за
                  обучение год назад. Я только начинаю профессиональный путь, но
                  стремлюсь стать квалифицированным{" "}
                  <span className="text-bg">
                    full-stack разработчиком на Node.js и React.
                  </span>
                </p>
                <p className="card-text">
                  И я уже <span className="text-bg">многое умею!</span>{" "}
                </p>
              </div>
              <div className="col-md-6">
                <h1 className="card-text emoji">
                  <img src={wizard} className="img-fluid wizard" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Main;
