import React, { Component } from 'react'

export default class Lifecycle extends Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount()
  }
  render() {
    return null
  }
}
