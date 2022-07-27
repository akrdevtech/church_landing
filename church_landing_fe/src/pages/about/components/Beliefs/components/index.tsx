import { Typography } from '@material-ui/core'
import React from 'react'
import BeliefsCarousel from './BeliefsCarousel'

const Beliefs = () => {
    return (
        <>
            <Typography variant="h5" align="center"><b>What We Believe</b></Typography>
            <br /><br />
            <BeliefsCarousel />
        </>
    )
}

export default Beliefs