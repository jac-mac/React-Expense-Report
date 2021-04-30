import './ExpenseForm.css'
import { useState } from 'react'
export default function ExpenseForm(props) {
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')
    const [showForm, setShowForm] = useState(false)

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} onChange={titleHandler} type='text' />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} onChange={amountHandler} type='number' min='0.01' step='0.01' />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} onChange={dateHandler} type='date' min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}