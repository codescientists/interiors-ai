"use client"

import { createImage } from "@/lib/actions/images.action";
import { uploadImage } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-[#1E1F20] p-5 flex flex-col justify-between">
      <div className="text-xl font-semibold">
        <Link href={`/`} className="text-white text-2xl font-bold mb-5">Interiores.AI</Link>
        <nav>
          <h3 className="text-gray-400 text-xl font-medium mb-2">Room For</h3>
          <ul className="mb-6">
            <li className="text-white py-2 px-2 cursor-pointer">Bed-Room</li>
            <li className="text-white bg-[#383A3B] rounded py-2 px-2 cursor-pointer">Hall-Room</li>
            <li className="text-white py-2 px-2 cursor-pointer">Meeting Room</li>
            <li className="text-white py-2 px-2 cursor-pointer">Kitchen</li>
            <li className="text-white py-2 px-2 cursor-pointer">Entrance</li>
          </ul>
          <h3 className="text-gray-400 text-xl font-medium mb-2">Style List</h3>
          <ul>
            <li className="text-white py-2 px-2 cursor-pointer">Modern</li>
            <li className="text-white bg-[#383A3B] rounded py-2 px-2 cursor-pointer">Old Aged</li>
            <li className="text-white py-2 px-2 cursor-pointer">Luxury</li>
            <li className="text-white py-2 px-2 cursor-pointer">Futuristic</li>
            <li className="text-white py-2 px-2 cursor-pointer">Ancient</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-3">
          <img src="./images/int81.jpeg" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
          <span className="text-white">Ayush Bhattarai</span>
        </div>
        <button className="bg-teal-600 text-white py-2 px-2 px-4 rounded cursor-pointer">
          Upgrade to Premium
        </button>
      </div>
    </aside>
  );
};

const MainContent = () => {
  const { isLoaded, userId } = useAuth()
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);


  const handleGenerateImage = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      const base64Image = `data:image/png;base64,${data.images[0].base64}`;

      setImage(base64Image)

    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setLoading(false);
    }
  };

  const publishImage = async () => {
    setPublishing(true)

    try{
      // Automatically upload to Cloudinary after generation
      const uploadedUrl = await uploadImage(image);

      const newImage = await createImage({
        userId: userId,
        prompt: prompt,
        image: uploadedUrl,
      })

      if(newImage) {
        alert("Design published")
      }
    } catch (error) {
      console.error('Error publishing image:', error);
    } finally {
      setPublishing(false);
    }
    
  } 

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null
  }

  return (
    <main className="flex-grow p-5 max-w-3xl mx-auto">
      <h2 className="text-white text-2xl mb-5">Generate Your Own Design</h2>

      {/* Image Preview Section */}
      <div className="mb-5">
z
        {image !== null ? (
          <div className="relative w-[32rem] h-[28rem] mx-auto border border-gray-500 rounded-xl overflow-hidden mb-5">
            <img
              src={image} // Display generated image
              alt="Generated Room Design"
              className="w-full h-full rounded-lg object-fill"
            />
          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto border border-gray-300 rounded-lg h-64 flex items-center justify-center text-white">
            Enter prompt to generate image.
          </div>
        )}

        {/* Action Buttons */}
          {
            image !== null && (
              <div className="space-x-3 my-4">
                <button onClick={() => publishImage()} className={`bg-teal-600 text-white py-2 px-2 px-4 font-semibold text-lg rounded cursor-pointer ${publishing && 'opacity-50 cursor-not-allowed'}`} disabled={publishing}>
                  {publishing ? 'Publishing...' : 'Publish'}
                </button>
                <a
                    href={image} // The image source for the download
                    download="generated_image.png" // Suggested filename for the download
                    className="bg-teal-600 text-white py-2 px-2 px-4 font-semibold text-lg rounded cursor-pointer"
                >
                    Download
                </a>
              </div>
            )
          }
      </div>

      {/* Prompt Input and Generate Button */}
      <div className="flex mt-5">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Provide a prompt for AI Image Generation"
          className="flex-grow py-2 px-2 rounded bg-white text-black text-xl font-medium border-none mr-3"
        />
        <button
          onClick={handleGenerateImage}
          className={`bg-orange-600 text-white py-2 px-2 rounded cursor-pointer ${loading && 'opacity-50 cursor-not-allowed'}`}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>
    </main>
  );
};


const FurnitureSidebar = () => {
  return (
    <aside className="w-60 bg-[#1E1F20] p-5">
      <h3 className="text-gray-400 text-sm mb-3">Furnitures You Need To Buy</h3>
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
  );
};

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-stone-900">
      <Sidebar />
      <MainContent />
      <FurnitureSidebar />
    </div>
  );
};

export default Dashboard;