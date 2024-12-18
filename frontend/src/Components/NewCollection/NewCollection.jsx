import React from 'react';
import './NewCollection.css';
import new_collection from '../Assets/new_collections';
import Item from '../Items/Item';

const NewCollection = () => {
  return (
    <div className='NewCollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collection'>
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id} // Corrected here
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;
