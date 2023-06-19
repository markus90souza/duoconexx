'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import { WhatsappLogo } from '@phosphor-icons/react'

export const WhatsAppWidget = () => {
  const [show, setShow] = useState(false)

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-4 right-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <Button className="h-16 w-16 rounded-full shadow-md shadow-emerald-400/20">
            <WhatsappLogo size={48} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
