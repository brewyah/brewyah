import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, {ListItem, ListItemText} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import { Link } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { LoginForm } from "./LoginForm";
import Paper from "material-ui/Paper";
import {
    Route,
    Switch
} from "react-router-dom";

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        flex: "0 1 200px",
    },
    drawerPaper: {
        position: "relative"
    },
    toolbar: theme.mixins.toolbar,
});

const pageStyle = {
    margin: 100,
    textAlign: "center",
    display: "inline-block",
};

/**
 * Temporary function that will be phased out by more specific page renderings
 *
 * @function
 */
const createPage = () => (
    <div className = "bp--page-wrapper">
        <p>{"Hello!"}</p>
    </div>);

/**
 * Creates the Contact Us page.
 *
 * @function
 */
const ContactPage = () => (
    <div className = "bp--page-wrapper">
        <Paper className="bp--page-content" style={pageStyle} zdepth={3} rounded={"false"}>
            <ContactForm/>
        </Paper>
    </div>);

/**
 * Creates the Login/Sign-up page.
 *
 * @function
 */
const LoginPage = () => (
    <div className = "bp--page-wrapper">
        <Paper className="bp--page-content" style={pageStyle} zdepth={3} rounded={"false"}>
            <LoginForm/>
        </Paper>
    </div>);

const Home = createPage;
const Features = createPage;
const Help = createPage;
const News = createPage;
const Contact = ContactPage;
const LogIn = LoginPage;

function ClippedDrawer(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="relative" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        Brewyah
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="content-wrapper">
                <Drawer
                    variant="permanent"
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <Link to="/">
                            <ListItem button>
                                <ListItemText primary="Home"/>
                            </ListItem>
                        </Link>
                        <Link to="/features">
                            <ListItem button >
                                <ListItemText primary="Features"/>
                            </ListItem>
                        </Link>
                        <Link to="/help">
                            <ListItem button >
                                <ListItemText primary="Help"/>
                            </ListItem>
                        </Link>
                        <Link to="/news">
                            <ListItem button >
                                <ListItemText primary="News"/>
                            </ListItem>
                        </Link>
                        <Link to="/contact">
                            <ListItem button >
                                <ListItemText primary="Contact"/>
                            </ListItem>
                        </Link>
                        <Link to="/login">
                            <ListItem button >
                                <ListItemText primary="Log In"/>
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                {/* Content */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/features" component={Features}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/news" component={News}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/login" component={LogIn}/>
                </Switch>
            </div>
        </div>
    );
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClippedDrawer);