import React from 'react';
import { Link } from 'react-router-dom';
import style from './HomePage.module.css';
import featureImg from '../../assets/images/feature.jpg';
import heroImg from '../../assets/images/hero.png';
import { Logo } from '../../components/Logo/Logo';

const links = [
  { title: 'Register', href: '#' },
  { title: 'Terms & conditions', href: '#' },
  { title: 'Privacy policy', href: '#' },
  { title: 'Documentation', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'Our blog', href: '#' },
];

export const HomePage = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <nav className={style.nav}>
          <Link className={style.nav__link} to="#">
            Pricing
          </Link>
          <Link className={style.nav__link} to="#">
            About
          </Link>
          <Link className={style.nav__btn} to="/">
            Sign In
          </Link>
        </nav>
      </header>
      <main>
        <section className={style.hero}>
          <img src={heroImg} alt="" />
          <div>
            <p className={style.hero__logo}>
              Rival<span>CMS</span>
            </p>
            <h1 className={style.hero__title}>Fresh new way to build sites</h1>
            <Link className={style.hero__btn} to="/">
              Get started free
            </Link>
            <p className={style.hero__description}>*no card needed</p>
          </div>
        </section>
        <section className={style.feature}>
          <img src={featureImg} alt="feature" />
        </section>
      </main>
      <footer className={style.footer}>
        <nav className={style.footer__container}>
          <div style={{ marginRight: '4.375rem' }}>
            {links.map(({ title, href }) => (
              <Link key={title} className={style.footer__link} to={href}>
                {title}
              </Link>
            ))}
          </div>
          <Logo />
        </nav>
      </footer>
    </div>
  );
};
