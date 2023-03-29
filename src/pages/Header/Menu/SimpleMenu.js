import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles({
    link: {
        display: 'flex',
        alignItems: 'flex-start',
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
    icon: {
        fontSize: '14px',
        marginLeft: "3px",
    },
})

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles()

    return (
        <>
            <Button className={classes.link} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                categories

                <FontAwesomeIcon className={classes.icon} icon={['fas', 'sort-down']} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Fashion</MenuItem>
                <MenuItem onClick={handleClose}>Lifestyle</MenuItem>
                <MenuItem onClick={handleClose}>Health</MenuItem>
                <MenuItem onClick={handleClose}>Travel</MenuItem>
            </Menu>
        </>
    );
}