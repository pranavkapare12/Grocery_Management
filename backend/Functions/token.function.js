import jwt from "jsonwebtoken"
function generateToken(userId){
    let token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'1D'
    })
    return token;
}

export default generateToken;