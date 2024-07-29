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

        const response = await axios.post('https://localhost:5050/user/signup', {email, password})
        

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: ' ', payload: json})

            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}

