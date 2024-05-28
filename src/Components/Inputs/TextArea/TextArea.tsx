import React from 'react'
import './TextArea.css'

interface TextAreaProps {
  label?: string
  value?: string | number
  name?: string
  onChange?: any
  className?: string
  placeholder?: string
}

export const TextArea = ({
  label,
  value = '',
  onChange,
  className,
  placeholder = '',
  name
}: TextAreaProps) => {
  return (
    <div className={`TextArea ${className}`}>
      <label htmlFor={label}>{label}</label>
      <textarea
        id={label}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}
