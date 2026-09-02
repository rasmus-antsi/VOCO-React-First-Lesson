import ExpenseItem from './components/ExpenseItem.jsx'

function App() {
  return (
    <div>
		<ExpenseItem date={new Date(2023, 0, 10)} title="New book" amount={30.99} />
  		<ExpenseItem date={new Date(2023, 0, 10)} title="New jeans" amount={99.99} />
     </div>
  )
}

export default App
