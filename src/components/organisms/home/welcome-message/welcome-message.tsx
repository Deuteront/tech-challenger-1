import React, { useState } from 'react';
import './style.scss';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.locale('pt-br');

export function WelcomeMessage() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(
    'Click e digite seu nome e precione enter'
  );
  const hello = 'Olá, ';

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };
  return (
    <div className="welcome">
      <div className="title">
        {hello}
        {isEditing ? (
          <input
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
            placeholder='Digite e pressione "Enter"'
          />
        ) : (
          <span
            onClick={handleClick}
            style={{
              cursor: 'pointer',
            }}
          >
            {title}
          </span>
        )}
      </div>
      <div className="date">{dayjs().format('dddd, DD/MM/YYYY')}</div>
    </div>
  );
}
