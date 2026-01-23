import cors from "cors";

app.use(cors());
import express from "express";
const app = express();
app.use(express.json());

// Test endpoint
app.get("/", (req, res) => {
  res.send("Eternal backend is alive 🌿");
});

// Video generation endpoint placeholder
app.post("/generate-video", async (req, res) => {
  // Replace this with Luma/Ray API call later
  res.send({ videoUrl: "https://example.com/fake-video.mp4" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
