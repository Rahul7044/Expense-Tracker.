import React, {useState} from 'react';

import './ExpenseForm.css';


const ExpenseForm = () =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titlechangeHandler = (event) => {
        console.log(event.targert.value);
    };
    const amountchangeHandler = (event) => {
        console.log(event.targert.value);
    };
    const datechangeHandler = (event) => {
        console.log(event.targert.value);
    };

    return(
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type = "text"  onChange={titlechangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type = "number" min="1" step="1" onChange={amountchangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type = "date" onChange={datechangeHandler} />
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;