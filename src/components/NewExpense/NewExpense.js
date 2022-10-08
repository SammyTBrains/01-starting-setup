import ExpenseInput from "./ExpenseInput";

import "./NewExpense.css";

const NewExpense = (props) => {
  const submitExpenseFormHandler = (expenseData) => {
    const expenseObj = {
      ...expenseData,
      id: Math.random().toString(),
    };

    props.onAddExpenseData(expenseObj);
  };

  return (
    <div className="new-expense">
      <ExpenseInput submitExpenseFormHandler={submitExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
