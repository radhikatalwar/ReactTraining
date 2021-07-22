export const contextReducer = (state, action) => {
  let transactions;
  var date;
  
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const findTransaction = state.transactions.find(
        (t) => t.id === action.payload
      );
      date = findTransaction.date.slice(-2);
      if (findTransaction.type === "income") {
        state.income = state.income.map((val, index) =>
          index === Number(date) ? val - findTransaction.amount : val
        );
      } else {
        state.expense = state.expense.map((val, index) =>
          index === Number(date) ? val + findTransaction.amount : val
        );
      }

      state = {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
        income: state.income,
        expense: state.expense,
      };

      localStorage.setItem("transactions", JSON.stringify(state.transactions));
      localStorage.setItem("income", JSON.stringify(state.income));
      localStorage.setItem("expense", JSON.stringify(state.expense));
      return state;

    case "ADD_TRANSACTION":
      date = action.payload.date.slice(-2);
      if (action.payload.type === "income") {
        state.income = state.income.map((val, index) =>
          index === Number(date) ? val + action.payload.amount : val
        );
      } else {
        state.expense = state.expense.map((val, index) =>
          index === Number(date) ? val + action.payload.amount : val
        );
      }

      state = {
        ...state,
        transactions: [action.payload, ...state.transactions],
        income: state.income,
        expense: state.expense,
      };

      localStorage.setItem("transactions", JSON.stringify(state.transactions));
      localStorage.setItem("income", JSON.stringify(state.income));
      localStorage.setItem("expense", JSON.stringify(state.expense));
      return state;

    default:
      return state;
  }
};
