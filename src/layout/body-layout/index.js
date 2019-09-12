
import React from "react";

import { connect } from 'react-redux';

class BodyLayout extends React.Component{

    render(){
        return (
            <h1>This is Body Layout</h1>
        );
    }
};

export default connect(null, null)(BodyLayout);