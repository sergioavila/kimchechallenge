import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./Results.css";
import FlagIcon from "../../FlagIcon";

const GET_COUNTRIES = gql`
{
  countries {
    name
    code
    capital
    currency
    continent{
        name
    }
    languages{
        name
      }
  }
}
`;

const Results = (props) =>{
    console.log(props.children)
    return (
        <div className="results">
            <div className="results__header">
                <ul className="results__header__options">
                    <li className="results__header__option results__header__option-active">All</li>
                    <li className="results__header__option">By continent</li>
                    <li className="results__header__option">By language</li>
                </ul>
            </div>
            <div className="results__body">
                <Query query={GET_COUNTRIES}>
                    {({ loading, error, data }) => {
                        if (loading) return <p className="results__body__loading">Cargando...</p>;
                        if (error) return <p>Error!</p>;

                        console.log('Continente Europe: ', data.countries.filter(country => country.continent.name === "Europe"));
                        console.log('Language spanish: ', data.countries.filter(country => country.continent.name === "Spanish"));
                        console.log('Buscador: ', data.countries.filter(country => country.name.includes("Chi")));

                        return data.countries.filter(country => country.code.toLowerCase() !== "xk").map(country => {
                            return <div className="results__body__item" key={country.code}>
                                        <div className="results__body__item__flag">
                                            <FlagIcon code={country.code.toLowerCase()} squared={true}/>
                                        </div>
                                        <div className="results__body__item__info">
                                            <h3>{country.name}</h3>
                                            <p>Continent: {country.continent.name}</p>
                                            <p>Currency: {country.currency}</p>
                                            <p>Capital: {country.capital}</p>
                                            <p>Languages: {country.languages.map(item => {
                                            return <span key={item.name}>{item.name}</span>;
                                        })}</p>
                                        </div>
                                </div>
                        });
                    }}
                </Query>
            </div>
        </div>
    )
}

export default Results;