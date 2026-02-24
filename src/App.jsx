import React from 'react'
import Section1 from './components/section1 /Section1'
import Section2 from './components/section2/Section2'
import heroCardData from './data/heroCardData'
import xsheroCardData from './data/xsheroCardData'
import Quality from './components/section3/Quality'
import palletQualityData from './data/palletQualityData'
import Ourproducts from './components/section4/Ourproducts'
import Products from './data/products'
import DurabilitySection from './components/section5/DurabilitySection'
import durabilityData from './data/durabilityData'
import ContactSection from './components/section7/ContactSection'
import Whyus from './components/section6/Whyus'
import Footer from './components/section8/Footer'

const App = (props) => {

  return (
    <div className='flex flex-col md:gap-20 gap-60 overflow-hidden text-white bg-[#2B1A12]'>
        <Section1   />
        <Section2 user1={heroCardData} user2={xsheroCardData} />
        <Quality user3={palletQualityData} />
        <Ourproducts user4={Products} />
        <DurabilitySection user5={durabilityData} />
        <Whyus />
        <ContactSection />
        <Footer />
     </div>
  )
}

export default App
