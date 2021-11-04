import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/bild3.png';
import './main-section-styles.scss'; 

const MainSection = ({ history }) => {
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag'/>
        </div>
        <div className='ms-m-description'>
          <h2>Culture.Aesthetics.Dedication.</h2>
          <p>
          These values not only play an important role in our daily work, 
          they are also the central motif and goal of the designs of our
          streetwear collections.
          </p>
          <button className='button is-black' id='shop-now' onClick={()=> history.push('/product/1')}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);
