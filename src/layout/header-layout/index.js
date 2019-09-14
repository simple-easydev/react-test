
import React from "react";
import { connect } from 'react-redux';

import "./style.scss";

// images
import search_icon from '../../assets/image/search icon.png';
import avatar_icon from '../../assets/image/Oval 2.png';

class HeaderLayout extends React.Component {

    render() {
        return (
            <div className="header-layout">
                <img className="image-search" src={search_icon}></img>
                <input placeholder="Find a user, team, meeting..."></input>
                <img className="image-profile" src={avatar_icon}></img>
            </div>
        );
    }
};

export default HeaderLayout;