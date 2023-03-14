import { Product } from '../interfaces';
import productModel from '../models/productModel';

async function create(product: Product) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

async function getAll() {
  const products = await productModel.getAll();
  return { status: 200, products };
}

export default {
  create,
  getAll,
};