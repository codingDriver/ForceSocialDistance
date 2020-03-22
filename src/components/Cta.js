import React from 'react';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Button = props => {
    const {link, label} = props;
    const _isValid = () => link && label;

    const _handleOnClick = () => {
        props.onClickHandler();
    };


    return _isValid() &&
        <button className={`cta-button ${props.extraClass}`} onClick={_handleOnClick}>
            {label}
        </button>;
};

export default Button;