import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { addInput } from "../reduxComponents/action";
import { TextFieldComp } from "./TextFieldComp";
import fileDownload from "js-file-download";

const styles = makeStyles({
  postContainer: { width: "90%", margin: "0 auto" },
  icon: { color: "#018ba5" },
  iconBox: {
    color: "#018ba5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  input: { minWidth: "50%", margin: "5px 10px" },
  inputCards: { display: "flex", flexWrap: "wrap" },
  button: {
    textTransform: "none",
    fontWeight: "900",
    backgroundColor: "#018ba5",
    color: "white",
    margin: "10px",
    "&:hover": {
      backgroundColor: "#38555a",
    },
  },
  details: { margin: "10px 0" },
  postContainerLeft: { width: "50%", marginRight: "30px", minHeight: "500px" },
  postContainerRight: { width: "50%", minHeight: "500px" },
  top: {
    background: `url("https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500") no-repeat center `,
  },
});

export const MainContainer = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { inputs, lang } = useSelector((state) => state.infoReducer);
  var content = "";

  const handleClick = () => {
    var keyArray = inputs[0];

    if (inputs.length <= 1) {
      alert("Please Enter Values.");
    } else {
      inputs.map((object, boxValue) => {
        if (
          boxValue !== 0 &&
          inputs[boxValue].length > 0 &&
          lang[boxValue] !== ""
        ) {
          var valueArray = inputs[boxValue];
          valueArray.map((value, index) => {
            {
              if (index <= keyArray.length - 1) {
                content = content + `"${keyArray[index]}" : "${value}",` + "\n";
              } else if (index > keyArray.length - 1) {
                content =
                  content +
                  `"${value.replaceAll(" ", "_")}" : "${value}",` +
                  "\n";
              }
            }
          });

          content = `const data = { \n` + content + `};`;
          fileDownload(`${content}`, `${lang[boxValue]}.json`);
          content = "";
        } else if (boxValue === 0 && keyArray.length === 0) {
          alert(`Please Enter Keys`);
        } else if (boxValue !== 0 && inputs[boxValue].length === 0) {
          alert(`Please Enter details in Box No.${boxValue}`);
        } else if (lang[boxValue] === "") {
          alert(`Please Enter All Languages`);
        }
      });
    }
  };

  return (
    <>
      <div className={classes.postContainer}>
        <div className={classes.iconBox}>
          <Typography variant="h5">
            {"Click on Add button to add boxes"}
          </Typography>
          <Button
            onClick={() => {
              dispatch(addInput([]));
            }}
          >
            <AddCircleIcon fontSize={"large"} className={classes.icon} />
          </Button>
        </div>
        <div className={classes.inputCards}>
          {inputs.map((value, index) => {
            return <TextFieldComp id={index} key={index + 1} />;
          })}
        </div>
        <div className={classes.details}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            {"Download"}
          </Button>
        </div>
      </div>
    </>
  );
};
