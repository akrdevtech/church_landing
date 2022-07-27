import React from 'react'
import SiteAppBar from '../../common/components/AppBar'
import SiteFooter from '../../common/containers/Footer'
import ChannelAction from './components/ChannelAction'
import HomeCarousel from './components/HomeCarousel'
import VideoContainer from './components/VideoComponent'

export const HomePage = () => {
    return (
        <>
            <SiteAppBar >
                <>
                    <HomeCarousel />
                    <VideoContainer/>
                    <ChannelAction/>
                    <SiteFooter />
                </>
            </SiteAppBar>

        </>
    )
}
