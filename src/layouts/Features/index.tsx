import Image from 'next/image'
import { Settings } from 'lucide-react'
import { Heading } from '@/components/Heading'
import desktop from '@/assets/desktop.png'
import { FeaturesForClients } from '../FeaturesForClients'

const features = [
  {
    name: 'Locais de Consulta',
    description:
      'Caso haja mais de uma unidade, o sistema avisará o cliente em para qual local ele deverá se dirigir',
  },
  {
    name: 'Médicos',
    description:
      'Cadastro dos médicos que atendem na clínica com nome, CRM e especialidade(s)',
  },
  {
    name: 'Pacientes',
    description:
      'Cadastro simples e fácil dos pacientes com nome, telefone e e-mail',
  },
  {
    name: 'Consultas',
    description:
      'Calendário de agendamento e acompanhamento de consultas. Cada cor representa um status de agendamento',
  },
  {
    name: 'Painel de Pendências',
    description:
      'Aqui o foco é acompanhamento dos casos que estão pendentes para uma eventual intervenção',
  },
]

export const Features = () => {
  return (
    <section id="our-solutions" className="bg-gray-50">
      <div className="relative bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <Heading
            title="TITULO PARA A SEÇÃO"
            subtitle="Chamada pra acão"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet
            voluptate voluptatem sint, in non vel ea autem saepe"
          />

          <div className="mt-12">
            <div className="relative mx-auto mt-12 w-full max-w-7xl items-center py-12 pb-12">
              <Image
                className="relative w-full rounded object-cover lg:rounded-2xl"
                src={desktop}
                alt=""
              />
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root min-h-full rounded-lg border bg-gray-50 px-6 pb-8 hover:border-b-emerald-600">
                    <div className="py-4">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md p-3 ">
                          <Settings className="h-6 w-6 text-emerald-700" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
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

      <FeaturesForClients />
    </section>
  )
}
