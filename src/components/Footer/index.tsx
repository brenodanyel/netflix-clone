import React from 'react';

import style from './footer.module.scss';

export function Footer() {
  return (
    <footer className={style.footer}>
      <span>Desenvolvido por</span>
      {' '}
      <a href="https://github.com/brenodanyel" target="_blank">Breno Danyel</a>
    </footer>
  );
}
