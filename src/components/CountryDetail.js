import React from 'react';
import { Link } from "react-router-dom";


const CountryDetail = (props) => {

    var countryDetail = props.match.params.cca3
    var filteredCountry = props.countries.filter((country) => country.cca3 === countryDetail)[0]
    debugger

    return (
        <div className="listGroup">
            <h1>{filteredCountry.name.common}</h1>
            <h3>Capital: {filteredCountry.capital}</h3>
            <h3>Area: {filteredCountry.area} km<sup>2</sup></h3>
            <h4>Borders:</h4>
            <ul>
                {filteredCountry.borders.map((border) => {
                    let find = props.countries.filter((country) => country.cca3 === border)[0]
                    return (
                        < li > <Link to={`/country-detail/${border}`}>{find.name.common}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CountryDetail;