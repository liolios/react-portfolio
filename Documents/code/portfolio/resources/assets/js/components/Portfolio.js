import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PortfolioItem from './Portfolio-item';


export default class Portfolio extends Component {
    render() {
      const items = [{
        name: 'Hope',
        img: 'hope.png',
        text:'Data Strategy for swedish clothing company Hopes e-commerce.'
      },
      {
        name: 'Willys',
        img: 'willy1.png',
        text:'Digital marketing campaign for the launch of Willys online store.'
      },
      {
        name: 'Volvo',
        img: 'volvos.png',
        text:'Create a service that coinsides with Volvos brand values and creates value for their customers.'
      },
      {
        name: 'hittaeko',
        img: 'hittaeko.png',
        text:'Created the service hittaeko.nu, a map based service listing all organic grocery stores and restaurants in the Stockholm area.'
      },
      {
        name: 'P&G',
        img: 'pg.png',
        text:'Together with four other Hyper Island students we created a concept for P&G on how to improve the user experience of gifting and purchasing perfumes online.'
      },
      {
        name: 'Unicef',
        img: 'unicef.png',
        text:'Increase brand awareness and participation of Unicef project "Operation Dagsverke"'
      }
    ];
    const listItems = items.map((item, i) =>
      <PortfolioItem key={i} name={item.name} img={item.img} text={item.text} />
    );
        return (
          <div className="section portfolio-section">
            <div className="portfolio-wrapper">
              {listItems}
            </div>
          </div>
        );
    }
}
