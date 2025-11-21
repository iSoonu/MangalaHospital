import React from 'react'
import CustomLayout from '../layouts/CustomLayout'
import Footer from '../components/Footer'
import CustomHero from './herosections/CustomHero'

const Contact = () => {
  const title = "Contact Us";
  const subTitle = "We are here to assist you. Reach out to us for any inquiries or support.";
  return (
    <div>
       <CustomLayout  bgUrl={import.meta.env.VITE_CONTACTUS_BG}>
        <CustomHero title={title} subtitle={subTitle}/>
      </CustomLayout>

      <Footer />
    </div>
  )
}

export default Contact