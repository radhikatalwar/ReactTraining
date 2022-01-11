import { makeStyles } from "@material-ui/core";
import React from "react";
import { ContentEditableDiv } from "./ContentEditableDiv";

const styles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  address: {
    marginTop: "20px",
  },
});

const heading = {
  fontSize: "24px",
  fontWeight: "900",
  marginBottom: "30px",
};

const about = {
  lineHeight: "22px",
  fontSize: "14px",
};

export const Data = () => {
  const classes = styles();

  var today = new Date().toLocaleDateString();
  localStorage.setItem("companyName", "Company Name");
  localStorage.setItem("type", "INVOICE");
  localStorage.setItem(
    "address",
    "123 Town Street<br/>Your Town<br/>Address Line 3"
  );
  localStorage.setItem("date", today);
  localStorage.setItem("invoiceNo", "Invoice #2334889");
  localStorage.setItem("PoNo", "PO 456001200");
  localStorage.setItem("phoneNo", "(123) 456 789");
  localStorage.setItem("email", "email@yourcompany.com");
  localStorage.setItem("clientName", "Att: Ms. Jane Doe");
  localStorage.setItem("clientCompany", "Client Company");
  return (
    <>
      <div className={classes.flex}>
        <ContentEditableDiv style={heading} width="30%" name={"companyName"} />
        <ContentEditableDiv style={heading} width="20%" name={"type"} />
      </div>
      <div className={classes.flex}>
        <ContentEditableDiv style={about} width="30%" name={"address"} />
        <div style={{ width: "20%" }}>
          <ContentEditableDiv style={about} name={"date"} />
          <ContentEditableDiv style={about} name={"invoiceNo"} />
          <ContentEditableDiv style={about} name={"PoNo"} />
        </div>
      </div>
      <div className={`${classes.flex} ${classes.address}`}>
        <div style={{ width: "30%" }}>
          <ContentEditableDiv style={about} name={"phoneNo"} />
          <ContentEditableDiv style={about} name={"email"} />
        </div>
        <div className={classes.about} style={{ width: "20%" }}>
          <ContentEditableDiv style={about} name={"clientName"} />
          <ContentEditableDiv style={about} name={"clientCompany"} />
        </div>
      </div>
    </>
  );
};
