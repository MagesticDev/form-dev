const express = require("express");
const cors = require("cors");
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET = "vWYXBK$Hy$A86PWjRC52NgX15Ag&PP%vfgWgS@8TcSmmJthdb*dD6v!XVzd5";
const admin = {
  email: 'admin@form-dev.fr',
  name: 'admin',
  roles: ['ROLE_USER','ROLE_ADMIN']
}

const app = express();
const corsOpts = {
  origin: '#^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$#'
}

app.use(express.json());
app.use(cors());
app.post("/login",(req,res)=> {
  const {email, password} = req.body;
  console.log('accessed /login with', email, password);
  if(email === 'admin@form-dev.fr' && password === 'admin') { // HARD CODED ADMIN USER
    return res.status(200).json({
      token: jsonwebtoken.sign({user: 'admin@form-dev.fr'}, JWT_SECRET),
      user: {
        ...admin
      }
    });
  }
  return res.status(404).json({message: "Invalid username and password."});
});

app.listen(8080, () => {
  console.log("API running on localhost:8080");
});
