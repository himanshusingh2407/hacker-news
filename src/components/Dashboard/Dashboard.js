import React, { Component } from 'react';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
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
}

export default Dashboard;
