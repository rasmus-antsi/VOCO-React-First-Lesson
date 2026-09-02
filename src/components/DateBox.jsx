import './DateBox.css'

// This component shows the little date card on the left.
// It now takes ONE prop: date -- a real JavaScript Date object.
// It derives the three pieces it displays from that object itself.
function DateBox(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear()

  return (
    <div className="date-box">
      <span className="date-box__month">{month}</span>
      <span className="date-box__day">{day}</span>
      <span className="date-box__year">{year}</span>
    </div>
  )
}

export default DateBox
