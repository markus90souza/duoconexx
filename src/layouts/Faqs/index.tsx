import { Heading } from '@/components/Heading'
import { Container } from '@/components/container'
import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },

  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Faqs() {
  return (
    <section className="py-12 ">
      <Container className="rounded-3xl px-12 py-32">
        <div className="mx-auto  divide-y-2 divide-gray-200">
          <Heading
            title="Perguntas frequentes"
            subtitle="CHAMADA PRA AÇÃO"
            description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed illo
          cupiditate magnam culpa excepturi animi"
          />

          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDown
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform',
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
