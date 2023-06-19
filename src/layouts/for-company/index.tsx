import { Container } from '@/components/container'

export const ForCompany = () => (
  <section className="overflow-y-hidden py-32">
    <Container className="rounded-3xl bg-[#242322] py-12">
      <div className="items-center justify-center lg:flex lg:space-x-12 2xl:space-x-6">
        <div className="">
          <p className="text-3xl font-extrabold leading-9 text-green-500 lg:text-4xl">
            Titulo
          </p>
          <p className="mt-4 w-full text-lg leading-7 text-gray-50 xl:w-7/12">
            Nossa solução atende clinicas de todos os tamanhos, com ou sem
            necessidade de integração com outros sistemas
          </p>
          <div className="mt-6 w-full lg:mt-0 lg:hidden lg:w-3/5 xl:w-3/5">
            <img
              src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
              alt="ongoing meeting"
              className="obejct-fit h-full w-full object-fill object-center"
            />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 md:mt-10 md:grid-cols-2 lg:mt-6 lg:grid-cols-2 xl:grid-cols-2 2xl:mt-12">
            <div className="flex items-center">
              <div className="relative h-16 w-16">
                <div className=" z-20 mr-3 mt-2 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                  <strong className="text-3xl text-[#74d56b]">P</strong>
                </div>
              </div>
              <div className="ml-6 flex flex-col items-start pt-8">
                <h2 className="text-lg font-semibold leading-4 text-green-500">
                  Plano P
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-50 lg:w-40 2xl:w-52">
                  Clinicas com até 300 pacientes/mês
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative h-16 w-16">
                <div className=" bg-whit z-20  mr-3 mt-2 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                  <strong className="text-3xl text-[#00b8ff]">M</strong>
                </div>
              </div>
              <div className="ml-6 flex flex-col items-start pt-8">
                <h2 className="text-lg font-semibold leading-4 text-green-500">
                  Plano M
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-50 lg:w-40 2xl:w-52">
                  Clinicas com até 500 pacientes/mês
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative h-16 w-16">
                <div className=" z-20 mr-3  mt-2 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                  <strong className="text-3xl text-[#74d56b]">G</strong>
                </div>
              </div>
              <div className="ml-6 flex flex-col items-start pt-8">
                <h2 className="text-lg font-semibold leading-4 text-green-500">
                  Plano G
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-50 lg:w-40 2xl:w-52">
                  Clinicas com até 1.000 pacientes/mês
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative h-16 w-16">
                <div className=" z-20 mr-3  mt-2 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                  <strong className="text-3xl text-[#00b8ff]">GG</strong>
                </div>
              </div>
              <div className="ml-6 flex flex-col items-start pt-8">
                <h2 className="text-lg font-semibold leading-4 text-green-500">
                  Plano GG
                </h2>
                <p className="mt-2 text-base leading-6 text-gray-50 lg:w-40 2xl:w-52">
                  Clinicas com mais de 2.000 pacientes/mês
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden w-full rounded-lg lg:mt-0 lg:block lg:w-3/5 xl:w-3/5">
          <img
            src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
            alt="ongoing meeting"
            className="obejct-fit h-full w-full overflow-hidden rounded-lg object-fill object-center"
          />
        </div>
      </div>
    </Container>
  </section>
)
