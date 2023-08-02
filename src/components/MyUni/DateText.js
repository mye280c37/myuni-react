import React from 'react';
import PropTypes from 'prop-types';

function DateText(props) {
    return (
        <span
            style={{
                'color': 'grey',
                'padding-right': '8px',
                'font-style': 'italic'
            }}
        >
            {props.children}
        </span>
    )
}

DateText.propTypes = {
    children: PropTypes.node.isRequired
}

export default DateText;