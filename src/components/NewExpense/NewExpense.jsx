import './NewExpense.css'
import ExpenseForm from './ExpenseForm.jsx'

// Sits between ExpenseForm and App. Takes the raw form data coming up
// from the form, gives it a unique id, and passes it further up to App.
function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    console.log(expenseData)

    // Up to App.
    onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
