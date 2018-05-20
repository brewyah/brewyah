import React from "react";

import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import { FormControlLabel } from "material-ui/Form";
import Checkbox from "material-ui/Checkbox";

const confirmPass = isSigningUp => isSigningUp
    ? (<div className="bp--login-field">
        <TextField
            label="Confirm Password"
            type="password"
        />
    </div>)
    : null;

const userEmail = isSigningUp => isSigningUp
    ? (<div className="bp--login-field">
        <TextField
            label="Email"
        />
    </div>)
    : null;

const userAge = isSigningUp => isSigningUp
    ? (<div className="bp--login-field">
        <FormControlLabel
            control={
                <Checkbox
                    value="checkedG"
                />
            }
            label="I'm 21 or older."
        />
    </div>)
    : null;

const flexSetting = (isSigningUp, toggleSignUp) => isSigningUp
    ? (<div className="bp--login-field">
        {"Already have an account?"}
        <a onClick={toggleSignUp} href={"#"} className="new_account">
            {"Log In"}
        </a>
    </div>)
    : (<div className="bp--login-field">
        {"Need an account?"}
        <a onClick={toggleSignUp} href={"#"} className="new_account">
            {"Sign Up"}
        </a>
    </div>);

/**
 * The UI Component representing the form used for logging in/signing up.
 *
 * @class
 */
export class LoginForm extends React.Component {
    constructor() {
        super();
        this.toggleSignUp = this.toggleSignUp.bind(this);
        this.state = {isSigningUp: false};
    }

    /**
     * Toggles the  menu fields for logging in/signing up upon a click event.
     *
     * @function
     */
    toggleSignUp() {
        this.setState({ isSigningUp: !this.state.isSigningUp });
    }

    /**
     * Renders the logging in/signing up form.
     *
     * @function
     */
    render() {
        const { isSigningUp } = this.state;
        return (
            <div className="login_form">
                <div className="bp--login-field">
                    <TextField
                        label="Username"
                    />
                </div>
                {userEmail(isSigningUp)}
                <div className="bp--login-field">
                    <TextField
                        label="Password"
                        type="password"
                    />
                </div>
                {confirmPass(isSigningUp)}
                {userAge(isSigningUp)}
                <div className="bp--login-field">
                    <Button variant="raised" disableFocusRipple={true} disableRipple={true}>{isSigningUp ? "Join" : "Log in"}</Button>
                </div>
                <div className="bp--login-field">
                    <a href={"#"} className="forgot_pass">
                        {"Forgot Password?"}
                    </a>
                </div>
                {flexSetting(isSigningUp, this.toggleSignUp)}
            </div>
        );
    }
}
