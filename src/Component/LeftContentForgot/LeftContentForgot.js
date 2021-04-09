/* eslint-disable no-use-before-define */
import React from 'react';
import './LeftContentForgot.css';

function LeftContentForgot () {
  return (
    <React.Fragment>
      <div className="logo">
        <img src="./src/image/logo.png" alt="logo" className="img-logo" />
      </div>
      <div className="paragraph-title">
        <h3 className="title text-white">Lets reset your password</h3>
        <p className="paragraph-main">
          To be able to use your account again, please <br />
          complete the following steps.
        </p>
        <div className="container-list-timeline">
          <div className="list-1 d-flex align-items-center list-margin">
            <div className="round bg-white rounded-circle d-flex align-items-center justify-content-center">
              <div className="no-1 text-muted">1</div>
            </div>
            <div className="text-white">Fill your complete email</div>
          </div>
          <div className="line-timeline-1"> </div>
          <div className="list-2 d-flex align-items-center list-margin">
            <div className="round border border-3 border-white rounded-circle d-flex align-items-center justify-content-center">
              <div className="no-2 text-white">2</div>
            </div>
            <div className="text-timeline-forgotpass">Activate your email</div>
          </div>
          <div className="line-timeline-2"> </div>
          <div className="list-3 d-flex align-items-center list-margin">
            <div className="round border border-3 border-white rounded-circle d-flex align-items-center justify-content-center">
              <div className="no-3 text-white">3</div>
            </div>
            <div className="text-timeline-forgotpass">Enter your new password</div>
          </div>
          <div className="line-timeline-3"> </div>
          <div className="list-3 d-flex align-items-center list-margin">
            <div className="round border border-3 border-white rounded-circle d-flex align-items-center justify-content-center">
              <div className="no-3 text-white">4</div>
            </div>
            <div className="text-timeline-forgotpass">Done</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LeftContentForgot;
