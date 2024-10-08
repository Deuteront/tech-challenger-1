import React from 'react'
import { props } from '@/components/button/button.type'
import './style.scss'

export function Button({ onClick, text, className }: props) {
  return (
    <button className={className.join(' ')} onClick={onClick}>
      {text}
    </button>
  )
}
