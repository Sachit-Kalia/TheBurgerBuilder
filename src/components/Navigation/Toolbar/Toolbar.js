import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import menuLogo from '../../../assets/images/menu.png';


const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <div className = {classes.MenuLogo}>
            <img src={menuLogo} onClick = {props.showDrawer}  alt="menu"/>
        </div>
        <div className = {classes.Logo}>
          <Logo/>
        </div>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;