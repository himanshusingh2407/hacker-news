import React, { Component } from 'react';
import Axios from 'axios';
import './NewsItem.css';

class NewsItem extends Component {

  state = {
    title: null,
    url: null,
    by: null
  }

  getDate = (time) => (new Date(time).toISOString().slice(0, 10));

  render() {
    return (
      <div className="newsItem">
        <a href={this.state.url} target="_blank" rel="noopener noreferrer" className="title">
          <h3>{this.state.title}</h3>
        </a>
        {this.state.by ? <div>By: <i>{this.state.by}</i></div> : null}
        {this.state.time ? <div className="newsDate">Date: <i>{this.getDate(this.state.time)}</i></div> : null}
      </div>
    );
  }

  componentDidMount() {
    Axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.newsId}.json`).then((response) => {
      let news = response.data;
      this.setState({
        title: news.title,
        url: news.url,
        by: news.by,
        time: news.time
      });
    });
  }
}

export default NewsItem;
