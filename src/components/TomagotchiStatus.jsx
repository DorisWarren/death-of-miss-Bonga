import React from 'react';
import '../scss/tomagotchi.scss';
import greenguy from '../assets/images/greenguy.png';
import PropTypes from 'prop-types';
import Tomagotchi from './Tomagotchi';

function TomagotchiStatus(props) {
  return (
    <div className='greenguy'>
      <h1>{props.sleep}</h1>
      <h1>{props.feed}</h1>
      <h1>{props.play}</h1>
      <img src={greenguy}></img>
    </div>
  );
}

Tomagotchi.propTypes = {
  sleep: PropTypes.number,
  food: PropTypes.number,
  play: PropTypes.number
};

export default TomagotchiStatus;
