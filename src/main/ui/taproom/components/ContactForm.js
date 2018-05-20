import React from "react";
import Radio from "material-ui/Radio";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import {FormControlLabel} from "material-ui/Form";

/**
 * The UI Component representing the form used for contacting us.
 *
 * @class
 */
export class ContactForm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {selectedValue: "general"};
    }

    handleChange(event) {
        this.setState({selectedValue: event.target.value});
    }

    /**
     * Renders the contact form.
     *
     * @function
     */
    render() {
        return (
            <div className="contact_form">
                <h1>{"What's Up?"}</h1>
                <p className="bp--contact-text">
                    {"Are you looking for support? In our help center we’ve gathered answers to FAQ, as well as many tips, tricks and tutorials for working with Brew Yah. If you don’t find what you’re looking for, please don’t hesitate to get in touch; we’ll try and get back to you as soon as possible."}
                </p>
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === "general"}
                            onChange={this.handleChange}
                            value="general"
                        />
                    }
                    label="General"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === "question"}
                            onChange={this.handleChange}
                            value="question"
                        />
                    }
                    label="Question"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={this.state.selectedValue === "defect"}
                            onChange={this.handleChange}
                            value="defect"
                        />
                    }
                    label="Defect"
                />
                <TextField
                    className="bp--login-field"
                    multiline={true}
                    fullWidth={true}
                    placeholder="Enter Message"
                />
                <div className="bp--login-field">
                    <Button
                        variant="raised"
                        disableFocusRipple={true}
                        disableRipple={true}
                    >
                        {"Send"}
                    </Button>
                </div>
            </div>
        );
    }
}
