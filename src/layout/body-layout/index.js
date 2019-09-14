
import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import "./style.scss";

// component
// import Article from '../../component/article'
// import ArticleCard from '../../component/article-card'
import { Article, ArticleCard } from '../../components'

import { setArticles } from '../../redux/actions/article';

// images
import card_icon from '../../assets/icons/card.svg';
import card_active_icon from '../../assets/icons/card_active.svg';
import table_icon from '../../assets/icons/table.svg';
import table_active_icon from '../../assets/icons/table_active.svg';
import delete_icon from '../../assets/icons/delete.svg';

import avatar_icon from '../../assets/image/avatar.png';

// material ui
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';

import * as api from '../../api'

const test = "test"

class BodyLayout extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: "name1" },
                { name: "name2" },
                { name: "name2" },
                { name: "name2" },
                { name: "name2" },
                { name: "name2" },
            ],

            // articles: [],

            displayStyle: 2
        }
    }

    onClickStyle(arg) {
        this.setState({ displayStyle: arg })
        // alert(arg);
    }

    onClickDeleteAll() {
        alert("delete all");
    }

    onclickReadAll() {
        alert("read all");
    }

    onDeleteItem(id){
        

    }

    // componentDidMount() {

    //     fetch("http://localhost:3001/articles")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //                 this.setState({
    //                     isLoaded: true,
    //                     articles: result
    //                 });
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    //     // api.getArticles((response) => {
    //     //     console.log(response);
    //     // })
    // }

    render() {
        const countTotal = this.props.articles.length;
        const formattedTotal = countTotal < 10 ? ("0" + countTotal) : countTotal;

        var countUnread = 0;
        this.props.articles.forEach(element => {
            if (element.isRead == false)
                countUnread++;
        });

        const formattedUnread = countUnread < 10 ? ("0" + countUnread) : countUnread;
        console.log("new render");
        console.log(this.props.articles);

        return (

            <div className="body-layout">
                <div className="title">
                    <h2 className="roboto-medium">Articles</h2>
                    <div className="display-style">
                        <button className={
                            this.state.displayStyle == 1 ? 'item active' : 'item'
                        } onClick={(e) => this.onClickStyle(1)}>
                            <img className="img-logo" src={card_icon}></img>
                            <label>Cards</label>
                        </button>
                        <button className={
                            this.state.displayStyle == 2 ? 'item active' : 'item'
                        } onClick={(e) => this.onClickStyle(2)}>
                            <img className="img-logo" src={table_active_icon}></img>
                            <label>Table</label>
                        </button>
                    </div>
                </div>
                <div className="number">
                    <div className="card-number">
                        <div className="card-title">
                            <label className="roboto-medium">Number of articles</label>
                            <div className="popover__wrapper">
                                <IconButton aria-label="delete">
                                    <MoreHoriz />
                                </IconButton>
                                <div className="popover__content" onClick={(e) => this.onClickDeleteAll()}>
                                    <label>Delete All</label>
                                </div>
                            </div>
                        </div>
                        <label className="num num-total">{formattedTotal}</label>
                        <label className="description roboto-medium">This day</label>
                    </div>
                    <div className="card-number">
                        <div className="card-title">
                            <label className="roboto-medium">Unread articles</label>
                            <div className="popover__wrapper">
                                <IconButton aria-label="delete">
                                    <MoreHoriz />
                                </IconButton>
                                <div className="popover__content" onClick={(e) => this.onclickReadAll()}>
                                    <label>Mark All as Read</label>
                                </div>
                            </div>
                        </div>
                        <label className="num num-unread">{formattedUnread}</label>
                        <label className="description roboto-medium">This day</label>
                    </div>
                </div>
                <div className="day">
                    <h1>Today</h1>
                    <div className="day-bottom"></div>
                </div>
                <div className="table">
                    {
                        this.props.articles.map((obj, index) => {
                            if (this.state.displayStyle == 2) {
                                return (
                                    <Article key={index} data={obj} onDeleteItem={this.onDeleteItem}/>
                                )
                            }
                            else {
                                return (
                                    <ArticleCard key={index} data={obj}  onDeleteItem={this.onDeleteItem} />
                                )
                            }
                        })
                    }

                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
	articles: state.article.articles
});


const mapDispatchToProps = dispatch => bindActionCreators({
	setArticles
}, dispatch);


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BodyLayout);