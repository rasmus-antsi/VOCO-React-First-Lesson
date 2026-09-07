import { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm.jsx'

// Sits between ExpenseForm and App. Takes the raw form data coming up
// from the form, gives it a unique id, and passes it further up to App.
// Also owns whether the form is open or closed.
function NewExpense({ onAddExpense }) {
  // false = only the "Add New Expense" button is shown
  // true  = the full form is shown
  const [editForm, setEditForm] = useState(false)

  const startEditingHandler = () => {
    setEditForm(true)
  }

  const stopEditingHandler = () => {
    setEditForm(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    console.log(expenseData)

    // Up to App.
    onAddExpense(expenseData)

    // Submitting also closes the form.
    setEditForm(false)
  }

  return (
    <div className="new-expense">
      {!editForm && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {editForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
