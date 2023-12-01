import { useState } from 'react'
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo_homePage from '../images/sleepopolis_logo.png'
import './App.css'

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  };

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='MenuPrincipal'>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li className='logoHeader'><a href='PrincipalPage'> <img src='sleepopolis_logo.png' alt='logo_homePage'/> </a></li>
        <li className='li'><a className='Options' href='Review'>Reseña de colchones</a></li>
        <li className='li'><a className='Options' href='Accesories'>Accesorios</a></li>
        <li className='li'><a className='Options' href='Calculators'>Calculadoras</a></li>
        <li className='li'><a className='Options' href='Ofertas'>Ofertas</a></li>
      </ul>
    </nav>
    
    <div className='bodyPrincipal'>
      <p>Body Principal</p>
      <button className='buttonCalculadoras'>Ciclos de sueño</button>
    </div>
    </>
  )
}

export default App
