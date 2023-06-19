/* eslint-disable @next/next/no-img-element */
import { Heading } from '@/components/Heading'
import { Container } from '@/components/container'

export const OurClients = () => {
  return (
    <section className="w-full py-24">
      <Container>
        <Heading
          title="TITULO PARA A SEÇÃO"
          subtitle="Chamada pra acão"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            voluptate voluptatem sint, in non vel ea autem saepe"
        />

        <article className="relative flex w-full items-center bg-white pt-12">
          <div className="relative w-full items-center py-4 ">
            <div className="relative m-auto flex-col items-start align-middle">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="relative m-auto items-center gap-12 md:order-first lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Aumente a rentabilidade do seu negócio
                      </h3>
                      <p className="mt-4 max-w-xl text-base tracking-tight text-gray-600">
                        confirmação automática, antecipada e no mesmo dia. Nossa
                        solução reduzira 50% a chance do seu cliente cancelar em
                        cima da hora e de sua agenda ficar vazia.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first mt-12 block aspect-square w-full lg:mt-0">
                  <img
                    className="mx-auto w-full bg-gray-300 object-cover object-center lg:ml-auto "
                    alt="hero"
                    src="https://d33wubrfki0l68.cloudfront.net/6163c5a4083dab2763aa0f2aa9e6bded23630eb7/935d6/images/placeholders/square2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex w-full items-center">
          <div className="relative w-full items-center py-4">
            <div className="relative m-auto flex-col items-start align-middle">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="relative m-auto items-center gap-12 lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Aumento da taxa de retorno
                      </h3>
                      <p className="mt-4 max-w-xl text-base tracking-tight text-gray-600">
                        Lembretes direcionados. “O cliente fez um procedimento
                        que precisa manutenção recorrente? “ Quando estiver
                        próximo ao vencimento, nossa solução o lembrará que já é
                        hora de voltar
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first mt-12 block aspect-square w-full lg:order-first lg:mt-0">
                  <img
                    className="mx-auto w-full bg-gray-300 object-cover object-center lg:ml-auto"
                    alt="hero"
                    src="https://d33wubrfki0l68.cloudfront.net/ded521c426f480d4e473a11836c6ab8e7e948c84/95877/images/placeholders/square3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative flex w-full items-center bg-white">
          <div className="relative w-full items-center py-4">
            <div className="relative m-auto flex-col items-start align-middle">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                <div className="relative m-auto items-center gap-12 md:order-first lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="max-w-sm">
                      <h3 className="text-4xl font-bold tracking-tight text-black sm:text-4xl">
                        Melhore o investimento do seu tempo.
                      </h3>
                      <p className="mt-4 max-w-xl text-base tracking-tight text-gray-600">
                        Com a confirmação automática, você precisará entrar em
                        contato com o cliente apenas quando ele desejar fazer um
                        reagendamento. Isso reduz em 80% o tempo investido em
                        confirmações de agendamentos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-first mt-12 block aspect-square w-full lg:mt-0">
                  <img
                    className="mx-auto w-full bg-gray-300 object-cover object-center lg:ml-auto "
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
