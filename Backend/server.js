import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoute from "./routes/user.route.js";
import { connectDB } from "./db/connection1.db.js";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware :- between req and response
app.use(express.json());


// Connect to Database
connectDB();
// Test route (IMPORTANT for debugging)
app.get("/", (req, res) => {
  res.send("Server running");
});

// Routes
app.use("/api/v1/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
