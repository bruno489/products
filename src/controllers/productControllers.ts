import mongoose from "mongoose";
import { Request, Response } from "express";
import { MdlProduct } from "../models/product";
import { Category, MdlCategory } from "../models/category";

class ProductsController{
    async getAllProducts(req:Request, res:Response):Promise<Response>{
        try {
            const allProducts = await MdlProduct.find()
            return res.status(200).send(allProducts)
        } catch (error) {
            return res.status(400).send({message:'Erro ao procurar todos os produtos',error})
        }
    }

    async getProductById(req:Request,res:Response):Promise<Response>{
        try {
            const {id}=req.params
            const product =await MdlProduct.findOne({_id:id})
            return res.status(200).send(product)
        } catch (error) {
            return res.status(400).send({message:'Erro ao procurar produto por id', error})
        }
    }

    async editProductById (req:Request,res:Response):Promise<Response>{
        try {
            const {id} = req.params
            const {name,categories,qty,price} = req.body

            const productCategories:Category[] = []
            for(const cat of categories){
                const category = await MdlCategory.findOne({_id: cat})
                if(category) productCategories.push(category)
            }

            const newProduct = await MdlProduct.findOneAndUpdate(
                { _id: id}, 
                {name, categories:productCategories, qty, price},
            )

            return res.status(200).send(newProduct)
        } catch (error) {
            return res.status(400).send({message:'Erro ao atualizar o produto', error})
        }
    }

    async createProduct (req: Request, res:Response):Promise<Response>{
        try {
            const {name,categories,qty,price} = req.body
            
            const productCategories:Category[] = []
            for(const cat of categories){
                const category = await MdlCategory.findOne({_id: cat})
                if(category) productCategories.push(category)
            }

            const product = await MdlProduct.create({name,categories:productCategories,qty,price})

            return res.status(200).send(product)
        } catch (error) {
            return res.status(400).send({message:'Erro ao criar um novo produto', error})
        }
    }

    async deleteProductById(req:Request, res:Response):Promise<Response> {
        try {
            const {id}= req.params
            await MdlProduct.deleteOne({_id: id})
            return res.status(200).send({message:'Produto deletado com sucesso.'})
        } catch (error) {
            return res.status(400).send({message:'Erro ao deletar produto', error})
        }
    }
}

export default new ProductsController