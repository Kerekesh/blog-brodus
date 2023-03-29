/* eslint-disable react/prop-types */
import React from "react";
import { Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SimpleMenu from './SimpleMenu'
import Socials from "../Socials/Socials";

const useStyles = makeStyles({
    link: {
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: 11,
        letterSpacing: 1.1,
        color: 'white',
        textDecoration: 'none',
        fontFamily: "Poppins",
        '&:hover': {
            color: '#98989a',
            textDecoration: 'none'
        },
    },
})

const NavLinks = (props) => {

    const classes = useStyles()

    return (
        <>
            <SimpleMenu className={classes.link}></SimpleMenu>
            <Button onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/" className={classes.link}>features</Link>
            </Button>
            <Button onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/" className={classes.link}>popular</Link>
            </Button>
            <Button onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/about" className={classes.link}>about</Link>
            </Button>
            <Button onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to="/contact" className={classes.link}>contact</Link>
            </Button>
            <Socials></Socials>
        </>
    )
}
export default NavLinks