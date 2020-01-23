import React from 'react';
import AdditionalFeature from './AdditionalFeature';

import { connect } from 'react-redux';
import { addFeat } from '../Actions/appActions';

const AdditionalFeatures = props => {
  return (
    <div className='content'>
      <h4>Additional Features</h4>
      {props.stuff.length ? (
        <ol type='1'>
          {props.stuff.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeat={addFeat} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stuff: state.stuff
  };
};

export default connect(mapStateToProps, { addFeat })(AdditionalFeatures);
