const express = require('express');
const router = express.Router();
const product = require('../model/product');
const bcrypt = require('bcrypt');
const { authenticate, userVerification } = require('./routes/middleware');

router.put("/:id", userVerification, async (req, res) => {

    if (req.body.password) {

        req.body.password = bcrypt.hashSync(req.body.password)
    }

    try {

        const userUpdate = await user.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(userUpdate);
    }
    catch (err) {

        res.status(500).json(err);
    }

})


// delete user profile

router.delete('/:id', userVerification, async (req, res) => {

    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("user sucessfully deleted");

    }
    catch (err) {
        res.status(500), json(err);
    }
})

// get user endpoint to find specific user
router.get('/find/:id', adminVerification, async (req, res) => {

    try {
        const targetUser = await user.findById(req.params.id)
        res.status(200).json(targetUser);

    }
    catch (err) {
        res.status(500).json(err);
    }
})

//get users find all users
router.get('/', adminVerification, async (req, res) => {

    try {
        const allUsers = await user.find()
        res.status(200).json(allUsers);

    }
    catch (err) {
        res.status(500).json(err);
    }
})

// get statistics of user. for a year check number of new users per month

router.get('/stats', adminVerification, (req, res) => {

    const today = new Date()
    const lastYear = new Date(today.setFullYear(today.getFullYear() - 1))

    try {
        const aggre = user.aggregate([

            {
                $match: { createdAt: { $gte: lastYear }, }
            },

            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                }
            },

            {

                $group: { _id: $month, total: { $sum: 1 }, }
            }

        ])

    }

    catch (err) {

        res.status(500).json(err)
    }

})


module.exports = router;
