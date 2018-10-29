import React, { Component } from 'react'
import Release from './Release'

class ReleaseList extends Component {
    render() {
        return (
            <div className="release-list">
                <Release />
                <Release />
                <Release />
                <Release />
                <Release />
            </div>
        ) 
    }
}

export default ReleaseList