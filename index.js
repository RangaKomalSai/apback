import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const AP_PORT = process.env.AP_PORT || 5001;

app.listen(AP_PORT, () => {
  console.log(`Server running on port ${AP_PORT}`);
});
