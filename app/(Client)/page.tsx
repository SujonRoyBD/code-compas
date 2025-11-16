import React from 'react'
import BannerPage from '../components/banner/Banner'
import Carasoule from '../components/carasoulePage/Carasoule'
import OurService from '@/app/components/ourService/page'
import AboutUs from '@/app/components/about-us/page'
import OurUnique from '@/app/components/Our-Unique/OurUnique'
import Marketing from '@/app/components/marketing/marketing'
import Carasole2 from '@/app/components/carosloe2/Carosole2'
import Process from '@/app/components/process/Process'
import Results from '@/app/components/results/page'
import Testimonials from '@/app/components/testimonials/Testimonials'
import Teams from '@/app/components/teams/Teams'
import Faq from '@/app/components/Faq/Faq'
import ContactUs from '@/app/components/contactUs/ContactUs'

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
