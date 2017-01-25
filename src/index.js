import React, { PropTypes } from 'react';
import { Match } from 'react-router';

const propTypes = {
    props: PropTypes.object,
    component: PropTypes.func,
};

function MatchWithProps({ props, component: Component, ...rest }) {
    return (<Match {...rest} render={matchProps => (<Component {...matchProps} {...props} />)} />);
}

MatchWithProps.propTypes = propTypes;

export default MatchWithProps;
