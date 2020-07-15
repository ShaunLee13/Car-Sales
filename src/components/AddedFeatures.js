import React from 'react';
import { connect } from 'react-redux'

import {removeFeature} from '../actions/carActions'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  const {features} = props
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature 
            key={item.id} 
            feature={item} 
            remove={props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};


const getState = state => {
  return {
    features:state.car.features
  }
}

export default connect(  
  getState,
  {removeFeature})(AddedFeatures);

