import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Detail from "./components/Detail.jsx";
import Search from "./components/Search.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/details/:id' element={<Detail/>}/>
                <Route path='/search' element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App