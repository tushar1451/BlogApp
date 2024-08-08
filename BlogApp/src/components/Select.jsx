/* eslint-disable react/prop-types */
import React from 'react'

function Select({options, label, className, ...props}, ref) {
    const id = React.useId();
  return (
    <div>
        {label && <label htmlFor={id} className={`${className}`}></label>}
        <select {...props} ref={ref} id={id} className={`${className}`}>
            {options?.map((option) => (
                <option key={option} value={option} > {option} </option>
            )) }
        </select>
    </div>
  )
}

export default React.forwardRef(Select)