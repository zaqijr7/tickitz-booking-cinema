import React from 'react';
import logo from '../../Assets/Images/logo.png';
import './LeftContentSignup.css';

function LeftContentSignup(){

    return (
        <React.Fragment>
            <div className="mt-5 ms-5">
                <div className="logo">
                    <img src={logo} alt="logo" className="img-logo" />
                </div>
                <div className="paragraph-title">
                    <h3 className="title text-white">Lets build your account</h3>
                    <p className="paragraph-main"> 
                        To be a loyal moviegoer and access all of features, <br />
                        your details are required.
                    </p>
                </div>
                <div className="container-list-timeline">
                    <div className="d-flex align-items-center list-margin">
                        <div className="round bg-white rounded-circle d-flex align-items-center justify-content-center">
                            <div className="text-muted">1</div>
                        </div>
                        <div className="text-white">Fill your additional details</div>
                    </div>
                    <div className="line-timeline-1"> </div>
                    <div className="d-flex align-items-center list-margin">
                        <div className="round border border-3 border-white rounded-circle d-flex align-items-center justify-content-center">
                            <div className="text-white">2</div>
                        </div>
                        <div className="text-muted">Activate your account</div>
                    </div>
                    <div className="line-timeline-2"> </div>
                    <div className="d-flex align-items-center list-margin">
                        <div className="round border border-3 border-white rounded-circle d-flex align-items-center justify-content-center">
                            <div className="text-white">3</div>
                        </div>
                        <div className="text-muted">Done</div>
                    </div>
                </div>
            </div>
      </React.Fragment>
    )
}

export default LeftContentSignup;