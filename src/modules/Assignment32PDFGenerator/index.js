import React, { Fragment } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./components/reports/Invoice";
import invoice from "./data/invoice";

export const Assignment32PDFGenerator = () => {
  return (
    <Fragment>
      <PDFViewer width="100%" height="100%" className="Assignment34">
        <Invoice invoice={invoice} />
      </PDFViewer>
    </Fragment>
  );
};
