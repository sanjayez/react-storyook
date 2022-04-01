import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Text({disabled, label, style}) {

    const [text, setText] = useState('')

    return (
        <div className="block">
          <label htmlFor="text">{label}</label>
          <input style = {style} type="text" name="text" id="text" onChange={(e) => setText(e.target.value)} disabled={disabled}/>
        </div> 
    );
}

Text.propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    style: PropTypes.object
}

export default Text;