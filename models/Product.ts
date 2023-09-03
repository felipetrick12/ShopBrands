import { IProduct } from '@/interfaces';
import mongoose, { Model, Schema, model } from 'mongoose';

const ProductSchema = new Schema(
  {
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          type: String,
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        },
      },
    ],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
      type: String,
      enum: {
        values: ['shirts', 'pants', 'hoodies', 'hats'],
        message: '{VALUE} no es un tipo valido',
      },
    },
    gender: {
      type: String,
      enum: {
        values: ['men', 'women', 'unisex', 'kid'],
        message: '{VALUE} no es un tipo valido',
      },
    },
  },
  {
    timestamps: true,
  },
);

//Create index
ProductSchema.index({ title: 'text', tags: 'text' });
//If moongose don't find the model, it will create a new one
const Product: Model<IProduct> =
  mongoose.models.Product || model('Product', ProductSchema);

export default Product;
