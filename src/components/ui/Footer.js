import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        zIndex: 1302,
        position: 'relative'
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },
    mainContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: '3em'
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em'
        }
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em'
        }
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
            <Grid justify='center' container className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/' className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/services' className={classes.link}>
                            Services
                        </Grid>
                        <Grid item component={Link} to='/customsoftware' className={classes.link}>
                            Custom Software Development
                        </Grid>
                        <Grid item component={Link} to='/mobileapps' className={classes.link}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} to='/websistes' className={classes.link}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/revolution' className={classes.link}>
                            The Revolution
                        </Grid>
                        <Grid item component={Link} to='/revolution' className={classes.link}>
                            Vision
                        </Grid>
                        <Grid item component={Link} to='/revolution' className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item component={Link} to='/revolution' className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/about' className={classes.link}>
                            About Us
                        </Grid>
                        <Grid item component={Link} to='/about' className={classes.link}>
                            History
                        </Grid>
                        <Grid item component={Link} to='/about' className={classes.link}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/contact' className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
        <img alt="black decorative slash" src={footerAdornment} className={classes.adornment} />

        <Grid container spacing={2} className={classes.socialContainer} justify='flex-end'>
            <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                <img alt="facebook logo" className={classes.icon} src={facebook} />
            </Grid>
            <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                <img alt="twitter logo" className={classes.icon} src={twitter} />
            </Grid>
            <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                <img alt="instagram logo" className={classes.icon} src={instagram} />
            </Grid>
        </Grid>
        </footer>
    );
}