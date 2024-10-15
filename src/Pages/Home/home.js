import React from 'react';
import Podium from './Podium.svg'
import Drone from './Drone.svg'

const Home = () => {


  return (
    <div className="home">
        
        <img src={Drone} alt='drone' className='drone' />
        <h1 className='intro'>Confira, comente e compare</h1>
        <img src={Podium} alt='Podium' className='podium' />
    </div>
  );
};

export default Home;