export const contextReducer = (state, action) => {
  var date;
  var month;

  switch (action.type) {
    //--> Delete Transaction
    case "DELETE_TRANSACTION":
      const findTransaction = state.transactions.find(
        (t) => t.id === action.payload
      );

      date = findTransaction.date.slice(-2);
      month = findTransaction.date.slice(-5, -3);

      if (findTransaction.type === "income") {
        state.income = state.income.map((val, index) => {
          return index === Number(month - 1)
            ? state.income[month - 1].map((value, ind) => {
                return ind === Number(date)
                  ? value - findTransaction.amount
                  : value;
              })
            : val;
        });
      } else {
        state.expense = state.expense.map((val, index) => {
          return index === Number(month - 1)
            ? state.expense[month - 1].map((value, ind) => {
                return ind === Number(date)
                  ? value - findTransaction.amount
                  : value;
              })
            : val;
        });
      }
      console.log(date, state.income, state.expense);
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

    //--> Add Transaction
    case "ADD_TRANSACTION":
      date = action.payload.date.slice(-2);
      month = action.payload.date.slice(-5, -3);
      console.log(state);

      if (action.payload.type === "income") {
        state.income = state.income.map((val, index) => {
          return index === Number(month - 1)
            ? state.income[month - 1].map((value, ind) => {
                return ind === Number(date)
                  ? value + action.payload.amount
                  : value;
              })
            : val;
        });
      } else {
        state.expense = state.expense.map((val, index) => {
          return index === Number(month - 1)
            ? state.expense[month - 1].map((value, ind) => {
                return ind === Number(date)
                  ? value + action.payload.amount
                  : value;
              })
            : val;
        });
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
