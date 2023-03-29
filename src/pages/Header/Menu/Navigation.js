import React from "react"
import NavLinks from "./NavLinks"
import classes from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <NavLinks></NavLinks>
        </nav>
    )
}

export default Navigation