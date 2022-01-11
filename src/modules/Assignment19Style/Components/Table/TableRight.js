import React, { useState } from "react";
import { TableRightOperator } from "./TableRightOperator";
import { TableRightLineBalance } from "./TableRightLineBalance";

export const TableRight = () => {
  const [lineBalance, setLineBalance] = useState(true);

  const HandleState = () => {
    setLineBalance(!lineBalance);
  };

  return (
    <>
      {lineBalance === false ? (
        <TableRightOperator HandleState={HandleState} />
      ) : (
        <TableRightLineBalance HandleState={HandleState} />
      )}
    </>
  );
};
