import client from "../utils/redis.js";

export const cache = async (req, res, next) => {
  const cache = await client.get(req.originalUrl);
  if (!cache) {
    return next();
  }
  console.log("get from cache");
  res.status(200).send(JSON.parse(cache));
};