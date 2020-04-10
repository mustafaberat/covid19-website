import React from 'react';

import "../styles/main.scss";
import SearchIcon from "./icons/SearchIcon";


const Card = (props) => {
    return (
        <div class="panel clickable" ng-class="{'panel-default': !isHovered, 'panel-info': isHovered}" ng-mouseenter="isHovered = true" ng-mouseleave="isHovered = false" ng-click="select()">
            <div class="panel-heading">
                <div class="searchBtnContainer">
                    <SearchIcon />
                </div>
                <div>
                    <h3>CountryName</h3>
                </div>
            </div>
            <table class="table">
                <tbody>
                    <tr>
                        <th>Title</th>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>123123</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>2131233</td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>123123</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Card