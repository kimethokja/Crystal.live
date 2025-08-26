import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Fabiptv Proxy Running ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
