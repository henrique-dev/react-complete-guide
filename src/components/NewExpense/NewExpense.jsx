import './NewExpense.css';

import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const AddNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelNewExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={AddNewExpenseHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancelNewExpense={cancelNewExpenseHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
