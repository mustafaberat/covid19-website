import React from 'react';

import "../styles/main.scss";
import SearchIcon from "./icons/SearchIcon";


const GlobalCard = (props) => {
    return (
        <div className="panel clickable globalPanel">
            <div className="panel-heading globalCardHeading">
                <div className="searchBtnContainer">
                    <SearchIcon />
                </div>
                <div>
                    <h4>Global</h4>
                    <span>World</span>
                </div>
            </div>
            <table className="table">
                <tbody>
                    <tr>
                        <th>New Confirmed</th>
                        <td>{props.source.NewConfirmed}</td>
                    </tr>
                    <tr>
                        <th>New Deaths</th>
                        <td>{props.source.NewDeaths}</td>
                    </tr>
                    <tr>
                        <th>Total Confirmed</th>
                        <td>{props.source.TotalConfirmed}</td>
                    </tr>
                    <tr>
                        <th>Total Deaths</th>
                        <td>{props.source.TotalDeaths}</td>
                    </tr>
                    <tr>
                        <th>Total Recovered</th>
                        <td>{props.source.TotalRecovered}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GlobalCard