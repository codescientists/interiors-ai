// @ts-nocheck
"use client";

import pricingPlans from "@/constants";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Checkout from "../shared/Checkout";
import { createUser, getUserById } from "@/lib/actions/user.actions";

const Pricing = () => {
    const [credits, setCredits] = useState(0);
    const [loadingCredits, setLoadingCredits] = useState(true);
    const [userId, setUserId] = useState(null)
    const { user, isLoaded } = useUser();
    
    useEffect(() => {
      const getCredits = async () => {
        if(user && isLoaded) {
          const userInfo = await getUserById(user.id);
  
          if (userInfo == null || undefined) {
            const userData = { clerkId: user.id, email: user?.emailAddresses[0].emailAddress, username: user.firstName }
            const newUser = await createUser(userData);
            setCredits(newUser?.creditBalance)
            setUserId(newUser?._id)
          }else{
            setCredits(userInfo.creditBalance)
            setUserId(userInfo?._id)
          }
          setLoadingCredits(false)
        }
      }
      getCredits();
    }, [isLoaded])  

  return (
    <section className="container py-16 px-8">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="flex items-center justify-center text-xl space-x-2">
          <span
            className="w-14 h-[3px]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`,
            }}
          ></span>
          <span className="font-semibold text-2xl">Pricing</span>
          <span
            className="w-14 h-[3px]"
            style={{
              backgroundImage: `linear-gradient(to left, rgba(5, 13, 51, 0), rgba(5, 13, 51, .8))`,
            }}
          ></span>
        </p>
        <h2 className="text-6xl max-w-3xl mx-auto font-bold mb-4">
          Select Pricing Plan That <br /> Unlocks Unlimited Possibilities.
        </h2>
        <p className="text-xl max-w-2xl mx-auto font-medium">
          Empower projects with cutting-edge AI services designed to amplify
          creativity and efficiency. Tailored solutions cover all needs.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan._id}
              className={`p-8 rounded-3xl text-center shadow-lg ${
                plan.name === 'Pro Plan' ? 'bg-yellow-300' : 'bg-teal-200'
              }`}
            >
              <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold">
                {plan.price === 0 ? 'Free' : `$${plan.price}`}
              </p>
              <p className="text-sm text-gray-500 mb-6">
                {plan.price === 0 ? 'Per Year' : 'Per Month'}
              </p>
              <ul className="text-left mb-6 space-y-3">
                {plan.inclusions.map((inclusion, index) => (
                  <li key={index}>
                    {inclusion.isIncluded ? '✔' : '✘'} {inclusion.label}
                  </li>
                ))}
              </ul>
                <SignedIn>
                  {
                    plan.name == 'Trial Plan' ?
                        <button 
                        className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
                        style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
                            <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                                Free
                            </span>
                            <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                                Free
                            </span>
                        </button>
                    :
                    <Checkout
                        plan={plan.name}
                        amount={plan.price}
                        credits={plan.credits}
                        buyerId={userId}
                    />
                  }
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <button 
                        className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
                        style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
                            <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                                Buy Credit
                            </span>
                            <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                                Buy Credit
                            </span>
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
