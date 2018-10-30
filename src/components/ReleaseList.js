import React, { Component } from 'react'
import Release from './Release'

class ReleaseList extends Component {
    render() {

        const releaseNodes = this.props.data.map(release => {
            return (
                <Release
                    key={release.id}
                    name={release.name}
                    url={release.url}>{release.name}
                </Release>
            )
        })

        return (
            <div className="release-list">
                {releaseNodes}
            </div>
        ) 
    }
}

export default ReleaseList