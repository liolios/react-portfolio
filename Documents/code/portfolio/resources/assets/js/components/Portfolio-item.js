import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portfolio extends Component {
    onHover(){
        console.log('hello');
    }
    render() {
        return (
          <div className="portfolio-box" onMouseOver={this.onHover} style={{ backgroundImage: 'url(/imgs/' + this.props.img + ')',
          backgroundSize: 'cover' }}>
            <div className="portfolio-overlay">
                <div className="portfolio-text">
                    {this.props.text}
                </div>
            </div>
          </div>
        );
    }
}
