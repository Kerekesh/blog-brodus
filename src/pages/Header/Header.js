import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import "./Header.css"
import Menu from './Menu/Menu'
import { Container, Grid, makeStyles } from '@material-ui/core'
// import {  Button } from '@material-ui/core'
import '../../fonts.css'
// import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    headerBackground: {
        backgroundColor: "#181819",
        color: "#fff",
        position: "fixed",
        width: "100%",
        top: 0,
        fontFamily: "Poppins",
        zIndex: 999
    },
    logo: {
        margin: "15% 0",
        fontSize: "32px",
        lineHeight: "35px",
        fontWeight: 700,
        textTransform: "lowercase",
    },
    link: {
        textTransform: 'uppercase',
        fontWeight: 600,
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

const Header = () => {

    const classes = useStyles()

    return (
        <header className={classes.headerBackground}>
            <CssBaseline />
            <Container fixed>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item >
                        <div className={classes.logo}>
                            <a href="../" className="headerLogo">Brodus</a>
                        </div>
                    </Grid>
                    <Grid className="GridMenu" item sm={9} xs={12} md={10} lg={8}>
                        <Menu></Menu>
                    </Grid>
                    {/* <Grid item>
                        <Button>
                            <Link to="/" className={classes.link}>favourites(0)</Link>
                        </Button>
                    </Grid> */}
                </Grid>
            </Container>
        </header>
    )
}

export default Header