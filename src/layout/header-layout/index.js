
import React from "react";

import { connect } from 'react-redux';

class HeaderLayout extends React.Component{

    render(){
        return (
            <h1>This is Header</h1>
        );
    }
};

export default connect(null, null)(HeaderLayout);