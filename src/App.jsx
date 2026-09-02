import Expenses from './components/Expenses.jsx'

function App() {
  const expenses = [
    { id: 'e1', title: 'New book', amount: 30.99, date: new Date(2023, 0, 10) },
    { id: 'e2', title: 'New jeans', amount: 99.99, date: new Date(2023, 0, 10) },
  ]

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
