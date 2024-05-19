//Baiscally MAIN offically the root component
//roots are building blocks this where the castle gets built
import { Outlet } from "react-router-dom";
import Home from "./components/Homepage"
const App = () =>{
    return(
        <div className="w-full p-6">
            <Home/>
            <Outlet/>
        </div>
    );
};

export default App