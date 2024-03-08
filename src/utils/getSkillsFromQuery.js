
import skillModel from "../models/skill.model.js";

export const getSkillsFromQuery = async (query) => {
  if (!query) return [];
  let values = query.skills;
  if (!values) return [];
  if (!Array.isArray(values)) values = [values];

  const skills = await skillModel.find({
    name: { $in: values.map((value) => new RegExp(`${value}`, "i")) },
  });

  return skills.map(({ _id }) => _id);
};