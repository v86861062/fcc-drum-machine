import React from 'react'
import PropTypes from 'prop-types'

const onSstyle = { 
    backgroundColor: 'red',
}
const offStyle = { 
    backgroundColor: 'black',
}

function Switch(props){
        let style = props.switchOn ? onSstyle : offStyle
        return (
            <div>
                <div>{props.name}</div>
                <div className="switch" 
                    style={style}
                    onClick={props.onClick}>                
                </div>
            </div>
        )
}

Switch.propTypes = {
    name: PropTypes.string.isRequired,
    switchOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Switch