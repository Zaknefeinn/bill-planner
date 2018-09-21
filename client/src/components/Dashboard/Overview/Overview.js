import React, { Component } from 'react';
import _ from 'lodash';
import Moment from 'moment';

import OverviewGraph from './OverviewGraph';
import OverviewAccount from './OverviewAccount';
import OverviewTransactions from './OverviewTransactions';

import './Overview.css';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  componentDidMount() {
    const combinedArray = _.concat(...this.props.data);
    const futureBills = _.filter(combinedArray, bill => {
      return bill.date.isAfter(Moment()) && bill.date.isSame(Moment(), 'month');
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
  graphData = () => {
    const { listData } = this.state;
    const result = listData.map(data => {
      return {
        id: data.bill,
        label: data.bill,
        value: parseInt(data.amount, 10)
      };
    });
    const amounts = _.map(listData, bill => parseInt(bill.amount, 10));
    const balance = {
      id: 'Remaining Balance',
      label: 'Balance',
      value: _.reduce(amounts, (a, b) => a + b)
    };
    result.push(balance);
    return result;
  };
  render() {
    return (
      <div className="Overview">
        <div className="ov-left">
          <OverviewAccount />
          <OverviewTransactions data={this.state.listData} />
        </div>
        <div className="ov-right">
          <OverviewGraph data={this.graphData()} />
        </div>
      </div>
    );
  }
}
