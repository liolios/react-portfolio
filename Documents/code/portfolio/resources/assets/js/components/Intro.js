import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Intro extends Component {
    render() {
        return (
          <section className="section intro-section">
            <div className="title-wrapper">
              <h1 className="title intro-title">Simon Liolios</h1>
              <h2 className="subtitle intro-subtitle"><strong>Data Strategist </strong> <em>turned </em><strong>developer</strong></h2>
            </div>
          </section>
        );
    }
}
