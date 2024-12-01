import React from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Items/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {data_product.map((item, index) => {
          return (
            <div key={index} className='popular-card'>
              <img src={item.image} alt={item.name} className='popular-image' />
              <h3>{item.name}</h3>
              <p>New Price: ${item.new_price}</p>
              <p>Old Price: ${item.old_price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
