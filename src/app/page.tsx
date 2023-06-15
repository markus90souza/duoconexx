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
import { TopHeader } from '@/components/top-header'
import { Hero } from '@/layouts/hero'
import { OurClients } from '@/layouts/our-clients'
import { FeaturesForClients } from '@/layouts/FeaturesForClients'
import { AboutUs } from '@/layouts/about-us'
import { Plans } from '@/layouts/plans'

const features = [
  {
    name: 'Push to Deploy',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
  },
  {
    name: 'SSL Certificates',
    description:
      'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
  },
  {
    name: 'Simple Queues',
    description:
      'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
  },
  {
    name: 'Advanced Security',
    description:
      'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
  },
  {
    name: 'Powerful API',
    description:
      'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
  },
  {
    name: 'Database Backups',
    description:
      'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <TopHeader />
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <OurClients />
          <FeaturesForClients />
          {/* Feature section with screenshot */}
          {/* AboutUs  */}
          {/* <AboutUs /> */}
          {/* Feature section with grid */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
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
                              {/* <feature.icon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              /> */}
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
          </div>

          {/* Blog section */}
          {/* <BlogPosts /> */}
          {/* Plans */}
          <Plans />
          {/* ContactUs */}
          {/* <ContactUS /> */}

          <Footer />
        </main>
      </div>
    </div>
  )
}
