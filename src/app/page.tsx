'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'

const Home: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    const cookies = parseCookies()
    if (cookies.auth) {
      router.push('/dashboard')
    }
  }, [router])

  return (
    <div>
      <h1>Bem-vindo ao nosso site!</h1>
      <p>
        <a href="/login">Faça login</a> para acessar recursos protegidos.
      </p>
    </div>
  )
}

export default Home
