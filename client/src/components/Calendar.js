import React, { Component } from 'react';
import Calendar from 'react-calendar';

const data = {
  description:
    ' Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test'
};
export default class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  onChange = date => {
    console.log(date);
    this.setState({ date });
  };
  click = () => {
    alert('hit');
  };
  calendarSummary = date => {
    return <div className="summary">{data.description.substr(0, 20)}</div>;
  };

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileContent={this.calendarSummary}
        />
      </div>
    );
  }
}
