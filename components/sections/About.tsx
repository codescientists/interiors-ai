const About = () => {
    return (
      <section className="bg-gradient-to-b from-blue-900 to-black py-24">
        <div className="container w-full mx-auto text-center">
          {/* Title Section */}
          <h2 className="text-6xl text-white font-bold mb-6 mx-auto w-fit">
            <p className="flex items-center text-xl space-x-2 text-white mx-auto w-fit">
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, .8))`}}>
                </span>
                <span className="font-semibold text-2xl">
                About Us
                </span>
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, .8))`}}></span>
            </p>
            Pioneering Future of <br />
            AI-Infused Visual Innovation.
          </h2>
          <p className="text-gray-200 mb-12 text-xl max-w-xl mx-auto">
            We are the architects of a visionary fusion where cutting-edge technology
            meets boundless creativity. Our journey began with redefining visual storytelling.
          </p>
  
          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-10 items-start">
            {/* Image 1 */}
            <div className="col-span-3">
              <img
                src="/about/1.jpeg"
                alt="Luxurious Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
  
            {/* Info Cards */}
            <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="h-48 text-start text-white p-6 rounded-3xl shadow-lg" style={{ backgroundImage: `linear-gradient(230deg, rgba(68, 255, 255, .25) 10%, rgba(68, 255, 255, 0))`}}>
                <h4 className="text-2xl font-bold text-white mb-2">50+</h4>
                <p className="text-xl">Customization Options</p>
              </div>
              {/* Image 2 */}
              <div className="">
                <img
                  src="/about/2.jpg"
                  alt="AI-Centric Interior"
                  className="h-48 w-full object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className="h-48 text-start bg-cyan-300 p-6 rounded-3xl shadow-lg" >
                <h4 className="text-2xl font-bold text-gray-900 mb-2">5x</h4>
                <p className="text-xl">Faster Turnaround</p>
              </div>
              <div className="h-48 text-white text-start bg-blue-900 p-6 rounded-3xl shadow-lg" style={{ backgroundImage: `linear-gradient(230deg, rgba(68, 255, 255, .25) 10%, rgba(68, 255, 255, 0))`}}>
                <h4 className="text-2xl font-bold text-white mb-2">10,000+</h4>
                <p className="text-xl">Images Generated</p>
              </div>
            </div>
  
  
            {/* Text Card */}
            <div className="col-span-3 bg-[#0b2547] h-full text-start p-6 rounded-3xl shadow-lg">
              <h4 className="text-4xl font-bold text-white mb-4">
                Glimpse into Our AI-Centric Interior.
              </h4>
              <p className="text-gray-200 text-lg mb-4">
                Our goal is to democratize interior design by providing a simple,
                intuitive platform that anyone can use, regardless of design
                experience or budget.
              </p>
              {/* Features List */}
              <div className="flex space-x-6">
                <div className="flex flex-col items-center">
                  <div className="bg-blue-800 p-4 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.09 9.26H24L15.18 15l3.09 9.26L12 18l-6.27 6.26L9.18 15 0 9.26h9.09L12 0z" />
                    </svg>
                  </div>
                  <p className="text-white mt-2 text-sm">Limitless Creativity</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-800 p-4 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0l3.09 9.26H24L15.18 15l3.09 9.26L12 18l-6.27 6.26L9.18 15 0 9.26h9.09L12 0z" />
                    </svg>
                  </div>
                  <p className="text-white mt-2 text-sm">Cutting-Edge AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  