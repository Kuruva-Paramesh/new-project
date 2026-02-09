import express from "express";
const router = express.Router();

router.get("/users", (req, res) => {
  res.json([{ name: "Demo", email: "demo@gmail.com" }]);
});

router.post("/users", (req, res) => {
  res.json({ message: "User added" });
});

export default router;
