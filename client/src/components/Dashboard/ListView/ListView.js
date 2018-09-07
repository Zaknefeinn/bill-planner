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
      pageList: [1, 2, 3],
      rendered: false
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
    this.getPageCount();
    this.setState({ rendered: true });
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.activePage !== this.state.activePage || !this.state.rendered
    );
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
  changePage = e => {
    this.setState({ activePage: e });
  };

  render() {
    const { listData, pageList, show } = this.state;
    //remove expired bills
    //plug in active page for show range
    const showMin = show - 10;
    const showMax = show - 1;
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
        <div className="list-page">
          {pageList.map(page => {
            return (
              <button
                key={`${page}-pageList`}
                onClick={() => this.changePage(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListView;
