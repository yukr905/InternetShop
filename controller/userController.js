const ApiError = require("../error/ApiError")
const { User, Basket } = require("../model/models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config= require("../config/default.json")



class userController{
    async register(req,res,next){
        const {email,password,role} = req.body
        const candidate = await User.findOne({where:{email}})
        if(candidate){
            return next(ApiError.badRequest("Пользователь уже зарегистрирован"))
        }
        const hashPassword = await bcrypt.hash(password,8)
        const user = await User.create({email,role,password:hashPassword})
        const basket = await Basket.create({userId:user.id})    
        return res.status(201).json({success:true})

    }
    async login(req,res,next){
        const {email,password}= req.body
        const user = await User.findOne({where:{email}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        const compare = await bcrypt.compare(password,user.password)
        if (!compare) {
            return next(ApiError.internal('Неверная почта или пароль'))
        }
        const token = jwt.sign({
            id:user.id,email,role:user.role
        },config.jwtsecret,
        {expiresIn: '24h'})
        return res.json({token})
    }

}

module.exports = new userController()