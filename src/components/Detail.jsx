
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery, useGetProductByNameQuery} from "../features/api/authApi.js";
import {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import Loading from "./Loading.jsx";


const Detail = () => {
  const [add,setAdd] = useState(false);
  const handleAdd = ( ) =>{
    localStorage.setItem(data?.title,data?.id);
    setAdd(true);
  }
  const handleRemove = () => {
    localStorage.removeItem(data?.title);
    setAdd(false);
  };
  const {id} = useParams();
  const {data,isLoading} = useGetProductByIdQuery(id);
  const {cate} = useGetProductByNameQuery();
  console.log(cate)
  return (
    <>
      {isLoading?<Loading/>:<section className='container mx-auto min-h-screen flex justify-center items-start pt-[120px] md:pt-[80px]'>
        <div className='w-full flex flex-wrap shadow-md md:p-5 p-3'>
        <div className='w-full md:w-1/4'>
        <img src={data?.image} className='p-3 md:p-5 mx-auto h-[300px]' alt=""/>
</div>
  <div className='w-full md:w-3/4 flex flex-col justify-start items-start gap-y-5 p-3 md:p-5'>
    <h1 className='font-bold text-xl md:text-3xl text-purple-500'>{data?.title}</h1>
    <div className='w-full flex justify-start items-center gap-5 flex-wrap '>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">
        ${data?.price}
      </p>
      <div className="flex items-center">
        <AiFillStar className="w-5 h-5 text-yellow-300" />
        <AiFillStar className="w-5 h-5 text-yellow-300" />
        <AiFillStar className="w-5 h-5 text-yellow-300" />
        <AiFillStar className="w-5 h-5 text-yellow-300" />
        <AiFillStar className="w-5 h-5 text-yellow-300" />

        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                5.0
              </span>
      </div>
    </div>
    <div className="w-full flex items-center justify-start flex-wrap gap-5">
      <button
          className="text-black hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Buy now</button>
      {localStorage.getItem(data?.title) == data?.id ? (
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
    <div className='w-full'>
      <p className='text-sm md:text-lg text-gray-600'>{data?.description}</p>
    </div>
  </div>
</div>
</section>}
    </>
  )
}

export default Detail
