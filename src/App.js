import React, { Component } from 'react';
import './App.css';

import CountryDetail from './components/CountryDetail'
import axios from "axios";

import { Link, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      error: null
    }
  }

  componentDidMount() {
    axios
      .get("https://countries.tech-savvy.tech/countries")
      .then(response => {
        this.setState({ countries: response.data })
      })
      .catch(error => {
        this.setState({ error: error.message });
      })
  }

  render() {
    return (
      <div className="App" >
        <h1 className="list-group-item list-group-item-action active">WikiCountries</h1>
        <div className="AppRow">
          <div className="list-group SideBar">
            {this.state.countries.map((country) =>
              <Link className="list-group-item list-group-item-action" to={`/country-detail/${country.cca3}`}>{country.flag.normalize()}{country.name.common}</Link>
            )}
          </div>
          <div className="Pages">
            <Route
              path="/country-detail/:cca3"
              render={(props) => <CountryDetail {...props} countries={this.state.countries} />}
            />
          </div>
        </div>
      </div >
    );
  }
}

export default App;

