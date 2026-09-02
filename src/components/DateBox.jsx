import './DateBox.css'

// This component shows the little date card on the left.
// It takes 3 props: month, day, year
function DateBox(props) {
  return (
    <div className="date-box">
      <span ClassName="date-box__month">{props.month}</span>
      <span className="date-box__day">{props.day}</span>
      <span ClassName="date-box__year">{props.year}</span>
    </div>
  )
}

export default DateBox
