import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"


import ButtonNext from "../../Icons/ButtonNext"
import ButtonPrev from "../../Icons/ButtonPrev"

const Galery =({imgs=[], imgsSmall=[],isOpenModal=false, openModal=null,closeModal=null, ...props}) =>{
    const [image,setImage] =useState(0)
    const btnSlider = useRef(null)
    useEffect(()=>{
        isOpenModal && btnSlider.current.classList.remove("md:hidden")
    },[isOpenModal])
    const next= () => { 
        image === imgs.length - 1 ? setImage(0):setImage(image+1) 
    }
    const prev= () => { 
        image === 0 ? setImage(imgs.length -1):setImage(image-1) 
    }
    return(
        <div {...props} >
            { isOpenModal &&
                (
                    <button onClick={closeModal} className="md:grid-span-4 text-right " >X</button>
                )
            }
            <div className="col-span-4 relative">
                {/* aspect[16-9]" proporciona la img a la pantalla, para que no se aplaste */}
                <img onClick={openModal} src={imgs[image]} alt="" className="aspect[16/13] w-full md:[16/19] md:rounded-md"/>

                {/* Los elementos con posicion absolute se adaptan al contenedor con position diferente a static(todos los componentes por defecto son static) por eso en el div que encierra los botones la position es relative*/}

                <div ref={btnSlider} className="md:hidden absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-3">
                    <button onClick={prev} className="bg-light-grayish-blue w-10 h-10 rounded-full justify-center flex items-center"><ButtonPrev/></button>
                    <button onClick={next} className="bg-light-grayish-blue w-10 h-10 rounded-full justify-center flex items-center"><ButtonNext/></button>
                </div>
            </div>
            {imgsSmall.map((small,i)=>{
                return(
                    <div onClick={()=>{setImage(i)}} key={i} className="relative md:rounded-md overflow-hidden">
                        <img  src={small} alt="" className="hidden md:block "/>
                        <span className={`absolute h-full w-full  top-0 hover:border-orange-primary hover:bg-[rgba(255,255,255,0.5)] 
                        ${ i === image && "hover:bg-[rgba(255,255,255,0.5)]"}`} ></span>
                        
                    </div>
                )
                    
            })

            }
            
        </div>
    )
}

export default Galery