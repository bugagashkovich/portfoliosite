import { Fade } from "react-awesome-reveal";
import cat from "../img/cat.gif";

function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <img src={cat} className="cat" />
          <h3>Портфолио проекты</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Fade>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">Трейдерская система</h3>
                <hr></hr>
                <div className="card-text">
                  <p>
                    Простая система получения котировок, их анализа, размещения
                    заявок на покупку и продажу акций
                  </p>
                  <hr></hr>
                  <h5 className="card-subtitle">Используемые технологии</h5>
                </div>
                <div class="card-footer">
                  <a href="#" class="card-link">
                    Проект
                  </a>
                  <a href="#" class="card-link">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">Прогноз погоды</h3>
                <hr></hr>
                <div className="card-text"></div>

                <div class="card-footer">
                  <a href="#" class="card-link">
                    Проект
                  </a>
                  <a href="#" class="card-link">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade>
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title">
                  Система покупки и доставки товаров
                </h3>
                <hr></hr>
                <div className="card-text"></div>
                <div class="card-footer">
                  <a href="#" class="card-link">
                    Проект
                  </a>
                  <a href="#" class="card-link">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
