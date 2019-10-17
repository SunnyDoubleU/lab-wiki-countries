import React from 'react';
import './App.css';
import countries from './data/countries.json'
import CountryDetail from './components/CountryDetail'

import { Link, Route } from "react-router-dom";

function App() {

  return (
    <div className="App" >
      <h1 className="list-group-item list-group-item-action active">WikiCountries</h1>
      <div className="AppRow">
        <div className="list-group SideBar">
          {countries.map((country) =>
            <Link className="list-group-item list-group-item-action" to={`/country-detail/${country.cca3}`}>{country.flag.normalize()}{country.name.common}</Link>
          )}
        </div>
        <div className="Pages">
          <Route path="/country-detail/:cca3" component={CountryDetail} />
        </div>
      </div>
    </div >
  );
}

export default App;
