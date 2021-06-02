import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

class Pro extends React.Component {
  render() {
    return (
      <div className={"pro"}>
        <div class={"proTop"}>
          <h3 className={"proHeading"}>Pro</h3>
          <div className={"cost"}>
            <h4>29$</h4>
            <span>monthly</span>
          </div>
        </div>
        <hr />
        <div class={"listDetails"}>
          <h5>All of Lite plus:</h5>
          <ul>
            <li><FontAwesomeIcon icon={faCheck} color="white" />   Bot with AI that can recognize the user's behaviour and can
              automatize the sentences.
            </li>
            <li><FontAwesomeIcon icon={faCheck} color="white" />  Unlimited conversational flows.</li>
            <li><FontAwesomeIcon icon={faCheck} color="white" />  Facebook, Twitter, Instagram and Linkedln integration.</li>
            <li><FontAwesomeIcon icon={faCheck} color="white" />  Achieved chat without limits.</li>
          </ul>
        </div>
        <div className={"startButton"}>
          <p>View all the features</p>
          <button id="buttonPro">Start 14 days of free Pro plan</button>
        </div>
      </div>
    );
  }
}

export default Pro;
