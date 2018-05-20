import React from "react";
import { Link } from "react-router-dom";

const pageToRoute = {
    "Features": "features",
    "Help": "help",
    "News": "news",
    "Contact": "contact",
    "Log In": "login"
};

/**
 * The UI Component representing the navigation menu bar that spans the top of the page.
 *
 * @class
 */
export class NavBar extends React.Component {

    /**
     * Renders the navigation menu bar and associated menu components.
     *
     * @function
     */
    render() {
        const pages = ["Features", "Help", "News", "Contact", "Log In"];
        const navLinks = pages.map((page, index) => {
            return (
                <Link key={index + 1} className="bp--navigation-menuitem" to={`/${pageToRoute[page]}`}>{page}</Link>
            );
        });

        return <nav className="bp--navigation-menubar">{navLinks}</nav>;
    }
}