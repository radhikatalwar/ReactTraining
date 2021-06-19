import { React, useState } from "react";
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
import uuid from "uuid/dist/v4";
import validate from "./Validate";

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
// const InitialValues = ;
const errorInitialValues = {
  Name: "",
  Age: "",
  Address: "",
  PhoneNo: "",
};

const Navbar = () => {
  // UseState Hooks
  const classes = styles();
  const [user, setUser] = useState({
    ID: uuid(),
    Name: "",
    Age: "",
    Address: "",
    PhoneNo: "",
  });
  const [newData, setNewData] = useState(data);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isError, setIsError] = useState(errorInitialValues);
  const [SearchVal, setSearchVal] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(user);
    const noErrors = Object.keys(errors).length === 0;

    if (noErrors) {
      setOpen(false);
      isEdit
        ? setNewData(newData.map((item) => (item.ID === user.ID ? user : item)))
        : setNewData([user, ...newData]);

      setUser({
        ID: uuid(),
        Name: "",
        Age: "",
        Address: "",
        PhoneNo: "",
      });
      setIsEdit(false);
    } else {
      setIsError(errors);
    }
  };

  const userDelete = (ID) => {
    setNewData(newData.filter((ele) => ele.ID !== ID));
  };

  const editUser = (oldUser) => {
    setOpen(true);
    setUser(oldUser);
    setIsEdit(true);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const { Name, Age, Address, PhoneNo } = user;
  const inputHandle = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const SearchValue = (event) => {
    setSearchVal(event.target.value);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.addbar}>
        <Toolbar className={classes.toolbar}>
          <InputBase
            className={classes.search}
            placeholder="Search by Name Or PhoneNo…"
            onChange={SearchValue}
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
                    error={Boolean(isError.Name)}
                    helperText={isError.Name}
                  />
                  <TextField
                    className={classes.input}
                    required
                    name="Age"
                    onChange={inputHandle}
                    label="Add Age"
                    variant="outlined"
                    value={Age}
                    error={Boolean(isError.Age)}
                    helperText={isError.Age}
                  />
                  <TextField
                    className={classes.input}
                    required
                    label="Add Address"
                    variant="outlined"
                    name="Address"
                    onChange={inputHandle}
                    value={Address}
                    error={Boolean(isError.Address)}
                    helperText={isError.Address}
                  />
                  <TextField
                    className={classes.input}
                    required
                    label="Add Phone no"
                    variant="outlined"
                    value={PhoneNo}
                    name="PhoneNo"
                    onChange={inputHandle}
                    error={Boolean(isError.PhoneNo)}
                    helperText={isError.PhoneNo}
                  />
                  <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                  >
                    {"Submit Details"}
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {"Close"}
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
      <DisplayTable
        newdata={newData}
        userDelete={userDelete}
        editUser={editUser}
        SearchVal={SearchVal}
      />
    </>
  );
};

export default Navbar;
