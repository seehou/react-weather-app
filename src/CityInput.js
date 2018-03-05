import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CityInput extends Component {
  constructor(props) {
    super(props)
    // Default state
    this.state = {
      cityState: ''
    }
  }

  /**
   * Below bind (this) will required if we using es5 function declare
   * handleChange(e) {
   * }
   *  this.handleChange = this.handleChange.bind(this)
   *
   * // Below arrow function will bind (this) for us
   * // funcnName = () => { } vs fucnName() {}
   */
  handleChange = (e) => {
    const value = e.target.value
    this.setState(function () {
      return {
        cityState: value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>{ this.props.formTitle }</h1>
        <input type="text" onChange={this.handleChange} placeholder="St. George, Utah" />
      </div>
    )
  }
}

CityInput.propTypes = {
  formTitle : PropTypes.string.isRequired
}

CityInput.defaultProps = {
  formTitle : 'Enter a City and State'
}

export default CityInput

