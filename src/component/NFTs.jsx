import Image5 from "../Image/image 5.png"
import Image6 from "../Image/image 6.png"
import Image7 from "../Image/image 7.png"

const NFTs = () => {
  return (
    <section className="nfts width">
      <div className="container nfts__container">
        <div className="nfts__left">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs give our customers
            access to loads of our exclusive services
          </p>
          <button className="nfts__btn btn sm">
                Learn More
            </button>
        </div>
        <div className="nfts__right">
          <div className='nft__image-1'>
            <img src={Image5} alt="" />
          </div>
          <div className='nft__image-3'>
            <img src={Image7} alt="" />
          </div>
          <div className='nft__image-2'>
            <img src={Image6} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTs;
