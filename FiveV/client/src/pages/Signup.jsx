import { useState } from "react";
import { useSignup }  from "../hooks/useSignup";



const SignUpForm = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()
 

    const handleSubmit = async(e) =>{
        e.preventDefault()

        console.log(email, password) //Will remove later

        await signup(email, password)
        
        console.log(email, password)
        }


        return(
            <form className="SignUp" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
    
    
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





export default SignUpForm