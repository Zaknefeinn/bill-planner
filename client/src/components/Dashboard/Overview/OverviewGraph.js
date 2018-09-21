import React, { Component } from 'react';
import isEmpty from '../../../utils/is-empty';
import { Pie } from '@nivo/pie';

class OverviewGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  // componentDidMount() {
  //   if (!isEmpty(this.props.data)) {
  //     this.setState({ loading: false });
  //   }
  // }
  componentDidUpdate() {
    if (this.state.loading && !isEmpty(this.props.data)) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { data } = this.props;
    if (this.state.loading) {
      return <div className="ov-graphs ov-sub">loading...</div>;
    } else {
      return (
        <div className="ov-graphs ov-sub">
          <Pie
            width={600}
            height={600}
            margin={{ top: 40, right: 100, left: 100, bottom: 40 }}
            pixelRatio={2}
            innerRadius={0.15}
            cornerRadius={6}
            padAngle={1}
            fit={false}
            colors="set1"
            colorBy="id"
            borderWidth={2}
            borderColor="inherit:brighter(0.6)"
            enableRadialLabels={false}
            sliceLabel={'id'}
            slicesLabelsSkipAngle={50}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            data={this.props.data}
          />
        </div>
      );
    }
  }
}
// const mapStateToProps = state => ({
//   data
// })
export default OverviewGraph;
