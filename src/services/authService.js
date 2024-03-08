import bcrypt from "bcryptjs"

const comparePassword = async ({password,storedPassword})=>{
        const  result = await bcrypt.compare(password, storedPassword);
        return result 
    }
   
const authService = {comparePassword}

export default authService