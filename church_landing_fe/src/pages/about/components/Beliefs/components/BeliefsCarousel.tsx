import {  Button, Grid, Card, CardContent, Typography, makeStyles, Theme } from '@material-ui/core'

import Carousel, { slidesToShowPlugin, arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles<Theme>(theme => ({
    beliefsCard: {
        minHeight: theme.spacing(25)
    }
}))

const BeliefsCarousel = () => {
    const classes = useStyles();

    const beliefsList = [
        { header: "THE BIBLE", description: "We believe that the Bible is the revelation of God to man, inspired and Holy Spirit breathed written word of God." },
        { header: "GOD", description: "We believe the one living God who is spirit and manifests in three persons: The Father, The Son and The Holy Spirit is eternal, omnipotent, omniscient and full of goodness and mercy." },
        { header: "SAVIOUR JESUS CHRIST", description: "We believe the virgin birth of Jesus Christ, His sinless life, His message, His miracles. His atoning death on the cross, His burial, His resurrection, His ascension to the right hand of the father and His continuing intercession for us, we believe Jesus rose from the dead and is coming again." },
        { header: "BLOOD OF JESUS", description: "We believe that only the Blood of Jesus is able to redeem man from sin cleanse his conscience from guilt and make him perfect before God." },
        { header: "KINGDOM OF GOD", description: "We believe that one should repent of his sins and accept Jesus Christ as his personal saviour and be born again by the Word of God and the Holy Spirit to enter the kingdom of God." },
        { header: "WATER BAPTISM", description: "We believe that after believing in the son of God, one should take immersion baptism in the water,in the name of Father and of the Son and of the holy spirit on his way to the consummation of his personal salvation." },
        { header: "THE LORDS SUPPER", description: "We believe that the Lord Jesus instituted the Lord’s supper in remembrance of him and to proclaim His death and we should eat the bread and drink the cup until he comes." },
        { header: "HOLY SPIRIT BAPTISM", description: "We believe that one should receive the baptism in the Holy Spirit to be empowered to lead a victorious Christian life. We also believe that various gifts and fruits of the Holy Spirit are available to a believer for the building up of the body of Christ." },
        { header: "THE CHURCH", description: "We believe that the Church is the body of Christ called separated and prepared as his Bride and every born again believer should enjoy the fellowship of other believers in a local Church." },
        { header: "RESURRECTION OF JESUS", description: "We believe in the resurrection of Jesus Christ to earth and the establishment of His millennial Kingdom. We also believe in the resurrection of the body, and, in the final judgment of all, before the throne of God." },
    ];

    const cutomLeftButton = (
        <Button color="primary" variant="outlined" size="large" style={{ borderRadius: 100 }}><ArrowBackIcon /></Button>
    );
    const cutomRighttButton = (
        <Button color="primary" variant="outlined" size="large" style={{ borderRadius: 100 }}><ArrowForwardIcon /></Button>
    );

    const arraowPluginConfig = {
        resolve: arrowsPlugin,
        options: {
            arrowLeft: cutomLeftButton,
            arrowLeftDisabled: cutomLeftButton,
            arrowRight: cutomRighttButton,
            arrowRightDisabled: cutomRighttButton,
            addArrowClickHandler: true,
        }
    };

    const autoPlayConfigs = {
        resolve: autoplayPlugin,
        options: {
            interval: 4000,
        }
    };
    return (

        <Grid xs={12} md={12}>

            <Carousel
                plugins={[
                    // 'arrows',
                    'infinite',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 4
                        }
                    },
                    { ...arraowPluginConfig },
                    { ...autoPlayConfigs }
                ]}
                breakpoints={{
                    640: {
                        plugins: [
                            // 'arrows',
                            'infinite',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1
                                }
                            },
                            { ...arraowPluginConfig },
                            { ...autoPlayConfigs }
                        ]
                    },
                    900: {
                        plugins: [
                            // 'arrows',
                            'infinite',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2
                                }
                            },
                            { ...arraowPluginConfig },
                            { ...autoPlayConfigs }
                        ]
                    },
                    1024: {
                        plugins: [
                            // 'arrows',
                            'infinite',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 4
                                }
                            },
                            { ...arraowPluginConfig },
                            { ...autoPlayConfigs }
                        ]
                    },
                }}
            >

                {
                    beliefsList.map(beliefElement => {
                        return <>
                            <Card variant="outlined" className={classes.beliefsCard}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {beliefElement.header}
                                    </Typography>
                                    <br/>
                                    <Typography variant="caption" component="p" align="justify">
                                        {beliefElement.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </>
                    })
                }
            </Carousel>
        </Grid>
    )
}
export default BeliefsCarousel
