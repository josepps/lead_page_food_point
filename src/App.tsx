import { IoMdSearch, IoIosPlay  } from "react-icons/io";
import { FaStar, FaRegBell } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { BsCart, BsWatch } from "react-icons/bs";
import ButtonPrimary from "./components/butonPrimary";
import pessoa1 from "./imgs/pessoa5.jpg";
import pessoa2 from "./imgs/pessoa4.jpg";
import pessoa3 from "./imgs/pessoa3.jpg";
import arrozCFrango from "./imgs/arrozComFrango.jpg";
import hamburguer from "./imgs/hamburguer.jpg";
import salada from "./imgs/salada.png";
import pizza1 from "./imgs/pizza1.jpg";
import pizza2 from "./imgs/pizza2.jpg";
import pizza3 from "./imgs/pizza3.jpg";
import InfoImgMain from "./components/infoImgMain";
import CardComida from "./components/cardComida";
import { Header, SectionDeliver, SectionMain, SectionOrganicFood } from "./App.style";
import BtnDeliver from "./components/BtnDeliver";

function App() {
  return (
    <>
      <Header>
        <a href="#" className="logoHeader">
          <div className="containerLogo"></div>
          <h2 className="tituloLogo">Food Point</h2>
        </a>
        <nav className="navHeader">
          <ul className="ulHeader">
            <li><a href="">Home</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Delivery</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
        <div className="containerHeader">
          <label className="inputHeader">
            <input type="text" placeholder="Search..."/>
            <button className="containerIconeInputLabel">
              <IoMdSearch className="iconeInputLabel"/>
            </button>
          </label>
          <ButtonPrimary fontSize="1rem" background="#FCA039" width="40%"  text="Ordew now"/>
        </div>
      </Header>
      <SectionMain>
        <div className="descriptionMain">
          <span className="spanWelcomeMain">Welcome to Food Point <FaRegFaceSmile className="iconeDescriptionMain"/></span>
          <h1>
            Food you love,<br />
            delivered to you
          </h1>
          <p className="descriptionH1Main">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime assumenda perferendis possimus eligendi enim voluptatem voluptates officia commodi! Vitae quia praesentium quasi ex veritatis nulla fugit doloribus nesciunt voluptates nam.</p>
          <div className="containerBtnMain">
            <ButtonPrimary fontSize="1rem" background="#FCA039" width="50%" text="Explore menu"/>
            <button className="BtnMainVideo">
              <span className="Circulo"><IoIosPlay /></span>
              Watch Video
            </button>
          </div>
          <div className="containerCustomerReview">
            <div className="containerImgsHeader">
              <div className="containerCirculo">
                <img src={pessoa1} alt="pessoa1" />
              </div>
              <div className="containerCirculo">
                <img src={pessoa2} alt="pessoa2" />
              </div>
              <div className="containerCirculo">
                <img src={pessoa3} alt="pessoa3" />
              </div>
            </div>
            <div className="infoCurstomerReview">
              <p>Our Customer Review</p>
              <p><span><FaStar /></span> <span>4.7</span> <span>(12,3K Reviews)</span></p>
            </div>
          </div>
        </div>
        <div className="imgSectionMain">
          <img src={salada} alt="salada" />
          <div className="container1ComponenteInfo">
            <InfoImgMain 
              src={arrozCFrango} 
              alt="pessoa1"
              textitle="Chicken with rice"
              texClassificacao= {true}
              texPrice="$ 10.0"
            />
          </div>
          <div className="container2ComponenteInfo">
            <InfoImgMain 
              src={pessoa1} 
              alt="pessoa1"
              textitle="Mr. Rafin"
              texClassificacao= {false}
              textsubtitle="food Courier"
            />
          </div>
          <div className="container3ComponenteInfo">
            <InfoImgMain 
              src={hamburguer} 
              alt="pessoa1"
              textitle="Chicken with rice"
              texClassificacao= {true}
              texPrice="$ 10.0"
            />
          </div>
        </div>
      </SectionMain>
      <SectionOrganicFood>
        <CardComida src={salada} />
        <CardComida src={arrozCFrango} />
      </SectionOrganicFood>
      <SectionDeliver>
        <div className="imagensDeliver">
          <img src={pizza1} alt="Pizza" />
          <img src={pizza2} alt="Pizza" />
          <img src={pizza3} alt="Pizza" />
        </div>
        <div className="infoDeliver">
          <h2>We deliver Anywhere</h2>
          <p className="paragrafoInfoDeliver">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde magni omnis tempora nisi possimus explicabo ex impedit quam? Mollitia aliquid earum modi enim quae?</p>
          <div className="containerBtnDeliver">
            <ButtonPrimary fontSize="1.2rem" background="#FCA039" width="24%"  text="Contact Us"/>
            <ButtonPrimary fontSize="1.2rem" background="transparent" width="24%"  text="View Menu"/>
          </div>
          <div className="ContainerBtnDeliver2">
            <BtnDeliver icone={<BsCart />} text="Online Order"/>
            <BtnDeliver icone={<BsWatch />} text="24/7 Service"/>
            <BtnDeliver icone={<FaRegBell  />} text="Reservation"/>
          </div>
        </div>
      </SectionDeliver>
    </>
  )
}

export default App
