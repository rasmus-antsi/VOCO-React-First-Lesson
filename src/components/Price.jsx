import './Price.css'

// The purple price pill on the right.
// It takes 1 prop: amount (a number, e.g. 30.99)
function Price(props) {
  return (
    <div className="price">
      <span className="price__amount">{props.amount.toFixed(2)}</span>
      <span className="price__currency"> eur</span>
    </div>
  )
}

export default Price
