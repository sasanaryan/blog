import Footer from "src/components/Footer/Footer"
import Navbar from "src/components/Navbar/Navbar"

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <>
  <Navbar />
  {children}
  <Footer />
  </>
}

export default BlogLayout
