import { React, useEffect, useState, useForm } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  makeStyles,
  Modal,
  Fade,
  Backdrop,
  TextField,
  Typography,
} from "@material-ui/core";
import DisplayTable from "./DisplayTable";

const styles = makeStyles({
  addbar: {
    backgroundColor: "white",
    fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', "sans-serif"].join(","),
  },
  toolbar: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    border: "2px solid #000",
    backgroundColor: "white",
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    position: "relative",
    marginLeft: 0,
    width: "35%",
    padding: "5px 10px",
    borderRadius: "10px",
    backgroundColor: "#daf5f9",
  },
  input: {
    margin: "10px",
    width: "300px",
  },
  button: {
    margin: "10px",
    fontWeight: "bold",
    fontSize: "15px",
    backgroundColor: "#00BCD4",
    width: "170px",
    color: "white",
    "&:hover": {
      backgroundColor: "#048b9c",
    },
  },
});

const data = [];

const Navbar = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);
  const [search, SetIsSearch] = useState(false);
  const [SearchVal, setSearchVal] = useState("");
  const [user, setUser] = useState({
    ID: Math.floor(Math.random() * 10000),
    Name: "",
    Age: "",
    Address: "",
    PhoneNo: "",
  });

  const [newData, setNewData] = useState(data);
  console.log(...newData);

  const userDelete = (ID) => {
    setNewData(newData.filter((ele) => ele.ID !== ID));
  };

  const editUser = (user) => {
    console.log(user);
    setOpen(true);
    setUser(user);
  };

  const { Name, Age, Address, PhoneNo } = user;
  const handleOpen = () => {
    setOpen(true);
  };

  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // const SearchValue = (event) => {
  //   setSearchVal(event.target.value);
  //   const SearchUser = newData.filter((ele) => ele.Name === SearchVal);
  //   SetIsSearch(true);
  // };

  const handleSubmit = (event) => {
    setOpen(false);
    event.preventDefault();
    console.log(user);
    console.log(...newData);
    var findUser = newData.filter((ele) => ele.ID === user.ID);
    console.log(findUser);
    if (findUser === []) {
      setNewData([user, ...newData]);
    } else {
      // const keys = Object.keys(findUser[0]);
      // console.log(keys);
      // {keys.map = (elem) => {

      // }}
      console.log(findUser);
    }
    setNewData([user, ...newData]);
    setUser({
      ID: Math.floor(Math.random() * 10000),
      Name: "",
      Age: "",
      Address: "",
      PhoneNo: "",
    });
    console.log(...newData);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <InputBase
            className={classes.search}
            placeholder="Search…"
            // onChange={SearchValue}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={handleOpen}
          >
            {"Add User"}
          </Button>
          <Modal
            className={classes.modal}
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <Typography variant="h5">{"Add User Details"}</Typography>
                <form
                  onSubmit={handleSubmit}
                  className={classes.form}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    className={classes.input}
                    required
                    label="Add Name"
                    variant="outlined"
                    value={Name}
                    name="Name"
                    onChange={inputHandle}
                  />
                  <TextField
                    className={classes.input}
                    required
                    name="Age"
                    onChange={inputHandle}
                    label="Add Age"
                    variant="outlined"
                    value={Age}
                  />
                  <TextField
                    className={classes.input}
                    required
                    label="Add Address"
                    variant="outlined"
                    name="Address"
                    onChange={inputHandle}
                    value={Address}
                  />
                  <TextField
                    className={classes.input}
                    required
                    label="Add Phone no"
                    variant="outlined"
                    value={PhoneNo}
                    name="PhoneNo"
                    onChange={inputHandle}
                  />
                  <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                  >
                    {"Submit Details"}
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
      <DisplayTable
        data={newData}
        userDelete={userDelete}
        editUser={editUser}
      />
    </>
  );
};

export default Navbar;
