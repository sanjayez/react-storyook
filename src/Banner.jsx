import React from 'react';
import PropTypes from 'prop-types'

function Banner({container, head, label, size}) {
    
    let style = {
        ...container,
        transform: `scale(${size})`
    }
    return (
        <div style={style} className='banner'>
            <h1 style={head}>{label ? label: 'React Input Elements'}</h1>
        </div>
    );
}

Banner.propTypes = {
    container: PropTypes.object,
    head: PropTypes.object,
    label: PropTypes.string,
    size: PropTypes.oneOfType(['sm', 'md', 'lg'])
}

export default Banner;