import React from 'react';
import './style.scss';

export function WelcomeMessage() {
  return (
    <div>
      Olá,
      <span className="title" contentEditable={true}>
        (digite seu nome!!)
      </span>
      <div className="date">Sexta-feira, 11/10/2024</div>
    </div>
  );
}
