import ExpenseForm from "./ExpenseForm";

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
      <ExpenseForm onSubmitExpenseForm={submitExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
