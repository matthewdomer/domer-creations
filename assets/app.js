import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBarMain from "./components/AppBarMain";
import drive from "./images/drive.jpg";

class App extends Component {
    render() {
        return (
            <div style={{backgroundImage: drive}}>
                <AppBarMain/>
                Matt likes to do stuff and that's what America is all about.
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));