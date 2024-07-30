import { useState } from "react";
import { useLogin } from "../hooks/useLogin";


const LoginForm = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async(e) =>{
        e.preventDefault()

        console.log(email, password) //Need to remove later

        await login(email, password)
    
        }
 

        return(
            <form className="Login" onSubmit={handleSubmit}>
                <h3>Login</h3>
    
    
                <label>Email</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
    
    
                <label>Password</label>
                <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            <button disabled={isLoading}>Submit</button>
            {error && <div className="error">{error}</div>}
            
            </form>
            
        )
      
    }



   


export default LoginForm