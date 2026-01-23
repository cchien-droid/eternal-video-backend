import express from "express";
import cors from "cors";

const app = express();    // 1️⃣ define app first
app.use(cors());           // 2️⃣ now we can use CORS
app.use(express.json());   // parse JSON body

app.post("/generate-video", async (req, res) => {
  const { images, finalMessage } = req.body;
  console.log("Received images:", images.length, "Message:", finalMessage);

  // TEMP: mock video
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4"; 
  res.json({ videoUrl });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
