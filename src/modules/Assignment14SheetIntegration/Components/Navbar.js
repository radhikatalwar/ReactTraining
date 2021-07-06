import "./Navbar.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

export const Navbar = (props) => {
  return (
    <div className={"navContainer"}>
      <div className={"left"}>
        <div className={"heading"}>
          <p>{"Wrytin"}</p>
        </div>
        <div className={"search"}>
          <input type="text" placeholder={"Search.."} />
          <SearchIcon className={"icon"} fontSize={"large"} />
        </div>
      </div>
      <div className={"button"}>
        <button onClick={props.HandleTheme}>
          {props.mode === true ? "Set to Light theme" : "Set to Dark theme"}
        </button>
      </div>
    </div>
  );
};
