import type { NextPage } from 'next'
import { Fragment } from 'react'
import { ProgrammesLayout } from '../../components'
import { useAuth } from '../../core/hooks/useAuth'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Login from '..'

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <Fragment>
      <Head>
        <title>RPC - Programação</title>
        <meta name='description' content='Confira o que à de melhor para sua programação.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!user ? (
        <Login />
        ) : (
        <>
        <AnimatePresence>
          <ProgrammesLayout />
        </AnimatePresence>
        </>
      )}
    </Fragment>
  )
}

export default Home
