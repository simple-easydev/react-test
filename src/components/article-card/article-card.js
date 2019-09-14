
import React from "react";
import { connect } from 'react-redux';

import "./article-card.scss";
// images
import delete_icon from '../../assets/icons/delete.svg';
import avatar_icon from '../../assets/image/avatar.png';
import Button from '@material-ui/core/Button';

class ArticleCard extends React.Component {

    onClickMarkBtn(){
        alert(this.props.userData.name);
    }

    render() {
        const data = this.props.data;
            
        return (
            <div className="article-card">
                <img className="photo" src={avatar_icon}></img>
                <div className="name">
                    <h1>{data.author}</h1>
                    <h2>{data.email}</h2>
                    <h3>{data.jobTitle}</h3>
                </div>
                {
                    !data.isRead && <div className="mark-unread"></div>
                }
                <div className="article">
                    <h1>{data.title}</h1>
                    <h2>{data.desc}</h2>
                </div>
            </div>
        );
    }
};

export default ArticleCard;