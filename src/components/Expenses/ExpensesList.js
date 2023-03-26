import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';


const ExpensesList = (props) =>{

   
      if(props.item.length===1){
        return <h2 className="expenses-list__fallback">Only single Expense here. Please add more...
        </h2>       
        }
        
        return(
            <ul className=".expenses-list">
            {props.item.map((expense) =>(
                    <ExpenseItem
                    key={expense.id}
                       date={expense.date}
                       title={expense.title}
                       amount ={expense.amount} />
                )   
            )
}
            </ul>
        );

};
 
export default ExpensesList;