import { useState } from 'react'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/NewExpense/NewExpense.jsx'

// Starting data ("algandmestik"). Lives OUTSIDE the component: it is not
// derived from props or state, so there is no reason to rebuild it on
// every render. Naming it in CAPITALS is the usual signal for a constant.
const DUMMY_EXPENSES = [
  { id: 'e1', title: 'New book', amount: 30.99, date: new Date(2024, 11, 10) },
  { id: 'e2', title: 'New jeans', amount: 99.99, date: new Date(2024, 2, 5) },
  { id: 'e3', title: 'Coffee machine', amount: 129.5, date: new Date(2023, 6, 21) },
  { id: 'e4', title: 'Desk lamp', amount: 45.0, date: new Date(2025, 1, 14) },
]

function App() {
  // App now OWNS the list. The dummy array is only the initial value.
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    // Function form of the setter: React hands us the guaranteed-latest
    // previous state, instead of us reading a possibly stale `expenses`.
    // Newest expense goes first.
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
