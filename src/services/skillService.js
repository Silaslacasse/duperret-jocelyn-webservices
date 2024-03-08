import Skill  from "../models/skill.model.js";
const findAllSkills = async ()=>{
    try {
        const   allSkills = await Skill.find()
        return  allSkills
    } catch (error) {
        throw error
    }
}

const findOneSkillById = async ({_id})=>{
    try {
        const   findSkill = await Skill.findOne({_id})
        return  findSkill
    } catch (error) {
        throw error
    }

}

const createSkill = async (data)=>{
    try {
        const   toSave  = new Skill(data)
        const   newSkill = toSave.save()   
        return  newSkill
    } catch (error) {
        throw error
    }
}

const updateSkill = async ({_id,data})=>{
    try {
        const   toUpdate = await Skill.findOneAndUpdate({_id}, data, {new:true})
        return  toUpdate
    } catch (error) {
        throw error
    }
}

const deleteSkill = async ({_id})=>{
    try {
        const   toDelete = await Skill
        .findOneAndDelete(_id)
        return  toDelete
    }
    catch (error) {
        throw error
    }
}

const skillService = {updateSkill, createSkill, findAllSkills, findOneSkillById, deleteSkill}

export default skillService