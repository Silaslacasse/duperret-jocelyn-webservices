import { createClient } from "redis";

const client = createClient({socket: {port: 6379, host: process.env.REDIS_HOST}});

export async function connectRedis() {
  try {
    client.on("error", (error) => console.error(`Error : ${error}`));

    await client.connect();
    console.log("[redis]: Connected successfully");
  } catch (err) {
    console.error("[redis]: Unable to connect => ", err);
  }
}

export default client;