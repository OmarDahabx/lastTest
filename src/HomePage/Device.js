/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from "react";

class Device extends Component {
  render() {
    return (
      <div>
        <div className="moo" id="device">
          <div className="row">
            <div className="col-md-4">
              <img src="img/project.PNG" />
            </div>

            <div className="col-md-8">
              <div className="container">
                <div className="row chilout text-center">
                  <div className="col-md-6 mb-5">
                    <i className="fa-solid fa-phone"></i>
                    <h3 className="my-3">Device Mockups</h3>
                    <p className="text-muted">
                      Ready to use HTML/CSS device mockups,
                      <br />
                      no Photoshop required!
                    </p>
                  </div>

                  <div className="col-md-6 mb-5">
                    <i className="fa-solid fa-heart"></i>
                    <h3 className="my-3">Flexible Use</h3>
                    <p className="text-muted">
                      Put image, video, animation, or
                      <br />
                      anything else in the screen!
                    </p>
                  </div>

                  <div className="col-md-6 mb-5">
                    <i className="fa-solid fa-user"></i>
                    <h3 className="my-3">Free to Use</h3>
                    <p className="text-muted">
                      As always, this theme is free to download
                      <br />
                      and use for any purose!
                    </p>
                  </div>

                  <div className="col-md-6 mb-5">
                    <i className="fa-brands fa-github"></i>
                    <h3 className="my-3">Open Source</h3>
                    <p className="text-muted">
                      Since this theme is MIT licensed, you can
                      <br />
                      use it commercially!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Device;
