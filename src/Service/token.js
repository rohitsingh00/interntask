import {jsonwebtoken as jwt,sign,verify}from 'jsonwebtoken';

export const createtoken = async () => {
    return jwt.sign({password1:"admin123"}, "vhffhyfdyfdfyd",{
        expiresIn:"5m"    });
}

export const verifytoken = async(id) => {
    return jwt.verify(id, "vhffhyfdyfdfyd");
    
}
