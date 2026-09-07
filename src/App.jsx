import { useEffect, useState } from 'react'
import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/NewExpense/NewExpense.jsx'

function App() {
  // The initial value is read from localStorage ONCE, on the first render.
  // If nothing was ever saved, getItem returns null and we start empty.
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses')

    return storedExpenses ? JSON.parse(storedExpenses) : []
  })

  // Runs after every render in which `expenses` changed -- and only then,
  // thanks to the dependency array. Keeps the browser storage in sync.
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

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
