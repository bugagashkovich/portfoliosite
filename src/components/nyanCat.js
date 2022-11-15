import { Fade } from "react-awesome-reveal";
import nyan_cat from "../img/nyan-cat.gif";

function NyanCat() {
  return (
    <Fade>
      <div className="row">
        <div className="col">
          <img src={nyan_cat} className="nyan" />
        </div>
      </div>
    </Fade>
  );
}

export default NyanCat;
