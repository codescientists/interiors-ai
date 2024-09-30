
export const handleError = (error: unknown) => {
  console.error(error)
  throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
}

export async function uploadImage(base64Image: any) {
  const formData = new FormData();
  formData.append("file", base64Image);
  formData.append("upload_preset", "interiors"); // Your upload preset

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url; // Return the URL of the uploaded image
}
