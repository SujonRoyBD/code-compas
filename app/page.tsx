import React from 'react'
import BannerPage from '../components/banner/Banner'
import Carasoule from '../components/carasoulePage/Carasoule'
import OurService from '@/components/ourService/page'
import AboutUs from '@/components/about-us/page'
import OurUnique from '@/components/Our-Unique/OurUnique'
import Marketing from '@/components/marketing/marketing'
import Carasole2 from '@/components/carosloe2/Carosole2'
import Process from '@/components/process/Process'
import Results from '@/components/results/page'
import Testimonials from '@/components/testimonials/Testimonials'
import Teams from '@/components/teams/Teams'
import Faq from '@/components/Faq/Faq'
import ContactUs from '@/components/contactUs/ContactUs'

export default function Website() {
    return (
        <div>
            <BannerPage />
            <Carasoule />
            <OurService />
            <AboutUs />
            <OurUnique />
            <Marketing />
            <Carasole2 />
            <Process />
            <Results />
            <Testimonials />
            <Teams />
            <Faq />
            <ContactUs />
           

        </div>
    )
}
