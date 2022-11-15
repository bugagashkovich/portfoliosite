import { Fade } from "react-awesome-reveal";
import fat from "../img/Fat.webp";

function Fat() {
  return (
    <Fade>
      <div className="row">
        <div className="col text-center">
          <img src={fat} className="fat" />
        </div>
      </div>
    </Fade>
  );
}

export default Fat;
