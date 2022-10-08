import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const onSelectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredData = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expenseContent = <p>No expenses found.</p>;

  if (filteredData.length > 0) {
    expenseContent = filteredData.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectYear={onSelectYearHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
