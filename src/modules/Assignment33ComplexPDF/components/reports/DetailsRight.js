import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainContainer: {
    width: "50%",
  },
  upperContainer: {
    
  },
  upperContainerLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
    marginRight: "5%",
  },
  upperContainerRight: {
    width: "50%",
  },
  heading: {
    fontSize: "8px",
  },
  row: {
    display: "flex",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  eff: {
    width: "25%",
    textAlign: "left",
    borderRightColor: "black",
    borderRightWidth: 1,
    paddingLeft: 8,
  },
  pcs: {
    width: "25%",
    borderRightColor: "black",
    borderRightWidth: 1,
    textAlign: "right",
    paddingRight: 8,
  },
});

const DetailsRight = ({ invoice }) => (
  <View style={styles.mainContainer}>
    <View style={styles.upperContainer}>
      <View style={styles.upperContainerLeft}>
        <Text style={styles.heading}>{"Daily Target"}</Text>
      </View>
      <View style={styles.upperContainerRight}>
        {invoice.dailyTarget.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.eff}>{item.eff}</Text>
            <Text style={styles.pcs}>{item.pcs}</Text>
          </View>
        ))}
      </View>
    </View>
  </View>
);

export default DetailsRight;
