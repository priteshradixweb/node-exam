import express from 'express'
import dotenv from 'dotenv';
import { sequelize } from "./services/db.js";
import authRoutes from './routes/auth.js';
dotenv.config();

const PORT = process.env.APP_PORT;
const app = express();


// API middleware
app.use(express.json());

// Routes
app.use('/api/auth/', authRoutes);

try {
  await sequelize.authenticate();
  console.log("DB connected");
  await sequelize.sync({ alter: true });
  console.log("DB Synced successfully");

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
} catch (error) {
  console.log("Something went wrong on server", error);
}
