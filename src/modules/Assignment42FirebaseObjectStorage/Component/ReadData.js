import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles({
  mainContainer: {
    margin: "30px 0",
  },
  subHeading: {
    fontSize: "18px",
    margin: "15px 0",
  },
  title: {
    fontSize: "18px",
    margin: "15px 0",
    fontWeight: "bold",
  },
  codeBox: {
    display: "flex",
    justifyContent: "space-between",
  },
  code: {
    width: "45%",
  },
});

export const ReadData = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.title}>{"Read Data"}</Typography>
      <div className={classes.mainContainer}>
        <Typography variant="h5" className={classes.subHeading}>
          {
            "To quickly verify that you've added data to Cloud Firestore, use the data viewer in the Firebase console."
          }
        </Typography>
        <Typography variant="h5" className={classes.subHeading}>
          {
            "You can also use the 'get' method to retrieve the entire collection."
          }
        </Typography>
      </div>

      <div className={classes.codeBox}>
        <SyntaxHighlighter
          className={classes.code}
          language="javascript"
          style={twilight}
        >
          {
            "-> Web Version 9 \n\nimport { collection, getDocs } from 'firebase/firestore';\n\nconst querySnapshot = await getDocs(collection(db, 'users'))\nquerySnapshot.forEach((doc) => {\n  console.log('$(doc.id) => $(doc.data())');\n});"
          }
        </SyntaxHighlighter>
        <SyntaxHighlighter
          className={classes.code}
          language="javascript"
          style={twilight}
        >
          {
            `-> Web Version 8 \n\ndb.collection('users').get().then((querySnapshot) => {\nquerySnapshot.forEach((doc) => {\n  console.log('$(doc.id) => $(doc.data())');\n  });\n});\n});`
          }
        </SyntaxHighlighter>
      </div>
    </>
  );
};
