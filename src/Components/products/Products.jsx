import DetailProducts from "./DetailProducts"
import Galery from "./Galery"

const Products =() =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Galery/>
            <DetailProducts/>
        </div>
    )
}

export default Products