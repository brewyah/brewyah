import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Braumeister from "braumeister";
import Taproom from "taproom";

const BrewYah = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/admin" component={Braumeister}/>
            <Route path="/" component={Taproom}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<BrewYah/>, document.getElementById("brewyah"));
