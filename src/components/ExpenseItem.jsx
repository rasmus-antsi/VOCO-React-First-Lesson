import './ProductCard.css'
import DateBox from './DateBox.jsx'
import Price from './Price.jsx'

// The dark row that holds everything together.
// Props: month, day, year, title, amount
function ProductCard(props) {
  return (
    <div className="product-card">
      <DateBox month={props.month} day={props.day} year={props.year} />

      <h2 className="product-card__title">{props.title}</h2>

      <Price amount={props.amount} />
    </div>
  )
}

export default ProductCard
