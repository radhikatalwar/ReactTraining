import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { ContentEditableDiv } from "./ContentEditableDiv";

const styles = makeStyles({
  table: {
    margin: "30px 0",
  },
  headerCell: {
    fontWeight: "900",
    textAlign: "left",
    borderBottom: "1px solid lightgray",
  },
  button: {
    textTransform: "none",
    color: "#146eb4",
    fontWeight: "700",
    marginBottom: "10px",
  },
  icon: {
    color: "red",
    fontSize: "21px",
  },
  justify: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bold: {
    fontWeight: "900",
    margin: "10px 0",
  },
});

const columns = [
  { id: "1", label: "#", minWidth: "10%" },
  { id: "2", label: "Item Description", minWidth: "30%" },
  { id: "3", label: "Quantity", minWidth: "15%" },
  { id: "4", label: "Unit price ($)", minWidth: "15%" },
  { id: "5", label: "Discount(%)", minWidth: "15%" },
  { id: "6", label: "Line total  ", minWidth: "15%" },
];

const initialDetails = {
  id: 1,
  itemdescription: "item",
  quantity: "1",
  "unitprice($)": "100",
  "discount(%)": "10",
};

export const TableComp = () => {
  const classes = styles();
  const [products, setProducts] = useState([{ ...initialDetails }]);
  const [count, setCount] = useState(2);
  localStorage.setItem("tax", "Sales Tax(20%)");
  localStorage.setItem("subtotal", "Subtotal");
  localStorage.setItem("total", "Total");

  const HandleChange = (id, key, event) => {
    setProducts(
      products.map((productInner) =>
        productInner.id !== id
          ? productInner
          : {
              ...productInner,
              [key]: event.target.value,
            }
      )
    );
  };

  const HandleAdd = () => {
    setCount(count + 1);
    setProducts([...products, { ...initialDetails, id: count }]);
  };

  const HandleRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  var totalCost = 0;
  {
    products.map((product) => {
      totalCost +=
        ((100 - product["discount(%)"]) *
          product["unitprice($)"] *
          product["quantity"]) /
        100;
    });
  }

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.header}>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{ minWidth: column.minWidth }}
                className={classes.headerCell}
              >
                {localStorage.setItem(
                  column.label.toLowerCase().replaceAll(" ", ""),
                  column.label
                )}
                <ContentEditable
                  html={localStorage.getItem(
                    column.label.toLowerCase().replaceAll(" ", "")
                  )}
                  disabled={false}
                  onChange={(event) =>
                    localStorage.setItem(
                      column.label.toLowerCase().replaceAll(" ", ""),
                      event.target.value
                    )
                  }
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product, index) => {
            return (
              <TableRow>
                <TableCell
                  key={columns[0].id}
                  style={{ minWidth: columns[0].minWidth }}
                >
                  {index + 1}
                </TableCell>
                {Object.keys(initialDetails).map((key) => {
                  if (key !== "id") {
                    return (
                      <TableCell
                        key={key}
                        style={{ minWidth: columns[1].minWidth }}
                      >
                        <ContentEditable
                          html={product[key]}
                          disabled={false}
                          name={key}
                          onChange={(event) =>
                            HandleChange(product.id, key, event)
                          }
                        />
                      </TableCell>
                    );
                  } else {
                    return;
                  }
                })}
                <TableCell>
                  {((100 - product["discount(%)"]) *
                    product["unitprice($)"] *
                    product["quantity"]) /
                    100}
                </TableCell>
                <TableCell>
                  <ClearIcon
                    className={classes.icon}
                    onClick={() => HandleRemove(product.id)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        startIcon={<AddIcon />}
        onClick={HandleAdd}
        className={classes.button}
      >
        {"Add Line Item"}
      </Button>
      <div className={classes.justify}>
        <ContentEditableDiv
          width={"30%"}
          name={"subtotal"}
          style={{ fontWeight: "900" }}
        />
        <Typography className={classes.bold}>{totalCost}</Typography>
      </div>
      <div className={classes.justify}>
        <ContentEditableDiv
          width={"30%"}
          name={"tax"}
          style={{ fontWeight: "900" }}
        />
        <Typography className={classes.bold}>
          {(parseInt(localStorage.getItem("tax").match(/\d+/)) * totalCost) /
            100}
        </Typography>
      </div>
      <div className={classes.justify}>
        <ContentEditableDiv
          width={"30%"}
          name={"total"}
          style={{ fontWeight: "900" }}
        />
        <Typography className={classes.bold}>
          {((parseInt(localStorage.getItem("tax").match(/\d+/)) + 100) *
            totalCost) /
            100}
        </Typography>
        {console.log((parseInt(localStorage.getItem("tax").match(/\d+/))))}
      </div>
    </>
  );
};
