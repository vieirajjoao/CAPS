import {Router} from "express"

export const userRouter = Router()

userRouter.get('/usuarios',  (req,res)=>{
    res.send('listar os usuarios')
} )  


