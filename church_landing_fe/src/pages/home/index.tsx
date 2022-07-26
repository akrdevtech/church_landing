import React from 'react'
import SiteAppBar from '../../common/components/AppBar'
import ChannelAction from './components/ChannelAction'
import HomeCarousel from './components/HomeCarousel'
import VideoContainer from './containers/VideoContainer'

export const HomePage = () => {
    return (
        <>
            <SiteAppBar >
                <>
                    <HomeCarousel />
                    <VideoContainer/>
                    <ChannelAction/>
                </>
            </SiteAppBar>

        </>
    )
}
