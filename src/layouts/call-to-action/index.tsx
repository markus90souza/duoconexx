import { Container } from '@/components/container'
import { WhatsappLogo } from '@phosphor-icons/react'

export const CallToAction = () => {
  return (
    <Container className="py-14 sm:py-32">
      <div className="mb-12 flex items-center justify-center rounded-3xl bg-[#202422]">
        <div className=" flex  max-w-7xl flex-col items-center justify-center gap-5 px-4 py-12 sm:px-6  md:py-16 lg:px-8 lg:py-20">
          <h2 className="flex flex-col items-center gap-4 text-3xl  font-extrabold tracking-tight text-green-400 sm:text-4xl">
            <span className="block">Pronto para elevar seus atendimentos?</span>
            <span className="max-w-lg text-center text-2xl text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              quo tempore unde dolor
            </span>
          </h2>
          <div className="mt-8 flex">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-green-400 bg-transparent px-5 py-3 text-base font-medium text-white hover:bg-green-600"
              >
                <WhatsappLogo className="h-6 w-6" />
                Fale com o consultor
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
