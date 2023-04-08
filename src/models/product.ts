import mongoose, { Schema } from 'mongoose'
import { Category } from './category'

export interface Product {
    _id: string
    name: string
    categories: Category[]
    qty: number
    price: number
  }

export const ProductScheema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    categories: {
        type: mongoose.Schema.Types.Array,
        require: false
    },
    qty: {
        type: Number,
        require: true
    },
    price: {
        type:Number,
        require:true
    }
})
  
export const MdlProduct = mongoose.model<Product>('Product', ProductScheema)