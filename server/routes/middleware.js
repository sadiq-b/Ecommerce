const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv=require('dotenv')
dotenv.config();



// Middleware function to authenticate requests
const authenticate =(req, res, next) => {
  // Check for the presence of an Authorization header
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).send({ message: 'Missing Authorization header' });
  }

  // Split the header value into its components (e.g., "Bearer abc123")
  const [bearer, token] = authHeader.split(' ');

  // Check that the header is in the correct format
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).send({ message: 'Invalid Authorization header' });
  }

  // Verify the JWT and get the user ID from the payload
  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userInfo = payload.userInfo;
    next();
  } catch (err) {
    return res.status(401).send({ message: 'Invalid JWT' });
  }

}


const userVerification = (req,res,next) =>{
  authenticate(req,res, () => {
    if (req.userInfo.id===req.params.id || req.userInfo.role==="admin") {
      next();
    }
    else{
      res.status(403).json("access denied")

    }
  })

};

const adminVerification = (req,res,next) =>{
  authenticate(req,res, () => {
    if (req.userInfo.role==="admin") {
      next();
    }
    else{
      res.status(403).json("access denied")

    }
  })

}



module.exports = {authenticate,userVerification};
