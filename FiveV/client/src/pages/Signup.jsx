import { useState } from "react";
import { useSignup }  from "../hooks/useSignup";



const SignUpForm = () =>{
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const {signup, isLoading, error} = useSignup()
 

    const handleSubmit = async(e) =>{
        e.preventDefault()

        console.log(email, password)

        await signup(email, password)
        
        console.log(email, password)
        }


        return(
            <form className="SignUp" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
    
                <div>
                <label>Email</label>
                <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
    
    
                <label>Password</label>
                <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
                </div>
              
    
            <button disabled={isLoading}>Submit</button>
            {error && <div className="error">{error}</div>}
            
            </form>
            
        )
      
    }





export default SignUpForm