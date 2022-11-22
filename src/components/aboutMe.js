import { Fade } from "react-awesome-reveal";

function AboutMe() {
  return (
    <div className="container" id="about">
      <h3 className="text-center">Немного обо мне</h3>
      <div className="row">
        <div className="col-md-6">
          <Fade>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Опыт работы и личные качества </h5>
                <hr></hr>
                <p className="card-text text-main ">
                  Мне <span className="text-bg">27 лет.</span> Я окончил
                  магистратуру <span className="text-bg">СПбГПУ</span> по
                  специальности{" "}
                  <span className="text-bg">
                    «Электрофизические и электрохимические процессы в
                    машиностроении».
                  </span>
                </p>
                <p className="card-text text-main ">
                  Год проработал ученым в институте материалов. Шесть лет
                  находился на руководящей должности на предприятии, где в мои
                  обязанности входило{" "}
                  <span className="text-bg">
                    планирование, организация и контроль всех рабочих процессов.
                  </span>
                </p>

                <p className="card-text text-main ">
                  На предприятии я разрабатывал модули для технических расчетов
                  и <span className="text-bg">ERP-систему</span> для полной
                  автоматизации всей отчетности, передачи документов заказчикам,
                  взаимодействия между цехом и офисными сотрудниками.
                </p>
                <p className="card-text text-main ">
                  Благодаря{" "}
                  <span className="text-bg">техническому складу ума</span> я
                  отлично знаю{" "}
                  <span className="text-bg">
                    математику и разбираюсь в статистике.
                  </span>{" "}
                  <span className="text-bg">
                    Быстро и с удовольствием учусь новому.
                  </span>{" "}
                  Умею работать с большим объемом данных. Внимательно и серьезно
                  отношусь к деталям. Люблю решать{" "}
                  <span className="text-bg">
                    сложные задачи и получать ценный опыт, который можно
                    применить на практике.
                  </span>{" "}
                  Всегда довожу дело до конца.
                </p>
                <p className="card-text text-main">
                  Важным считаю постоянное развитие — и в личностном, и в
                  профессиональном плане.
                </p>
                <p className="card-text text-main">
                  <span className="text-bg">
                    Быстро нахожу общий язык с людьми, так что отлично впишусь в
                    команду!
                  </span>
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-md-6">
          <div className="row">
            <Fade>
              <div className="card shadow">
                {" "}
                <div className="card-body">
                  <h5 className="card-title">Мои навыки backend:</h5>
                  <hr></hr>
                  <p className="card-text text-main">
                    Node.js, TypeScript, Express, Apollo-Server,
                    Apollo-Federation, WebSocket, JWT и сопутствующие библиотеки
                  </p>
                  <p className="card-text text-main">MongoDB, PostgreSQL</p>
                  <p className="card-text text-main">Chai, Jest, Mocha</p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="row">
            <Fade>
              <div className="card shadow">
                {" "}
                <div className="card-body">
                  <h5 className="card-title">Мои навыки frontend:</h5>
                  <hr></hr>
                  <p className="card-text text-main">
                    HTML, React, React-hooks, formik
                  </p>
                  <p className="card-text text-main">
                    CSS, Bootstrap, Tailwind, materialUI
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <div className="row">
            <Fade>
              <div className="card shadow">
                {" "}
                <div className="card-body">
                  <h5 className="card-title">Другие навыки:</h5>
                  <hr></hr>
                  <p className="card-text text-main">
                    Английский на уровне уверенного чтения технической
                    документации.
                  </p>
                  <p className="card-text text-main">
                    Git, Docker, Kubernetes, nats streaming server, RabbitMQ
                  </p>
                  <p className="card-text text-main">
                    R, Python (NumPy, Pandas, Keras)
                  </p>
                  <p className="card-text text-main">
                    Mathcad, Autodesk Inventor, Autodesk AutoCAD, Blender, Figma
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
