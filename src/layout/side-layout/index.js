
import React from "react";
import { connect } from 'react-redux';

import "./style.scss";
// images
import logo_icon from '../../assets/image/logo.png';
import dashboard_icon from '../../assets/image/dashboard icon.svg';
import meetings_icon from '../../assets/image/meetings icon.svg';
import conversations_icon from '../../assets/image/conversations icon.svg';
import settings_icon from '../../assets/image/settings icon.svg';
import sessions_icon from '../../assets/image/sessions icon.svg';
import files_board_icon from '../../assets/image/files board icon.svg';

class SideLayout extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
    }

    select(arg){
        this.setState({ selected: arg })
    }

    render(){
        return (
            <aside className="side-layout">
                <div className="div-logo">
                    <img className="img-logo" src={logo_icon}></img>
                </div>
                <div className="div-menu"  onClick={(e) => this.select(0)}>
                    { this.state.selected == 0 && <div className="active"></div>}
                    <img className="img-logo" src={dashboard_icon}></img>
                </div>
                <div className="div-menu" onClick={(e) => this.select(1)}>
                    { this.state.selected == 1 && <div className="active"></div>}
                    <img className="img-logo" src={sessions_icon}></img>
                </div>
                <div className="div-menu" onClick={(e) => this.select(2)}>
                    { this.state.selected == 2 && <div className="active"></div>}
                    <img className="img-logo" src={meetings_icon}></img>
                </div>
                <div className="div-menu" onClick={(e) => this.select(3)}>
                    { this.state.selected == 3 && <div className="active"></div>}
                    <img className="img-logo" src={files_board_icon}></img>
                </div>
                <div className="div-menu" onClick={(e) => this.select(4)}>
                    { this.state.selected == 4 && <div className="active"></div>}
                    <img className="img-logo" src={conversations_icon}></img>
                </div>
                <div className="div-menu" onClick={(e) => this.select(5)}>
                    { this.state.selected == 5 && <div className="active"></div>}
                    <img className="img-logo" src={settings_icon}></img>
                </div>
            </aside>
        );
    }
};

export default SideLayout;