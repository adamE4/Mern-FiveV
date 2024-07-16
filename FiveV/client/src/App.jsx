//Baiscally MAIN offically the root component
//roots are building blocks this where the castle gets built
import { BrowserRouter, Outlet } from "react-router-dom";
import Viewpost from "./components/viewPost"
import Posts from "./components/CreatePost"
import Home from "./components/Homepage"
import {Route, Routes} from "react-router-dom";
const App = () =>{
    return(
        <div className="App">

            <Routes>

            <Route 
                path="/" 
                element={<Home />} 
            />
            
            <Route 
                path="/view" 
                element={<Viewpost />} 
            />
            <Route 
                path="/posts" 
                element={<Posts />} 
            />

            </Routes>

            
            <Outlet/>
        </div>
    );
};

export default App