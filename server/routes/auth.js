const express = require('express');
const router = express.Router();
const user = require('../model/user');
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');


const acessToken= (signature) => {

    try {

        const token= jwt(signature, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1hr',
        });
        return token;
    }

    catch (err) {
        console.error(err)
        return;
    }
};

//usersignup
router.post('signup', async (req, res) => {

    const newUser = new user(
        {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            password: bcrypt.hashSync(req.body.password),
        }
    );

    try {

        const userupdate = await newUser.save();
        console.log("sucessful registration")
        res.status(201).json(userupdate)
    }
    catch (err) {

        res.status(500).json( err)
    }

})

//Login

router.post('login' , async(req,res) =>{

    try {

        const verifyUser= await user.findOne({username:req.body.name})

        !verifyUser && res.status(401).json("user not found")
    
        const verifyPassword = bcrypt.compareSync(req.user.password,verifyUser.password);

        if  (verifyPassword ) {
            let signature = {
                id: user._id,
                email: user.email,
                role: user.role,
              };
            const token=acessToken(signature)

            res.status(200).json({
                status: 'success',
                user: verifyUser._id,
                token,
              });

        }else {

            res.status(401).json("wrong credentials")
        }

    }catch(err) {

        res.status(500).json(err)
    }
});

module.exports = router;
