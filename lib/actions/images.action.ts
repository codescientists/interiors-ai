'use server'

import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import { revalidatePath } from "next/cache";
import Image from "../database/models/image.model";



export const createImage = async ({ userId, prompt, image }: any) => {
    try {
      await connectToDatabase();
  
      const newImage = await Image.create({ 
        userId: userId, 
        prompt: prompt, 
        image: image,
     });
  
      return JSON.parse(JSON.stringify(newImage));

    } catch (error) {
      handleError(error)
    }
}

// export async function updateProduct({ productId, name, description, price, stock, images, categoryId, path }: UpdateProductParams) {
//   try {
//     await connectToDatabase()

//     const productToUpdate = await Product.findById(productId)
//     if (!productToUpdate) {
//       throw new Error('Product not found')
//     }

//     const updatedProduct = await Product.findByIdAndUpdate(
//       productId,
//       {
//         $set: {
//           name: name,
//           description: description,
//           price: price,
//           stock: stock,
//           category: categoryId,
//           "images.0": images[0] 
//         }
//       },
//       { new: true }
//     );
    
//     revalidatePath(path)

//     return JSON.parse(JSON.stringify(updatedProduct))
//   } catch (error) {
//     handleError(error)
//   }
// }


export async function getAllImages({ limit = 6, page }: any) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit;

    const imagesQuery = Image.find()
      .sort({ createdAt: 'desc' })

    const images = await imagesQuery;

    return {
      data: JSON.parse(JSON.stringify(images)),
    }
    
  } catch (error) {
    handleError(error)
  }
}


// export async function getProductById(productId: string) {
//   try {
//     await connectToDatabase()

//     const product = await populateCategory(Product.findById(productId))

//     if (!product) throw new Error('Product not found')

//     return JSON.parse(JSON.stringify(product))
//   } catch (error) {
//     handleError(error)
//   }
// }

