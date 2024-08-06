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
                <div>
                    <h3>Login</h3>
                </div>
    
                <div className="<Login-values">
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

                </div>
            <button disabled={isLoading}>Submit</button>
            {error && <div className="error">{error}</div>}
            
            </form>
            
        )
      
    }



   


export default LoginForm