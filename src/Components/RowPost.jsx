import React from 'react'
import Dare from '../assets/daredevil.jpg'
import '../StyleSheets/RowPost.css'
import axios from 'axios'

function RowPost() {
  return (
    <div className='row'>
      <h2>Title</h2>
      <div className="posters">
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
        <img className='poster' src={Dare} alt="" />
      </div>
    </div>
  )
}

export default RowPost
