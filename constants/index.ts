const pricingPlans = [
    {
      _id: 1,
      name: "Trial Plan",
      icon: "/assets/icons/trial-plan.svg", // Replace with actual icon path if needed
      price: 0, // Free
      credits: 5, // 5 image generation tools
      inclusions: [
        {
          label: "5 image generation tools",
          isIncluded: true,
        },
        {
          label: "Add your own watermark",
          isIncluded: true,
        },
        {
          label: "Furniture recommendations identified in the photos",
          isIncluded: true,
        },
        {
          label: "High-speed & High-quality image generation",
          isIncluded: true,
        },
        {
          label: "Access to all styles and models",
          isIncluded: true,
        },
        {
          label: "Photos automatically generated in the gallery",
          isIncluded: true,
        },
        {
          label: "Access to the gallery",
          isIncluded: true,
        },
      ],
    },
    {
      _id: 2,
      name: "Pro Plan",
      icon: "/assets/icons/pro-plan.svg", // Replace with actual icon path if needed
      price: 45.0, // $45.0 per month
      credits: 50, // 50 image generation tools
      inclusions: [
        {
          label: "50 image generation tools",
          isIncluded: true,
        },
        {
          label: "Add your own watermark",
          isIncluded: true,
        },
        {
          label: "Furniture recommendations identified in the photos",
          isIncluded: true,
        },
        {
          label: "High-speed & High-quality image generation",
          isIncluded: true,
        },
        {
          label: "Option to choose whether the photo goes to the gallery",
          isIncluded: true,
        },
        {
          label: "Ability to save as many photos as you want",
          isIncluded: true,
        },
        {
          label: "Access to all styles and models",
          isIncluded: true,
        },
      ],
    },
    {
      _id: 3,
      name: "Premium Plan",
      icon: "/assets/icons/premium-plan.svg", // Replace with actual icon path if needed
      price: 65.0, // $65.0 per month
      credits: 100, // 100 image generation tools
      inclusions: [
        {
          label: "100 image generation tools",
          isIncluded: true,
        },
        {
          label: "Add your own watermark",
          isIncluded: true,
        },
        {
          label: "Furniture recommendations identified in the photos",
          isIncluded: true,
        },
        {
          label: "High-speed & High-quality image generation",
          isIncluded: true,
        },
        {
          label: "Access to all styles and models",
          isIncluded: true,
        },
        {
          label: "Ability to save as many photos as you want",
          isIncluded: true,
        },
        {
          label: "Option to choose whether the photo goes to the gallery",
          isIncluded: true,
        },
      ],
    },
  ];
  
  export default pricingPlans;
  