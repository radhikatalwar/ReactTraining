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
});

export const UpdateData = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.title}>{"Update Data"}</Typography>
      <div className={classes.mainContainer}>
        <Typography variant="h5" className={classes.subHeading}>
          {
            "Dot notation allows you to update a single nested field without overwriting other nested field. If you update a nested field without dot notation, you will overwrite the entire map field, for example:"
          }
        </Typography>
      </div>
      <div>
        <SyntaxHighlighter
          className={classes.code}
          language="javascript"
          style={twilight}
        >
          {
            "db.collection('users').doc('frank').set({\nname: 'Frank',\nfavorites: {\nfood: 'Pizza',\ncolor: 'Blue',\nsubject: 'Recess'},\nage: 12})\n.then(function() {\nconsole.log('Frank created');}); \n\n**Update the doc without using dot notation.** \n** Notice the map value for favorites.**\n\ndb.collection('users').doc('frank').update({\nfavorites: {food:Ice Cream'}})\n.then(function() {\nconsole.log('Frank food updated');\n});"
          }
        </SyntaxHighlighter>
      </div>
    </>
  );
};
