import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import Axios from 'axios';
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Intro');
require('./components/About');


function App() {
  return (
    <div>
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
