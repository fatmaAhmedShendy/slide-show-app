import React, { Component } from 'react';
import logo from '../img/logo.svg';
import styles from '../../css/header.css'

class header extends Component {
    state = {  } 
    render() { 
        return (
            <>
            {/* <img src={logo} /> */}
            <nav className="nav-center navbar navbar-expand-lg navbar-dark bg-dark">
                    
                    <div class="navbar-collapse collapse" id="collapsingNavbar2">
                        <ul class="navbar-nav mx-auto text-md-center text-left">
                            <a className="" href="#">
                                <img src={logo} className='' height="40" alt=""/>
                            </a>
                            <li className="nav-item">
                            <a className="nav-link.active nav-link active" aria-current="page" href="" style={{color:"#04AA6D","font-weight":"bold"}}>Slideshow App</a>
                            </li>
                        </ul>
                    </div>
            </nav>

            </>

        );
    }
}
 
export default header;