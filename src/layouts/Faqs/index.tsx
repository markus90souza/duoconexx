import { ReactNode } from 'react'

interface FaqsProps {
  children: ReactNode
}

export function Faqs({ children }: FaqsProps) {
  return (
    <>
      <h1>Faqs</h1>
      {children}
    </>
  )
}
