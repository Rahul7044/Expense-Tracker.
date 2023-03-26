import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) =>{
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {
                props.item.map(
                    expense =>(
                        <ExpenseItem
                           date={expense.date}
                           title={expense.title}
                           amount ={expense.amount} />
                    )   
                )
            }
            
          </Card>
    );

}

export default Expenses;