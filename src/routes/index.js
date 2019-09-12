import React from "react";
import {HashRouter, Route, Switch, Link} from "react-router-dom";
import BodyLayout from '../layout/body-layout';

class Routes extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={BodyLayout}/>
                </Switch>
		    </HashRouter>
        )
    }
}

export default Routes;