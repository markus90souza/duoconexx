interface HeadingProps {
  title: string
  subtitle?: string
  description?: string
}

export function Heading({ title, subtitle, description }: HeadingProps) {
  return (
    <header className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-base font-semibold uppercase tracking-wider text-cyan-600">
        {title}
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {subtitle}
      </p>

      <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        {description}
      </p>
    </header>
  )
}
