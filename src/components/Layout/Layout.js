import React, {Component, Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    
    state = {
        sideDrawerOpen: false
    }
    
    sideDrawerOpenedHandler = () =>{
        this.setState({sideDrawerOpen: true})
    }

    sideDrawerClosedHandler = ()=> {
        this.setState({sideDrawerOpen: false})
    }

    render(){
            return(
                <Fragment>
                    <Toolbar showDrawer = {this.sideDrawerOpenedHandler}/>
                    <SideDrawer show = {this.state.sideDrawerOpen} closed = {this.sideDrawerClosedHandler}/>
                    <main className = {classes.content}>
                        {this.props.children}
                    </main>
                </Fragment>
        );
    }

}

export default Layout;