import React, { Component } from "react";
import { connect } from "react-redux";
import { CardDeck, Card, Container, Row, Col } from "react-bootstrap";

import { getLatestPollutionData } from "../store/actions/actions";

class LatestData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.props.getLatestPollutionData();
  };

  render() {
    return (
      <Container>
        {this.props.latestPollutionData != null && (
          <CardDeck>
            <Row>
              <Col xs={12} sm={12} md={12} lg={3}>
                <Card className="latestCardDetail">
                  <Card.Body>
                    <Card.Title>Details</Card.Title>
                    <Card.Text>
                      <div className="measurements">
                        <h1>{this.props.latestPollutionData.measurements}</h1>
                        <h6>MEASUREMENTS</h6>
                      </div>
                      <div className="coordinates">
                        <h6>COORDINATES</h6>
                        <h6>
                          N{this.props.latestPollutionData.coordinates.latitude}
                          , E
                          {this.props.latestPollutionData.coordinates.longitude}
                        </h6>
                      </div>
                      <div className="lastUpdated">
                        <h6>LAST UPDATED</h6>
                        <h6>{this.props.latestPollutionData.lastUpdated}</h6>
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={12} md={12} lg={9}>
                <Card className="latestCard">
                  <Card.Body>
                    <Card.Title>Latest Measurements</Card.Title>
                    <Card.Text>
                      <Row>
                        {this.props.latestPollutionData.parameters.map(
                          (item) => {
                            return (
                              <Col xs={12} sm={6} md={4} lg={4}>
                                <Card className="latestInnerCard">
                                  <Card.Header>{item.displayName}</Card.Header>
                                  <Card.Body>
                                    <Card.Text>
                                      <p className="largeText">
                                        {item.lastValue}
                                        <sub>{item.unit}</sub>
                                      </p>
                                      {/* <p>{item.unit}</p> */}
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </Col>
                            );
                          }
                        )}
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardDeck>
        )}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    latestPollutionData: state.latestData.latestPollutionData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLatestPollutionData: () => dispatch(getLatestPollutionData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestData);
