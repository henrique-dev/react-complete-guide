import './Expenses.css';

import { useState } from 'react';

import Card from '../Ui/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filteredItems = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

  const expenseFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onExpenseFilterChange={expenseFilterChangeHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
      <ExpensesList items={filteredItems}></ExpensesList>
    </Card>
  )
}

export default Expenses;
