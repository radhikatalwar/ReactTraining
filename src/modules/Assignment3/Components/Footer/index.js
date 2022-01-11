import React from "react";
import Info from "./info";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"footerTop"}>
        <div className={"footerTopLeft"}>
          <div className={"logo"}>
            <img src={"./images/assignment3/xcoin1.jpeg"} alt="Xcoin" />
            <h2>{"xcoins"}</h2>
          </div>
          <p>{"14 East,Level 8,Sliema Road,Malta"}</p>
        </div>
        <div className={"footerTopRight"}>
          <Info heading={"COMPANY"} val1={"About us"} val2={"Career"} />
          <Info heading={"SUPPORT"} val1={"Help Center"} val2={"Contact"} />
          <div className={"infoContainer"}>
            <ul>
              <li>
                <h4>{"SOCIAL"}</h4>
              </li>
              <li>
                {"Blog"}
              </li>
              <li>
                {"Twitter"}
              </li>
              <li>
                {"Facebook"}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"footerBottom"}>
        <div className={"footerSections"}>
          <ul>
            <li>
              <a>{"@Xcoins.com"}</a>
            </li>
            <li>
              <a>{"Terms of Service"}</a>
            </li>
            <li>
              <a>{"Privacy Policy"}</a>
            </li>
            <li>
              <a>{"Legal notice"}</a>
            </li>
            <li>
              <a>{"Sitemap"}</a>
            </li>
          </ul>
        </div>
        <p>
          {
            "Xcoins is property of CF Technologies Ltd- Company #12797621986 14 East,Level 8,Sliema Road,Malta.all trademarks and copyrights belong to their respective qwners.All rights reserved."
          }
        </p>
      </div>
    </div>
  );
};

export default Footer;
