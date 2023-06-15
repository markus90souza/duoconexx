interface HeadingProps {
  title: string
  subtitle?: string
  description?: string
}

export function Heading({ title, subtitle, description }: HeadingProps) {
  return (
    <header className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
        {title}
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        {subtitle}
      </p>

      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        {description}
      </p>
    </header>
  )
}
