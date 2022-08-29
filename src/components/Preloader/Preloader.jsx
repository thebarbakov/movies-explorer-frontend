import React from 'react'
import './Preloader.css'

const Preloader = ({ isLocal }) => {
    return (
        <div className="preloader" style={{
            position: isLocal ? 'initial' : 'fixed',
            width: isLocal ? 'auto' : '100%',
            backgroundColor: isLocal ? '#fafafa' : '#ffffff7a',
            padding: isLocal ? 30 : 0,
        }}>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
