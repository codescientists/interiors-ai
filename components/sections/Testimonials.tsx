const Testimonials = () => {

  return (
    <section className="bg-gradient-to-b from-blue-900 to-black py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-6xl text-white text-center font-bold mb-6 mx-auto w-fit">
          <p className="flex items-center text-xl space-x-2 text-white mx-auto w-fit">
            <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, .8))` }}>
            </span>
            <span className="font-semibold text-2xl">
              Testimonials
            </span>
            <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, .8))` }}></span>
          </p>
          Testimonials That Speak <br /> Volumes About Commitment.
        </h2>
        <p className="text-gray-200 mb-12 text-xl text-center max-w-xl mx-auto">
          Our clients' satisfaction is at the heart of everything we do, and we're proud to share their stories of success, collaboration, and transformation.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-6">
          {/* Testimonial 1 */}
          <div className="col-span-10 xl:col-span-7 bg-[#0e3152] h-full flex items-center justify-center p-4 rounded-3xl">
            <div className="flex flex-col xl:flex-row items-start h-full">
              <img
                src="/testimonial/1.jpg"
                alt="Alex Wong Testimonial"
                className="rounded-3xl w-80 h-80 object-cover"
              />
              <div className="ml-0 xl:ml-8 h-full">
                <h3 className="text-3xl font-bold">
                  "Game-changer for me."
                </h3>
                <p className="text-gray-200 my-5 font-medium text-xl">
                  "The level of customization and AI-generated designs is
                  unparalleled! Our team has been able to deliver projects
                  faster, with higher quality results. The support team is
                  always available, ensuring we never face downtime. Highly
                  recommended!"
                </p>
                <hr className="border border-gray-700 my-4" />
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="mt-4 font-bold text-2xl">Mister Alex Wong</p>
                    <p className="text-gray-200 text-2xl">Freelance Graphic Designer</p>
                  </div>
                  <img src="/testimonial/5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-10 xl:col-span-3 bg-[#0e3152] h-[22rem] w-full p-3 rounded-3xl">
            <img
              src="/testimonial/2.png"
              alt="Alex Wong Testimonial"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="grid grid-cols-10 md:grid-cols-10 lg:grid-cols-10 gap-5 mt-5">
          <div className="col-span-10 xl:col-span-3 bg-[#0e3152] h-[22rem] w-full p-3 rounded-3xl">
            <img
              src="/testimonial/3.png"
              alt="Alex Wong Testimonial"
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
          <div className="col-span-10 xl:col-span-7 bg-[#0e3152] h-full flex items-center justify-center p-4 rounded-3xl">
            <div className="flex flex-col xl:flex-row items-start">
              <img
                src="/testimonial/4.jpg"
                alt="Alex Wong Testimonial"
                className="rounded-3xl w-80 h-80 object-cover"
              />
              <div className="ml-0 xl:ml-8 h-full">
                <h3 className="text-3xl font-bold">
                  “Transformed Our Real Estate Business”
                </h3>
                <p className="text-gray-200 my-5 font-medium text-xl">
                  “Using this platform has completely changed the way we approach virtual staging. The AI is smart, intuitive, and the results look like professional designs. Our listings have received more engagement, and we’ve closed more deals because of it. The commitment to quality is evident in every feature!”
                </p>
                <hr className="border border-gray-700 my-4" />
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="mt-4 font-bold text-2xl">Mrs. Sarah Johnson</p>
                    <p className="text-gray-200 text-2xl">Marketing Manager, Tech Inc.</p>
                  </div>
                  <img src="/testimonial/5.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;  