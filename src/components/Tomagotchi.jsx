import React from 'react';
import '../scss/tomagotchi.scss';
import greenguy from '../assets/images/greenguy.png';
import PropTypes from 'prop-types';

class Tomagotchi extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      sleep: 10,
      food: 10,
      play: 10
    };
    this.sleepyGreenBaby = this.sleepyGreenBaby.bind(this);
    this.feedGreenBaby = this.feedGreenBaby.bind(this);
    this.playGreenBaby = this.playGreenBaby.bind(this);
  }

  sleepyGreenBaby() {
    let currentSleep = this.state.sleep;
    let updateSleep = setInterval(() =>
      this.currentSleep -= 2, 7000);
  }








  render(){

    return(
      <div >
        <p>Tomagotchi page is working!</p>
      </div>
    );
  }
}

Tomagotchi.propTypes = {
  sleep: PropTypes.number,
  food: PropTypes.number,
  play: PropTypes.number
};

export default Tomagotchi;
