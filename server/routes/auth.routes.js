const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require("express-validator")
const authMiddleware = require('./../middleware/auth.middleware')
const fileService = require('../services/fileService')
const router = new Router()
const File = require('../models/File')

router.post('/registration' , 
[
    check('email', 'Uncorrect email').trim().isEmail(),
    check('password', 'Password mast be longer than 3 and shorter than 12').isLength({min: 3, max: 12}),
    check('name', 'Name mast be longer that 3').isLength({min: 1}),
    check('lastName', 'Last name mast be longer that 3').isLength({min: 1})
],
async(req, res) => {
   try{
     
      const errors = validationResult(req)
      if(!errors.isEmpty()){
          return res.status(400).json({errors})
      }
       const {email, password, name, lastName} = req.body
       const candidate = await User.findOne({email})

       if(candidate){
           return res.json({message: `User with email ${email} already exist`})
       }
       const hashPassword = await bcrypt.hash(password, 8) 
       const user = new User({email, password: hashPassword, name, lastName})
       await user.save()
       await fileService.createDir(req, new File({user: user.id, name: ''}))
        res.json({message: 'User was created'})
        
   }
   catch(e){
      
      res.send({message: 'Server error'})
   }


})

router.post('/login', 
    async (req, res) => {
        try {
            
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar, 
                    name: user.name, 
                    lastName: user.lastName
                }
            })
        } catch (e) {
            res.send({message: "Server error"})
        }
    })

router.get('/auth', authMiddleware, 
   async(req, res) => {
       try {
         const user = await User.findOne({_id: req.user.id})
         const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar,
                    name: user.name, 
                    lastName: user.lastName
                }
            })
       }
       catch(e){
            console.log(e)
           res.send({message: 'Servererror'})
       }
   }
)






module.exports = router


