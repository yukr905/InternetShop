const { Device, BasketDevice } = require("../model/models")

class BasketController{

   async create(req,res){
        const {itemId} = req.body
        const item =await BasketDevice.create({basketId:req.user,deviceId:itemId})
        res.status(200).json({message:"товар добавлен в корзину"})
       }
}
module.exports = new BasketController()