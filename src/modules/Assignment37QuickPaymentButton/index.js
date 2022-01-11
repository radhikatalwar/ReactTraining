import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Parser as HtmlToReactParser } from "html-to-react";
import { ReactDOMServer } from "react-dom/server";

const styles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to right, #00416a, #e4e5e6)",
  },
  link: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#275d7f",
    color: "white",
    borderRadius: "50%",
    fontSize: "20px",
    margin: "6px 5px",
    "&:hover": {
      color: "#275d7f",
      backgroundColor: "white",
    },
  },
  heading: {
    fontWeight: "900",
    letterSpacing: "2px",
    color: "white",
    textAlign: "center",
    fontSize: "35px",
    margin: "13px",
  },
});

// var htmlInput = "<div><h1>Title</h1><p>A paragraph</p></div>";
// var htmlToReactParser = new HtmlToReactParser();
// var reactElement = htmlToReactParser.parse(htmlInput);
// var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

export const Assignment37QuickPaymentButton = () => {
  const classes = styles();

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.setAttribute("data-payment_button_id", "pl_HuAYnBhB6ywcwx");

    document.body.appendChild(script);
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.heading}>
        {"Click To donate !!"}
      </Typography>
      <Button>{"Pay with Razorpay"}</Button>
    </div>

    // <form>
    //   <script
    //     src="https://checkout.razorpay.com/v1/payment-button.js"
    //     data-payment_button_id="pl_HuAYnBhB6ywcwx"
    //     async
    //   >
    //   </script>
    // </form>
  );
};
