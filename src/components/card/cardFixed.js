import React from 'react'

export default function CardFixed({ className, Title, children, dark}) {
  return (
    <div className={`relative ${dark ? "bg-primary-dark" :"bg-primary-light"} rounded-2xl shadow-lg p-1 ${className}`}>
        <p className='text-white align-top justify-start p-2 text-pretty font-semibold'>{Title}</p>
        {children}
    </div>
  )
}
