import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseInput = (props) => {
  const [addExpenseClicked, setAddExpenseClicked] = useState(false);

  const addExpenseClickedHandler = () => {
    setAddExpenseClicked(true);
  };

  const onSubmitExpenseHandler = (expenseData) => {
    props.submitExpenseFormHandler(expenseData);
  };

  const turnOffForm = () => {
    setAddExpenseClicked(false);
  };

  if (addExpenseClicked) {
    return (
      <ExpenseForm
        turnOffForm={turnOffForm}
        onSubmitExpenseForm={onSubmitExpenseHandler}
      />
    );
  }

  return (
    <div>
      <button onClick={addExpenseClickedHandler}>ADD EXPENSE</button>
    </div>
  );
};

export default ExpenseInput;
