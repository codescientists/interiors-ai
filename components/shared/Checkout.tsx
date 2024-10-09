"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { checkoutCredits } from "@/lib/actions/transaction.actions";
import toast from "react-hot-toast";
const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
        toast.success('Order Placed!')
    }

    if (query.get("canceled")) {
        toast.error('Order Cancelled!')
    }
  }, []);

  const onCheckout = async () => {
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };
    
    await checkoutCredits(transaction);
  };

  return (
    <form action={onCheckout} method="POST">
      <section>
        <button 
            className="group relative overflow-hidden text-white py-3 px-8 rounded-xl text-xl font-semibold" 
            style={{ backgroundImage: `linear-gradient(140deg, #4080ff, #05f)`}}>
                <span className="block transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                    Buy Credits
                </span>
                <span className="absolute left-[50%] top-full -translate-x-[50%] w-full transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-150%]">
                    Buy Credits
                </span>
            </button>
      </section>
    </form>
  );
};

export default Checkout;