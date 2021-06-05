import React from "react";

const Header = () => {
  return (
    <header>
      <div className={"logo"}>
        <img src={"./images/assignment3/xcoin1.jpeg"} alt="Xcoin" />
        <h2>{"xcoins"}</h2>
      </div>
      <div className={"sections"}>
        <ul>
          <li>
            <a>{"BUY BITCOIN"}</a>
          </li>
          <li>
            <a>{"SELL BITCOIN"}</a>
          </li>
          <li>
            <a>{"BLOG"}</a>
          </li>
          <li>
            <a>{"ABOUT US"}</a>
          </li>
        </ul>
      </div>
      <div className={"buttonBox"}>
          <button id={"login"}>{"LOGIN"}</button>
          <button id={"signup"}>{"SIGN UP"}</button>
      </div>
    </header>
  );
};

export default Header;
