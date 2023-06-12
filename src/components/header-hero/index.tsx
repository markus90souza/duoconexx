import { Container } from '../container'
import Link from 'next/link'
import { WhatsappLogo } from '@phosphor-icons/react'

import { Facebook, Instagram } from 'lucide-react'

const HeaderHero = () => {
  return (
    <div className="w-full bg-[#22253f] py-3 relative">
      <Container className="flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <strong className="text-sm leading-6 text-gray-100 font-semibold">
            Duo Conexx
          </strong>
        </div>
        <div className="flex flex-1 justify-end gap-x-6">
          <Link
            href={''}
            className="-m-3 p-2 transition-all rounded-md focus-visible:outline-offset-[-4px] hover:bg-slate-500"
          >
            <Facebook className="h-6 w-6 text-gray-100" aria-hidden={'true'} />
          </Link>

          <Link
            href={''}
            className="-m-3 p-2 rounded-md focus-visible:outline-offset-[-4px] hover:bg-slate-500"
          >
            <WhatsappLogo
              className="h-6 w-6 text-gray-100"
              aria-hidden={'true'}
            />
          </Link>

          <Link
            href={''}
            className="-m-3 p-2 rounded-md focus-visible:outline-offset-[-4px] hover:bg-slate-500"
          >
            <Instagram className="h-6 w-6 text-gray-100" aria-hidden={'true'} />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export { HeaderHero }
