import React, { Component } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.css';

class NewsList extends Component {
  render() {
    return (
      <div className="NewsList">
        NewsList
        <NewsItem />
      </div>
    );
  }
}

export default NewsList;
