import './DateBox.css'

// This component shows the little date card on the left.
// It takes ONE prop: date -- either a Date object or the string that
// comes back out of localStorage. new Date(...) accepts both.
function DateBox({ date }) {
  const expenseDate = new Date(date)

  const month = expenseDate.toLocaleString('en-US', { month: 'long' })
  const day = expenseDate.toLocaleString('en-US', { day: '2-digit' })
  const year = expenseDate.getFullYear()

  return (
    <div className="date-box">
      <span className="date-box__month">{month}</span>
      <span className="date-box__day">{day}</span>
      <span className="date-box__year">{year}</span>
    </div>
  )
}

export default DateBox
