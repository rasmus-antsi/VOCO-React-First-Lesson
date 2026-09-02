import './Card.css'

// A generic design component. It does not know or care what it wraps.
// Whatever you place between <Card> and </Card> arrives here as `children`.
// Props: className (extra classes from the parent), children (the wrapped JSX)
function Card({ className, children }) {
  const classes = 'card ' + className

  return <div className={classes}>{children}</div>
}

export default Card
