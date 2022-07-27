import { Button, Card, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-material-ui-carousel'

interface ItemType {
    name: string;
    description: string;
    image: string;
}

interface Props {
    item: ItemType
}

const useStyles = makeStyles<Theme, Props>(theme => ({
    carouselItemImage: {
        width: '100vw',
    },
    carouselActions: {
        zIndex: 1,
        position: 'absolute',
        left: 0, right: 0, top: '30%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    }
}));

export default function HomeCarousel() {
    const items: ItemType[] = [
        {
            name: "Random Name #1",
            image: "https://pastortinugeorge.org/wp-content/uploads/2020/06/04.jpg",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            image: "https://pastortinugeorge.org/wp-content/uploads/2020/06/03.jpg",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel indicators={false}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: Props) {
    const classes = useStyles(props);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <img src={props.item.image} className={classes.carouselItemImage} />
                <Card className={classes.carouselActions}>
                    {/* <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>

                    <Button >
                        Check it out!
                    </Button> */}
                </Card>
            </Grid>
        </Grid>
    )
}