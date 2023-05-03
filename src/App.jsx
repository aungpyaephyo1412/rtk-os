import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Detail from "./components/Detail.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/details/:id' element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App