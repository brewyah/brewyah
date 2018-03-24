import React from "react";
import ReactDOM from "react-dom";
import App from "braumeister";

class BrewYah extends React.Component {
    render(props) {
        return (<App />)
    }
}

ReactDOM.render(<BrewYah/>, document.getElementById('brewyah'));
