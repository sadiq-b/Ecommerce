const express = require('express');
const router = express.Router();
const user = require('../model/user')

//usersignup
router.post('signup', async (req, res) => {

    const newUser = new user(
        {
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            password: req.body.password
        }
    );

    try {

        const userupdate = await newUser.save();
        console.log("sucessful registration")
        res.status(201).json(userupdate)

    }

    catch (err) {

        res.status(500).json(err)


    }

})

//Login

router.post('login' , async(req,res) =>{

    try {

        const verifyUser= user.findOne({username:req.body.name})

        !verifyUser && res.status(401).json("user not found")

        const verifyPassword= verifyUser.password

        if  (verifyPassword !== req.body.password) {

            res.status(401).json("wrong password")

        }else {

            res.status(200).json("sucessful")


        }



    }catch(err) {

        res.status(500).json(err)


    }


});


module.exports = router;
