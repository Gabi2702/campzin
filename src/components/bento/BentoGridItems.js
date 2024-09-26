import React from 'react'

export default function BentoGridItems({limitItems, children}) {
  return (
    <div className="grid auto-rows-[192px] grid-cols-3 gap-2">
        {[...Array(limitItems ?? 5)].map((_, i) => (
            <div
                key={i}
                className={
                    `row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-primary-dark
                    ${ i === 3 || i === 6 ? "col-span-2" : ""}`}
            >
                {children}
            </div>
        ))}
  </div>
  
  )
}
