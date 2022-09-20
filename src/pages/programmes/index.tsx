import type { NextPage } from 'next'
import { Fragment } from 'react'
import Login from '..'
import { ProgrammesLayout } from '../../components'
import { useAuth } from '../../core/hooks/useAuth'

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <Fragment >
      {!user ? (
        <Login />
        ) : (
        <ProgrammesLayout />
      )}
    </Fragment>
  )
}

export default Home
