import React, { Component } from 'react'

class Release extends Component {
    render(){
        return (
            <li className="release">
                <a href={this.props.url}>
                    <h4>{this.props.name}</h4>
                </a>
            </li>
        )
    }
}

export default Release