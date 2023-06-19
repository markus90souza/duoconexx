import { Heading } from '@/components/Heading'
import { Container } from '@/components/container'

export const ContactUS = () => {
  return (
    <section className="relative min-h-[80vh] w-full" id="contact-us">
      <Container className="items-center justify-center">
        <div className="top-40 rounded px-8 py-12 lg:px-28">
          <Heading title="Fale Conosco" />
          <div className="mt-12 items-center md:flex">
            <div className="flex flex-col md:w-1/2">
              <label className="text-base font-semibold leading-none text-gray-800">
                Seu nome
              </label>
              <input
                tabIndex={0}
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                placeholder="Nome completo"
              />
            </div>
            <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-1/2">
              <label className="text-base font-semibold leading-none text-gray-800">
                E-mail
              </label>
              <input
                tabIndex={0}
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div className="mt-8 items-center md:flex">
            <div className="flex flex-col md:w-1/2">
              <label className="text-base font-semibold leading-none text-gray-800">
                Sua empresa
              </label>
              <input
                tabIndex={0}
                role="input"
                type="name"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700 "
                placeholder="Please input company name"
              />
            </div>
            <div className="mt-4 flex flex-col md:ml-6 md:mt-0 md:w-1/2">
              <label className="text-base font-semibold leading-none text-gray-800">
                Seu telefone
              </label>
              <input
                tabIndex={0}
                type="tel"
                className="focus:oultine-none mt-4 rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                placeholder="(00)-99999-9999"
              />
            </div>
          </div>
          <div>
            <div className="mt-8 flex w-full flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Sua Mensagem
              </label>
              <textarea
                tabIndex={0}
                aria-label="message"
                role="textbox"
                className="focus:oultine-none mt-4 h-36 resize-none rounded border border-gray-200 bg-gray-100 p-3 text-base leading-none text-gray-900 placeholder-gray-100 focus:border-indigo-700"
                defaultValue={''}
              />
            </div>
          </div>

          <button className="mt-9 rounded bg-indigo-700 px-10 py-4 text-base font-semibold leading-none text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
            Enviar mensagem
          </button>
        </div>
      </Container>
    </section>
  )
}
