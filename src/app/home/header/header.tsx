import Image from 'next/image'
import { Button } from '@/components/button/button'
import React from 'react'
import './style.scss'

export function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Image
          src="/svgs/meow_cash_icon.svg"
          width="17"
          height="17"
          alt="icon"
        />
        <Image
          src="/svgs/meow_cash_text.svg"
          width="106"
          height="30"
          alt="icon"
        />
      </div>
      <div className="menu">
        <a href="/Inicio">Inicio</a>
        <a href="/Sobre">Sobre</a>
        <a href="/Precos">Preços</a>
      </div>
      <div className="login">
        <Button
          onClick={() => {
            console.log('faço nd')
          }}
          className={['button']}
          text="Iniciar sessão"
        ></Button>
        <Button
          onClick={() => {
            console.log('faço nd')
          }}
          className={['button', 'primary-button']}
          text="Começar agora"
        ></Button>
      </div>
    </div>
  )
}
