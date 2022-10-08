import { useState } from "react";
import ExpensesList from "./ExpensesList";
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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onSelectYear={onSelectYearHandler}
      />
      <ExpensesList filteredData={filteredData} />
    </Card>
  );
};

export default Expenses;
