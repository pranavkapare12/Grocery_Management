import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) =>{
    const [user,setUser] = useState({});
    const [Db_product,setDbProduct] = useState([]);
    return(
        <AuthContext.Provider value={{user,setUser,Db_product,setDbProduct}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider};