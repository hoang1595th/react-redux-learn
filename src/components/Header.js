import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-inverse">
                <a className="navbar-brand" href="#">Bai 2 : Component</a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Trang chu</a>
                    </li>
                    <li className="active">
                        <a href="#">Danh muc san pham</a>
                    </li>
                </ul>
            </nav>

        );
    }
}

export default Header;