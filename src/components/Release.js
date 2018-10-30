import React, { Component } from 'react'

class Release extends Component {
    render(){
        return (
            <div className="release">
                <a href={this.props.url}>
                    <h4>{this.props.name}</h4>
                </a>
            </div>
        )
    }
}

export default Release