import React from 'react'
import Card from './card'

export default function CardBackgroundPage({children, title}) {
  return (
    <Card className={"mt-4 w-[95%] h-[95%] bg-primary-light "}>
      <p className=' mt-2 ml-4 text-white font-semibold'>{title}</p>
        {children}
    </Card>
  )
}
