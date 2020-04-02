import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        }
    },
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    heroTextContainer: {
        minWidth: '21.5em',
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: '1em'
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: '100%'
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    }
}));

export default function LandingPage() {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveRatio: 'xMidYMid slice'
        }
    }

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item> {/* --------------------- HERO BLOCK -------------------------- */}
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">
                            Bringing West Coast Technology <br /> to the Midwest
                        </Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.learnButtonHero} variant="outlined">Learn More</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"%100"} width={"%100"} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* --------------------- SERVICES -------------------------- */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="Custom software icon" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* --------------------- MOBILE APP BLOCK -------------------------- */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ textAlign: matchesSM ? 'center' : undefined }}>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app{matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
                        <img className={classes.icon} alt="Mobile app icon" src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* --------------------- WEBSITES -------------------------- */}
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for search engines. Built for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton}>
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="Websites icon" src={websitesIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/* --------------------- THE REVOLUTION -------------------------- */}
                <Grid container alignItems="center" justify="center" style={{ height: '100em', marginTop: '12em' }}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                                </Typography>
                                    <Button className={classes.learnButtonHero} variant="outlined">Learn More</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} />
                </Grid>
                <Grid item>
                    <Grid container direction="row" alignItems="center" style={{ height: '80em' }}>
                        <Grid item>
                            <Grid container direction="column" style={{ position: 'absolute', marginLeft: '5em' }}>
                                <Typography variant="h2" style={{ color: 'white' }}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let's get personal
                                </Typography>
                                <Grid item style={{marginTop: '1em'}}>
                                    <Button variant="outlined" className={classes.learnButton} style={{color: 'white', borderColor: 'white'}}>
                                        Learn More
                                </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.infoBackground} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    );

}