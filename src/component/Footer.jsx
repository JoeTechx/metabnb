import React from "react";
import { LSC } from "../data";
import Logo from "../Image/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { community } from "../data";
import { places } from "../data";
import { aboutUs } from "../data";
const Footer = () => {
  return (
    <footer className="footer width">
      <div className="container footer__container">
        {LSC.map(({ id, Social1, Social2, Social3 }) => {
          return (
            <div key={id} className="LSC">
              <Link to="./" className="footer__logo-svg">
                <img src={Logo} alt="" />
              </Link>
              <div className="footer__socials-icon">
                <a href="https://facebook.com">{Social1}</a>
                <a href="https://instagram.com">{Social2}</a>
                <a href="https://twitter.com">{Social3}</a>
              </div>
              <small className="footer__copyright">&copy; 2022 Metabnb.</small>
            </div>
          );
        })}

        <div className="community">
          <h4>Community</h4>
          <ul className="community__links footer__link">
            {community.map(({ id, name }) => {
              return (
                <li key={id}>
                  <NavLink>{name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="places">
          <h4>Places</h4>
          <ul className="places__links footer__link">
            {places.map(({ id, name, path }) => {
              return (
                <li key={id}>
                  <NavLink to={path}>{name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="about__us">
          <h4>About us</h4>
          <ul className="aboutUs__links footer__link">
            {aboutUs.map(({ id, name }) => {
              return (
                <li key={id}>
                  <NavLink>{name}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
