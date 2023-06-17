import { Container } from '@/components/container'

import Image from 'next/image'

import hero from '@/assets/hero.png'

export function Hero() {
  return (
    <div className="min-h-[40vh] items-center bg-[#22253f] pt-10 sm:h-[70vh]  sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
      <Container>
        <div className="flex flex-1 flex-col gap-x-8 gap-y-6 sm:flex-row">
          <div className="relative max-w-xl">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
              >
                <span className="rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide text-white">
                  Fale conosco
                </span>
                <span className="ml-4 text-sm">Consultor</span>
              </a>
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                <span className="block">Duo Conexx</span>
                <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5 sm:text-6xl">
                  um sistema de confirmação de agendamentos inteligente
                </span>
              </h1>

              {/* <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Seu email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        Entre em contato
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <div className="sm:-mb-52 sm:max-w-2xl sm:px-6 lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                width={1200}
                height={680}
                className="h-full w-full lg:absolute lg:inset-y-10 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={hero}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
