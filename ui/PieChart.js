import c3 from 'c3';
import ReactDOM from 'react-dom';

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: this.props.columns ,
        type : 'pie',
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(props) {
    if (this.props != props) {
      this.chart.load({ columns: props.columns })
    }
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

export default PieChart;
