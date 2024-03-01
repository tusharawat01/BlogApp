import React from 'react'
import blog from './Blog1.png';

function Logo() {
    return (
        <div>
            <img src={blog} alt="Logo" style={{ width: '30px', height: '40px', py: '5px' }} />
        </div>
    )
}

export default Logo