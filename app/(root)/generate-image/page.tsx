"use client"

import { createImage } from '@/lib/actions/images.action';
import { createUser, getUserById, updateCredits } from '@/lib/actions/user.actions';
import { uploadImage } from '@/lib/utils';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdOutlineFileDownload, MdOutlinePublish } from 'react-icons/md';

export default function ImageToImageForm() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [userImageUrl, setUserImageUrl] = useState(null)
  const [resultImages, setResultImages] = useState(null);
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

  const [credits, setCredits] = useState(0)
  const [loadingCredits, setLoadingCredits] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)
  const [publishing, setPublishing] = useState(false)
  const [messageId, setMessageId] = useState('')

  const { user, isLoaded } = useUser()

  useEffect(() => {
    const getCredits = async () => {
      if (user && isLoaded) {
        const userInfo = await getUserById(user.id);

        if (userInfo == null || undefined) {
          const userData = { clerkId: user.id, email: user?.emailAddresses[0].emailAddress, username: user.firstName }
          const newUser = await createUser(userData);
          setCredits(newUser?.creditBalance);
          setUserId(newUser?._id)
        } else {
          setCredits(userInfo.creditBalance);
          setUserId(userInfo._id)
        }
        setLoadingCredits(false)
      }
    }
    getCredits();
  }, [isLoaded, resultImages])

  const handleImageChange = async (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleDesignChange = (e: any) => {
    setDesignTypes((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!image) {
      alert('Please provide an image.');
      return;
    }

    setLoading(true);

    if (credits <= 10) {
      toast.error('Insufficient Credits: Please buy some credits to render your design.')
    }
    else {
      // Uploading image to cloudinary
      // const uploadedUrl = await uploadImage(image);

      // if (uploadedUrl) {
      //   setUserImageUrl(uploadedUrl);
      //   toast.success("Image Uploaded!");
      // }

      // Generate the prompt based on selected options
      const selectedDesigns = Object.keys(designTypes)
        .filter(key => designTypes[key])
        .join(' and ');

      const generatedPrompt = `Redesign the uploaded image to create a beautiful ${roomType} with a ${selectedDesigns} style. The room should be inviting and well-lit, featuring elegant furnishings and a harmonious color palette. Focus on enhancing the overall aesthetic and functionality of the space.`;

      setPrompt(generatedPrompt)

      const response = await fetch('/api/generate-image', {
        method: 'POST',
        body: JSON.stringify({
          prompt: generatedPrompt,
        }),
      });

      const res = await response.json();

      setMessageId(res?.messageId)

      setTimeout(async () => {
        const response = await fetch(`/api/get-progress?msgId=${res?.messageId}`, {
          method: 'GET',
        });

        const data = await response.json();
        setResultImages(data?.progress?.images);
        await updateCredits(userId, -1);
        toast.success('1 point debited.')

        setLoading(false);
      }, 60000);

    }

  };

  const publishImage = async (imageUrl: any) => {
    setPublishing(true)

    try {
      const uploadedUrl = await uploadImage(imageUrl);

      const newImage = await createImage({
        userId: userId,
        prompt: prompt,
        image: uploadedUrl,
      })

      if (newImage) {
        alert("Design published")
      }
    } catch (error) {
      console.error('Error publishing image:', error);
    } finally {
      setPublishing(false);
    }

  }


  return (
    <section className="grid grid-cols-12 min-h-screen">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <aside className="hidden col-span-2 w-full bg-slate-50 p-5 lg:flex flex-col justify-between">
        <div className="text-xl font-semibold">
          <Link href={`/`} className="logo text-5xl font-bold">
            <img src="logo.svg" alt="interiors.ai" />
          </Link>
        </div>
        <div className="flex flex-col items-center">
          {loadingCredits ?
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            :
            <h5 className="font-semibold my-4 text-lg">Generations Available : {credits}</h5>
          }
          <div className="flex items-center cursor-pointer border-2 rounded-full gap-2 px-3 mb-4 py-2">
            <UserButton showName />
          </div>
          <Link href={`/pricing`} className="bg-teal-600 text-white py-2 px-4 w-full text-center rounded cursor-pointer">
            Upgrade Premium
          </Link>
        </div>
      </aside>

      <div className="col-span-12 lg:col-span-8 grid grid-cols-10 place-content-between p-6 rounded-md">
        <form onSubmit={handleSubmit} className="col-span-10 md:col-span-5 space-y-6 px-2 md:px-8">
          <h1 className="text-2xl font-semibold mb-4 text-start">Design your room</h1>

          <div className="flex flex-col">
            <label htmlFor="image" className="mb-2 text-md font-medium">
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
                  className="border border-gray-300 rounded-md px-3 py-2 text-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
            }

          </div>

          <div className="flex flex-col">
            <label htmlFor="roomType" className="mb-2 text-md font-medium">
              Select Room Type:
            </label>
            <select
              id="roomType"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">--Select Room Type--</option>
              <option value="Dining Room">Dining Room</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Living Room">Living Room</option>
              <option value="Kitchen">Kitchen</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-md font-medium">Select Design Types:</label>
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
                  <span className={`flex flex-col items-center justify-center border-2 overflow-hidden rounded-md ${designTypes[type] ? 'border-teal-400' : 'border-gray-300'}`}>
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
            // disabled={loading || userImageUrl == null}
            disabled={loading}
            className={`w-full py-2 px-4 text-white rounded-md focus:outline-none disabled:bg-gray-600 ${loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-teal-500 hover:bg-teal-600'
              }`}
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
          <p className="text-end w-full">Requires: 1 point</p>
        </form>

        <div className="col-span-10 md:col-span-5 px-2 md:px-8 mt-10 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Rendered Image</h2>
          {resultImages !== null && (
            <div className="grid grid-cols-2 gap-5">
              {
                resultImages?.map((image) => (
                  <div className="relative w-full h-full overflow-hidden border border-gray-300 rounded-lg">
                    <img
                      src={image}
                      alt="Generated Result"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                      <button
                        onClick={() => publishImage(image)}
                        title="Publish"
                        className="bg-black text-white opacity-70 p-2 font-semibold text-lg rounded cursor-pointer"
                      >
                        <MdOutlinePublish />
                      </button>
                      <a
                        href={image}
                        download="generated_image"
                        className="bg-black text-white opacity-70 p-2 font-semibold text-lg rounded cursor-pointer"
                        title="Download"
                      >
                        <MdOutlineFileDownload />
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          )
          }
          {(resultImages == null && loading == false) && (
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-gray-200 text-gray-600 w-full h-64 text-center flex items-center justify-center">
                <p>Rendered image</p>
              </div>
              <div className="bg-gray-200 text-gray-600 w-full h-64 text-center flex items-center justify-center">
                <p>Rendered image</p>
              </div>
              <div className="bg-gray-200 text-gray-600 w-full h-64 text-center flex items-center justify-center">
                <p>Rendered image</p>
              </div>
              <div className="bg-gray-200 text-gray-600 w-full h-64 text-center flex items-center justify-center">
                <p>Rendered image</p>
              </div>
            </div>
          )}
          {
            loading && <div className="flex items-center justify-center w-full min-h-72">
              <p>Rendering images, please wait...</p>
            </div>
          }
        </div>
      </div>

      <aside className="col-span-12 lg:col-span-2 bg-slate-50 w-full p-5">
        <h3 className="text-black text-lg font-semibold mb-3">Furnitures You Need To Buy</h3>
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
