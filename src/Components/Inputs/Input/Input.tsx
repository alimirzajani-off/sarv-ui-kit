import React from 'react'
import './Input.css'

interface InputProps {
  label?: string
  type?: string
  value?: string | number
  name?: string
  onChange?: any
  className?: string
  placeholder?: string
}

export const Input = ({
  label,
  type = 'text',
  value = '',
  name,
  onChange,
  placeholder = '',
  className
}: InputProps) => {
  return (
    <div className={`Input ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
