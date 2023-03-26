import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Food',
    amount: 10,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Petrol',
    amount: 100,
    date: new Date(2021, 5, 13)
  },
  {
    id: 'e3',
    title: 'Movies',
    amount: 200,
    date: new Date(2021, 5, 14)
  }

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  
  const addExpenseHandler = (expense) => { 
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  }
  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses item = {expenses} />
      

    </div>
  )
}

export default App;