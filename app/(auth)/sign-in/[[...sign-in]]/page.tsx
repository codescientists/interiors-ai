import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div 
        className="flex flex-col md:flex-row items-center overflow-hidden h-full w-full">
        {/* Left Side - Image and Text */}
        <div 
          className="md:w-1/2 p-8 h-full text-white flex flex-col items-start justify-start space-y-6"
          style={{ background: `url('/auth-bg.jpg')`}}>
          
          <img
              className=""
              src="/auth-logo.svg"
              alt="Living Room 1"
            />

          <h1 className="text-6xl font-bold relative">
            AI-Powered <span className="text-cyan-300">Image Generation</span> at Fingertips.
            <img src="/auth-5.svg" alt="" className="absolute -top-8 right-24" />  
          </h1>

          <div className="flex space-x-4 relative mt-4">
            <img
              className="object-cover rounded-3xl"
              src="/auth-1.svg"
              alt="Living Room 1"
            />
            <img
              className="object-cover rounded-3xl"
              src="/auth-2.svg"
              alt="Living Room 2"
            />
            <button className="absolute left-12 bottom-8 flex items-center text-lg space-x-2 bg-cyan-400 text-black font-semibold px-4 py-2 rounded-full">
              <img src="/auth-4.svg" alt="" className="h-8 w-8 animate-spin" /> <span>Transform Ideas Into Art</span> <img src="/auth-4.svg" alt="" className="h-8 w-8 animate-spin" />
            </button>
          </div>

        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8">
          <div className="mx-auto w-fit">
          <SignIn signUpUrl="/sign-up" />
          </div>
        </div>
      </div>
    </div>
  );
}
