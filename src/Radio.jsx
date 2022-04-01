import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Radio({disabled}) {

    const [check, setCheck] = useState(false)

    return (
        <div className="block">
          <label htmlFor="true">True</label>
          <input type="radio" name="true" id="true" onChange={(e) => setCheck('True')} checked={check === 'True'} disabled={disabled}/>
          <label htmlFor="false">False</label>
          <input type="radio" name="false" id="false" onChange={(e) => setCheck('False')} checked={check === 'False'} disabled={disabled}/>
        </div>
    );
}

Radio.propTypes = {
    disabled: PropTypes.bool
}

export default Radio;