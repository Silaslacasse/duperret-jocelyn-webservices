import Project  from "../models/project.model.js";

const findAllProjects = async (query)=>{
    try {
        const   allProjects = await Project.find().sort({
            createdAt: query.order === "desc" ? "desc" : "asc",
          })
          .limit(query.limit || 0)
          .lean();
        return  allProjects
    } catch (error) {
        throw error
    }
}

const findOneProjectById = async ({_id})=>{
    try {
        const   findProject = await Project.findOne({_id})
        return  findProject
    } catch (error) {
        throw error
    }

}

const createProject = async (data)=>{
    try {
        const   toSave  = new Project(data)
        const   newProject = toSave.save()   
        return  newProject
    } catch (error) {
        throw error
    }
}

const updateProject = async ({_id, data})=>{

    try {
        console.log(data);
        const   toUpdate = await Project.findOneAndUpdate({_id},data,{new:true})
        return  toUpdate
    } catch (error) {
        throw error
    }
}

const deleteProject = async ({_id})=>{
    try {
        const   toDelete = await Project
        .findOneAndDelete(_id)
        return  toDelete
    }
    catch (error) {
        throw error
    }
}

const projectService = {updateProject, createProject, findAllProjects, findOneProjectById, deleteProject}

export default projectService