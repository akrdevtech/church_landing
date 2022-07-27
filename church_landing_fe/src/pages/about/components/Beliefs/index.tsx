import { Grid, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import Beliefs from './components'


const useStyles = makeStyles<Theme>(theme => ({
    aboutComponents: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    }
}))

const BeliefsContainer = () => {
    const classes = useStyles();
    return (
        <Grid container direction="row" justifyContent="center" className={classes.aboutComponents}>
            <Grid item xs={12} lg={11} >
                <Grid container spacing={3} direction="row" justifyContent="center">
                    <Grid item xs={11} lg={12}>
                        <Beliefs />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default BeliefsContainer