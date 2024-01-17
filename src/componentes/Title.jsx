import './Title.css'
import React from 'react'

export const Title = ({title}) => {
  return (
    <div>
        <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Title