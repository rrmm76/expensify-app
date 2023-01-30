import React from 'react';
import { BrowserRouter, Route ,Switch , Link,NavLink} from 'react-router-dom';


const Header =() => (
    <header>
    <h1>Expesify App</h1>
    <NavLink to="/" exact={true} activeClassName="is-active"> Home </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
    <NavLink to="/edit" activeClassName="is-active"> Edit </NavLink>
    <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
    </header>
);
export default Header;