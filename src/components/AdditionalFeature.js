import React from 'react';
import { connect } from 'react-redux';
import { addFeat } from '../Actions/appActions';

const AdditionalFeature = props => {
  const handle = e => {
    props.addFeat(props.feature);
  };
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handle} className='button'>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, { addFeat })(AdditionalFeature);
