import './App.css'
import React from 'react'
import {useState} from "react"
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"
import {Error404, Home, HotBluds, Deserts, Soups, Salats, Drinks, NewBeak, ColdSnacks, Backet, Xinkali, Soglashenie, Kontaks, Politika,} from "./pages";
import Midas from "./assets/Vector.png";
import Basket from "./assets/Vector (2).png";
function App(){
    let sum = 1;
    const [flag1 ,setFlag1] = useState(false)
    const [flag2 ,setFlag2] = useState(false)
    function render1(){
      setFlag1(!flag1)
      if(flag2 == true){
        setFlag2(!flag2)
      }
    }
    function render2(){
      setFlag2(!flag2)
      if(flag1 == true){
        setFlag1(!flag1)
      }
    }
  return (
    <Router>  
      <header>
        <img className='LogoH' src={Midas} alt="Error" />
        <nav>
          <NavLink to='/'>ГЛАВНАЯ</NavLink>
          {/* <NavLink to='/actions'>АКЦИИ</NavLink> */}
          <a onClick={render1}>ГОРЯЧЕЕ ↓{flag1 && <div className="renderDiv1"><NavLink to="/HotBluds">ГОРЯЧЕЕ БЛЮДА</NavLink><NavLink to="/soups">СУПЫ</NavLink><NavLink to="/xinkali">ХИНКАЛИ</NavLink></div>}</a> 
          <a onClick={render2}>ХОЛОДНОЕ ↓{flag2 && <div className="renderDiv2"><NavLink to="/ColdSnacks">ХОЛОДНЫЕ ЗАКУСКИ</NavLink><NavLink to="/salats">САЛАТЫ</NavLink></div>}</a> 
          <NavLink to='/newBeak'>СВЯЖАЯ ВЫПЕЧКА</NavLink>
          <NavLink to='/deserts'>ДЕСЕРТЫ</NavLink>
          <NavLink to='/drinks'>НАПИТКИ</NavLink>
        </nav>
        <div className="funct">
          {/* <NavLink to="/profile"><img src={Profil} alt="Error" /></NavLink> */}
          <NavLink to="/backet"><img src={Basket} alt="Error" /></NavLink>
          {/* <div className='basNum'><p>{sum}</p></div> */}
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>;
          {/* <Route path="/actions" element={<Actions />}/> */};
          <Route path="/newBeak" element={<NewBeak />}/>;
          <Route path="/hotBluds" element={<HotBluds />}/>;
          <Route path="/soups" element={<Soups />}/>;
          <Route path="/deserts" element={<Deserts />}/>;
          <Route path="*" element={<Error404 />}/>;
          <Route path="/coldSnacks" element={<ColdSnacks />}/>;
          <Route path="/salats" element={<Salats />}/>;
          <Route path="/drinks" element={<Drinks />}/>;
          <Route path="/backet" element={<Backet />}/>;
          <Route path="/xinkali" element={<Xinkali />}/>;
          <Route path="/politika" element={<Politika />}/>;
          <Route path="/kontaks" element={<Kontaks />}/>;
          <Route path="/soglashenie" element={<Soglashenie />}/>;
        </Routes>
      </main>
      <footer>
        <div className="FootBlok1"><div className="PodBLok1F"><img className="MidasPngFoot" src={Midas} alt="Error" /><p>Обратная связь</p><p>Доставка</p><p>Оплата</p><NavLink to="/Kontaks"><p>Контакты</p></NavLink></div><div className="PodBLok2F"><h5>+7 (499) 841-67-29</h5><a href='https://vk.com/midas.rest'>delivery@midas.rest</a></div></div>
        <div className="FootBlok2"><h6>© 2009–2019, ООО «MIDAS», официальный сайт</h6><div className="PodFootBLok"><NavLink to="/Politika"><p>Политика конфиденциальности и оферта</p></NavLink><NavLink to="/Soglashenie"><p>Пользовательское соглашение</p></NavLink></div></div>
      </footer>
    </Router>
  )
 }

export default App
