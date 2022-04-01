import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Date({style, min, max, value}) {

    const [date, setDate] = useState('')
    return (
        <div className="block">
          <label htmlFor="date">Date</label>
          <input value={value} min = {min} max = {max} style = {style} type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)}/>
        </div>
    );
}

Date.propTypes = {
    style: PropTypes.object,
    min: PropTypes.string,
    max: PropTypes.string,
    value: PropTypes.string,
}

export default Date;