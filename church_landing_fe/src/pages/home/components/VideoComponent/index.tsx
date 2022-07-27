import React from 'react'
import VideoComponent from './components'
import { Button, Card, Grid, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => ({
    cardContainer: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(20)
    }
}));

const VideoContainer = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center" alignItems="flex-start" className={classes.cardContainer}>
            <Grid item lg={6} xs={11}>
                <Grid container spacing={5} direction="row" justifyContent="center" >
                    <Grid item xs={12} lg={6}>
                        <VideoComponent />
                    </Grid>
                    <Grid item xs={12} lg={6} >
                        <Typography variant="subtitle2" align="justify"><b>Welcome</b></Typography>
                        <Typography variant="h5" align="left"><b>Teaching the word of god with simplicity and understanding is our goal</b></Typography>
                        <br />
                        <Typography variant="subtitle1" align="justify">Believe that the Bible is the written and inspired Word of God. Their purpose is to invoke change in the lives of people across the globe. Ministry’s desire and vision is for all to hear the Word and gain understanding of God’s love and promises.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default VideoContainer