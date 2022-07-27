import React from 'react'
import SiteAppBar from '../../common/components/AppBar'
import SiteFooter from '../../common/containers/Footer'
import BeliefsContainer from './components/Beliefs'
import PastorContainer from './components/Pastor'
import VisionsContainer from './components/Visions'

export const AboutPage = () => {
  return (
    <>
      <SiteAppBar >
        <>
          <VisionsContainer />
          <BeliefsContainer />
          <PastorContainer />
          <SiteFooter />
        </>
      </SiteAppBar>

    </>
  )
}
