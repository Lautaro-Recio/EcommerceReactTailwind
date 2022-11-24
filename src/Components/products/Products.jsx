import DetailProducts from "./Details/DetailProducts"

import img1 from "../../assets/images/image-product-1-thumbnail.jpg"
import img2 from "../../assets/images/image-product-2-thumbnail.jpg"
import img3 from "../../assets/images/image-product-3-thumbnail.jpg"
import img4 from "../../assets/images/image-product-4-thumbnail.jpg"
import BigImg1 from "../../assets/images/image-product-1.jpg"
import BigImg2 from "../../assets/images/image-product-2.jpg"
import BigImg3 from "../../assets/images/image-product-3.jpg"
import BigImg4 from "../../assets/images/image-product-4.jpg"
import MainGalery from "./Slider/MainGalery"

/* Array afuera para que no se recague con el componente */
const imgs=[BigImg1,BigImg2,BigImg3,BigImg4]
const imgsSmall=[img1,img2,img3,img4]

const Products =() =>{
    return(
        <div className="grid grid-cols-1 md:mt-10 md:grid-cols-2 gap-8 md:min-h-[calc(100vh-88px-3)] md:container mx-auto">
            <MainGalery imgs={imgs} imgsSmall={imgsSmall}/>
            <DetailProducts/>
        </div>
    )
}

export default Products