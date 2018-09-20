import React, { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import classnames from 'classnames';

import './ListView.css';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      show: 10,
      activePage: 1,
      pageList: [],
      reload: true
    };
  }
  componentDidMount() {
    const combinedArray = _.concat(...this.props.data);
    const futureBills = _.filter(combinedArray, function(bill) {
      return bill.date.isAfter(Moment());
    });
    const result = _.sortBy(futureBills, [
      function(o) {
        return new Date(o.date);
      }
    ]);
    this.setState({
      listData: result
    });
  }
  componentDidUpdate() {
    if (this.state.reload) {
      this.getPageCount();
      this.setState({ reload: false });
    }
  }

  getPageCount = () => {
    const { listData, show } = this.state;
    const pages = Math.ceil(listData.length / show);
    let pageList = [];
    for (var i = 0; i < pages; i++) {
      pageList.push(i + 1);
    }
    this.setState({
      pageList
    });
  };

  handleChange = state => {
    this.setState({
      [state.target.name]: parseInt(state.target.value, 10),
      activePage: 1,
      reload: true
    });
  };

  pageUp = () => {
    const { activePage, pageList } = this.state;
    if (activePage + 1 <= pageList.length) {
      this.setState({
        activePage: activePage + 1
      });
    }
  };
  pageDown = () => {
    const { activePage } = this.state;
    if (activePage - 1 > 0) {
      this.setState({
        activePage: activePage - 1
      });
    }
  };
  renderPageList = () => {
    const { activePage, pageList } = this.state;
    return (
      <div className="page-list">
        {pageList.map(page => {
          if (activePage === 1 && activePage + 2 < page) {
            return null;
          } else if (
            (activePage !== 1 && activePage + 1 < page) ||
            (activePage !== 1 && activePage - 1 > page)
          ) {
            return null;
          } else {
            return (
              <span
                className={classnames('page-list-number', {
                  'selected-page': activePage === page
                })}
                onClick={() =>
                  this.setState({ activePage: parseInt(page, 10) })
                }
                key={`page-number-${page}`}
              >
                {page}
              </span>
            );
          }
        })}
        {this.shouldRenderPageListExtension()}
      </div>
    );
  };
  shouldRenderPageListExtension = () => {
    const { activePage, pageList } = this.state;
    if (
      activePage <= parseInt(pageList[pageList.length - 1], 10) - 2 &&
      parseInt(pageList[pageList.length - 1], 10) > 3
    ) {
      return (
        <span>
          <span className="page-list-number">...</span>
          <span
            className="page-list-number"
            onClick={() =>
              this.setState({
                activePage: parseInt(pageList[pageList.length - 1], 10)
              })
            }
          >
            {pageList[pageList.length - 1]}
          </span>
        </span>
      );
    }
  };

  render() {
    const { listData, show, activePage, pageList } = this.state;
    //remove expired bills
    //plug in active page for show range
    const showMin = show * activePage - show;
    const showMax = show * activePage;
    const pageData = listData.slice(showMin, showMax);
    return (
      <div className="ListView">
        <div className="list-container">
          <h1>List View</h1>
          <div className="page-container">
            <div className="page-arrow" onClick={this.pageDown}>
              <i className="fas fa-angle-left" />
            </div>
            {this.renderPageList()}
            <div className="page-arrow" onClick={this.pageUp}>
              <i className="fas fa-angle-right" />
            </div>
          </div>
          <table className="list-view-table">
            <thead className="list-titles">
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Category</th>
                <th>Account</th>
                <th>Description</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map(bill => {
                const date = Moment(bill.date).format('MM/DD/YY');
                return (
                  <tr className="list-card" key={`${bill.bill}-${date}-card`}>
                    <td>
                      <strong>{bill.bill}</strong>
                    </td>
                    <td>{date}</td>
                    <td>{bill.category}</td>
                    <td>{bill.account}</td>
                    <td>{bill.description}</td>
                    <td>${bill.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="page-container">
            <div className="page-arrow" onClick={this.pageDown}>
              <i className="fas fa-angle-left" />
            </div>
            {this.renderPageList()}
            <div className="page-arrow" onClick={this.pageUp}>
              <i className="fas fa-angle-right" />
            </div>
            <div className="list-show">
              <select
                className="reg-input two-input"
                name="show"
                value={show}
                onChange={this.handleChange}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
