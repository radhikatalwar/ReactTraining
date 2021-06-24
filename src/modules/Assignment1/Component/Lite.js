
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Lite extends React.Component {
  render() {
    return (
      <div className={"lite"}>
        <div class={"liteTop"}>
          <h3 className={"liteHeading"}>{"Lite"}</h3>
          <div className={"cost"}>
            <h4>{"Free"}</h4>
            <span>{"with restrictions"}</span>
          </div>
        </div>
        <div className="horLine"></div>
        <div className={"listDetails"}>
          <h5>{"Plan includes:"}</h5>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} color="#1a15b1" />
              {" Manage converstions directly from your website."}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color="#1a15b1" />
              {"  Bot without AI service."}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color="#1a15b1" />
              {"  Achieved chat for 30 days."}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color="#1a15b1" />
              {"  Free,for always."}
            </li>
          </ul>
        </div>
        <br />
        <div className={"startButton"}>
          <p>{"View all the features"}</p>
          <button id="buttonLite">{"Start 14 days of free Pro plan"}</button>
        </div>
      </div>
    );
  }
}

export default Lite;
