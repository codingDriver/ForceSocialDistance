import React from 'react';

import Amplify, {API} from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Button = props => {
    const {link, label} = props;
    const _isValid = () => link && label;

    const _handleOnClick = () => {
        API.post("fosodapi", "/api", {
            headers: {
                fosodHeader: "seeecrettoken"
            }
        }).catch(error => {
            console.log(error.response)
        });
    };


    return _isValid() &&
        <button className={`cta-button ${props.extraClass}`} onClick={_handleOnClick}>
            {label}
        </button>;
};

export default Button;