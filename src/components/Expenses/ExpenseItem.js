import React from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) =>{

    const deleteButton = () =>{
        alert("hello");
    }
    
    return(
        <Card className ="expense-item">
            <ExpenseDate date = {props.date} />
            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs{ props.amount}</div>
            </div>
            <button onClick = {deleteButton}>Delete Expense</button>
        </Card>
    );
}
export default ExpenseItem;