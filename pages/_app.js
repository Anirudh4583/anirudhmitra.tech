import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

const variants = {
  initial: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div layout layoutId={router.route} key={router.route}>
            <motion.main
              initial="initial"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ type: 'linear' }}
            >
              <Component {...pageProps} />
            </motion.main>
          </motion.div>
        </AnimatePresence>
      </LayoutWrapper>
    </ThemeProvider>
  )
}
