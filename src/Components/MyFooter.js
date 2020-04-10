import React from 'react';

import "../styles/main.scss";


const MyFooter = (props) => {
    return (
        <footer className="myfooter">
            <div className="container">
                <div className="row text-center text-xs-center text-sm-left text-md-left">
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        <p className="h6">Copy All Right Reversed.
                        <a className="ml-2 footerA" href={props.path} target="blank">{props.webname}</a></p>
                    </div>
                </div>
            </div >
        </footer >
    )
}

export default MyFooter