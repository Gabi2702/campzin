import React from 'react'

export default function CardInputInfoDisabled({Info}) {
  return (
    <div className='px-2 py-1 flex h-8 bg-primary-light rounded-md'>
        <p className='font-semibold text-purple-700 text-sm'>{Info}</p>
    </div>
  )
}
