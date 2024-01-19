import { IoMdSearch } from "react-icons/io";
import { Header } from "./App.style"

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
          <button className="btnHeader">Order Now</button>
        </div>
      </Header>
    </>
  )
}

export default App
