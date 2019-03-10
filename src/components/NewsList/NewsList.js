import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';

class NewsList extends Component {

  generateNewsList = (newsList) => {
    return newsList.map((newsId) => <NewsItem newsId={newsId} key={newsId}/>);
  }
  render() {
    return (
      <div className="NewsList">
        NewsList
        {this.generateNewsList(this.props.pageData)}
      </div>
    );
  }
}

export default NewsList;
