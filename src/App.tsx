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
import salada2 from "./imgs/salada2.jpg";
import salada3 from "./imgs/salada3.jpg";
import salada4 from "./imgs/salada4.jpg";
import pizza1 from "./imgs/pizza1.jpg";
import pizza2 from "./imgs/pizza2.jpg";
import pizza3 from "./imgs/pizza3.jpg";
import pizza4 from "./imgs/pizza4.jpg";
import drink from "./imgs/drink.jpg";
import drink2 from "./imgs/drink2.jpg";
import drink3 from "./imgs/drink3.jpg";
import drink4 from "./imgs/drink4.jpg";
import chef1 from "./imgs/chef1.jpg";
import chef2 from "./imgs/chef2.jpg";
import chef3 from "./imgs/chef3.jpg";
import chef4 from "./imgs/chef4.jpg";
import InfoImgMain from "./components/infoImgMain";
import CardComida from "./components/cardComida";
import { Header, SectionDeliver, SectionDifferentMenu, SectionFoodGallery, SectionMain, SectionOrganicFood, SectionOurTeam } from "./App.style";
import BtnDeliver from "./components/BtnDeliver";
import CardComidaMenu from "./components/cardComidaMenu";
import BtnTypeMenu from "./components/BtnTypeMenu";
import { useState } from "react";
import CardFoodGallery from "./components/cardFoodGallery";
import CardOurTeam from "./components/cardOurTeam";

function App() {
  const [numberImgMenu, setNumberImgMenu] = useState(1);

  const menuSalada = [
    {src: salada, price: "10.00", title: "Grill Vegetables"},
    {src: salada2, price: "18.00", title: "Italian Pizza"},
    {src: salada3, price: "12.00", title: "Chicken Strips"},
    {src: salada4, price: "14.00", title: "Italian Pasta"}
  ];

  const MenuPizzas = [
    {src: pizza1, price: "10.00", title: "Grill Vegetables"},
    {src: pizza2, price: "18.00", title: "Italian Pizza"},
    {src: pizza3, price: "12.00", title: "Chicken Strips"},
    {src: pizza4, price: "14.00", title: "Italian Pasta"}
  ];

  const MenuDrinks = [
    {src: drink, price: "10.00", title: "Grill Vegetables"},
    {src: drink2, price: "18.00", title: "Italian Pizza"},
    {src: drink3, price: "12.00", title: "Chicken Strips"},
    {src: drink4, price: "14.00", title: "Italian Pasta"}
  ];

  const imgsMenu = [menuSalada, MenuPizzas, MenuDrinks]

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
          <ButtonPrimary fontSize="1rem" background="#FCA039" width="42%"  text="Ordew now"/>
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
      <SectionDifferentMenu>
        <h2>We Offer You <br /> Different Teste</h2>
        <div className="containerConteudoDifferentMenu">
          <div className="selectMenu">
            <div className="ContainerBtnTypeMenu">
              <BtnTypeMenu src={`${pizza1}`} text="Pizzas" action={ () => setNumberImgMenu(1)}/>
              <BtnTypeMenu src={`${salada}`} text="Salads" action={ () => setNumberImgMenu(0)}/>
              <BtnTypeMenu src={`${drink}`} text="Drinks" action={ () => setNumberImgMenu(2)}/>
              <BtnTypeMenu src={`${salada}`} text="Salads" action={ () => setNumberImgMenu(0)}/>
              <BtnTypeMenu src={`${pizza1}`} text="Pizzas" action={ () => setNumberImgMenu(1)}/>
              <BtnTypeMenu src={`${drink}`} text="Drinks" action={ () => setNumberImgMenu(2)}/>
            </div>
          </div>
          <div className="containerCadsMenu">
            {imgsMenu[numberImgMenu].map((item, i) => {
              return (
                <CardComidaMenu  src={`${item.src}`} price={item.price} title={item.title} key={i}/>
              )
            })}
          </div>
        </div>
      </SectionDifferentMenu>
      <SectionFoodGallery>
        <div className="infoFoodGallery">
          <h2>Our Food Gallery</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum nam odit cupiditate, aliquam reiciendis, id, inventore ducimus neque esse possimus nemo consectetur libero!</p>
          <div className="containerBtnFoodGallery">
            <ButtonPrimary fontSize="1.2rem" background="#FCA039" width="34%"  text="Ordew now"/>
            <ButtonPrimary fontSize="1.2rem" background="transparent" width="34%"  text="Contact Us"/>
          </div>
        </div>
        <div className="imgFoodGallery">
          <div className="Container1">
            <CardFoodGallery src={pizza3} title="Italian Pizza" price="18.00"/>
            <CardFoodGallery src={hamburguer} title="America Burger" price="11.00"/>
          </div>
          <div className="Container2">
            <CardFoodGallery src={drink} title="Milk Shake" price="10.00"/>
            <CardFoodGallery src={salada2} title="Salad" price="14.00"/>
          </div>
        </div>
      </SectionFoodGallery>
      <SectionOurTeam>
        <h2>Our Team</h2>
        <div className="containerCardOurTeam">
          <CardOurTeam src={chef1} title="Dewald Brevis" subTitle="Senior Chef" />
          <CardOurTeam src={chef2} title="Jane Maker" subTitle="chef" />
          <CardOurTeam src={chef3} title="Billy Taylor" subTitle="Senior Chef" />
          <CardOurTeam src={chef4} title="Jane Kopper" subTitle="Senior Chef" />
        </div>
      </SectionOurTeam>
    </>
  )
}

export default App
