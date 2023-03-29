import { Grid } from '@material-ui/core'
import React from 'react'
import '../../../fonts.css'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Menu = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
        >
            <Navigation></Navigation>
            <MobileNavigation></MobileNavigation>
        </Grid>
    )
}

export default Menu