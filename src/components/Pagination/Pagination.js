import React, { Component } from 'react';
import './Pagination.css';

class Pagination extends Component {

  generatePageLinks = () => {
    let { currentIndex, total, updateCurrentPage } = this.props;
    let acc = [];
    for (let i = 0; i < total; i++) {
      acc.push(
        <span key={i}
          className={i === currentIndex ? 'active pageIndex' : 'pageIndex'}
          onClick={() => { updateCurrentPage(i) }}>
          {i + 1}
        </span>);
    }
    return acc;
  }

  render() {
    return (
      <div className="pagination">
        {this.generatePageLinks()}
      </div>
    );
  }
}

export default Pagination;
