import { makeStyles, Theme } from '@material-ui/core';
import React from 'react'
const useStyles = makeStyles<Theme>(theme => ({

    responsiveYoutubeFrame: {
        paddingBottom: "56.25%",
        position:'relative'
    },

    video:{
        width:'100%',
        height:'100%',
        position:'absolute',
        left:'0px',
        top:'0px'
    }
}));

const VideoComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.responsiveYoutubeFrame}>
            <iframe
                className= {classes.video}
                width="100%" height="100%"
                src={`https://www.youtube.com/embed/wjcoVX63Zpk`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    )
}

export default VideoComponent