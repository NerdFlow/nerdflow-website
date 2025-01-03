import dynamic from "next/dynamic"

const AosInit = dynamic(() => import("../components/LandingPage/AosInit"))
const Header = dynamic(() => import("../components/LandingPage/Header"))
const BlogPage = dynamic(() => import("../components/Blogs/BlogPage"))

import Loading from "../loading"
import Footer from "../components/LandingPage/Footer"

const page = () => {
  return (
    <>
      <AosInit />
      <Loading initFakeLoading={true} />
      <Header />
      <BlogPage />
      <Footer />
    </>
  )
}

export default page
