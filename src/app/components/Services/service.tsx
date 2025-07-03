"use client"
import { StaticImageData } from "next/image"
import { useState, useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import "swiper/css"
import "swiper/css/free-mode"
import { Swiper, SwiperSlide } from "swiper/react"
import serviceBg from "../../assets/images/serviceBg.png"
import Projects from "./Projects"
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

const Service = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    if (category && typeof category === "string") {
      setActiveFilter(category)
    }
  }, [category])

  const projects: {
    heading: string
    description: string
    link: string
    image: StaticImageData
    category?:
      | "CRM & ERP Development"
      | "AI Development"
      | "App Development"
      | "UI/UX Design"
      | "Website Development"
      | "SaaS Development"
      | "Search Engine Optimization"
      | "Social Media Marketing"
      | "Data Engineering"
  }[] = [
    {
      image: HumanResourceManagement,
      heading: "Human Resource Management",
      description:
        "An intuitive system to simplify employee lifecycle management, payroll, and performance tracking.",
      link: "/case-study/human-resource-management",
      category: "CRM & ERP Development",
    },
    {
      image: ClinicManagementSystem,
      heading: "Clinic Management System",
      description:
        "A streamlined solution for managing patient records, appointments, and clinic operations",
      link: "/case-study/brt-centers",
      category: "CRM & ERP Development",
    },
    {
      image: LitigationManagementSystem,
      heading: "Litigation Management System",
      description:
        "A comprehensive platform for law firms to manage cases, clients, and court schedules efficiently.",
      link: "/case-study/litigation-management-system",
      category: "CRM & ERP Development",
    },
    {
      image: WizzManagementSystem,
      heading: "Wizz Logistics",
      description:
        "Automating logistics operations with a custom ERP, optimizing inventory management and order processing.",
      link: "/case-study/wizz",
      category: "CRM & ERP Development",
    },
    {
      image: LogisticsERP,
      heading: "Logistics ERP",
      description:
        "A robust solution for optimizing fleet management, shipment tracking, and logistics operations",
      link: "/case-study/logistics-erp",
      category: "CRM & ERP Development",
    },
    {
      image: ShippingERP,
      heading: "Shipping ERP",
      description:
        "An integrated system for managing shipping schedules, fleet operations, and compliance tracking.",
      link: "/case-study/shipping-erp",
      category: "CRM & ERP Development",
    },
    {
      image: WarehousingERP,
      heading: "Warehousing ERP",
      description:
        "An all-in-one platform for inventory control, warehouse operations, and supply chain management.",
      link: "/case-study/warehousing-erp",
      category: "CRM & ERP Development",
    },
    {
      image: DailyBazarManagementSystem,
      heading: "ECommerce Store + Admin",
      description:
        "A feature-rich platform to handle product listings, order processing, and customer engagement for online stores.",
      link: "/case-study/daily-bazar",
      category: "CRM & ERP Development",
    },
    {
      image: FundingManagementSystem,
      heading: "Funding Management System",
      description:
        "A tailored platform to oversee funding applications, approvals, and financial tracking seamlessly.",
      link: "/case-study/funding-management-system",
      category: "CRM & ERP Development",
    },
    {
      image: RecordManagementSystem,
      heading: "Record Management System",
      description:
        "A secure solution for digitizing, organizing, and retrieving organizational records efficiently.",
      link: "/case-study/record-management-system",
      category: "CRM & ERP Development",
    },
  ]

  const filteredItems =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => {
          return item.category === activeFilter
        })

  return (
    <>
      <div data-aos="fade-up">
        <div className="relative h-[28rem]">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `url(${serviceBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              top: "-25%",
            }}
          ></div>

          {/* Content Layer */}
          <div className="relative z-10 flex items-end h-[28rem] bg-custom-gradient2">
            <div className="container flex flex-col gap-4">
              <h1 className="text-white font-semibold text-3xl">
                Our <span className="text-teal">Services</span>
              </h1>
              <p className="text-white text-lg">
                Elevating Business Solutions: Discover Our Comprehensive
                Services.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons Section */}
        <div className="py-8 bg-black">
          <div className="container flex justify-center">
            <Swiper
              slidesPerView="auto"
              freeMode={true}
              className="flex justify-center"
            >
              {[
                "All",
                "CRM & ERP Development",
                "AI Development",
                "App Development",
                "UI/UX Design",
                "Website Development",
                "SaaS Development",
                "Search Engine Optimization",
                "Social Media Marketing",
                "Data Engineering",
              ].map((filter) => (
                <SwiperSlide key={filter} className="!w-auto">
                  <div className="px-1">
                    <button
                      onClick={() => setActiveFilter(filter)}
                      className={`text-sm p-[0.75rem] sm:px-6 sm:py-3 lg:px-3 lg:py-4 rounded-[0.625rem] whitespace-nowrap ${
                        activeFilter === filter
                          ? "bg-tealgradient text-white"
                          : "bg-foundation-grey-darker text-white"
                      }`}
                    >
                      {filter}
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Display Filtered Items */}
        {/* <div className="flex flex-col items-center space-y-4 container ">
          {filteredItems.map((item, index) => (
            <section
              key={item.id}
              className="font-poppins flex flex-col lg:flex-row items-center justify-between py-14 container mx-auto px-4 relative"
            >
              {item.reverse ? (
                <>
                  <div
                    data-aos="fade-right"
                    className="w-full lg:w-[35.8rem] h-auto mb-6 lg:mb-0 relative"
                  >
                    {item.rightImage && (
                      <Image
                        src={item.rightImage}
                        alt={`${item.title} Right Background`}
                        className="absolute inset-0 w-auto h-auto -z-10  hidden xl:block xl:left-[150%] 2xl:hidden"
                        style={{ top: "-50%" }}
                      />
                    )}
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full lg:w-[34rem]">
                    <h1 className="text-2xl  font-semibold text-white mb-4">
                      {item.title}
                    </h1>
                    <p className="text-sm sm:text-base mb-8 font-bold text-white">
                      {item.description}
                    </p>
                    <Link
                      href="/case-study/brt-centers"
                      className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-colors duration-400 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
                    hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
                   hover:text-custom-text"
                    >
                      See Case Study
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full lg:w-[34rem] mb-6 lg:mb-0 relative">
                    {item.leftImage && (
                      <Image
                        src={item.leftImage}
                        alt={`${item.title} Left Background`}
                        className="absolute inset-0 w-auto h-auto -z-10"
                        style={{ top: "-250%", left: "-50%" }}
                      />
                    )}
                    <h1 className="text-2xl font-semibold text-white mb-4">
                      {item.title}
                    </h1>
                    <p className="text-sm sm:text-base mb-8 font-bold text-white">
                      {item.description}
                    </p>
                    <Link
                      href="/case-study/brt-centers"
                      className="bg-tealgradient border-[0.04rem] shadow-custom-shadow-small border-black text-white py-[0.75rem] lg:py-3 px-[1.5rem] lg:px-6 rounded-lg transition-colors duration-400 ease-in text-[0.875rem] lg:text-[1rem] font-bold relative z-10 
                     hover:bg-[linear-gradient(76deg,#CECECE_0%,#FFF_100%)] hover:shadow-custom-shadow 
                    hover:text-custom-text"
                    >
                      See Case Study
                    </Link>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="w-full lg:w-[35.8rem] h-auto"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-auto"
                    />
                  </div>
                </>
              )}
            </section>
          ))}
        </div> */}
      </div>
      <Projects
        projects={
          activeFilter == "All"
            ? []
            : projects.filter((item) => {
                return item.category != activeFilter
              })
        }
        filteredProjects={filteredItems}
      />
    </>
  )
}

export default Service
