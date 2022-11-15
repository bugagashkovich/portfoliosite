import { Fade } from "react-awesome-reveal";

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
            <h4 className="card-subtitle mb-2">Меня зовут Александр.</h4>
            <div className="row">
              <div className="col-md-6">
                <hr></hr>
                <p className="card-text">
                  Я ищу команду, в которой я мог бы{" "}
                  <span className="text-bg">работать</span> и
                  <span className="text-bg"> развиваться</span>
                </p>
                <p className="card-text">
                  Я только начинаю свой профессиональный путь, но я хочу стать
                  действительно хорошим{" "}
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
                  <span>(╯ ° □ °) ╯ ┻━┻</span>
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
