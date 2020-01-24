import React from 'react';
import { connect } from 'react-redux';
import { removeFeat } from '../Actions/appActions';

const AddedFeature = props => {
  const handle = e => {
    e.preventDefault();
    props.removeFeat(props.feature);
  };
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handle} className='button'>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {};

export default connect(mapStateToProps, { removeFeat })(AddedFeature);
