
import {useParams} from "react-router-dom";
import {useGetProductByIdQuery} from "../features/api/authApi.js";


const Detail = () => {
  const {id} = useParams();
  const {data} = useGetProductByIdQuery(id);
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <img src={data?.image} alt=""/>
    </div>
  )
}

export default Detail
