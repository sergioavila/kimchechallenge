import React from "react";
import "./Results.css";

function Results(){
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
                <div className="results__body__item">
                    <div className="results__body__item__flag">
                        <img src="https://flagicons.lipis.dev/flags/4x3/cl.svg" alt=""/>
                    </div>
                    <div className="results__body__item__info">
                        <h3>United States</h3>
                        <p>Continent: 1,000,000</p>
                        <p>Currency: CLP</p>
                        <p>Languages: English</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;