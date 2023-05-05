import {useSelector} from "react-redux";
import {useGetProductsQuery} from "../features/api/authApi.js";
import Loading from "./Loading.jsx";
import Card from "./Card.jsx";
import Nothing from "./Nothing.jsx";


const Search = () => {
    const input = useSelector(state => state.search)
    const {data, isLoading} = useGetProductsQuery();
    const FilterData = data?.filter((product) => product.title.toLowerCase().includes(input.toLowerCase()))
    return (
        <>
            {input.length == 0 ? <Nothing/> : <div>
                {FilterData.length == 0 ? <Nothing/> : <section className='container mx-auto'>
                    <div className='flex justify-center items-center gap-y-5 flex-wrap pt-[120px] md:pt-[80px]'>
                        {isLoading ? <Loading/> : FilterData?.map((product) => <Card product={product}
                                                                                     key={product.id}/>)}
                    </div>
                </section>}
            </div>}
        </>
    )
}
export default Search;