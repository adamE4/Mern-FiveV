//Baiscally MAIN offically the root component
//roots are building blocks this where the castle gets built
import { BrowserRouter, Navigate, Outlet } from "react-router-dom";
import Viewpost from "./components/viewPost"
import Posts from "./components/CreatePost"
import Home from "./components/Homepage"
import {Route, Routes} from "react-router-dom";
import Preview from "./components/PreviewPage";
import LoginForm from "./pages/Login";
import SignUpForm from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";


const App = () =>{

    const { user } = useAuthContext()

    return(
        <div className="App">

            <Routes>

            <Route 
                path="/" 
                element={<Preview />} 
            />

            <Route 
                path="/home" 
                element={user ? <Home /> : <Navigate to="/login"/>} 
            />
            
            <Route 
                path="/view" 
                element={user ? <Viewpost /> : <Navigate to="/login"/>} 
            />
            <Route 
                path="/posts" 
                element={user ? <Posts /> : <Navigate to="/login"/>} 
            />
             <Route 
                path="/SignUp" 
                element={!user ? <SignUpForm /> : <Navigate to="/home"/>} 
            />
            <Route 
                path="/Login" 
                element={!user ? <LoginForm /> : <Navigate to="/home"/>} 
            />

            </Routes>

            

        </div>
    );
};

export default App