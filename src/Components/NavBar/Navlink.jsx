const NavLink =({text}) =>{
   
    
    return(
        <>
            <a className="relative pb-8 :" href="#">
                <span className="peer hover:text-orange-primary">
                    {text}
                </span>
                {/* peer-hover es para agrupar un hover entre dos elementos */}
                <span className=" h-[2px] block w-full absolute bottom-0 left-0 transition duration-300 scale-x-0 peer-hover:bg-orange-primary peer-hover:scale-x-100 "></span>
            </a>

        </>
    )
}

export default NavLink