import { useContext } from "react";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./Constants/constants";
import { ExpenseTrackerContent } from "./Context/context";

const useTransactions = (title) => {
  resetCategories();
  const { transactions, income, expense } = useContext(ExpenseTrackerContent);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  const rightArray = title === "income" ? income : expense;

  const graphData = {
    datasets: [
      {
        data: rightArray.map((val) => val),
        backgroundColor: title === "income" ? "#123123" : "#b50d12",
        label: title,
      },
    ],
    labels: rightArray.map((c, i) => i + 1),
  };

  const currDate = new Date().getDate();
  const weekArray = rightArray.slice(currDate - 6, currDate + 1);

  const graphDataWeek = {
    datasets: [
      {
        data: weekArray.map((val) => val),
        backgroundColor: title === "income" ? "#123123" : "#b50d12",
        label: title,
      },
    ],
    labels: weekArray.map((c, i) => currDate - 6 + i),
  };
  return { filteredCategories, total, chartData, graphData, graphDataWeek };
};

export default useTransactions;
