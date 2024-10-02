import Blogs from "../../components/Bloges/Bloges"
import Contact from "../../components/Contact/Contact"
import GetCustomTravel from "../../components/GetCustomTravel/GetCustomTravel"
import Header from "../../components/Header/Header"
import Places from "../../components/Places/Places"
import Testimonials from "../../components/Testimonials/Testimonials "

const Home = () => {
  return (
    <div>
      <Header/>
      <Places/>
      <GetCustomTravel/>
      <Blogs/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}
export default Home