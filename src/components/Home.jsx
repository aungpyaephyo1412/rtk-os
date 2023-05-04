import {useGetProductsQuery} from "../features/api/authApi.js";
import Card from "./Card.jsx";
import Loading from "./Loading.jsx";

const Home = () => {
    const {data,isLoading} = useGetProductsQuery();
    return (
            <section className='container mx-auto'>
                <div className='flex justify-center items-center gap-y-5 flex-wrap pt-[150px] md:pt-[80px]'>
                    {isLoading?<Loading/>:data?.map((product)=><Card product={product} key={product.id}/>)}
                </div>
            </section>
    )
}
export default Home