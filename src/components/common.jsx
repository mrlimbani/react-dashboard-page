import React, { Component } from 'react'

import NavbarComponent from './pages/navbarComponent';
import Sidebar from './pages/sidebarComponent';
import Dashboard from './dashboard';

class common extends Component {

    // constructor(props){
    //     super(props);
    //     const { view }=this.props;
    //     console.log('view==>',view);
    // }

    render() {
        
        return (
            <div className="container-scroller">
                <NavbarComponent />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Dashboard />
                            {/* <AppRoutes /> */}
                            {/*SettingsPanelComponent */}
                        </div>
                        {/* {footerComponent} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default common;