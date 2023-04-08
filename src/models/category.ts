import mongoose from 'mongoose'

export interface Category {
    _id: string
    name: string
    parent: Category
  }

export const CategoryScheema = new mongoose.Schema({
  name: {
      type: String,
      require: true,
  },
  parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      require: false
  },
})
  
  export const MdlCategory = mongoose.model<Category>('Category', CategoryScheema)