import express from "express";
import path from "path";
import { fileURLToPath } from "url"; // Required to fix __dirname

const app = express();
const port = 3000;

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//-------------------- Main Code --------------------
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Default route for the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html")); // Fix sendFile path
});

//------------------ Start Server ------------------
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
