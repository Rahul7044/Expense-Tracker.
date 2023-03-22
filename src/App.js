import React from 'react';
import Expenses from './components/Expenses/Expenses'

const App = () => {
  let expenses = [
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
  return(
    <div>
      <h2>Let's Get Started</h2>

      <Expenses item = {expenses} />
      

    </div>
  )
}

export default App;