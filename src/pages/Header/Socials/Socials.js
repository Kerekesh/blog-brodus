import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../fontawesome.js'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    link: {
        fontWeight: 600,
        fontSize: 13,
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: '#98989a',
            textDecoration: 'none'
        },
    }
})

const Socials = () => {
    const classes = useStyles()

    return (
        <Grid
            direction="row"
            justifyContent="center"
        >
            <Button>
                <Link to="/" className={classes.link}>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Link>
            </Button>
            <Button>
                <Link to="/" className={classes.link}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </Link>
            </Button>
            <Button>
                <Link to="/" className={classes.link}>
                    <FontAwesomeIcon icon={['fab', 'pinterest']} />
                </Link>
            </Button>
            <li className="search"><a href="#"><i className="la la-search"></i></a></li>
        </Grid>
    )
}

export default Socials

