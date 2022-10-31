import { useState } from "react"
import img1 from "../../assets/images/image-product-1-thumbnail.jpg"
import img2 from "../../assets/images/image-product-2-thumbnail.jpg"
import img3 from "../../assets/images/image-product-3-thumbnail.jpg"
import img4 from "../../assets/images/image-product-4-thumbnail.jpg"
import BigImg1 from "../../assets/images/image-product-1.jpg"
import BigImg2 from "../../assets/images/image-product-2.jpg"
import BigImg3 from "../../assets/images/image-product-3.jpg"
import BigImg4 from "../../assets/images/image-product-4.jpg"

import ButtonNext from "../Icons/ButtonNext"
import ButtonPrev from "../Icons/ButtonPrev"
/* Array afuera para que no se recague con el componente */
const imgs=[BigImg1,BigImg2,BigImg3,BigImg4]

const Galery =() =>{
    const [image,setImage] =useState(0)
    const next= () => { 
        image === imgs.length - 1 ? setImage(0):setImage(image+1) 
    }
    const prev= () => { 
        image === 0 ? setImage(imgs.length -1):setImage(image-1) 
    }
    return(
        <div className="grid md:grid-cols-4 md:gap-4">
            <div className="col-span-4 relative">
                {/* aspect[16-9]" proporciona la img a la pantalla, para que no se aplaste */}
                <img src={imgs[image]} alt="" className="aspect[16-9]"/>

                {/* Los elementos con posicion absolute se adaptan al contenedor con position diferente a static(todos los componentes por defecto son static) por eso en el div que encierra los botones la position es relative*/}

                <div className="absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-3">
                    <button onClick={prev} className="bg-light-grayish-blue w-10 h-10 rounded-full justify-center flex items-center"><ButtonPrev/></button>
                    <button onClick={next} className="bg-light-grayish-blue w-10 h-10 rounded-full justify-center flex items-center"><ButtonNext/></button>
                </div>
            </div>
            <img src={img1} alt="" className="hidden md:block"/>
            <img src={img2} alt="" className="hidden md:block"/>
            <img src={img3} alt="" className="hidden md:block"/>
            <img src={img4} alt="" className="hidden md:block"/>
        </div>
    )
}

export default Galery