import React, {Component, createContext} from 'react';

export const DcContext = createContext();

class DcContextProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stuff: [],
        };
    }

    //fetch

    //create

    //update

    //delete

    render() {
        return (
            <DcContext.Provider value={{
                ...this.state,
            }}>
                {this.props.children}
            </DcContext.Provider>
        );
    }
}

export default DcContextProvider;