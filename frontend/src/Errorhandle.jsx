import React, { Component } from 'react'

export default class Errorhandle extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return  {hasError: true}
  }

  render() {
   if(this.state.hasError){
    return <div>Something</div>
   }
   return this.props.childern
  }
}
