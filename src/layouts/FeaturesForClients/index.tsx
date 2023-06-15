/* eslint-disable @next/next/no-img-element */
import { Container } from '@/components/container'
import Image from 'next/image'

import phone from '@/assets/phone.png'

export function FeaturesForClients() {
  return (
    <section className="h-full w-full py-12 bg-gray-200">
      <Container>
        <header className="max-w-full flex items-start flex-col py-6 sm:py-8">
          <h2 className="text-5xl font-bold tracking-tight text-black sm:text-4xl">
            Nossa solução para seu négocio
          </h2>
          <span className="max-w-xl block mt-4 text-base tracking-tight text-gray-600">
            confirmação automática, antecipada e no mesmo dia. Nossa solução
            reduzira 50% a chance do seu cliente cancelar em cima da hora e de
            sua agenda ficar vazia.
          </span>
        </header>
        <div className="relative items-center w-full  py-8 ">
          <div className="grid  items-center grid-cols-1 gap-4 text-left lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
              <div>
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
                >
                  <li>
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
                  <li>
                    <div>
                      <p className="mt-5 text-lg font-medium leading-6 text-black">
                        Mensagem de lembrete
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
            <div className="order-first block w-full   mt-12 ">
              <Image
                src={phone}
                className="object-cover object-center  w-full border-0 lg:ml-auto"
                alt="hero"
                // src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
              />
            </div>
            <div className="relative items-center gap-8 m-auto lg:inline-flex md:order-first">
              <div className="mx-auto lg:max-w-7xl">
                <ul
                  role="list"
                  className="grid grid-cols-2 gap-4 list-none lg:grid-cols-1 lg:gap-6"
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
