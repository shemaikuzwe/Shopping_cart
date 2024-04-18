import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [prouducts, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProuducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProuducts();
  },[]);
  return (
    <div>
       {loading ? (
        <div
          className="min-h-screen w-full flex 
                items-center  justify-center"
        >
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ):   
        <div className=" min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-4 max-w-6xl mx-auto p-3">
          {prouducts && prouducts.length > 0 ? (
            prouducts.map((item) => <ProductItem product={item} key={item?.id} />)
          ) : (
            <p className=" text-2xl font-semibold">No products found</p>
          )}
        </div>
}      
    </div>
  );
}
