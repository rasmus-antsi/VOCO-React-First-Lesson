import Expenses from './components/Expenses/Expenses.jsx'
import NewExpense from './components/NewExpense/NewExpense.jsx'

function App() {
  const expenses = [
    { id: 'e1', title: 'New book', amount: 30.99, date: new Date(2023, 0, 10) },
    { id: 'e2', title: 'New jeans', amount: 99.99, date: new Date(2023, 0, 10) },
  ]

  // The final destination of the data travelling up from the form.
  // Not added to the expenses array yet -- that is the next lesson.
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
