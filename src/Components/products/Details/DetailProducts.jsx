import Cart from "../../Icons/Cart"


const DetailProducts =() =>{
    return(
                
                <div className="container mx-auto px-4 md:w-full ">
                    <p className="font-bold text-orange-primary mb-4 uppercase tracking-wide">Sneaker Company</p>
                    <h2 className="font-bold text-3xl mb-4">Fall Limited Edition Sneakers</h2>
                    <p className="text-dark-grayish-blue mb-4">
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className="grid gap-4 grid-cols-3 font-bold items-center justify-center mb-5 md:w-auto ">
                        <span className="text-2xl">$125.00</span>
                        <span className="text-orange-primary bg-pale-orange rounded-md mr-auto p-1 "> 50%</span>
                        <span className="text-right text-grayish-blue text-lg line-through md:col-span-3 md:text-left"> $250.00</span>
                    </div>
                    <div className="grid md:flex mb-10 md:w-auto md:gap-5 ">
                        <div className="grid grid-cols-3 items-center font-bold mb-4  justify-center text-center bg-gray-100 rounded-md w-full md:w-50 md:mb-0">
                            <button className="text-orange-primary  text-4xl">-</button>
                            <span>0</span>
                            <button className="text-orange-primary text-4xl ">+</button>
                        </div>
                        <button className="flex mx-auto gap-4 justify-center text-white rounded-md py-3 bg-orange-primary w-full md:w-50 hover:bg-orange-400">
                            <span className=""><Cart fill="#fff"/></span>
                            <span className="">Add to cart</span> 
                        </button>
                    </div>
                </div>
       
    )
}

export default DetailProducts