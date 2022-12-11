
import CartContext from "./Context/UseCartContext"
import NavBar from "./Components/NavBar/NavBar"
import Products from "./Components/products/Products"
const App =() =>{
    return(
        <CartContext>
            <NavBar/>
            <Products/>
        </CartContext>
    )
}

export default App