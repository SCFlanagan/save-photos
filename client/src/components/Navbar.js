import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="left brand-logo">Logo</a>
                    <ul class="right">
                        <li>
                            <a href="sass.html">Login with Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;