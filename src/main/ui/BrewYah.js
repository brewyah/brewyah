import React from "react";
import ReactDOM from "react-dom";
import Braumeister from "braumeister";

class BrewYah extends React.Component {
    render(props) {
        return (<Braumeister />)
    }
}

ReactDOM.render(<BrewYah/>, document.getElementById('brewyah'));
