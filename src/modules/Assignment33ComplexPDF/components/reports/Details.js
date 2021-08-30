import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import DetailsLeft from "./DetailsLeft";
import DetailsRight from "./DetailsRight";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Details = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <DetailsLeft invoice={invoice} />
    <DetailsRight invoice={invoice} />
  </View>
);

export default Details;
