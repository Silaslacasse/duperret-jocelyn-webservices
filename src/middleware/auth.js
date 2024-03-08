import {verifyJwt}    from '../utils/jwtoken.js'

export const authentication = async (req,res,next)=>{
    const accessToken  = req.headers['authorization'];
    console.log('coucou', accessToken)
    if (!accessToken) {
        return res.status(401).send('Unauthorized');
    }
    if(accessToken.startsWith('Bearer ')) {
        const cleanAccess = accessToken.slice(7, accessToken.length);
        try {
            const verify = verifyJwt(cleanAccess)
            console.log(cleanAccess);
            req.user = verify
            return next()
        } catch (error) {
            console.log(error.message)
            return res.status(401).send('Unauthorized')
        }
    }
    return res.sendStatus(400)
}

export const isAdmin = async (req,res,next)=>{
    console.log(req.user)
    if(!req.user || req.user.roles !== "admin") return res.status(401).send('Unauthorized');
    next();
}
