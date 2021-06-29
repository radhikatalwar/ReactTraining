import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { usersContext } from "../index";
import User from "./User";
import Navbar from "./Navbar";
import { theme } from "../screens/APIData/theme";

const styles = makeStyles({
  smallContainer: {
    margin: "0 auto ",
    padding: "100px 0",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainScreen = () => {
  const classes = styles();
  const { state, mode } = useContext(usersContext);
  const userData = state.post.data;

  return (
    <>
      <Navbar />
      {state.loading ? (
        <h2>{"Loading"}</h2>
      ) : state.error ? (
        <h2>{state.error}</h2>
      ) : (
        <div className={classes.smallContainer} style={theme[mode]}>
          {userData &&
            userData.length > 0 &&
            userData.map((user) => {
              return (
                <User
                  key={user.id}
                  id={user.id}
                  image={user.avatar}
                  first_name={user.first_name}
                  last_name={user.last_name}
                  email={user.email}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default MainScreen;
