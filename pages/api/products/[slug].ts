import { IProduct } from '@/interfaces';
import { db } from '@/database';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IProduct;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case 'GET':
      return getProductsBySlug(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request!',
      });
  }
}

//Get Products
const getProductsBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) => {
  await db.connect();
  const { slug } = req.query;
  const product = await Product.findOne({ slug }).lean();

  if (!product) {
    return res.status(404).json({
      message: 'Producto no encontrado',
    });
  }

  return res.status(200).json(product);
};
