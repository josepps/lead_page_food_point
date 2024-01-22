import { IoMdSearch, IoIosPlay  } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import ButtonPrimary from "./components/butonPrimary";
import pessoa1 from "./imgs/pessoa5.jpg";
import pessoa2 from "./imgs/pessoa4.jpg";
import pessoa3 from "./imgs/pessoa3.jpg";
import arrozCFrango from "./imgs/arrozComFrango.jpg";
import hamburguer from "./imgs/hamburguer.jpg";
import salada from "./imgs/salada.png";
import InfoImgMain from "./components/infoImgMain";
import { Header, SectionMain } from "./App.style";

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
          <ButtonPrimary width="40%"  text="Ordew now"/>
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
            <ButtonPrimary width="50%" text="Explore menu"/>
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
    </>
  )
}

export default App
