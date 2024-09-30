const Footer = () => {
  return (
    <footer className="container bg-slate-900 text-white mt-40">

      <section className="py-16 -translate-y-40 rounded-3xl overflow-hidden" style={{ background: `linear-gradient(to bottom, #41d9d9, #ffffff);`}} >
        <div className="container mx-auto grid grid-cols-10 px-8 lg:px-16">
          {/* Left Image Section */}
          <div className="col-span-2 w-full">
            <div className="relative">
              <img
                src="/footer/1.png"
                alt="Interior Design Image"
                className="rounded-3xl shadow-lg -rotate-12 -translate-x-14 translate-y-20"
              />
            </div>
          </div>

          {/* Middle Text Section */}
          <div className="col-span-6 w-full text-center flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold text-gray-900">
              Unlock Limitless Creativity: Let AI Bring Imagination to Life.
            </h1>
            <p className="mt-4 text-xl font-medium text-black">
              Whether you're looking to elevate your brand, captivate your audience, or simply unleash your creativity, our platform is here to help you succeed.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-6 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
              <button 
                className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
                style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                  Get Started Now
                </span>
                <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                  Get Started Now
                </span>
              </button>
              <button className="group relative overflow-hidden border border-blue-600 text-black bg-[#9ef0ff] py-3 px-8 rounded-xl text-xl font-semibold">
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                  Connect with us
                </span>
                <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                  Connect with us
                </span>
              </button>
            </div>
          </div>

          <div className="col-span-2 w-full">
            <div className="absolute bottom-0 right-0">
              <img
                src="/footer/2.png"
                alt="Interior Design Image"
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-10 gap-8">
        
        <div className="col-span-3 space-y-8">
          {/* Logo and Description */}
          <div className="bg-slate-800 p-10 rounded-3xl">
            <img src="/footer/logo.svg" alt="" />
            <p className="mt-4 text-xl font-medium leading-6">
              Experience the future of image creation with our AI-powered tech, where innovation meets imagination to bring your ideas to life.
            </p>
          </div>
        
          {/* Contact Info */}
          <div className="bg-slate-800 p-10 rounded-3xl">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="mt-4 space-y-3 text-xl font-medium">
              <li className="flex items-center">
                <span>📞</span> <span className="ml-2">(000) 012 3456 7890</span>
              </li>
              <li className="flex items-center">
                <span>📧</span> <span className="ml-2">algodas@gmail.com</span>
              </li>
              <li className="flex items-center">
                <span>🏠</span> <span className="ml-2">LA-41 Parker Rd., Mexico</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons */}
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="hover:opacity-75">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        
       <div className="col-span-7 space-y-8">
         {/* Subscribe to Newsletter */}
         <div className="bg-slate-800 p-10 rounded-3xl">
            <h3 className="font-semibold text-4xl">Subscribe to Newsletter</h3>
            <form className="mt-4 flex items-center justify-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-[80%] p-3 rounded-md text-white bg-slate-700"
              />
              <button 
                className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
                style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
                <span className="block w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                  Subscribe
                </span>
                <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                  Subscribe
                </span>
              </button>
            </form>
          </div>
          
          {/* Help Centre Image and Info */}
          <div className="bg-slate-800 p-10 rounded-3xl">
            <img
              src="/footer/3.png"
              alt="Help Centre"
              className="ml-auto w-[80%] mb-4 rounded-lg"
            />
          </div>
       </div>
        
      </div>
    </footer>
  );
};

export default Footer;
