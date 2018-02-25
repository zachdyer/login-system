import React from 'react';

export default class Header extends React.Component {
    render() {
       return(
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="/">
                            Login System
                        </a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                    <li>
                        <a href="/logout">Logout</a>
                    </li>
                </ul>
            </div>
        )
     }
}
