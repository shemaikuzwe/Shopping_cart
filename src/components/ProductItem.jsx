import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Store/slices/cart-slice";
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const{cart}=useSelector(state=>state);
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  function handleRemoveCart() {
   dispatch(removeFromCart(product.id))
  }
  return (
    <div>
      <div className=" group flex flex-col border-2 items-center border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className=" h-[180px]">
          <img
            src={product?.image}
            alt={product?.title}
            className=" object-cover h-full w-full "
          />
        </div>
        <div>
          <h1 className=" w-40 truncate text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className=" flex items-center justify-center w-full mt-5">
          <button
            className=" bg-red-800 p-3 font-bold text-md rounded-xl text-white"
            onClick={cart.some(item=> item.id===product?.id)? handleRemoveCart:handleAddToCart}
          >
           {cart.some(item=> item.id===product?.id) ?'Remove from cart':'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
