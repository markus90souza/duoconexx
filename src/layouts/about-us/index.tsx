import { Heading } from '@/components/Heading'
import { Container } from '@/components/container'

export const AboutUs = () => {
  return (
    <section id="about-us">
      <Container>
        <div className="px-6 2xl:container 2xl:mx-auto 2xl:px-20 ">
          <div className="flex flex-col-reverse items-center justify-center md:flex-row md:items-stretch">
            <div className="flex flex-col items-center justify-center sm:w-1/2 md:mr-6 md:items-end md:py-20 lg:mr-20 xl:mr-28 xl:w-1/2">
              <div className="flex flex-col items-center justify-center">
                <Heading
                  title="sobre"
                  subtitle="Nossa solução tem como foco a gestão eficiente da confirmação e lembrete de agendamento de consultas através do Whatsapp de forma automática"
                />
                <div className="mt-12 flex flex-col items-center md:mt-14"></div>
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
