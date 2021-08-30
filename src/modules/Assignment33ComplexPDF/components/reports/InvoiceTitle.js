import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  reportTitle: {
    color: "maroon",
    fontSize: 25,
    textAlign: "center",
  },
});

const InvoiceTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{"Suntex"}</Text>
  </View>
);

export default InvoiceTitle;
