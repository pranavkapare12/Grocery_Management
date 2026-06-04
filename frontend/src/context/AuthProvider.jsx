import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) =>{
    const [user,setUser] = useState({});
    const [Db_product,setDbProduct] = useState([]);
    const [cart,addToCart] = useState([]);
    const [wishlist,setWishlist] = useState([]);
    const [amount,setAmount]=useState(0);
    const [wishlist_amount,setWishlist_amount]=useState(0);
    return(
        <AuthContext.Provider value={{user,setUser,Db_product,setDbProduct,cart,addToCart,wishlist,setWishlist,amount,setAmount,wishlist_amount,setWishlist_amount}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthProvider};