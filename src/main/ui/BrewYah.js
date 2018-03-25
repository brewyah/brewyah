import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Braumeister from "braumeister";
import Taproom from "taproom";

class BrewYah extends React.Component {
    render(props) {
        return (<BrowserRouter>
            <Switch>
                <Route exact path='/' component={Taproom}></Route>
                <Route exact path='/admin' component={Braumeister}></Route>
            </Switch>
        </BrowserRouter>);
    }
}

ReactDOM.render(<BrewYah/>, document.getElementById('brewyah'));
