import React from 'react'
import SiteAppBar from '../../common/components/AppBar'
import HomeCarousel from './components/HomeCarousel'

export const HomePage = () => {
    return (
        <>
            <SiteAppBar >
                <>
                    <HomeCarousel />
                </>
            </SiteAppBar>

        </>
    )
}
