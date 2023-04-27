import { mongooseConnect } from "@/lib/mongoose";

const { Category } = require("@/models/Category");

const handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();


  if (method === 'GET') {
    res.json(await Category.find().populate('parent'));
  }

}

export default handle