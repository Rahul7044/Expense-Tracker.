import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
      let expensesContent = <p>No Expenses found</p>;
      if(filteredExpenses.length>0){
        expensesContent = 
            filteredExpenses.map((expense) =>(
                    <ExpenseItem
                    key={expense.id}
                       date={expense.date}
                       title={expense.title}
                       amount ={expense.amount} />
                )   
            )
        }
      
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            
             {expensesContent}
            
          </Card>
    );

}

export default Expenses;