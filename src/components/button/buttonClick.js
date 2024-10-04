import React from 'react'

export default function ButtonClick({onClick, Title, LogoComponent}) {
  return (
      <button className="flex justify-between items-center px-4 py-2 bg-secondary-light text-white rounded-md" onClick={onClick}>
        <span className="flex-1 text-center">{Title}</span>
        {LogoComponent && 
          <div className="ml-2">
            {LogoComponent && <LogoComponent />}
          </div>
        }
      </button>
  )
}
