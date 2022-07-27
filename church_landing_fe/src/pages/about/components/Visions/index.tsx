import { Grid, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import Visions from './components'

const useStyles = makeStyles<Theme>(theme => ({
    aboutComponents: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    }
}))

const VisionsContainer = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center" className={classes.aboutComponents}>
            <Grid item xs={12} lg={12} >
                <Grid container direction="row" justifyContent="center">
                    <Grid item xs={12} lg={12}>
                        <Visions />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default VisionsContainer