import { Button, Card, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles<Theme>(theme => ({
    backdropImage: {
        width: '100%',
        backgroundImage: `url(https://pastortinugeorge.org/wp-content/uploads/2020/10/slider-bg-w.jpg?id=22532)`,
        backgroundSize: 'cover',
        borderRadius: 0,
    },
    carouselActions: {
        zIndex: 1,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        color: theme.palette.common.white,
    },
    cardContainer: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    subscribeButton: {
        color: theme.palette.common.white,
    }
}));

const ChannelAction = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="center">
            <Grid item xs={12}>
                <Card className={classes.backdropImage}>
                    <Grid container direction="row" justifyContent="center" className={classes.cardContainer}>
                        <Grid item xs={11} lg={6} >
                            <Card className={classes.carouselActions}>
                                <Grid container direction="row" justifyContent="center">
                                    <Typography variant="h5" align="center"><b>24 Hrs Christian Devotional Online Channel</b></Typography>
                                    <br />
                                    <br />
                                    <br />
                                    <Typography variant="subtitle1" align="justify">Motivational & Inspirational Videos which will Inspire and Entertain you on Motivation, Positive Thinking, Career, Relationships, Self Help, Goals etc. Stay Connected with our channel for the latest Malayalam Videos.</Typography>
                                    <br />
                                    <br />
                                    <br />
                                    <Button
                                        color="default"
                                        className={classes.subscribeButton}
                                        startIcon={<YouTubeIcon />}
                                        size="large"
                                    >
                                        VISIT OUR YOUTUBE CHANNEL
                                    </Button>
                                </Grid>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default ChannelAction
