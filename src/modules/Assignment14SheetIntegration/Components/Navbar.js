import "./Navbar.css";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

export const Navbar = (props) => {
  const [value, setValue] = useState("");
  return (
    <div className={"navContainer"}>
      <div className={"left"}>
        <div className={"heading"}>
          <p>{"Wrytin"}</p>
        </div>
        <div className={"search"}>
          <input
            type="text"
            placeholder={"Search.."}
            onChange={(event) => {
              setValue(event.target.value);
              console.log(value);
            }}
          />
          <SearchIcon
            className={"icon"}
            fontSize={"large"}
            onClick={() => {
              localStorage.setItem("Value", value);
            }}
          />
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
