import React, { useState, useEffect } from "react";
import {
  makeStyles,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const styles = makeStyles({
  container: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: "93%",
    margin: "100px auto 20px",
    border: "0.5px solid lightgray",
    backgroundColor: "white",
    height: "fit-content",
  },
  lastcell: {
    width: "149px",
  },
  button: {
    backgroundColor: "#00BCD4",
    margin: "0 5px",
    color: "black",
    "&:hover": {
      backgroundColor: "#048b9c",
    },
  },
});

const DisplayTable = (props) => {
  const classes = styles();
  var { SearchVal, newdata } = props;
  const [filteredData, setFilteredData] = useState(newdata);

  useEffect(() => {
    setFilteredData(
      newdata.filter(
        (elem) =>
          elem.Name.toLowerCase().indexOf(SearchVal.toLowerCase()) === 0 ||
          elem.PhoneNo.indexOf(SearchVal) === 0
      )
    );
  }, [SearchVal, newdata]);

  return (
    <TableContainer className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{"ID"}</TableCell>
            <TableCell>{"Name"}</TableCell>
            <TableCell>{"Age"}</TableCell>
            <TableCell>{"Phone No"}</TableCell>
            <TableCell>{"Address"}</TableCell>
            <TableCell>{"Action"}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.length > 0 ? (
            filteredData.map((element, index) => {
              return (
                <TableRow hover key={index + 1}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{element.Name}</TableCell>
                  <TableCell>{element.Age}</TableCell>
                  <TableCell>{element.PhoneNo}</TableCell>
                  <TableCell>{element.Address}</TableCell>
                  <TableCell className={classes.lastcell}>
                    <Button className={classes.button}>
                      <DeleteIcon
                        onClick={() => props.userDelete(element.ID)}
                      />
                    </Button>
                    <Button className={classes.button}>
                      <EditIcon onClick={() => props.editUser(element)} />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                {"No Records Found"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayTable;
