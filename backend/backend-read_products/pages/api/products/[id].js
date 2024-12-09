import dbConnect from "@/db/connect";
import Product from "@/db/models/product";

export default async function handler(request, response) {
  await dbConnect();
  const id = request.query.id;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    return response.status(200).json(product);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
