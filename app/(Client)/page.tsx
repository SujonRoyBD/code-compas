import React from 'react'
import BannerPage from '../../components/banner/Banner'
import Carasoule from '../../components/carasoulePage/Carasoule'
import OurService from '@/components/ourService/page'

export default function Website() {
    return (
        <div>
            <BannerPage />
            <Carasoule />
            <OurService />

        </div>
    )
}
