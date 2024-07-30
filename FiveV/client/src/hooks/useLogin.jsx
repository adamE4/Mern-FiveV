import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from 'axios'

export const useLogin = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const login = async(email, password) =>{

        setIsLoading(true)
        setError(null)

        try{
            const response = await axios.post('https://localhost:5050/user/login', {email, password});            
            
            const json = response.data

            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN' , payload: json})

            setIsLoading(false)
        }catch(error){
            setIsLoading(false)
            setError(error)
        }
    }
    return { login, isLoading, error }
}

 