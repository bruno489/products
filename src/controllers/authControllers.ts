import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

class AuthController{
    async authenticate(req:Request, res:Response){
        try {
            const infosToken = {
                infos: "Add User's infos"
              }
              
            const jwt = sign(infosToken, process.env.JWT_TOKEN || '')
    
            return res.status(200).json(jwt)
        } catch (error) {
            return res.status(400).json(error)
        }
        
    }
}

export default new AuthController