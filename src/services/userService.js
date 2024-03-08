import User  from "../models/user.model.js";
import bcrypt from "bcryptjs"


const findOneUserByEmail = async ({email})=>{
    try {
        const   findUser = await User.findOne({email})
        return  findUser
    } catch (error) {
        throw error
    }

}

const findOneUserById = async ({_id})=>{
    try {
        const   findUser = await User.findOne({_id})
        return  findUser
    } catch (error) {
        throw error
    }

}

const findUserByRefreshToken = async ({refreshToken})=>{
    try {
        const   findUser = await User.findOne({refreshToken})
        return  findUser
    } catch (error) {
        throw error
    }
}

const updateUserById = async ({_id, data})=>{
    try {
        const   toUpdate = await User.findOneAndUpdate({_id},data,{new:true})
        return  toUpdate
    }
    catch (error) {
        throw error
    }
}

const findAllUsers = async ()=>{
    try {
        const   allUsers = await User.find()
        return  allUsers
    } catch (error) {
        throw error
    }
}

const createUser = async (rawData)=>{
    const {password} = rawData
    const salt = bcrypt.genSaltSync(4);
    const hash = bcrypt.hashSync(password, salt);
    
    const newUserData = {
        ...rawData,
        password:hash
    }

    try {
        const   toSave  = new User(newUserData)
        const   newUser = toSave.save()   
        return  newUser
    } catch (error) {
        throw error
    }
}

const updateUserToken = async ({_id,refreshToken})=>{

    try {
        const   toUpdate = await User.findOneAndUpdate({_id},{refreshToken},{new:true})
        return  toUpdate
    } catch (error) {
        throw error
    }
}

const deleteUser = async ({_id})=>{
    try {
        const   toDelete = await User
        .findOneAndDelete(_id)
        return  toDelete
    }
    catch (error) {
        throw error
    }
}


const userService = {updateUserToken, findOneUserById, createUser, updateUserById, findAllUsers, findUserByRefreshToken, findOneUserByEmail, deleteUser}

export default userService