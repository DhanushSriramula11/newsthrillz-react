import React, { Component } from 'react'
export default class Spinner extends Component {
  
  render() {
    let gif_url=require('../assets/loading spinner final.gif')
    return (
      <div className='h-100 d-flex align-items-center justify-content-center'>
        <img src={gif_url} alt='Loading'></img>
      </div>
    )
  }
}
