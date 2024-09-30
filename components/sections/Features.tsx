const Features = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          {/* Title Section */}
          <div className="text-center mb-16">
            <p className="flex items-center justify-center text-xl space-x-2">
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to right, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}>
                </span>
                <span className="font-semibold text-2xl">
                Features
                </span>
                <span className="w-14 h-[3px]" style={{ backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`}}></span>
            </p>
            <h2 className="text-6xl max-w-3xl mx-auto font-bold mb-4">
            Explore Innovative Technology at Your Fingertips.
            </h2>
            <p className="text-xl max-w-2xl mx-auto font-medium">
            Embark on a journey of innovation with our feature-packed platform, designed to unlock endless possibilities for creativity.
            </p>
        </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card 1 */}
              <div className="bg-blue-100 px-8 py-6 rounded-3xl flex items-start justify-center space-x-4">
                <div className="bg-white p-4 rounded-full my-auto h-20 w-32">
                  <img src="/features/3.svg" alt="" className="h-full w-full"/>
                </div>
                <div className="text-start">
                  <h4 className="text-3xl font-semibold text-gray-900">
                    Dynamic Design Exploration
                  </h4>
                  <p className="text-gray-900 text-xl font-medium">
                    Plan out hotel rooms, restaurants, or retail spaces with precision, using AI-driven designs that align with brand aesthetics and functional requirements.
                  </p>
                </div>
              </div>
  
              {/* Card 2 */}
              <div className="bg-blue-100 px-8 py-6 rounded-3xl flex items-start justify-center space-x-4">
                <div className="bg-white p-4 rounded-full my-auto h-20 w-32">
                  <img src="/features/4.svg" alt="" className="h-full w-full"/>
                </div>
                <div className="text-start">
                  <h4 className="text-3xl font-semibold text-gray-900">
                    Personalized Design Tweaks
                  </h4>
                  <p className="text-gray-900 text-xl font-medium">
                    Fine-tune AI-generated suggestions or create your own design from Promt—the possibilities are limitless.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Image 1 */}
            <div className="lg:col-span-2">
              <img
                src="/features/1.png"
                alt="Dynamic Design"
                className="w-full h-96 rounded-3xl shadow-lg"
              />
            </div>
  
            {/* Image 2 */}
            <div className="lg:col-span-2">
              <img
                src="/features/2.png"
                alt="Interior Design"
                className="w-full h-96 rounded-3xl shadow-lg"
              />
            </div>
  
            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card 3 */}
              <div className="bg-blue-100 px-8 py-6 rounded-3xl flex items-start justify-center space-x-4">
                <div className="bg-white p-4 rounded-full my-auto h-20 w-32">
                  <img src="/features/5.svg" alt="" className="h-full w-full"/>
                </div>
                <div className="text-start">
                  <h4 className="text-3xl font-semibold text-gray-900">
                  Real-Time Feedback and Iteration
                  </h4>
                  <p className="text-gray-900 text-xl font-medium">
                  Watch as AI offers real-time updates based on your preferences. Instantly change colors, swap furniture, or try different layouts with just a click.
                    </p>
                </div>
              </div>
  
              {/* Card 4 */}
              <div className="bg-blue-100 px-8 py-6 rounded-3xl flex items-start justify-center space-x-4">
                <div className="bg-white p-4 rounded-full my-auto h-20 w-32">
                  <img src="/features/6.svg" alt="" className="h-full w-full"/>
                </div>
                <div className="text-start">
                  <h4 className="text-3xl font-semibold text-gray-900">
                  Cross-Domain Applications

                  </h4>
                  <p className="text-gray-900 text-xl font-medium">
                  Enhance property listings with virtual staging that transforms empty rooms into fully furnished, styled spaces, increasing buyer engagement.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  