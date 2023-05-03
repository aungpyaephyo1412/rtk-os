import {Link} from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
const Card = ({product}) => {
    const [add,setAdd] = useState(false);
    const handleAdd = ( ) =>{
        localStorage.setItem(product?.title,product?.id);
        setAdd(true);
    }
    const handleRemove = () => {
      localStorage.removeItem(product?.title);
        setAdd(false);
    };
    return (
      <div className="w-full md:w-96 px-3">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="p-8 rounded-t-lg w-full object-contain"
            src={product?.image}
            style={{ height: "350px" }}
            alt="product image"
          />
          <div className="px-5 pb-5">
            <Link to={`/details/${product?.id}`}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {product?.title}
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <AiFillStar className="w-5 h-5 text-yellow-300" />
              <AiFillStar className="w-5 h-5 text-yellow-300" />
              <AiFillStar className="w-5 h-5 text-yellow-300" />
              <AiFillStar className="w-5 h-5 text-yellow-300" />
              <AiFillStar className="w-5 h-5 text-yellow-300" />

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-y-5">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product?.price}
              </span>
              {localStorage.getItem(product?.title) == product?.id ? (
                <button 
                onClick={handleRemove}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={handleAdd}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Card