import { Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles<Theme>(theme => ({
    cardContainer: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(20),
        backgroundColor: "#f7f7f7"
    }
}));

const SiteFooter = () => {
    const classes = useStyles();


    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start" className={classes.cardContainer}>
            <Grid item lg={6} xs={11}>
                <Grid container spacing={5} direction="row" justifyContent="center" >
                    <Grid item xs={12} lg={6}>
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Typography variant="subtitle2" align="left"><b>CONTACT INFORMATION</b></Typography>
                        <Typography variant="caption" align="left">
                            Jesus is Alive Global Worship Centre,<br />
                            Pulamon Junction, Kottarakkara,<br />
                            Kerala, India - 691531<br /><br />
                            Email: info@pastortinugeorge.org<br /><br />
                            Prayer Tower WhatsApp: (+91) 9747555678</Typography>
                        <br />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SiteFooter