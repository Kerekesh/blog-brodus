import React from 'react'
import AboutExtended from '../Main/About/AboutExtended'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    header: {
        fontSize: '31px',
        textAlign: 'center',
        fontFamily: 'Mukta, sans-serif'
    }
})

const AboutPage = () => {
    const classes = useStyles()
    return (
        <>
            <h1 className={classes.header}>About Me</h1>
            <AboutExtended></AboutExtended>
        </>
    )
}

export default AboutPage