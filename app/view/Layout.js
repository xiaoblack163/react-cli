import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default function Layout({ children }) {
    return (
        <div className='Layout'>
            {children}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.element,
};
