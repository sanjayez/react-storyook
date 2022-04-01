import React, {useState} from 'react';
import PropTypes from 'prop-types'

function Email({label, style}) {

    const [email, setEmail] = useState('')

    return (
        <div className="block">
          <label htmlFor="email">{label}</label>
          <input style={style} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
    );
}

Email.propTypes = {
    label: PropTypes.string,
    style: PropTypes.object
}

export default Email;   