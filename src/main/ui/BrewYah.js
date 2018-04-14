import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CssBaseline} from "material-ui";
import Braumeister from "braumeister";
import Taproom from "taproom";

const BrewYah = () => (
    <React.Fragment>
        <CssBaseline/>
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Braumeister}/>
                <Route path="/" component={Taproom}/>
            </Switch>
        </BrowserRouter>
    </React.Fragment>
);

ReactDOM.render(<BrewYah/>, document.getElementById("brewyah"));
