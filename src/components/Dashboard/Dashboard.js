import React, { Component } from 'react';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import Axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        Dashboard
        <NewsList />
        <Pagination />
      </div>
    );
  }

  componentDidMount() {
    Axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then((response) => {
      console.log(response.data);
    });
  }
}

export default Dashboard;
