import Image from "next/image";
import PlanLeft from '../../assets/images/PlanLeft.png';
import PlanRight from '../../assets/images/PlanRight.png';

const Plans = () => {
  const pricingPlans = [
    {
      name: "LUMP SUM",
      price: "$3800",
      features: [
        "Design And Development",
        "$25/mo Hosting",
        "$100 fee Per Page after 5",
        "+$50/mo Unlimited Edits Add-on",
        "+$250 To Add A Blog",
        "24/7 Support",
        "Lifetime Updates",
      ],
    },
    {
      name: "MONTHLY",
      price: "$175",
      features: [
        "Design And Development",
        "Includes Hosting",
        "$100 fee Per Page After 5",
        "+$250 To Add A Blog",
        "Unlimited Edits",
        "24/7 Support",
        "Lifetime Updates",
      ],
    },
    {
      name: "ECOMMERCE",
      price: "$8K",
      features: [
        "Custom Shopify Store",
        "Configure Any And All Apps",
        "Integrated Shipping",
        "Shopify Tutorial Walkthrough",
        "Fully Editable In Shopify CMS",
        "+$50/mo Unlimited Edits",
        "24/7 Support",
      ],
    },
  ];

  return (
    <div className="font-poppins py-10 relative">
      {/* Background images for large screens */}
      <div className="w-full lg:w-[25rem] absolute top-[20%] hidden xl:block">
        <Image
          src={PlanLeft}
          alt="Plan Left Background"
          className="absolute inset-0 w-auto h-auto -z-10"
        />
      </div>
      <div className="w-full lg:w-[25rem] absolute left-[71%] top-[20%] hidden xl:block">
        <Image
          src={PlanRight}
          alt="Plan Right Background"
          className="absolute inset-0 w-auto h-auto -z-10"
        />
      </div>

      {/* Heading and intro text */}
      <div className="text-center mb-10 px-4 md:px-0">
        <h1 className="text-white text-[2rem] sm:text-[2.5rem] font-semibold">
          Our <span className="text-teal">Plans</span> and Pricing
        </h1>
        <p className="text-white text-[1.25rem] sm:text-[1.5rem]">
          Choose the perfect plan tailored to your needs, with flexible options.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-col lg:flex-row justify-center gap-2 lg:space-x-6 p-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative overflow-hidden text-center rounded-lg shadow-lg p-6 
              ${index === 1 ? 'lg:h-[37rem] lg:w-[24rem] -mt-7' : 'lg:w-[24rem] lg:h-[34rem]'} 
                border border-[rgba(250, 250, 250, 0.29)] hover:border-teal`}
          >
            <h2 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-white text-left mb-4">
              {plan.name}
            </h2>
            <ul className="text-white mb-6 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="mb-2 flex justify-between">
                  <span>{feature}</span>
                  <span className="text-teal">✓</span>
                </li>
              ))}
            </ul>
            <p
              className={`text-white text-[2.25rem] sm:text-[3rem] font-semibold mb-2 text-left ${
                index === 1 ? 'pt-24' : 'pt-16'
              }`}
            >
              {plan.price}
            </p>
            {/* Move button to the left */}
            <div className="flex justify-start">
              <button className="bg-tealgradient text-white py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:bg-teal-600 text-[0.875rem] lg:text-[1rem] font-bold">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
