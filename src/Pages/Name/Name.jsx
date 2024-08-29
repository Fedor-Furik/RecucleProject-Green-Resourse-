import React from 'react'
import Logo from "../assets/Logo.png";
import {NameC} from "../../Components/auth/Jsx/NameC"

import "./Name.scss"

export default function Name() {
  return (
    <div className="SignContainer-5">
      <header>
        <div className="logo2">
          <img src={Logo} alt="ImageError" />
          <div className="UnFlex">
            <h3>зеленый ресурс</h3>
          </div>
        </div>
        <div className="title">
          <h1>Впервые тут?</h1>
          <h2>Введите свои имя и фамилию!</h2>
        </div>
      </header>
      <main>
        <NameC/>
      </main>
    </div>
  )
}
