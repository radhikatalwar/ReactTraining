import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  upperContainer: {
    display: "flex",
    width: "85%",
  },
  titleContainer: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "flex-end",
  },
  heading: {
    fontSize: 10,
    marginRight: "7px",
  },
  blankSpace: {
    width: "20px",
  },
});

const InvoiceThankYouMsg = () => (
  <View style={styles.upperContainer}>
    <View style={styles.titleContainer}>
      <Text style={styles.heading}>{"Approver Name"}</Text>
      <Text style={styles.blankSpace}>{"________________"}</Text>
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.heading}>{"Approver Date"}</Text>
      <Text style={styles.blankSpace}>{"________________"}</Text>
    </View>
  </View>
);

export default InvoiceThankYouMsg;
