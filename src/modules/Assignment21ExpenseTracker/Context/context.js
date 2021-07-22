import React, { useReducer, createContext } from "react";
import { contextReducer } from "./contextReducer";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  income: JSON.parse(localStorage.getItem("income")) || new Array(31).fill(0),
  expense: JSON.parse(localStorage.getItem("expense")) || new Array(31).fill(0),
};

export const ExpenseTrackerContent = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  //Action Creators
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const AddTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = state.transactions.reduce((acc, currVal) => {
    return currVal.type === "expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  return (
    <ExpenseTrackerContent.Provider
      value={{
        deleteTransaction,
        AddTransaction,
        transactions: state.transactions,
        income: state.income,
        expense: state.expense,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContent.Provider>
  );
};
