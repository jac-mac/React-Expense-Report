import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
export default function NewExpense(props) {
    const [showForm, setShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const showFormHandler = () => {
        setShowForm(true)
    }

    const stopShowHandler = () => {
        setShowForm(false)
    }
    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onCancel={stopShowHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}