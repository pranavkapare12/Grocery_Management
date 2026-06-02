import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) =>{
    const [user,setUser] = useState({});
    const [Db_product,setDbProduct] = useState([]);
    const [cart,addToCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    return(
        <AuthContext.Provider value={{user,setUser,Db_product,setDbProduct,cart,addToCart,wishlist,setWishlist}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider};