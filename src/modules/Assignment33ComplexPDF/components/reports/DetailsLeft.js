import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerContainer: {
    width: "48%",
    marginRight: "2%",
  },
  lineSetup: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "7px",
  },
  completeInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  completeInfoInner: {
    width: "40%",
  },
  heading: {
    fontSize: "5px",
  },
  value: {
    fontSize: "7px",
    marginBottom: "3px",
  },
});

const DetailsLeft = ({ invoice }) => (
  <View style={styles.headerContainer}>
    {console.log(invoice)}
    <Text style={styles.lineSetup}>{`Line Setup: ${invoice.lineSetup}`}</Text>
    <View style={styles.completeInfo}>
      <View style={styles.completeInfoInner}>
        <Text style={styles.heading}>{"Style Code"}</Text>
        <Text style={styles.value}>{invoice.styleCode}</Text>
        <Text style={styles.heading}>{"Style Description"}</Text>
        <Text style={styles.value}>{invoice.description}</Text>
      </View>
      <View>
        <Text style={styles.heading}>{"Line"}</Text>
        <Text style={styles.value}>{invoice.line}</Text>
        <Text style={styles.heading}>{"Start Date"}</Text>
        <Text style={styles.value}>{invoice.startdate}</Text>
        <Text style={styles.heading}>{"End Date"}</Text>
        <Text style={styles.value}>{invoice.enddate}</Text>
      </View>
      <View>
        <Text style={styles.heading}>{"Manpower"}</Text>
        <Text style={styles.value}>{invoice.manpower}</Text>
        <Text style={styles.heading}>{"Working Mins"}</Text>
        <Text style={styles.value}>{invoice.mins}</Text>
        <Text style={styles.heading}>{"Total SMV"}</Text>
        <Text style={styles.value}>{invoice.smv}</Text>
      </View>
      <View>
        <Text style={styles.heading}>{"Customer"}</Text>
        <Text style={styles.value}>{invoice.customer}</Text>
        <Text style={styles.heading}>{"Quantity"}</Text>
        <Text style={styles.value}>{invoice.quantity}</Text>
      </View>
    </View>
  </View>
);

export default DetailsLeft;
