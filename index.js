import "dotenv/config";
import express from 'express';
import morgan  from 'morgan';
import cookieParser  from 'cookie-parser';
import api     from './src/routes/index.js';
import connect from './db/dbconnect.js';
import cors from "cors";

const app = express()

connect();
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
      origin: [process.env.ORIGIN],
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
      credentials: true,
    })
  );

app.get('/', (req, res) => {
  res.json({ message: 'yeah 👩‍🎤'})
});

app.use('/', api)

const PORT = process.env.PORT || 5021;
app.listen(PORT, () => console.log(`[server] Running on port ${PORT}`));

export default app
