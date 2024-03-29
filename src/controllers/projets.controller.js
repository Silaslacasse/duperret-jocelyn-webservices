import projectService from "../services/projectService.js";
import client from '../utils/redis.js'

const getAllProjects = async (req,res)=>{
    const allProjects = await projectService.findAllProjects(req.query)
    await client.SETEX(req.originalUrl, 25000, JSON.stringify(allProjects));
    return res.json(allProjects)
}

const getProjectById = async (req,res)=>{
    const {id} = req.params
    const project = await projectService.findOneProjectById({_id:id})
    await client.SETEX(req.originalUrl, 25000, JSON.stringify(project));
    return res.json(project)
}

const createProject = async (req,res)=>{
    const {body}  = req
    try {
            const newProject = await projectService.createProject(body)     
            return res.json(newProject)
        } catch (error) {
            return res.sendStatus(400)
    }
}

const updateProject = async (req,res)=>{
    const {id} = req.params
    const {body} = req
    const updatedProject = await projectService.updateProject({_id:id,data:body})
    return res.json(updatedProject)
}

const deleteProject = async (req,res)=>{
    const {id} = req.params
    const deletedProject = await projectService.deleteProject({_id:id})
    return res.json(deletedProject)
}

const projectsController = {getAllProjects, getProjectById, createProject, updateProject, deleteProject}

export default projectsController