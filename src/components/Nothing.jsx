import {useNavigate} from "react-router-dom";

const Nothing = () => {
    const nav = useNavigate();
    return(
        <section className='min-h-screen flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-y-10'>
                <div className='text-6xl font-bold text-cyan-600 text-center'>
                    Products not found
                </div>
                <button
                    onClick={()=>nav('/')}
                    className='px-6 py-2 border-2 border-blue-500 rounded-3xl text-gray-900 hover:bg-blue-500 hover:text-gray-100'>
                    Go to home page
                </button>
            </div>
        </section>
    )
}
export default Nothing