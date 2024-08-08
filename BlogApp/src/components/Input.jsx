/* eslint-disable react/prop-types */
import React, {useId} from 'react'

const Input = React.forwardRef(function Input ({
    label,
    type = 'text',
    className = '',
    ...props
    }, ref)
    {
        const id = useId();
        return (
            <div>
                {label && <label key={id}>{label}</label>}
                <input type="text" className= {`${className}`} ref={ref} {...props} id={id}/>
            </div>
        )
    })

export default Input