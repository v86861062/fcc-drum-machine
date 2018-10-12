import React from 'react'
import PropTypes from 'prop-types'
import './Switch.scss';

function Switch(props){
    return (
        <label className="switch">
            <p>{props.name}</p>
            <input type="checkbox"
                onClick={props.onClick}
                checked={props.switchOn}
                readOnly/>
            <span className="slider"></span>
        </label>
    )
}

Switch.propTypes = {
    name: PropTypes.string.isRequired,
    switchOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Switch