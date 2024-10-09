"use client"

import { uploadImage } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ImageToImageForm() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [userImageUrl, setUserImageUrl] = useState(null)
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roomType, setRoomType] = useState('');
  const [designTypes, setDesignTypes] = useState({
    modern: false,
    summer: false,
    professional: false,
    tropical: false,
    coastal: false,
    vintage: false,
    industrial: false,
    neoclassic: false,
  });

  const handleImageChange = async (e:any) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }

    // Automatically upload to Cloudinary after generation
    const uploadedUrl = await uploadImage(image);

    if(uploadedUrl) {
      setUserImageUrl(uploadedUrl);
      toast.success("Image Uploaded!");
    }

  };

  const handleDesignChange = (e) => {
    setDesignTypes((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please provide an image.');
      return;
    }

    setLoading(true);

    // Generate the prompt based on selected options
    const selectedDesigns = Object.keys(designTypes)
      .filter(key => designTypes[key])
      .join(' and ');

    const generatedPrompt = `Redesign the uploaded image to create a beautiful ${roomType} with a ${selectedDesigns} style. The room should be inviting and well-lit, featuring elegant furnishings and a harmonious color palette. Focus on enhancing the overall aesthetic and functionality of the space.`;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('prompt', generatedPrompt);

    const response = await fetch('/api/image-to-image', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
    } else {
      setResultImage(data?.images[0]?.base64);
    }

    setLoading(false);
  };

  
  return (
    <section className="flex bg-[#1E1F20] text-white min-h-screen">
      <aside className="w-60 p-5 flex flex-col justify-between">
        <div className="text-xl font-semibold">
          <Link href={`/`} className="text-white text-2xl font-bold mb-5">Interiores.AI</Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center cursor-pointer border-2 rounded-full gap-2 px-3 mb-4 py-2">
            <UserButton showName />
          </div>
          <Link href={`/pricing`} className="bg-teal-600 text-white py-2 px-4 rounded cursor-pointer">
            Upgrade to Premium
          </Link>
        </div>
      </aside>

      <div className="grid grid-cols-10 place-content-between p-6 rounded-md">
        <form onSubmit={handleSubmit} className="col-span-10 md:col-span-5 space-y-6 px-8">
          <h1 className="text-2xl font-semibold mb-4 text-start">Design your room</h1>

          <div className="flex flex-col">
            <label htmlFor="image" className="mb-2 text-md font-medium text-gray-200">
              Upload Image:
            </label>
            {
              userImageUrl ? 
                <img
                  src={userImageUrl}
                  alt="Furniture"
                  className="w-60 rounded-lg"
                />
              :
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            }
            
          </div>

          <div className="flex flex-col">
            <label htmlFor="roomType" className="mb-2 text-md font-medium text-gray-200">
              Select Room Type:
            </label>
            <select
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-md bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">--Select Room Type--</option>
              <option value="Dining Room">Dining Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Kitchen">Kitchen</option>
              {/* Add more room types as needed */}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-md font-medium text-gray-200">Select Design Types:</label>
            <div className="grid grid-cols-4 gap-4">
              {Object.keys(designTypes).map((type) => (
                <label key={type} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name={type}
                    checked={designTypes[type]}
                    onChange={handleDesignChange}
                    className="hidden" // Hide the default checkbox
                  />
                  <span className={`flex flex-col items-center justify-center border-2 overflow-hidden rounded-md ${designTypes[type] ? 'border-blue-400' : 'border-gray-300'}`}>
                    <img 
                      src={`/design/${type}.png`} // Make sure to replace this with the actual path to your images
                      alt={`${type} design`}
                      className="w-full h-20"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 text-white rounded-md focus:outline-none ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
              }`}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>

        <div className="col-span-10 md:col-span-5 px-8 mt-10 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Rendered Image</h2>
          {resultImage ? (
            <img
              src={`data:image/png;base64,${resultImage}`}
              alt="Generated Result"
              className="w-full h-auto border border-gray-300 rounded-md"
            />
          )
          :
          (
              <div className="bg-gray-800 text-gray-400 w-full h-96 flex items-center justify-center">
                Rendered image will be displayed here</div>
          )
          }
        </div>
      </div>

      <aside className="w-60 p-5">
        <h3 className="text-gray-200 text-sm mb-3">Furnitures You Need To Buy</h3>
        <div className="space-y-3">
          <img
            src="/services/1.jpeg"
            alt="Furniture"
            className="w-full rounded-lg"
          />
          <img
            src="/services/2.jpeg"
            alt="Furniture"
            className="w-full rounded-lg"
          />
          <img
            src="/services/3.jpeg"
            alt="Furniture"
            className="w-full rounded-lg"
          />
        </div>
      </aside>
    </section>
  );
}
