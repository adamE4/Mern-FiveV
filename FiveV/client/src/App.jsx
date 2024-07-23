//Baiscally MAIN offically the root component
//roots are building blocks this where the castle gets built
import { BrowserRouter, Outlet } from "react-router-dom";
import Viewpost from "./components/viewPost"
import Posts from "./components/CreatePost"
import Home from "./components/Homepage"
import {Route, Routes} from "react-router-dom";
import Preview from "./components/PreviewPage";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/Signup";


const App = () =>{
    return(
        <div className="App">

            <Routes>

            <Route 
                path="/" 
                element={<Preview />} 
            />

            <Route 
                path="/home" 
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
             <Route 
                path="/SignUp" 
                element={<SignUpForm />} 
            />
            <Route 
                path="/Login" 
                element={<LoginForm />} 
            />

            </Routes>

            
            <Outlet/>
        </div>
    );
};

export default App