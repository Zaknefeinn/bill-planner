import React, { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';
import './ListView.css';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      show: 10,
      activePage: 1,
      nextPage: 1,
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
    let pageArr = [];
    for (var i = 0; i < pages; i++) {
      pageArr.push(i + 1);
    }
    this.setState({
      pageList: pageArr
    });
  };

  handleChange = state => {
    this.setState({
      [state.target.name]: parseInt(state.target.value),
      reload: true
    });
  };
  handleSubmit = e => {
    const { pageList, nextPage } = this.state;
    e.preventDefault();
    console.log(nextPage);
    console.log(pageList.length - 1);
    if (nextPage <= pageList.length - 1) {
      this.setState({
        activePage: nextPage
      });
    } else {
      this.setState({
        activePage: pageList.length - 1,
        nextPage: pageList.length - 1
      });
    }
  };
  changePage = e => {
    this.setState({ activePage: e });
  };

  render() {
    const { listData, pageList, show, activePage, nextPage } = this.state;
    //remove expired bills
    //plug in active page for show range
    const showMin = show * activePage - show;
    const showMax = show * activePage;
    const pageData = listData.slice(showMin, showMax);
    return (
      <div className="ListView">
        <div className="list-container">
          {pageData.map(bill => {
            const date = Moment(bill.date).format('MM/DD/YY');
            return (
              <div className="list-card" key={`${bill.bill}-${date}-card`}>
                {bill.bill} - {date}
              </div>
            );
          })}
        </div>
        <div className="list-nav-container">
          <form onSubmit={this.handleSubmit}>
            Go to page
            <input
              type="number"
              className="reg-input two-input"
              name="nextPage"
              value={nextPage}
              onChange={this.handleChange}
            />
          </form>
          Show
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
    );
  }
}

export default ListView;
// {pageList.map(page => {
//   return (
//     <button
//       key={`${page}-pageList`}
//       onClick={() => this.changePage(page)}
//     >
//       {page}
//     </button>
//   );
// })}
