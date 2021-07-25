import React from 'react';
import {AppBar, Box, IconButton, Toolbar} from "@material-ui/core/index";
import Typography from "@material-ui/core/Typography/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    navbar: {
        background: "#7654ff",
        marginLeft: 4,
        paddingBottom: 1,
    },
    title: {
        flexGrow: 1
    },
    subtitle: {
        fontFamily: "Qahiri",
        fontSize: 24,
        align: "center",
        justify: "center",
    },
})

export default function AppBarMain() {
    const classes = useStyles();

    return (
        <AppBar className={classes.navbar}>
            <Toolbar>
                <Typography variant='h6' className={classes.title}>Domer Creations</Typography>
                <Typography className={classes.subtitle}>Do Stuff</Typography>
            </Toolbar>
        </AppBar>
    )
}