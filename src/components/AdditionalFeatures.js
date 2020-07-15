import React from 'react';
import { connect } from 'react-redux'

import { addFeature } from '../actions/carActions'

import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = props => {
  const { additionalFeatures } = props
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature 
              key={item.id} 
              feature={item} 
              add={props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};


const getState = state => {
  return {
    additionalFeatures:state.additionalFeatures
  }
}
export default connect(
  getState,
  { addFeature }
)(AdditionalFeatures);

