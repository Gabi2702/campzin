import React from 'react'
import Card from './card'

export default function CardBackgroundPage({children}) {
  return (
    <Card className={"mt-4 w-[95%] h-[95%] bg-primary-light"}>
        {children}
    </Card>
  )
}
