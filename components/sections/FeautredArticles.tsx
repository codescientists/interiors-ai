const FeaturedArticles = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="flex items-start mb-12 py-8">
            <div className="w-1/2">
              <p className="flex items-center text-xl font-semibold">
                <span>Featured News Articles </span>  <span className="w-14 h-[2px] ml-2" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}></span>
              </p>
              <h2 className="text-6xl font-bold">
              See what the media <br /> has to say about us!
              </h2>
            </div>
            <div className="w-1/2">
              <p className="text-xl font-medium mt-4 mb-6">
              Our innovative platform has been making waves in the design world. See what the media has to say about us!
              </p>

              <button 
                  className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
                  style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
                  <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                    In the news
                  </span>
                  <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                    In the news
                  </span>
                </button>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="group bg-slate-100 rounded-xl overflow-hidden">
              <div className="h-64 rounded-3xl overflow-hidden">
                <img
                  src="/gallery/2.png"
                  alt="New York Times Article"
                  className="rounded-3xl h-64 w-full group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-6 font-semibold">
                  <p className="text-gray-800 text-2xl">New York Times</p>
                  <p className="text-gray-800 text-xl">February 25, 2024</p>
                </div>
                <p className="text-black hover:text-blue-700 hover:cursor-pointer font-semibold text-3xl my-8">
                  "This platform is redefining how both amateurs and professionals
                  approach interior design. With just an image and a few clicks,
                  users can create stunning, fully customizable designs that are
                  both practical and inspirational."
                </p>
              </div>
            </div>
  
            {/* Article 2 */}
            <div className="group bg-slate-100 rounded-xl overflow-hidden">
              <div className="h-64 rounded-3xl overflow-hidden">
                <img
                  src="/gallery/3.png"
                  alt="TechCrunch Article"
                  className="rounded-3xl h-64 w-full group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-6 font-semibold">
                  <p className="text-gray-800 text-2xl">TechCrunch</p>
                  <p className="text-gray-800 text-xl">April 17, 2024</p>
                </div>
                <p className="text-black hover:text-blue-700 hover:cursor-pointer font-semibold text-3xl my-8">
                  "With AI rapidly advancing, this platform leads the charge in
                  providing accessible and powerful tools for virtual staging and
                  home design. It's a must-have for real estate professionals and
                  design enthusiasts alike."
                </p>
              </div>
            </div>
  
            {/* Article 3 */}
            <div className="group bg-slate-100 rounded-xl overflow-hidden">
              <div className="h-64 rounded-3xl overflow-hidden">
                <img
                  src="/gallery/1.png"
                  alt="Forbes Article"
                  className="rounded-3xl h-64 w-full group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-6 font-semibold">
                  <p className="text-gray-800 text-2xl">Forbes</p>
                  <p className="text-gray-800 text-xl">July 5, 2024</p>
                </div>
                <p className="text-black hover:text-blue-700 hover:cursor-pointer font-semibold text-3xl my-8">
                  "By giving users full control over customization while
                  leveraging AI for quick, high-quality design suggestions, this
                  platform bridges the gap between creativity and technology in an
                  intuitive way."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedArticles;
  