import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex justify-center">
      {cart && cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid col-2 max-2-6xl mx-auto ">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((product) => (
                <CartItem key={product.id} item={product} />
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col items-end  space-y-5 mt-14 p-5">
              <h1 className="font-bold text-lg text-red-800">
                You Cart Summary{" "}
              </h1>
              <p>
                <span className=" text-gray-800 font-semibold">
                  Total Items
                </span>
                <span>{cart.length}</span>
              </p>
              <p>
                <span className=" text-gray-800 font-semibold">
                  Total Amount
                </span>
                <span>{totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className=" min-h-[80vh] flex flex-col  justify-center  items-center">
          <h1 className=" text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>{" "}
          <Link to={"/"}>
            <button className=" bg-red-800 p-3 font-bold text-lg rounded-xl text-white">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
