import Image1 from '../Image/image 1.png'
import Image2 from '../Image/image 2.png'
import Image3 from '../Image/image 3.png'
import Image4 from '../Image/image 4.png'
// import Modal from "./Modal"

const Header = ({ openModal }) => {
  return (
    <header className="main__header width">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          {/* <div className='wallet__btn-header'>
          <button className="nav__btn btn lg"  onClick={() => openModal(true)}>
                Connect Wallet
            </button>
            </div>
            <Modal/> */}
          <div className="search__bar">
            <input type="text" name="search" placeholder="search for location" className="search__input" required/>
            <button className="search__btn btn lg">
                Search
            </button>
          </div>
        </div>
        <div className="main__header-right">

          <div className="header__img">
          <div className="first__img">
            <img src={Image1} alt="" />
            <img src={Image3} alt="" />
            </div>

            <div className="second__img">
            <img src={Image2} alt="" />
            <img src={Image4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
