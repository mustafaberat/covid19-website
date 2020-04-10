import React from 'react';

import "../styles/main.scss";


const MyFooter = (props) => {
    return (
        <footer className="myfooter">
            <div class="container">
                <div class="row text-center text-xs-center text-sm-left text-md-left">
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p class="h6">Copy All Right Reversed.<a class="ml-2 footerA" href={props.path} target="blank">{props.webname}</a></p>
                    </div>
                </div>
            </div >
        </footer >
    )
}

export default MyFooter