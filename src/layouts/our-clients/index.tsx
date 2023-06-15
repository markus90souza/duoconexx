/* eslint-disable @next/next/no-img-element */
import { Heading } from '@/components/Heading'
import { Container } from '@/components/container'

export const OurClients = () => {
  return (
    <section className="w-full">
      <Container>
        <Heading
          title=" Nossa solução para seu négocio"
          subtitle="  confirmação automática, antecipada e no mesmo dia. Nossa solução
        reduzira 50% a chance do seu cliente cancelar em cima da hora e de
        sua agenda ficar vazia."
        />
        {/* <header className="max-w-full flex items-center flex-col py-6 sm:py-10 text-center ">
          <h2 className="text-5xl font-bold tracking-tight text-black sm:text-4xl">
            Nossa solução para seu négocio
          </h2>
          <span className="max-w-xl block mt-4 text-base tracking-tight text-gray-600">
            confirmação automática, antecipada e no mesmo dia. Nossa solução
            reduzira 50% a chance do seu cliente cancelar em cima da hora e de
            sua agenda ficar vazia.
          </span>
        </header> */}
        <article className="relative flex items-center w-full bg-white">
          <div className="relative items-center w-full py-4 ">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Aumente a rentabilidade do seu negócio
                      </h3>
                      <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        confirmação automática, antecipada e no mesmo dia. Nossa
                        solução reduzira 50% a chance do seu cliente cancelar em
                        cima da hora e de sua agenda ficar vazia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                  <img
                    className="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                    alt="hero"
                    src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex items-center w-full">
          <div className="relative items-center w-full py-4">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="relative items-center gap-12 m-auto lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Aumento da taxa de retorno
                      </h3>
                      <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Lembretes direcionados. “O cliente fez um procedimento
                        que precisa manutenção recorrente? “ Quando estiver
                        próximo ao vencimento, nossa solução o lembrará que já é
                        hora de voltar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0 lg:order-first">
                  <img
                    className="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto"
                    alt="hero"
                    src="https://d33wubrfki0l68.cloudfront.net/ded521c426f480d4e473a11836c6ab8e7e948c84/95877/images/placeholders/square3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex items-center w-full bg-white">
          <div className="relative items-center w-full py-4">
            <div className="relative flex-col items-start m-auto align-middle">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Melhore o investimento do seu tempo.
                      </h3>
                      <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                        Com a confirmação automática, você precisará entrar em
                        contato com o cliente apenas quando ele desejar fazer um
                        reagendamento. Isso reduz em 80% o tempo investido em
                        confirmações de agendamentos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                  <img
                    className="object-cover object-center w-full mx-auto bg-gray-300 lg:ml-auto "
                    alt="hero"
                    src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}
