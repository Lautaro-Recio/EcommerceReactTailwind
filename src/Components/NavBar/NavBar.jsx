import logo from "../../assets/images/logo.svg"
import avatar from "../../assets/images/image-avatar.png"
import Menu from "../Icons/Menu"
import Cart from "../Icons/Cart"
import Close from "../Icons/CloseX"
import { useState } from "react"
import NavLink from "./Navlink"

import CartDetail from "./CartDetail"
const NavBar =() =>{
    const [ClassOfNav, setClassOfNav] = useState("font-bold hidden w-2/5 h-full md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto md:bg-white")

    const [ClassOfCart, setClassOfCart] = useState("hidden")

    const [CartOpen, setCartOpen] = useState(true)

    const openMenu = ()=>{
        setClassOfNav(" w-4/5 absolute bg-white top-0 left-0 h-full p-8 gap-y-5 flex flex-col md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto z-10 ")
    }
    const closeMenu = ()=>{
        setClassOfNav("hidden w-2/5 h-full md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto")
    }

    const openCart = ()=>{
        if (CartOpen===false){
            setCartOpen(true)
            setClassOfCart("hidden")
        }else{
            setCartOpen(false)
            setClassOfCart("absolute top-[125%] w-[90%] z-10 left-0 m-18 bg-white rounded-md mx-[5%] md:w-full md:max-w-md md:left-[95%] md:top-full md:-translate-x-full md:-translate-y-12 shadow")
        }
    }
    
    return(
        <>
           <header className="relative items-center flex container mx-auto gap-8  py-5 px-4 content-center ">
            {/* En tailwind hay clases preestablecidas que definene, en este caso las medias querys para los dispositivos */}

                <button className="md:hidden " onClick={openMenu}>   
                    <Menu/>
                </button>
                {/* mr-auto es margin-right y todo lo que se pueda a la derecha */}

                <img src={logo} alt="logo sneakers" className="md:pb-8 pb-0 mr-auto md:mr-0  " />
                <nav className={ClassOfNav}>
                    <button onClick={closeMenu} className="mb-10 md:mb-0 md:hidden">
                        <Close/>
                    </button>
                    <NavLink text={"Collections"}/>
                    <NavLink text={"Men"}/>
                    <NavLink text={"Women"}/>
                    <NavLink text={"About"}/>
                    <NavLink text={"Contact"}/>
                </nav>
                {/* gap-4 es la separacion de los elementos*/}

                <div className="flex gap-4 md:pb-8 pb-0 "  >
                    <button onClick={openCart }>
                        <Cart/>
                    </button>
                    <img src={avatar} className="w-10" alt="" />
                    <CartDetail ClassOfCart={ClassOfCart} />
                </div>
            </header>
            <hr className="hidden md:block"/>
        </>
    )
}

export default NavBar