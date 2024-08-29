import React from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import Fir1 from "../../assets/Fir1.png"
import Fir2 from "../../assets/Fir2.png"


import Stek1 from "../../assets/Stek1.png"
import Stek2 from "../../assets/Stek2.png"
import Stek3 from "../../assets/Stek3.png"


import Sett from "../../assets/Sett.png"

import DomGreen from "../assets/navGreen/DomGreen.png"
import SkanerGray from "../assets/navG/SkanerGray.png"
import MapGray from "../assets/navG/MapGray.png"
import ProfileGray from "../assets/navG/ProfileGray.png"

import Arr1 from "../../assets/Arr1.png"
import Arr2 from "../../assets/Arr2.png"

import Line11 from "../assets/TypesTrash/Line11.png"
import Line12 from "../assets/TypesTrash/Line12.png"
import Line13 from "../assets/TypesTrash/Line13.png"

import Line21 from "../assets/TypesTrash/Line21.png"
import Line22 from "../assets/TypesTrash/Line22.png"
import Line23 from "../assets/TypesTrash/Line23.png"

import { useState } from 'react'
import "./MainPage.scss"

export default function MainPage() {
  let navigate = useNavigate()
  let name = "Незнакомец"

  let [num,setNuM] = useState(0)

  let [path,setPath] = useState("")
  let [img,setImg] = useState(Stek1)
  let [text,setText] = useState("Зачем нужно сортировать мусор")

  let one = ["",Stek1,"Зачем нужно сортировать мусор"]
  let two = ["",Stek2,"Полезные факты о мусоре"]
  let three = ["",Stek3,"Мировой опыт борьбы с мусором"]
  
  function Change(){
    if(num == 0){
      setPath(one[0])
      setImg(one[1])
      setText(one[2])
    }
    if(num == -2 || num == 1){
      setPath(two[0])
      setImg(two[1])
      setText(two[2])
    }
    if(num == -1 || num == 2){
      setPath(three[0])
      setImg(three[1])
      setText(three[2])
    }
  }
  function SliderP(){
    setNuM(num + 1)
    console.log(num)
    if(num == 2 || num == -2){
      setNuM(0)
    }
    Change()
  }
  function SliderM(){
    setNuM(num - 1)
    console.log(num)
    if(num == 2 || num == -2){
      setNuM(0)
    }
    Change()
  }
  function nav(e){
    e.preventDefault()
    let name = localStorage.getItem("name")
    if(name == " "){
      navigate("/Name")
    } else{
      navigate("/Profile")
    }

  }
  return (
    <div className='container2'>
      <header>
        <div className="head"><img src={Fir1} alt="ImgError" /> <div className="FullName"><p className='p1'>Привет,</p> <p className='p2'>{name}!</p></div></div>
        <div className="finder"><img id='Search' src={Fir2} alt="ImgError" /> <input type="text" placeholder='Поиск'/> <img id='Sett' src={Sett} alt="ImgError" /></div>
        <div className="article"></div>
        <div className="trashTypes"></div>
      </header>
      <main>
         <div className="States">
          <h2>Статьи</h2>
          <div className="slider">
            <button onClick={SliderP}><img src={Arr1} alt="ImgError" /></button>
            <NavLink className="nav" to={path}>
               <img src={img} alt="ImgError" />
               <p>{text}</p>
            </NavLink>
            <button onClick={SliderM}><img src={Arr2} alt="ImgError" /></button>
          </div>
         </div>
         <div className="TrashTypes">
          <h2>Типы отходов</h2>
          <div className="line1">
            <NavLink className="block" to="">
              <img src={Line11} alt="ImgError" />
              <p>Стекло</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line12} alt="ImgError" />
              <p>Пластик</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line13} alt="ImgError" />
              <p>Бумага</p>
            </NavLink>
          </div>
          <div className="line2">
          <NavLink className="block" to="">
              <img src={Line21} alt="ImgError" />
              <p>Металл</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line22} alt="ImgError" />
              <p>Органика</p>
            </NavLink>
            <NavLink className="block" to="">
              <img src={Line23} alt="ImgError" />
              <p>Опасные</p>
            </NavLink>
          </div>
         </div>
      </main>
      <footer>
        <NavLink><img className='noP' src={DomGreen} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={SkanerGray} alt="ImgError" /></NavLink> 
        <NavLink to=""><img src={MapGray} alt="ImgError" /></NavLink> 
        <NavLink onClick={(e)=>nav(e)}><img src={ProfileGray} alt="ImgError" /></NavLink> 
      </footer>
    </div>
  )
}
