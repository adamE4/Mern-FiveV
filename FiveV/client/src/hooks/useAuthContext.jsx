import { AuthContext } from "../Context/Authcontext";
import { useContext } from "react";

export const useAuthContext = () =>{
    const context = useContext(AuthContext)

    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}

