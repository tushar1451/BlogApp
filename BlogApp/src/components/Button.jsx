/* eslint-disable react/prop-types */
import React from 'react'

function Button(
    {children,
     type = 'button',
     bgColor = 'blue',
     textColor = 'white',
     Classname = '',
     ...props
     }) {
  return (
    <Button Classname={`px-4 py-4 ${bgColor} ${textColor} ${Classname}`}{...props}>
        {children}
    </Button>
  )
}

export default Button