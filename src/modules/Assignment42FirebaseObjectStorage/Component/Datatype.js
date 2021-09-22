import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles({
  content: {
    margin: "30px 0",
    fontSize: "18px",
  },
  title: {
    fontSize: "18px",
    margin: "15px 0",
    fontWeight: "bold",
  },
});

export const Datatype = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.title}>{"Data Type"}</Typography>
      <Typography variant="h5" className={classes.content}>
        {
          "Cloud Firestore lets you write a variety of data types inside a document, including strings, booleans, numbers, dates, null, and nested arrays and objects. Cloud Firestore always stores numbers as doubles, regardless of what type of number you use in your code."
        }
      </Typography>
      <SyntaxHighlighter language="javascript" style={twilight}>
        {
          "var docData = {\nstringExample: 'Hello world!',\nbooleanExample: true,\nnumberExample: 3.14159265,\ndateExample: firebase.firestore.Timestamp.fromDate(new Date('December 10, 1815')),\narrayExample: [5, true,'hello'],\nnullExample: null,\nobjectExample: {\na: 5,\nb: {\n       nested: 'foo'\n }\n}};"
        }
      </SyntaxHighlighter>
    </>
  );
};
