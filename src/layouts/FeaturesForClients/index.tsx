/* eslint-disable @next/next/no-img-element */
import { Container } from '@/components/container'
import Image from 'next/image'

import phone from '@/assets/phone.png'
// import { Heading } from '@/components/Heading'
import { Settings } from 'lucide-react'

export function FeaturesForClients() {
  return (
    <section className="h-full w-full pb-12">
      <Container>
        {/* <Heading
          title="TITULO PARA A SEÇÃO"
          subtitle="Chamada pra acão"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            voluptate voluptatem sint, in non vel ea autem saepe"
        /> */}

        <div className="relative w-full items-center">
          <div className="grid  grid-cols-1 items-center gap-4 text-left md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div className="relative m-auto items-center gap-12 md:order-first lg:inline-flex">
              <div>
                <ul
                  role="list"
                  className="grid list-none grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-6"
                >
                  <li className="rounded-lg px-4 py-2">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md p-3 ">
                        <Settings className="h-6 w-6 text-emerald-700" />
                      </span>
                    </div>

                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Mensagem de confirmação
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the
                      changing needs.
                    </div>
                  </li>
                  <li className="rounded-lg  px-4 py-2">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md p-3 ">
                        <Settings className="h-6 w-6 text-emerald-700" />
                      </span>
                    </div>

                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Mensagem de confirmação
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the
                      changing needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-first mt-12 block   w-full ">
              <Image
                src={phone}
                className="w-full border-0  object-cover object-center lg:ml-auto"
                alt="hero"
                // src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
              />
            </div>
            <div className="relative m-auto items-center gap-8 md:order-first lg:inline-flex">
              <div className="mx-auto lg:max-w-7xl">
                <ul
                  role="list"
                  className="grid list-none grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-6"
                >
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Easy onboarding
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the
                      changing needs.
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Customer support
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500">
                      Plus, our platform is constantly evolving to meet the
                      changing needs.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
