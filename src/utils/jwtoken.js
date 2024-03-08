import jwt from 'jsonwebtoken'
const secretKey = process.env.JWT_SECRET;

const signJwt = ({payload,expiresIn})=>{
    return jwt.sign(payload, secretKey, { expiresIn });
}
    
const verifyJwt = (payload)=>{
    return jwt.verify(payload, secretKey);
}

export {
    signJwt,
    verifyJwt
}