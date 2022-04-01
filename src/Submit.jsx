import React from 'react';
import PropTypes from 'prop-types'

function Submit({bColor, label, padding, color, radius}) {

    let style = {
        backgroundColor: bColor,
        padding,
        color,
        borderRadius: radius
    }

    return (
        <button style={style} type="submit">{label}</button>
    );
}

Submit.propTypes = {
    bColor: PropTypes.string,
    padding: PropTypes.string,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    label: PropTypes.string
}

export default Submit;