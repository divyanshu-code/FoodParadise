import React, { useContext } from 'react';
import { StoreContent } from '../../context/StoreContent';
import FoodItem from '../fooditem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContent);

  return (
    <div className='mx-5 md:mx-10 lg:mx-20 mt-10'>
      <h1 className='font-bold text-2xl md:text-3xl'>Top dishes near you</h1>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  md:gap-10'>
        {food_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem 
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
