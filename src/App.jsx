// TODO 10: import ProductCard from './components/ProductCard.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {
  return (
    <div>
		<ProductCard month="January" day="10" year="2023" title="New book" amount={30.99} />
  		<ProductCard month="January" day="10" year="2023" title="New jeans" amount={99.99} />
     </div>
  )
}

export default App
