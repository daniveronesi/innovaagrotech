import React from 'react';
import div1 from './produtos.svg';
import div2 from './populares.svg';

const Produtos = () => {


  return (
    <div className="Produtos">
        <img src={div1} className='div_photo_um' alt='div_photo_um'/>
        <img src={div2} className='div_photo_dois' alt='div_photo_dois'/>

    </div>
  );
};

export default Produtos;