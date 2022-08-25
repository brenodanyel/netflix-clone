import React from 'react';

import Netflix from '../../assets/netflix_logo.svg';
import Profile from '../../assets/profile.png';

import style from './header.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <a href="/">
        <img src={Netflix} alt="logo da netflix" className={style.netflix_logo} />
      </a>
      <a href="/">
        <img src={Profile} alt="imagem de perfil" className={style.profile_icon} />
      </a>
    </header>
  );
}
