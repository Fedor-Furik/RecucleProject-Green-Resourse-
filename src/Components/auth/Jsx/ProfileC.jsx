import React from 'react'
import Avatar from "../../../assets/Avatar.png"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import "../Scss/ProfileC.scss"

import Vec1 from "./assets/Vector1.png"
import Vec2 from "./assets/Vector2.png"
import Vec3 from "./assets/Vector3.png"
import Vec4 from "./assets/Vector4.png"
import Vec5 from "./assets/Vector5.png"
import Vec6 from "./assets/Vector6.png"
import Vec7 from "./assets/Vector7.png"

import DomGreen from "../../../Pages/assets/navG/DomGray.png"
import SkanerGray from "../../../Pages/assets/navG/SkanerGray.png"
import MapGray from "../../../Pages/assets/navG/MapGray.png"
import ProfileGray from "../../../Pages/assets/navGreen/ProfileGreen.png"

export default function ProfileC() {
  let [pro,setPro] = useState("100%")
  //до реализации базы данных 

  let [green,setGreen] = useState()
  let lvl = 1
  let n = localStorage.getItem("name")
  let sn = localStorage.getItem("seName")

  let style = "width:100%"
  if (n == " "){
    n = "Error"
  }
  if (sn == " "){
    sn = "Error"
  }
  return (
    <div className="co">
    <header className='hhe'>
      <img src={Avatar} alt="ImgError" />
      <div className="flexBox">
        <div className="flexFBox">
          <h2>{n}</h2>
          <h2 id='sec'>{sn}</h2>
        </div>
        <h3>Уровень {lvl}</h3>
        <div className="shk">
          <p></p>
          <p>{pro}</p>
          <div className="green"></div>
          <div className="gray"></div>
        </div>
      </div>
    </header>
    <main>
      <NavLink to="" className="class"><img src={Vec1} alt="ImgError" /><p>Достижения</p></NavLink>
      <NavLink to="" className="class"><img src={Vec2} alt="ImgError" /><p>Бонусная программа</p></NavLink>
      <NavLink to="" className="class"><img src={Vec3} alt="ImgError" /><p>История оповещений</p></NavLink>
      <NavLink to="" className="class"><img src={Vec4} alt="ImgError" /><p>Уведомления</p></NavLink>
      <NavLink to="" className="class"><img src={Vec5} alt="ImgError" /><p>Настройки</p></NavLink>
      <NavLink to="" className="class"><img src={Vec6} alt="ImgError" /><p>Помощь</p></NavLink>
      <NavLink to="/SignOut" className="class"><img src={Vec7} alt="ImgError" /><p>Выход</p></NavLink>
    </main>
    <footer>
        <NavLink to="/MainPage"><img className='noP' src={DomGreen} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={SkanerGray} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={MapGray} alt="ImgError" /></NavLink> 
        <NavLink><img src={ProfileGray} alt="ImgError" /></NavLink> 
      </footer>
    </div>
  )
}
export {ProfileC}