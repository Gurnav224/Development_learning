const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require('cors');

app.use(express.json());
app.use(cors())

const supersecret = "supersecret";

const verifyToken = (req, res , next) => {
    const token = req.headers['authorization'];
    console.log(token)

    if(!token){
        return res.status(400).json({message:'No token found'})
    }

    try {
        const decoded = jwt.verify(token, supersecret);
        req.user = decoded;
        next()
    } catch (error) {
        res.status(500).json({error:'failed to decoded the token'})
    }
}

app.post("/admin/login", (req, res) => {
  const { secret } = req.body;

  if (secret === supersecret) {
    const token = jwt.sign({ role: "admin" }, supersecret, {
      expiresIn: "24h",
    });
    res.json({ token });
  } else {
    res.status(400).json({ user: "Invalid Secret" });
  }
});

app.get('/admin/dashboard', verifyToken,(req, res) => {
    res.json({message:'Admin successfully logged in to the dashboard'})
})

app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
});
