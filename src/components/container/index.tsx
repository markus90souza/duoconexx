import clsx from 'clsx'
import { HtmlHTMLAttributes } from 'react'

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  className?: string
}

export function Container({ className, ...rest }: Props) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...rest}
    />
  )
}
