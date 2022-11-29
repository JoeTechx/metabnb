import image66 from "../Image/image 66.png";
import image69 from "../Image/image 69.png";
import { MdOutlineClose } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="modal-content">
          <h2>
            Connect Wallet
            <hr />
          </h2>
          <p>Choose your preferred wallet</p>

          <div className="modal__btns">
            <div className="modal__btn-1">
              <button className="modal__metaBtn">
                <div className="mask__img">
                  <div className="modal__meta-img">
                    <img src={image66} alt="" />
                  </div>
                  <h5>Metamask</h5>
                </div>
                <MdKeyboardArrowRight />
              </button>
            </div>
            <div className="modal__btn-2">
              <button className="modal__metaBtn">
                <div className="mask__img">
                  <div className="modal__meta-img">
                    <img src={image69} alt="" />
                  </div>
                  <h5>WalletConnect</h5>
                </div>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <button className="close-modal" onClick={() => closeModal(false)}>
            <MdOutlineClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
