/**React Components */
import React, { createRef, useState } from "react";
import { useHistory } from "react-router";
import ReactToPdf from "react-to-pdf";
import ContentEditable from "react-contenteditable";
/**Material Components */
import { Button, Fab, Table, TableBody, TableCell } from "@material-ui/core";
import { TableHead, TableRow, Typography, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
/**Other Components */
import { Signup } from "../Signup";
import {
  initialValues,
  initialItemDetails,
  columns,
  inputInitialValues,
} from "./InitialValues";
import { styles } from "./InvoiceStyles";
/**Firebase Components */
import { db } from "../firebase";
import { TakeInput } from "./TakeInput";
import uuid from "uuid/dist/v4";

export const Invoice = () => {
  const classes = styles();
  /**Hooks */
  const history = useHistory();
  const ref = createRef();
  /**States */
  const [values, setValues] = useState(initialValues);
  const [inputValues, setInputValues] = useState(inputInitialValues);
  const [inputModal, setInputModal] = useState(false);
  const [products, setProducts] = useState([{ ...initialItemDetails }]);

  /**Functions */
  const HandleItemChange = (id, key, event) => {
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

  const handleChange = (name, event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const HandleInput = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const HandleInputSubmit = (event) => {
    event.preventDefault();
    var getRef = db.collection(inputValues.email).doc(inputValues.invoiceNo);

    getRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setInputModal(false);
          setInputValues(inputInitialValues);
          setProducts(doc.data().products);
          setValues(doc.data());
        } else {
          alert("No such Invoice!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  const HandleItemAdd = () => {
    setProducts([...products, { ...initialItemDetails, id: uuid() }]);
  };

  const HandleItemRemove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("name", values.clientName);
    localStorage.setItem("email", values.email);
    var DocRef = db.collection(values.email).doc(values.invoiceNo);
    DocRef.set({ ...values, products, totalCost });

    history.push("/final");
  };

  const HandleModal = () => {
    setInputModal(!inputModal);
  };

  /**Global Variable */
  var totalCost = 0;
  {
    products.map((product) => {
      totalCost += product["unitprice($)"] * product["quantity"];
    });
  }

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
        <Signup />
        <div>
          <Typography variant="h5" className={classes.title}>
            {"Invoice"}
          </Typography>
          <form method="POST" className={classes.form}>
            <div className={classes.containerToDownload} ref={ref}>
              <div className={classes.flex}>
                <ContentEditable
                  html={values.companyName}
                  onChange={(event) => handleChange("companyName", event)}
                  className={classes.editable}
                />
                <ContentEditable
                  html={values.date}
                  onChange={(event) => handleChange("date", event)}
                  className={`${classes.editable} ${classes.editableRight}`}
                />
              </div>

              <div className={classes.flex}>
                <ContentEditable
                  html={values.place}
                  onChange={(event) => handleChange("place", event)}
                  className={classes.editable}
                />
                <ContentEditable
                  html={values.invoiceNo}
                  onChange={(event) => handleChange("invoiceNo", event)}
                  className={`${classes.editable} ${classes.editableRight}`}
                />
              </div>
              <div className={classes.flex}>
                <ContentEditable
                  html={values.phoneNo}
                  onChange={(event) => handleChange("phoneNo", event)}
                  className={classes.editable}
                />
                <ContentEditable
                  html={values.clientName}
                  onChange={(event) => handleChange("clientName", event)}
                  className={`${classes.editable} ${classes.editableRight}`}
                />
              </div>
              <div className={classes.flex}>
                <ContentEditable
                  html={values.email}
                  onChange={(event) => handleChange("email", event)}
                  className={classes.editable}
                />
                <ContentEditable
                  html={values.clientCompany}
                  onChange={(event) => handleChange("clientCompany", event)}
                  className={`${classes.editable} ${classes.editableRight}`}
                />
              </div>

              <Table className={classes.table}>
                <TableHead>
                  <TableRow className={classes.header}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        style={{ minWidth: column.minWidth }}
                        className={classes.headerCell}
                      >
                        <Typography className={classes.label}>
                          {column.label}
                        </Typography>
                      </TableCell>
                    ))}
                    <TableCell>
                      <AddIcon onClick={HandleItemAdd} />
                    </TableCell>
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
                        {Object.keys(initialItemDetails).map((key) => {
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
                                    HandleItemChange(product.id, key, event)
                                  }
                                />
                              </TableCell>
                            );
                          } else {
                            return;
                          }
                        })}
                        <TableCell>
                          {product["unitprice($)"] * product["quantity"]}
                        </TableCell>
                        <TableCell>
                          <ClearIcon
                            className={classes.icon}
                            onClick={() => HandleItemRemove(product.id)}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <Typography
                className={`${classes.label} ${classes.editableRight}`}
              >{`Total cost - ${totalCost}`}</Typography>
            </div>
            <ReactToPdf
              targetRef={ref}
              filename={`${values.clientCompany.replaceAll(" ", "")}.pdf`}
            >
              {({ toPdf }) => (
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={toPdf}
                >
                  {"Download Invoice"}
                </Button>
              )}
            </ReactToPdf>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleSubmit}
            >
              {"Submit Details"}
            </Button>
          </form>
        </div>
      </Paper>
      <Fab className={classes.fab} onClick={HandleModal}>
        {"Previous Invoice?"}
      </Fab>
      <TakeInput
        HandleModal={HandleModal}
        HandleInput={HandleInput}
        open={inputModal}
        inputValues={inputValues}
        HandleInputSubmit={HandleInputSubmit}
      />
    </>
  );
};
