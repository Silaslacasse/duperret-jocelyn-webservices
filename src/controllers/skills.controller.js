import skillService from "../services/skillService.js";

const getAllSkills = async (req,res)=>{
    const allSkills = await skillService.findAllSkills()
    return res.json(allSkills)
}

const getSkillById = async (req,res)=>{
    const {id} = req.params
    const skill = await skillService.findOneSkillById({_id:id})
    return res.json(skill)
}

const createSkill = async (req,res)=>{
    const {body}  = req
    try {
            const newSkill = await skillService.createSkill(body)     
            return res.json(newSkill)
        } catch (error) {
            return res.sendStatus(400)
    }
}

const updateSkill = async (req,res)=>{
    const {id} = req.params
    const {body} = req
    console.log(body)
    const updatedSkill = await skillService.updateSkill({_id:id, data:body})
    return res.json(updatedSkill)
}

const deleteSkill = async (req,res)=>{
    const {id} = req.params
    const deletedSkill = await skillService.deleteSkill({_id:id})
    return res.json(deletedSkill)
}

const skillsController = {getAllSkills, getSkillById, createSkill, updateSkill, deleteSkill}

export default skillsController