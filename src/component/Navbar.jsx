import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { links } from "../data";
import Logo from "../Image/logo.png";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import Modal from "./Modal";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [isNavShowing, setIsNavShowing] = useState(false);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <nav>
      <div className="container nav__container">
        <Link to="./" className="logo" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${isNavShowing ? "show__nav" : "hide__Nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="wallet__btn">
          <button
            className="nav__btn btn lg"
            onClick={() => {
              setModal(true);
            }}
          >
            Connect Wallet
          </button>
        </div>
        {modal && <Modal closeModal={setModal} openModal={setModal} />}
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
