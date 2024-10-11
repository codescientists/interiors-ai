"use client";
import React, { useState } from 'react';
import { BsEye } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const ImageMasonry = ({ designs }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Masonry Layout */}
      <div className="py-10">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }} // Adjust number of columns based on screen width
        >
          <Masonry gutter="16px">
            {designs?.data?.map((design: { _id: string; image: string }) => (
              <div
                key={design._id}
                className="relative overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openModal(design.image)}
              >
                <img
                  src={design.image}
                  alt="Design"
                  className="w-full h-auto object-cover rounded-xl"
                />
                <button
                  className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <BsEye size={24} />
                </button>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Modal for Preview */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleBackgroundClick} // Add the background click handler here
        >
          <div className="relative w-full max-w-3xl mx-auto p-4">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto rounded-md"
            />
            <button
              className="absolute top-8 right-8 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={closeModal}
            >
              <MdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageMasonry;
