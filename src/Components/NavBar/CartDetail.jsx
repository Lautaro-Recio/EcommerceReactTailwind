import img from "../../assets/images/image-product-2-thumbnail.jpg"
import Delete from "../Icons/Delete"
import { CartContext } from "../../Context/UseCartContext"
import { useContext } from "react"



const CartDetail = ({ClassOfCart}) => { 
    const {product,Cart,RemoveCart} = useContext(CartContext)

    return(
      <>
      {product.map((prod)=>(
          <div key={prod.id} className={ClassOfCart}>
      
            <h4 className="px-6 py-8 text-lg font-bold ">Cart</h4>
            <hr />
            <div className="grid grid-cols-[1fr_4fr_1fr] ali px-6 py-4 justify-items-center items-center " >
            {Cart === false ?
            <>
                <span></span>
                <p className="w-full text-center p-8 text-[#c3cad9] ">Your Cart Is  empty</p>
                <span></span>

            </> 
                :
            <>

                <img className=" rounded-md " src={img} alt="" />
                <div className="color-gray">
                    <h6 className="text-[#c3cad9]">{prod.title}</h6>
                    <p className="items-left">
                        <span className=" text-[#c3cad9]">${(prod.price * prod.discount ).toFixed(2)} x {prod.amount}</span>
                        <span className="font-bold"> ${(prod.price * prod.amount ).toFixed(2)}</span>
                    </p>
                </div>
                <button onClick={RemoveCart} className="ml-auto mr-2">
                    <Delete className="hover:fill-orange-primary"/>
                </button>
            </>
            }
            </div>
            
            <div className="px-10 py-4">
                <button className="h-16 rounded-md w-full bg-orange-primary color-white text-white hover:bg-orange-600">Checkout</button>
             </div>
           
        </div>
        
        ))}

    </>

    )
 
}

export default CartDetail