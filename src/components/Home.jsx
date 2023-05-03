import {useGetProductsQuery} from "../features/api/authApi.js";
import Card from "./Card.jsx";

const Home = () => {
    const {data} = useGetProductsQuery();
    console.log(data);
    return (
            <section className='container mx-auto'>
                <div className='flex justify-center items-center gap-y-5 flex-wrap pt-[80px]'>
                    {data?.map((product)=><Card product={product} key={product.id}/>)}
                </div>
            </section>
    )
}
export default Home