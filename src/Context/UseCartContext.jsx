import { useState } from "react"

import {  createContext } from "react"

export const CartContext = createContext()

export default (props) => { 
    const [amount, setAmount] = useState(0)
    const [Cart, setCart]=useState(false)
    const product = [
        {
            id:1,
            title:"Fall Limited Edition Sneakers",
            p:"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            price:250,
            discount:0.5,
            amount,        
        }
    ]

    const addCart = () => {
        console.log(Cart)
        setCart(true)
    }
    const RemoveCart = () => {
        console.log(Cart)
        setCart(false)
    }
    const add = () => {
        setAmount(amount+1)
    }

    const subtract = () => {
        if (amount >= 1 ) {
            setAmount(amount-1) 
        }
    }
    


    return(
        
        <CartContext.Provider value={{RemoveCart,Cart,addCart,product,add,subtract,amount}} >
            {props.children}
        </CartContext.Provider>
    )
}

