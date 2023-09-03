import { IProduct } from '@/interfaces';
import { SHOP_CONSTANTS, db } from '@/database';
import { Product } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IProduct[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);
    default:
      return res.status(400).json({
        message: 'Bad request!',
      });
  }
}

//Get Products
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  //By default return all to know if the user typed something different
  const { gender = 'all' } = req.query;

  let condition = {};
  //practically it's validationg that
  if (gender !== 'all' && SHOP_CONSTANTS.includes(`${gender}`)) {
    condition = { gender };
  }
  const products = await Product.find(condition)
    .select('title images inStock slug _id price')
    .lean();

  await db.disconnect();
  return res.status(200).json(products);
};
