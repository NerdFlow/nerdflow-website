import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../assets/images/HeroSectionImage.png';
import HeroSectionbg from '../../assets/svgs/HeroSectionBg.svg';

const HeroSection = () => {
  return (
    <section className="font-poppins flex flex-col lg:flex-row items-center justify-between py-10 lg:py-10 container mx-auto px-4 relative">
      {/* Text Section with Background */}
      <div className="w-full lg:w-[55%] relative mb-10 lg:mb-0">
        {/* Background Image using Image component */}
        <Image 
          src={HeroSectionbg} 
          alt="Hero Section Background" 
          className="absolute inset-0 w-full h-full object-cover -z-10 hidden lg:block"
          style={{ top: '-30%', left: '-15%' }} 
        />
        <h1 className="text-[2rem] lg:text-[2.813rem] font-bold text-white relative z-10">
          Empowering your businesses with innovative <br />
          <span className='text-teal text-[2.5rem] lg:text-[4rem]'>Software solutions</span>
        </h1>
        <p className="text-base lg:text-lg mb-6 lg:mb-8 font-bold relative z-10">
          Discover how we have transformed businesses across various industries
          through our innovative solutions.
        </p>
        <Link 
          href="/contact" 
          className="bg-tealgradient text-white py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:bg-teal-600 text-[0.875rem] lg:text-[1rem] font-bold relative z-10"
        >
          Get Started
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center lg:w-auto">
        <Image 
          src={HeroImage} 
          alt="Hero Image" 
          className="w-[18rem] h-[10rem] lg:w-[25rem] lg:h-[15rem]" 
        />
      </div>
    </section>
  );
};

export default HeroSection;
