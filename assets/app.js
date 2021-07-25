import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBarMain from "./components/AppBarMain";
import drive from "./images/drive.jpg";
import {Box, Container, Toolbar} from "@material-ui/core/index";

class App extends Component {
    render() {
        return (
            <Box height="99vh" width="98vw" style={{ backgroundImage: `url(${drive})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
                <AppBarMain/>
                <Container>Matt likes to do stuff and that's what America is all about.</Container>
            </Box>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));