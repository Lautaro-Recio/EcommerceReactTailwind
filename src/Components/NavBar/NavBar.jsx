import logo from "../../assets/images/logo.svg"
import avatar from "../../assets/images/image-avatar.png"
import Menu from "../Icons/Menu"
import Cart from "../Icons/Cart"
import Close from "../Icons/CloseX"
import { useState } from "react"

const NavBar =() =>{
    const [ClassOfNav, setClassOfNav] = useState("")
    const openMenu = ()=>{
        setClassOfNav("font-bold w-2/5 absolute bg-white top-0 left-0 h-full p-8 gap-y-5 flex flex-col md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto")
    }
    const closeMenu = ()=>{
        setClassOfNav("hidden w-2/5 h-full md:flex gap-4 md:mr-auto md:flex-row md:static md:gap-4 md:p-0 md:h-auto")
    }
    
    return(
        <>
           <header className="flex container mx-auto gap-8 bg-red-200 py-5 px-4 items-end">
            {/* En tailwind hay clases preestablecidas que definene, en este caso las medias querys para los dispositivos */}

                <button className="md:hidden " onClick={openMenu}>   
                    <Menu/>
                </button>
                {/* mr-auto es margin-right y todo lo que se pueda a la derecha */}

                <img src={logo} alt="logo sneakers" className="mr-auto md:mr-0  " />
                <nav className={ClassOfNav}>
                    <button onClick={closeMenu} className="mb-10 md:mb-0 md:hidden">
                        <Close/>
                    </button>
                    <a href="#">Collections</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
                {/* gap-4 es la separacion de los elementos*/}

                <div className="flex gap-4">
                    <button>
                        <Cart/>
                    </button>
                    <img src={avatar} className="w-10" alt="" />
                </div>
            </header>
        </>
    )
}

export default NavBar