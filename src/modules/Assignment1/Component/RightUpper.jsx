import React from "react";

class RightUpper extends React.Component {
    render() {
        return (
            <div className={"rightUpperContainer"}>
                <p className={"startNow"}>Start now your <span className={"bold"}>free plan.</span></p>
                <div className={"corporate"}>
                <span>Are you a corporate?  </span><br/>
                <a href="#">Contact us</a>
                </div>
            </div>
        );
    }
}

export default RightUpper;