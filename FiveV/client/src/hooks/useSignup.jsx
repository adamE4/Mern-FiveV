import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

 export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async(email, password) =>{

        setIsLoading(true)
        setError(null)

        try{
            const response = await axios.post('https://localhost:5050/user/signup', {email, password})

            const json = response.data

            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'SIGNUP', payload:json})

            setIsLoading(false)
        }catch(error){
            setIsLoading(false)
            setError(error.response?.data?.error || 'SignUp Failed')
        }

    }
    return { signup, isLoading, error }
}

