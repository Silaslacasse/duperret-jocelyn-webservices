import usersService from '../services/userService.js'

const getAllUsers = async (req,res)=>{
    const allUsers = await usersService.findAllUsers()
    return res.json(allUsers)
}

const getUserById = async (req,res)=>{
    const {id} = req.params
    const user = await usersService.findOneUserById({_id:id})
    return res.json(user)
}

const updateUser = async (req,res)=>{
    const {id} = req.params
    const {body} = req
    const updatedUser = await usersService.updateUserById({_id:id,data:body})
    return res.json(updatedUser)
}

const createUser = async (req,res)=>{
    const {body}  = req
    try {
            const registeredUser = await usersService.createUser(body)     
            return res.json(registeredUser)
        } catch (error) {
            return res.sendStatus(400)
    }
}

const deleteUser = async (req,res)=>{
    const {id} = req.params
    const deletedUser = await usersService.deleteUser(id)
    return res.json(deletedUser)
}

const usersController = {getAllUsers, getUserById, createUser, updateUser, deleteUser}

export default usersController