import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href='/auth/google'>Log In With Google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href='/api/logout'>Log Out</a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link 
                        to={this.props.auth ? '/home' : '/'} 
                        className='left brand-logo'>
                        Surveyr
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Navbar);