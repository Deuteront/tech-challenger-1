import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import jwt from 'jsonwebtoken'
import React from 'react'

interface DashboardProps {
  user: {
    username: string
  }
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { auth } = parseCookies(ctx)

  if (!auth) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  try {
    const decoded = jwt.verify(
      auth,
      process.env.JWT_SECRET || 'minha-chave-secreta'
    ) as {
      username: string
    }

    return { props: { user: decoded } }
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div>
      <h1>Bem-vindo, {user.username}!</h1>
      <p>Esta é uma página protegida.</p>
    </div>
  )
}

export default Dashboard
