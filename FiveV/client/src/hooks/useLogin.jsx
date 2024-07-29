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

        const response = await axios.get('https://localhost:5050/user/signup', {email, password})

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
    return { login, isLoading, error }
}

 