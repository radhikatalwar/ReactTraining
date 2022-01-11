import { makeStyles, Paper, Fab } from "@material-ui/core";
import React from "react";
import CloudDownload from "@material-ui/icons/CloudDownload";
import { Name } from "./InnerParts/Name";
import { useDispatch, useSelector } from "react-redux";
import { ContactDetails } from "./InnerParts/ContactDetails";
import { Skills } from "./InnerParts/Skills";
import { Language } from "./InnerParts/Language";
import { Hobbies } from "./InnerParts/Hobbies";
import { ProfessionalGoal } from "./InnerParts/ProfessionalGoal";
import { Cocurriculam } from "./InnerParts/Cocurriculam";
import { WorkExperience } from "./InnerParts/WorkExperience";
import { AcademicHistory } from "./InnerParts/AcademicHistory";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { handleDownload } from "../../reduxComponents/action";

const styles = makeStyles({
  InvoiceContainer: {
    display: "grid",
    gridTemplateColumns: "30%  70%",
  },
  fabButton: {
    position: "fixed",
    bottom: "7%",
    right: "3%",
    fontSize: "18px",
    backgroundColor: "#6563ff",
    color: "white",
    "&:hover": {
      backgroundColor: "#6563ff",
    },
  },
  paper: {
    margin: "2%",
  },
  printContainer: {
    padding: "40px",
  },
  innerContainer: {
    padding: "15px 20px",
  },
});

export const ResumeContainer = () => {
  const classes = styles();
  const dispatch = useDispatch();
  const { parts } = useSelector((state) => {
    return state.dataReducer;
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleClick = () => {
    dispatch(handleDownload(true));
    setTimeout(() => {
      handlePrint();
    }, 1000);
    setTimeout(() => {
      dispatch(handleDownload(false));
    }, 1000);
  };

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <div className={classes.printContainer} ref={componentRef}>
          <div className={classes.InvoiceContainer}>
            <div className={classes.innerContainer}>
              {parts.name && <Name />}
              {parts.contactdetails && <ContactDetails />}
              {parts.skills && <Skills />}
              {parts.language && <Language />}
              {parts.hobbies && <Hobbies />}
            </div>
            <div className={classes.innerContainer}>
              {parts.goal && <ProfessionalGoal />}
              {parts.experience && <WorkExperience />}
              {parts.history && <AcademicHistory />}
              {parts.cocurriculam && <Cocurriculam />}
            </div>
          </div>
        </div>
      </Paper>

      <Fab className={classes.fabButton} onClick={handleClick}>
        {<CloudDownload />}
      </Fab>
    </>
  );
};
