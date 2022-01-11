import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";

const styles = makeStyles({
  heading: {
    fontSize: "33px",
    letterSpacing: "2px",
    fontWeight: "800",
  },
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

export const CreateFirebase = () => {
  const classes = styles();

  return (
    <>
      <Typography className={classes.heading}>
        {"Create a Cloud Firestore database"}
      </Typography>

      <Typography variant="h5" className={classes.subHeading}>
        {
          "1. If you haven't already, create a Firebase project: In the Firebase console, click Add project, then follow the on-screen instructions to create a Firebase project or to add Firebase services to an existing GCP project."
        }
      </Typography>
      <Typography variant="h5" className={classes.subHeading}>
        {
          "2. Navigate to the Cloud Firestore section of the Firebase console. You'll be prompted to select an existing Firebase project. Follow the database creation workflow."
        }
      </Typography>
      <Typography variant="h5" className={classes.subHeading}>
        {"3. Select a starting mode for your Cloud Firestore Security Rules:"}
      </Typography>
      <Typography variant="h5" className={classes.subHeading}>
        {"4. Select a location for your database."}
      </Typography>
      <Typography variant="h5" className={classes.subHeading}>
        {"5. Click Done."}
      </Typography>

      <Typography className={classes.title}>{"Add Data"}</Typography>
      <div className={classes.codeBox}>
        <SyntaxHighlighter
          className={classes.code}
          language="javascript"
          style={twilight}
        >
          {
            "-> Web Version 9 \n\nimport { collection, addDoc } from 'firebase/firestore';\n\ntry {\nconst docRef = await addDoc(collection(db, 'users'), {\n'first': 'Ada',\nlast: 'Lovelace',\nborn: 1815\n});\nconsole.log('Document written with ID: ', docRef.id);\n} catch (e) {\nconsole.error('Error adding document: ', e);\n}"
          }
        </SyntaxHighlighter>

        <SyntaxHighlighter
          className={classes.code}
          language="javascript"
          style={twilight}
        >
          {
            "-> Web Version 8 \n\ndb.collection('users').add({\nfirst: 'Ada',\nlast: 'Lovelace',\n  born: 1815\n})\n.then((docRef) => {\nconsole.log('Document written with ID: ', docRef.id);\n})\n.catch((error) => {\nconsole.error('Error adding document: ', error);\n});"
          }
        </SyntaxHighlighter>
      </div>
    </>
  );
};
