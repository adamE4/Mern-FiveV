//Baiscally MAIN offically the root component
//roots are building blocks this where the castle gets built
import { Outlet } from "react-router-dom";
import Home from "./components/Homepage"
import {Route, Routes} from "react-router-dom";
const App = () =>{
    return(
        <div className="w-full p-6">
            <Routes>
            <Route path="/" element={<Home />} />
            </Routes>
            <Outlet/>
        </div>
    );
};

export default App