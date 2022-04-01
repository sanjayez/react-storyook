import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Area({disabled, label, style, max, place}) {

    const [text, setText] = useState('')

    return (
        <div className="block">
          <label htmlFor="textarea">{label}</label>
          <textarea placeholder={place ? place : 'Type here'} style = {style} name="textarea" id="textarea" cols="30" rows="10" disabled={disabled} maxLength={max}></textarea>
        </div> 
    );
}

Area.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.string,
  max: PropTypes.number,
  place: PropTypes.string
}

export default Area;