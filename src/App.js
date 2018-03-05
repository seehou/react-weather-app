import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import api from './utils/api';
import CityInput from './CityInput';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const Button = (props) => {
  return (
    <button>{props.title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

Button.defaultProps = {
  title: 'Submit'
}

const MainForm = () => {
  return (
    <div>
      <Button />
    </div>
  )
}

const Container = (props) => {
  return (
    <div>
      <Header title="" />
      <CityInput />
      <MainForm />
    </div>
  )
}

class App extends Component {
  componentDidMount() {
    // const response = api.fetchCityWeather('Kuala Lumpur').then((r) => {
    //   console.log(r)
    //   return r;
    // })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Container} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
