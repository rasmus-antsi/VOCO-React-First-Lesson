import './ExpensesFilter.css'

// Dumb display component: it does NOT remember the chosen year itself.
// The year comes down as a prop, and every change is reported back up.
// Props:
//   selectedYear   -- the year Expenses currently has in state
//   onChangeFilter -- a function owned by Expenses, called with the new year
function ExpensesFilter({ selectedYear, onChangeFilter }) {
  const dropdownChangeHandler = (event) => {
    console.log('In ExpensesFilter.js')
    console.log(event.target.value)

    onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
