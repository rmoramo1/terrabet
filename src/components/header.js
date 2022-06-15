import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/vipsports247.jpg';
import logos from '../assets/img/logos.webp';

export default class header extends Component {
    render() {
        return (
            <div className='header'>
                <div className="row g-0">
                    <div className="col-xl-3">
                        <Link to="/home">
                            <img className="img-fluid" src={logo} alt="logo"></img>
                        </Link>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center align-items-center px-lg-2">
                        <form id='login' action="//wager.terrabet.net/redirectlogin.php" method="post">
                            <div className="row p-2 text-white textShadow">
                                <div className="col-4 text-center">
                                    <input name="username" id="userInputLog" type="text" class="form-control" placeholder="USER" aria-label="USER" />
                                </div>
                                <div className="col-4 text-center">
                                    <input type="password" name="password" id="password" class="form-control" placeholder="PASSWORD" aria-label="PASSWORD" required />
                                    <input type="hidden" name="multiaccount" id="multiaccount" value="0"></input>
                                </div>
                                <div className="col-4 text-center">
                                    <button type="submit" className="btn btn_login">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center p-2 p-md-0">
                        <img className='img-fluid' src={logos} alt="logos of sports"></img>
                    </div>
                </div>
            </div>
        )
    }
}
