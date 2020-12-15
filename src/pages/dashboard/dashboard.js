import React from 'react';
import { WeatherForecast } from '../../components/weather-forecast/weather-forecast';
import { DailyTimeline } from '../../components/daily-timeline/daily-timeline';
import  './dashboard.scss';
import { Calendar } from '../../components/calendar/calendar';
import { TodoList } from '../../components/todo-list/todo-list';
import MediaQuery from 'react-responsive';
import {Col,Row,Container} from 'react-bootstrap';

export function Dashboard() {
  return (
    <Container className="dashboard" fluid>
      <MediaQuery minDeviceWidth={992}>
        <Row className="h-100">
          <Col md={3} lg={3} xl={3} className="daily h-100">
            <Row>
              <Col>
              <WeatherForecast></WeatherForecast>
              </Col>
            </Row>
            <Row>
            <Col>
               <DailyTimeline className="daily-tasks"></DailyTimeline>
              </Col>
            </Row>
          </Col>
          <Col md={9} lg={9} xl={9} className="h-100">
            <Row>
            <Calendar></Calendar>
              </Row>
              <Row>
              <TodoList></TodoList>
              </Row>
          </Col>
        </Row>
        </MediaQuery> 
        <MediaQuery maxDeviceWidth={991.98}>
          <Row>
            <Col xs={2} sm={2}>
              <WeatherForecast></WeatherForecast>
            </Col>
            <Col xs={10} sm={10}>
              <TodoList></TodoList>
            </Col>
          </Row>
          <Row>
          <Calendar></Calendar>
          </Row>
          <Row className="daily-tasks">
          <DailyTimeline></DailyTimeline>
          </Row>
        </MediaQuery> 
    </Container>

  );
}