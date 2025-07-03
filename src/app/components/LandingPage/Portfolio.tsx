import Image from "next/image"
import Link from "next/link"
import ClearEats from "../../assets/images/ClearEats.png"
// import DailyBazar from "../../assets/images/DailyBazar.png"
import VTK from "../../assets/images/VTK.png"
import WizzLeft from "../../assets/images/WizzLeft.png"
import WizzRight from "../../assets/images/WizzRight.png"
import PorfolioSlider from "./PorfolioSlider"
import HumanResourceManagement from "../CaseStudy/human-resource-management/assets/cover.png"
import LitigationManagementSystem from "../CaseStudy/litigation-management-system/assets/cover.png"
import ClinicManagementSystem from "../CaseStudy/brt-centers/assets/brt1.png"
import FundingManagementSystem from "../CaseStudy/funding-management-system/assets/cover.png"
import RecordManagementSystem from "../CaseStudy/record-management-system/assets/cover.png"
import ShippingERP from "../CaseStudy/shipping-erp/assets/cover.png"
import WarehousingERP from "../CaseStudy/warehousing-erp/assets/cover.png"
import WizzManagementSystem from "../CaseStudy/wizz/assets/cover.png"
import LogisticsERP from "../CaseStudy/logistics-erp/assets/cover.png"
import DailyBazarManagementSystem from "../CaseStudy/daily-bazar/assets/cover.png"
import Wizz from "../../assets/images/Wizz.png"

const Portfolio = () => {
  const slides1 = [
    {
      image: HumanResourceManagement,
      heading: "Human Resource Management",
      description:
        "An intuitive system to simplify employee lifecycle management, payroll, and performance tracking.",
      link: "/case-study/human-resource-management",
    },
    {
      image: ClinicManagementSystem,
      heading: "Clinic Management System",
      description:
        "A streamlined solution for managing patient records, appointments, and clinic operations",
      link: "/case-study/brt-centers",
    },
    {
      image: LitigationManagementSystem,
      heading: "Litigation Management System",
      description:
        "A comprehensive platform for law firms to manage cases, clients, and court schedules efficiently.",
      link: "/case-study/litigation-management-system",
    },
  ]
  const slides2 = [
    {
      image: LogisticsERP,
      heading: "Logistics ERP",
      description:
        "A robust solution for optimizing fleet management, shipment tracking, and logistics operations",
      link: "/case-study/logistics-erp",
    },
    {
      image: ShippingERP,
      heading: "Shipping ERP",
      description:
        "An integrated system for managing shipping schedules, fleet operations, and compliance tracking.",
      link: "/case-study/shipping-erp",
    },
    {
      image: WarehousingERP,
      heading: "Warehousing ERP",
      description:
        "An all-in-one platform for inventory control, warehouse operations, and supply chain management.",
      link: "/case-study/warehousing-erp",
    },
  ]
  const slides3 = [
    {
      image: DailyBazarManagementSystem,
      heading: "ECommerce Store + Admin",
      description:
        "A feature-rich platform to handle product listings, order processing, and customer engagement for online stores.",
      link: "/case-study/daily-bazar",
    },
    {
      image: FundingManagementSystem,
      heading: "Funding Management System",
      description:
        "A tailored platform to oversee funding applications, approvals, and financial tracking seamlessly.",
      link: "/case-study/funding-management-system",
    },
    {
      image: RecordManagementSystem,
      heading: "Record Management System",
      description:
        "A secure solution for digitizing, organizing, and retrieving organizational records efficiently.",
      link: "/case-study/record-management-system",
    },
  ]
  return (
    <div className="font-poppins mx-auto container mt-16" id="portfolio">
      <div data-aos="fade-up" className="mb-8">
        <h1 className="text-white text-3xl font-semibold mb-4">
          Our <span className="text-teal">Portfolio</span>
        </h1>
      </div>
      <div data-aos="fade">
        <h2 className="text-white text-3xl font-semibold my-4 pt-8">
          Customer Relationship Management
        </h2>
        <p className="text-base font-normal font-inter sm:text-base w-full sm:w-3/5 text-gray-400">
          Dive into a collection of our finest projects, exemplifying our
          prowess in delivering exceptional websites, applications, and digital
          solutions.
        </p>

        {/*  */}
        <PorfolioSlider slides={slides1} />
      </div>

      <div data-aos="fade">
        <h2 className="text-white text-3xl font-semibold my-4">
          Enterprise Resource Planning
        </h2>
        <p className="text-base font-normal font-inter sm:text-base w-full sm:w-3/5 text-gray-400">
          Dive into a collection of our finest projects, exemplifying our
          prowess in delivering exceptional websites, applications, and digital
          solutions.
        </p>

        <PorfolioSlider slides={slides2} />
      </div>

      <div data-aos="fade">
        <h2 className="text-white text-3xl font-semibold my-4">
          Custom Tailored Solution
        </h2>
        <p className="text-base font-normal font-inter sm:text-base w-full sm:w-3/5 text-gray-400">
          Dive into a collection of our finest projects, exemplifying our
          prowess in delivering exceptional websites, applications, and digital
          solutions.
        </p>

        <PorfolioSlider slides={slides3} />
      </div>

      <div className="w-full flex justify-center mb-8 py-8">
        <Link
          href="/services"
          className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-colors duration-300 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
    hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
    hover:text-custom-text
  "
        >
          See All Projects
        </Link>
      </div>

      {/* Wizz */}
      <section className="hidden font-poppins flex flex-col-reverse lg:flex-row items-center justify-between py-4 mx-auto  relative">
        {/* Image Section */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-[35.8rem] h-auto mb-6 lg:mb-0 mt-6 md:mt-0"
        >
          <Image src={Wizz} alt="Wizz Image" className="w-full h-auto" />
        </div>

        {/* Text Section with Background */}
        <div className="w-full lg:w-[40rem]">
          <Image
            src={WizzRight}
            alt="Hero Section Background"
            className="absolute md:w-[75%] h-[200%] md:h-auto  2xl:block xl:block -z-10
            md:object-contain
            -top-[30%]
            left-[20px]
            md:-top-[100%] md:left-[32%]
            "
          />

          <Image
            src={WizzLeft}
            alt="Portfolio Background"
            className="absolute inset-0 w-auto h-auto 2xl:block xl:block -z-10 left-[-150%] 2xl:left-[-230%]"
            style={{ top: "-170%" }}
          />

          <h1 className="text-2xl  font-semibold text-white mb-4">
            Wizz Logistics
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            Automating logistics operations with a custom ERP, optimizing
            inventory management and order processing.
          </p>
          <Link
            href="/case-study/brt-centers"
            className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-colors duration-300 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
    hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
    hover:text-custom-text
  "
          >
            See Case Study
          </Link>
        </div>
      </section>

      {/* VTK */}
      <section className="hidden font-poppins flex flex-col lg:flex-row items-center justify-between py-4  mx-auto  relative">
        <Image
          src={WizzRight}
          alt="Hero Section Background"
          className="absolute md:w-[75%] h-[200%] md:h-auto md:hidden -z-10
            md:object-contain
            top-[30%]
            left-[20px]
            md:-top-[100%] md:left-[32%]
            "
        />
        {/* Text Section */}
        <div className="w-full lg:w-[34rem] mb-6 lg:mb-0">
          <h1 className="text-2xl  font-semibold text-white mb-4">
            VTK Legal Solution
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            Streamlining legal processes with advanced solutions for case
            management, compliance, and documentation.
          </p>
          <Link
            href="/case-study/brt-centers"
            className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-all duration-300 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
    hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
    hover:text-custom-text
  "
          >
            See Case Study
          </Link>
        </div>

        {/* Image Section */}
        <div data-aos="fade-left" className="w-full lg:w-[35.8rem] h-auto">
          <Image src={VTK} alt="VTK Image" className="w-full h-auto" />
        </div>
      </section>

      {/* Clear Eats */}
      <section className="hidden font-poppins flex flex-col-reverse lg:flex-row items-center justify-between py-4  mx-auto  relative">
        {/* Image Section */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-[35.8rem] h-auto mb-6 lg:mb-0 mt-6 md:mt-0"
        >
          <Image
            src={ClearEats}
            alt="Clear Eats Image"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[34rem]">
          <h1 className="text-2xl  font-semibold text-white mb-4">
            Clear Eats Web Application
          </h1>
          <p className="text-sm sm:text-base mb-8 font-bold text-white">
            Experience the sleek, user-friendly design of Clear Eats through our
            app screenshots.
          </p>
          <Link
            href="/case-study/brt-centers"
            className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-all duration-300 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
    hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
    hover:text-custom-text
  "
          >
            See Case Study
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
