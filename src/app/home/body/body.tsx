import React from 'react'
import './style.scss'
import { Button } from '@/components/button/button'
import Image from 'next/image'

export function Body() {
  return (
    <div className="body">
      <div className="container-invite">
        <div className="invite">
          <span className="title">
            Controle suas finanças na palma da sua pata.
          </span>
          <span className="sub-title">Crie sua conta com a gente!</span>
          <Button
            onClick={() => {
              console.log('faço nd')
            }}
            className={['button', 'primary-button']}
            text="Começar agora"
          ></Button>
        </div>
        <div className="cat-paw">
          <Image src="/png/cat.png" alt="cat-paw" width="377" height="482" />
        </div>
      </div>

      <div className="wave-login">
        <span className="has-login">Já tem uma conta?</span>
        <a className="login">Faça o login</a>
      </div>
    </div>
  )
}
