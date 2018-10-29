import React, { Component } from 'react'
import ReleaseList from '../components/ReleaseList'

class FilmReleases extends Component {
    render() {
        return (
            <div className="film-releases">
                <h2>Upcoming Film Releases for UK</h2>
                <ReleaseList />
            </div>
        )
    }
}

export default FilmReleases