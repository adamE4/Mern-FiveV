import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginForm = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async(e) =>{
        e.preventDefault()

        const post = {email, password}
        console.log(email, password)
    
        }


        if(!response.ok){
            setError(Json.error)        
        }
       
        else{

            setEmail('')
            setPassword('')
            setError(null)
            console.log('New Post', Json)
        }
      
    }



    return(
        <form className="Login" onSubmit={handleSubmit}>
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

        <button>Submit</button>
        {error && <div className="error">{error}</div>}
        
        </form>
        
    )


export default LoginForm