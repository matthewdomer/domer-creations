import React from 'react';
import {AppBar, IconButton, Toolbar} from "@material-ui/core/index";
import Typography from "@material-ui/core/Typography/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    topbar: {
        background: "#7654ff",
        fontFamily: "Qahiri",
    }

})

export default function AppBarMain() {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.topbar}>
                <Typography variant="h6">
                    Domer Creations
                </Typography>
            </Toolbar>
        </AppBar>
    )
}