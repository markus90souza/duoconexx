'use client'

// import {
//   ArchiveBoxIcon as CloudUploadIcon,
//   CogIcon,
//   LockClosedIcon,
//   ArrowDownIcon as RefreshIcon,
//   ServerIcon,
//   ShieldCheckIcon,
// } from '@heroicons/react/24/outline'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// const features = [
//   {
//     name: 'Push to Deploy',
//     description:
//       'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
//     icon: CloudUploadIcon,
//   },
//   {
//     name: 'SSL Certificates',
//     description:
//       'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
//     icon: LockClosedIcon,
//   },
//   {
//     name: 'Simple Queues',
//     description:
//       'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
//     icon: RefreshIcon,
//   },
//   {
//     name: 'Advanced Security',
//     description:
//       'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: 'Powerful API',
//     description:
//       'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
//     icon: CogIcon,
//   },
//   {
//     name: 'Database Backups',
//     description:
//       'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
//     icon: ServerIcon,
//   },
// ]

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <Header />
        <main>
          {/* <Hero /> */}
          {/* Feature section with screenshot */}

          {/* AboutUs  */}

          {/* <AboutUs /> */}

          {/* Feature section with grid */}
          {/* <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Everything you need to deploy your app
              </p>
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Phasellus lorem quam molestie id quisque diam aenean nulla in.
                Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
                condimentum id viverra nulla.
              </p>
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className="pt-6">
                      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <feature.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* Testimonial section */}
          {/* <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed urna nulla vitae laoreet augue. Amet feugiat est
                        integer dolor auctor adipiscing nunc urna, sit.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Judith Black
                      </p>
                      <p className="text-base font-medium text-cyan-100">
                        CEO at PureInsights
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div> */}

          {/* Blog section */}

          {/* <BlogPosts /> */}

          {/* Plans */}
          {/* <Plans /> */}

          {/* ContactUs */}
          {/* <ContactUS /> */}

          {/* <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Award winning support
                </h2>
                <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  We’re here to help
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Visit the help center
                      <ExternalLinkIcon
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <Footer />
        </main>
      </div>
    </div>
  )
}
