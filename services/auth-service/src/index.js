import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Auth Service OK" });
});

app.post("/login", (req, res) => {
  res.json({ token: "fake-jwt-token" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Auth Service running on port ${PORT}`)
);
