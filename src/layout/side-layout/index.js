
import React from "react";

import { connect } from 'react-redux';

class SideLayout extends React.Component{

    render(){
        return (
            <h1>This is SideLayout</h1>
        );
    }
};

export default connect(null, null)(SideLayout);