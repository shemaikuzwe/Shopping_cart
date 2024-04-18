import { useDispatch } from "react-redux"
import { removeFromCart } from "../Store/slices/cart-slice"

export default function CartItem({item}) {
    const dispatch=useDispatch()
    function handleRemoveCart(){
        dispatch(removeFromCart(item?.id))
    }
    return <div className="  p-3  justify-center bg-red-500 mt-2 mb-2 rounded-xl w-3/4">
         <div className="flex justify-between">
         <div className="flex p-3"> 
              <img src={item?.image} alt={item?.title}  className="h-28 rounded-lg " />
              <div className="ml-10 self-start space-y-5">
                <h1 className="text-xl text-white font-bold">{item.title}</h1>
                <p className="text-white font-bold">Price: {item?.price}</p>

              </div>
           
            </div>
            <div >
               <button
            className=" bg-red-800 p-3 font-bold text-lg rounded-xl text-white"
            onClick={ handleRemoveCart}
          >
           Remove from cart
          </button>
           </div>
             </div>
            
           

          </div>

}