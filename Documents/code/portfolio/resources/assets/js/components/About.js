import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {
    render() {
        return (
          <section className="section about-section">
            <div className="title about-wrapper">
              <h2 className="title is-1 about-title">
                Hey there ....
              </h2>
              <h2 className="title is-3 about-title">
                Check out my portfolio. This is a collection of some of the work I've been involved in during the past years, both as a student and working for clients. It's a mix of projects where I either had a Development or Data Strategist role.
              </h2>
            </div>
            <div className="education-wrapper">
              <div className="hyper-island">
                <div className="hyper-overlay">
                  <div className="hyper-text">
                    <a className="education-text" href="https://www.hyperisland.com/programs-and-courses/digital-data-strategist">
                      <p>
                        Hyper Island
                      </p>
                      <p>
                        Digital Data Strategist
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="kyh">
              <div className="kyh-overlay">
                  <div className="kyh-text">
                    <a className="education-text" href="https://www.hyperisland.com/programs-and-courses/digital-data-strategist">
                      <p>
                        KYH
                      </p>
                      <p>
                        FRONTEND
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              </div>
          </section>
        );
    }
}
