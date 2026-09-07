import { useRef, useState } from 'react'
import './ExpenseForm.css'
import Error from '../UI/Error.jsx'

// Props:
//   onSaveExpenseData -- called with the finished expense object
//   onCancel          -- closes the form without saving
function ExpenseForm({ onSaveExpenseData, onCancel }) {
  // useRef instead of useState: we do not care about every keystroke,
  // only about the value at the moment of submitting. No re-render per key.
  const titleInputRef = useRef()
  const amountInputRef = useRef()
  const dateInputRef = useRef()

  // The error DOES need state -- showing and hiding the modal is a re-render.
  const [error, setError] = useState()

  const submitHandler = (event) => {
    // Without this the browser reloads the page on submit and we lose everything.
    event.preventDefault()

    // Reading the values straight off the DOM nodes.
    const enteredTitle = titleInputRef.current.value
    const enteredAmount = amountInputRef.current.value
    const enteredDate = dateInputRef.current.value

    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a title, an amount and a date.',
      })
      return
    }

    if (parseFloat(enteredAmount) <= 0) {
      setError({
        title: 'Invalid amount',
        message: 'Please enter an amount greater than 0.',
      })
      return
    }

    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    }

    // Up to NewExpense.
    onSaveExpenseData(expenseData)

    // No state to reset any more -- clear the DOM nodes directly.
    titleInputRef.current.value = ''
    amountInputRef.current.value = ''
    dateInputRef.current.value = ''
  }

  // Dismisses the modal by throwing the error object away.
  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" ref={titleInputRef} />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountInputRef} />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2026-12-31"
              ref={dateInputRef}
            />
          </div>
        </div>

        <div className="new-expense__actions">
          {/* type="button" -- without it a button inside a form submits it */}
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm
