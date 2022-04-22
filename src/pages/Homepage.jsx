import DashboardContact from '../components/Contact/DashboardContact'
import AboutHome from '../components/Dashboard/AboutHome'
import Hero from '../components/Hero'
import Services from '../components/Services/Services'



function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutHome />
      <DashboardContact />
    </div>
  )
}

export default Homepage