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
                  Мне <span className="text-bg">27 лет,</span> окончил
                  магистратуру
                  <span className="text-bg"> СПБГПУ </span> по специальности
                  электрофизические и электрохимические процессы в
                  машиностроении. Также имею неоконченный курс аспиранта по той
                  же специальности.
                </p>
                <p className="card-text text-main ">
                  1 год проработал ученым в институте материалов, 6 лет
                  проработал на руководящей должности на предприятии. В мои
                  обязанности входило планирование, организация и контроль всех
                  рабочих процессов на предприятии.
                </p>
                <p className="card-text text-main ">
                  <span className="text-bg">
                    Со школы я был увлечен программированием, но всерьез взялся
                    год назад.
                  </span>
                </p>
                <p className="card-text text-main ">
                  Во время карьеры на предприятии, я занимался разработкой
                  <span className="text-bg">
                    модулей для технических расчетов,
                  </span>{" "}
                  а также разрабатывал{" "}
                  <span className="text-bg">ERP систему</span> для полной
                  автоматизации всей отчетности, передачи документов заказчикам,
                  взаимодействия между цехом и офисными сотрудниками.
                </p>
                <p className="card-text text-main ">
                  У меня{" "}
                  <span className="text-bg">технический склад ума, </span>я
                  отлично знаю{" "}
                  <span className="text-bg">математику, статистику,</span> умею
                  работать с{" "}
                  <span className="text-bg">большим объемом данных, </span> а
                  также <span className="text-bg">очень быстро учусь.</span> Я
                  всегда ищу возможности для развития себя в личностом и
                  профессиональном ключе.
                </p>
                <p className="card-text text-main">
                  <span className="text-bg">
                    Быстро нахожу общий язык с людьми, трудолюбив, исполнителен,
                    внимателен.
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
                    Английский на уровне спокойного чтения технической
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
