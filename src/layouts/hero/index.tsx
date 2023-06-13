import { Container } from '@/components/container'

import Image from 'next/image'

import hero from '@/assets/hero.png'

export function Hero() {
  return (
    <div className="pt-10 bg-[#22253f] min-h-[40vh] items-center  sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <Container>
        <div className="flex flex-col flex-1 gap-y-6 sm:flex-row gap-x-8">
          <div className="relative max-w-xl">
            <div className="lg:py-24">
              <a
                href="#"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                  Fale conosco
                </span>
                <span className="ml-4 text-sm">Consultor</span>
              </a>
              <h1 className="mt-4 text-5xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-4xl">
                <span className="block">Duo Conexx</span>
                <span className="pb-3 block sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
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
            <div className="sm:max-w-2xl sm:px-6 lg:px-0 sm:-mb-52">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <Image
                width={1200}
                height={680}
                className="w-full h-full lg:absolute lg:inset-y-10 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
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
