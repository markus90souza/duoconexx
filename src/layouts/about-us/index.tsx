import { Heading } from '@/components/Heading'
import { Container } from '@/components/container'

export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="-m-24 rounded-lg bg-white py-24 ">
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
                      <p className="mt-4 max-w-xl text-xl tracking-tight text-gray-600">
                        Nossas soluções tem como foco a gestão eficiente de
                        mensagens de confirmação de agendamentos , lembretes e
                        reagendamentos. Tudo de forma automática via Whatsapp
                        para que você tenha mais tempo para focar no que
                        realmente importa.
                      </p>

                      <p className="mt-4 max-w-xl text-xl tracking-tight text-gray-600">
                        Desenvolvemos soluções de mensageria para facilitar o
                        dia a dia dos profissionais que trabalham com
                        agendamentos para aumentar seus lucros
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

        <div className="relative bg-white">
          <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="Support team"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4  sm:px-6 sm:py-12 ">
            <div className="mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-10">
              <p className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Nossa solução tem como foco a gestão eficiente da confirmação e
                lembrete de agendamento de consultas através do Whatsapp de
                forma automática
              </p>
              <div className="mt-8 overflow-hidden">
                <dl className="-mx-8 -mt-8 flex flex-wrap">
                  <div className="flex flex-row items-center gap-3 px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      dos pacientes respondem mensagem de agendamento pelo
                      Whatsapp
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                      98%
                    </dd>
                  </div>
                  <div className="flex flex-row items-center gap-3 px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      Esse número é de apenas quando o canal é o SMS
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                      04%
                    </dd>
                  </div>
                  <div className="flex flex-row items-center gap-3 px-8 pt-8">
                    <dt className="order-2 text-base font-medium text-gray-500">
                      Redução potencial na atividade de confirmação de
                      agendamentos
                    </dt>
                    <dd className="order-1 text-2xl font-extrabold text-indigo-600 sm:text-3xl">
                      60%
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
