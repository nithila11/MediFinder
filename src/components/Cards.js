import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Healthcare at your fingertips!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/Med-7.jpg'
              text='Best Selling Medicine Past Year (Upcoming)'
              label='Trending'
              path='/services'
            />
            <CardItem
              src='./images/Med-8.jpg' 
              text='Tips and Tricks for your well being'
              label='Tips and Tricks'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/Med-3.jpg'
              text='Nearby Pharmacies'
              label='Locations'
              path='/services'
            />
            <CardItem
              src='./images/Med-4.2.jpg'
              text='Nearby Clinics'
              label='Locations'
              path='/products'
            />
            <CardItem
              src='./images/Med-5.jpg'
              text='See what our Customers have to say!'
              label='FAQ'
              path='/login-sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;