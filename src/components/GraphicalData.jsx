import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getDailyPollutionData } from "../store/actions/actions";

class GraphicalData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      labels: [],
      averageValue: null,
      graphData: null,
      inValid: false,
    };
  }

  componentDidMount = () => {
    this.props.getDailyPollutionData();
  };

  setDate = (date) => {
    if (date > new Date()) {
      this.setState({
        inValid: true,
      });
    } else {
      this.props.getDailyPollutionData(date);
      this.setState(
        {
          today: date,
          graphData: this.getData(date),
        },
        () => {}
      );
    }
  };

  getData = (date) => {
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();
    var dateFormatted = yyyy + "-" + mm + "-" + dd;
    const labels = [];
    const averageValue = [];
    this.props.dailyPollutionData.map((res, i) => {
      if (res.day == dateFormatted) {
        labels.push(res.displayName + " ( " + res.unit + " )");
        averageValue.push(res.average);
      }
    });
    this.setState({ labels: labels, averageValue: averageValue });
    var data = {
      labels: labels,
      datasets: [
        {
          label: "Pollution Measure",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: averageValue,
        },
      ],
    };
    return data;
  };

  render() {
    return (
      <Container className="graphContainer">
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <Card className="selectDateCard">
              <Card.Header className="selectDateHeader">
                {" "}
                <DatePicker
                  dateFormat="yyyy-MM-dd"
                  selected={this.state.today}
                  onChange={this.setDate}
                  className="datePicker"
                />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Get pollution data on a graph by selecting a date
                </Card.Text>
              </Card.Body>
              {this.state.inValid && (
                <Alert variant="danger">Oops! Choose a valid date.</Alert>
              )}
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8}>
            {this.state.averageValue != "" ? (
              <div>
                <Line
                  data={this.state.graphData}
                  width={null}
                  height={null}
                />
              </div>
            ) : (
              <Alert variant="danger">Oops! No data available.</Alert>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    dailyPollutionData: state.latestData.dailyPollutionData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDailyPollutionData: (date) => dispatch(getDailyPollutionData(date)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphicalData);
