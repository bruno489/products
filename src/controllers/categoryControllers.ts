import mongoose from 'mongoose'
import { Request, Response } from 'express'
import { MdlCategory } from '../models/category'

class CategoryController{
    async getAllCategories (req:Request, res: Response):Promise<Response>{
        try{
            const allCategories = await MdlCategory.find()
            return res.status(200).send(allCategories)
        }catch(error){
            return res.status(400).send({error: 'Falha ao buscar todas as categorias'})
        }
    }
}

export default new CategoryController