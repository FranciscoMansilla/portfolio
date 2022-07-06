import Contact from "../commons/Contact";
import Footer from "../commons/Footer";
import Nav from "../commons/Nav"
import Projects from "../commons/Projects";
import SideBar from "../commons/SideBar";
import About from './../commons/About';


const Home = ()=>{
  return(
    <div className='grid grid-cols-1 grid-rows-layout-mobile md:grid-rows-layout bg-theme-2 '>
      <div>
        <Nav/>
      </div>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      <SideBar/>
    </div>
  )
}
export default Home