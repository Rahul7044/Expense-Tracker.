import React, {useState} from 'react';


import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';


const ExpenseItem = (props) =>{

    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () =>{
        setAmount(100);
        
    }
    
    return(
        <Card className ="expense-item">
            <ExpenseDate date = {props.date} />
            
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${ amount}</div>
            </div>
            <button onClick = {clickHandler}>Change Amount</button>
        </Card>
    );
}
export default ExpenseItem;